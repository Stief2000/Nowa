import Image from "next/image";
import Link from "next/link";

export function Logo({ size = "md" }: { inverse?: boolean; size?: "sm" | "md" | "lg" }) {
  const widths = { sm: 90, md: 140, lg: 240 };
  const w = widths[size];

  return (
    <Link href="/" aria-label="nowa Startseite" className="inline-flex items-center">
      <Image
        src="/nova.svg"
        alt="nowa"
        width={w}
        height={Math.round(w * (270 / 950))}
        priority
        style={{ height: "auto" }}
      />
    </Link>
  );
}
