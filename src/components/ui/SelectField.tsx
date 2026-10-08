import type { ComponentProps } from "react";

type SelectFieldProps = ComponentProps<"select"> & {
  label: string;
  name: string;
  children: React.ReactNode;
};

export function SelectField({
  label,
  name,
  children,
  className = "",
  ...props
}: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="field-label">
        {label}
      </label>
      <select id={name} name={name} className={`field ${className}`} {...props}>
        {children}
      </select>
    </div>
  );
}
