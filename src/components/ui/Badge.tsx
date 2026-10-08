import type { ReactNode } from "react";

const tones = {
  neutral: "bg-white text-ink-700 ring-1 ring-ink-200",
  brand: "bg-white text-brand-800 ring-1 ring-brand-200",
  success: "bg-white text-brand-800 ring-1 ring-brand-200",
} as const;

export type BadgeTone = keyof typeof tones;

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: BadgeTone;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
