import type { ReactNode } from "react";

import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  tone?: "default" | "muted" | "brand";
  className?: string;
};

export function Section({
  children,
  id,
  title,
  eyebrow,
  description,
  tone = "default",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`border-t border-ink-200 py-16 sm:py-20 ${className}`}
      data-tone={tone}
    >
      <Container>
        {title || eyebrow || description ? (
          <div className="max-w-2xl">
            {eyebrow ? (
              <p className="text-sm font-medium tracking-wide text-brand-700">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="mt-3 text-3xl font-semibold text-ink-950 sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-4 text-lg leading-8 text-ink-600">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
