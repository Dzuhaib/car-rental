import type { ComponentProps, ReactNode } from "react";

type CardProps = ComponentProps<"div"> & {
  children: ReactNode;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-card border border-ink-200 bg-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
