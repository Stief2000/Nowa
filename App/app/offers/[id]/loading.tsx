export default function Loading() {
  return (
    <div className="page-container animate-pulse py-12">
      <div className="h-4 w-48 bg-stone-200" />
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.18fr_0.82fr]">
        <div>
          <div className="aspect-[1.3/1] bg-stone-200" />
          <div className="mt-8 h-12 w-2/3 bg-stone-200" />
        </div>
        <div className="h-96 border border-stone-200 bg-white" />
      </div>
    </div>
  );
}
