import type { ComponentProps } from "react";

const variants = {
  primary: "bg-brand-800 text-white hover:bg-brand-900 active:bg-brand-950",
  secondary: "bg-ink-950 text-white hover:bg-ink-800 active:bg-ink-950",
  outline: "border border-ink-200 bg-white text-ink-900 hover:border-ink-400",
  ghost: "text-ink-700 hover:bg-ink-100",
} as const;

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-7 text-base",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50";

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
): string {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${buttonClasses(variant, size)} ${className}`}
      {...props}
    />
  );
}
