import type { ComponentProps } from "react";

type FieldProps = ComponentProps<"input"> & {
  label: string;
  name: string;
  hint?: string;
};

export function Field({
  label,
  name,
  hint,
  className = "",
  ...props
}: FieldProps) {
  const hintId = hint ? `${name}-hint` : undefined;

  return (
    <div>
      <label htmlFor={name} className="field-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        aria-describedby={hintId}
        className={`field ${className}`}
        {...props}
      />
      {hint ? (
        <p id={hintId} className="mt-1.5 text-xs text-ink-500">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
