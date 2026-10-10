import Link from "next/link";

import { BRAND } from "@/lib/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${BRAND.name} — home`}
      className={`flex items-baseline gap-2 ${className ?? ""}`}
    >
      <span className="text-xl font-semibold tracking-tight text-ink-950">
        Burhan
      </span>
      <span className="rounded-btn bg-brand-800 px-2 py-1 text-xs font-semibold tracking-wide text-white uppercase">
        Rent A Car
      </span>
    </Link>
  );
}