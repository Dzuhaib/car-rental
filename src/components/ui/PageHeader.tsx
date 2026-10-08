import { Container } from "./Container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <div className="border-b border-ink-200">
      <Container className="py-16 sm:py-20">
        {eyebrow ? (
          <p className="text-sm font-medium tracking-wide text-brand-700">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 text-4xl font-semibold text-ink-950 sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-600">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </div>
  );
}
