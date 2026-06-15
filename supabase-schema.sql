-- nowa Supabase Schema
-- Run this in the Supabase SQL Editor (Project → SQL Editor → New query)

-- ─── Extensions ───────────────────────────────────────────────────────────────

create extension if not exists "uuid-ossp";

-- ─── profiles ─────────────────────────────────────────────────────────────────
-- Extends auth.users. Created automatically via trigger on sign-up.

create table public.profiles (
  id           uuid references auth.users(id) on delete cascade primary key,
  role         text not null check (role in ('partner', 'admin')),
  display_name text,
  created_at   timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users read own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Admins read all profiles"
  on public.profiles for select
  using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- ─── partners ─────────────────────────────────────────────────────────────────

create table public.partners (
  id          uuid default uuid_generate_v4() primary key,
  profile_id  uuid references public.profiles(id) on delete cascade not null unique,
  name        text not null,
  description text,
  location    text,
  approved    boolean default false,
  created_at  timestamptz default now()
);

alter table public.partners enable row level security;

create policy "Partners read own record"
  on public.partners for select
  using (profile_id = auth.uid());

create policy "Partners update own record"
  on public.partners for update
  using (profile_id = auth.uid());

create policy "Partners insert own record"
  on public.partners for insert
  with check (profile_id = auth.uid());

create policy "Admins manage all partners"
  on public.partners for all
  using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- ─── offers ───────────────────────────────────────────────────────────────────

create table public.offers (
  id             uuid default uuid_generate_v4() primary key,
  partner_id     uuid references public.partners(id) on delete cascade not null,
  title          text not null,
  category       text not null check (category in ('overnight', 'wellness', 'gastro', 'other')),
  description    text,
  price          numeric not null,
  original_price numeric,
  duration       text,
  availability   text,
  location       text,
  region         text,
  lat            numeric,
  lng            numeric,
  active         boolean default true,
  status         text default 'Aktiv' check (status in ('Aktiv', 'Entwurf', 'Pausiert')),
  created_at     timestamptz default now()
);

alter table public.offers enable row level security;

create policy "Anyone reads active offers"
  on public.offers for select
  using (active = true and status = 'Aktiv');

create policy "Partners manage own offers"
  on public.offers for all
  using (
    partner_id in (
      select id from public.partners where profile_id = auth.uid()
    )
  );

create policy "Admins manage all offers"
  on public.offers for all
  using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- ─── bookings ─────────────────────────────────────────────────────────────────
-- offer_id is nullable during the transition from mock data to real offers.
-- offer_title is denormalized for that same transition period.

create table public.bookings (
  id             uuid default uuid_generate_v4() primary key,
  offer_id       uuid references public.offers(id) on delete set null,
  offer_title    text,
  guest_name     text not null,
  guest_email    text not null,
  requested_date date,
  message        text,
  status         text default 'Ausstehend'
                   check (status in ('Ausstehend', 'Bestätigt', 'Abgelehnt', 'Abgeschlossen')),
  created_at     timestamptz default now()
);

alter table public.bookings enable row level security;

-- Guests (unauthenticated) may create bookings
create policy "Anyone creates booking"
  on public.bookings for insert
  with check (true);

-- Partners see bookings for their own offers
create policy "Partners read own bookings"
  on public.bookings for select
  using (
    offer_id in (
      select o.id from public.offers o
      join public.partners p on o.partner_id = p.id
      where p.profile_id = auth.uid()
    )
  );

create policy "Partners update own bookings"
  on public.bookings for update
  using (
    offer_id in (
      select o.id from public.offers o
      join public.partners p on o.partner_id = p.id
      where p.profile_id = auth.uid()
    )
  );

create policy "Admins manage all bookings"
  on public.bookings for all
  using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- ─── Helper: auto-create profile on sign-up ───────────────────────────────────
-- Call this function from an Auth hook in Supabase Dashboard:
--   Authentication → Hooks → "After sign-up" → DB function → handle_new_user
-- Default role is 'partner'. Admins must be promoted manually in the profiles table.

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, role, display_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'role', 'partner'),
    coalesce(new.raw_user_meta_data->>'display_name', new.email)
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
