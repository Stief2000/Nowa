import Link from "next/link";
import { Leaf } from "@/app/ui/icons";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      className={`inline-flex items-center gap-2 font-serif text-2xl tracking-[-0.06em] ${
        inverse ? "text-white" : "text-stone-900"
      }`}
      href="/"
    >
      <Leaf className={`size-5 ${inverse ? "text-[#d7a48d]" : "text-[#a46245]"}`} />
      FreiPlatz
    </Link>
  );
}
