import Link from "next/link";

import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-24 sm:py-32">
      <p className="text-sm font-medium tracking-wide text-brand-700">404</p>
      <h1 className="mt-3 text-4xl font-semibold text-ink-950 sm:text-5xl">
        That page is not on our forecourt
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-ink-600">
        The link may be out of date, or the vehicle you were looking at has been
        retired from the fleet.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className={buttonClasses("primary", "md")}>
          Back to home
        </Link>
        <Link href="/fleet" className={buttonClasses("outline", "md")}>
          Browse the fleet
        </Link>
      </div>
    </Container>
  );
}
