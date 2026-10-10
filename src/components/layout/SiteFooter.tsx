import Link from "next/link";

import { SERVICE_LINKS } from "@/lib/navigation";
import { BRAND, SITE_YEAR, serviceAreas, whatsappLink } from "@/lib/site";

import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";

const generalWhatsApp = whatsappLink(
  `Hello ${BRAND.name}, I would like to rent a car with driver in Karachi. Please share availability and rates.`,
);

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-200">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-6 text-ink-600">
            {BRAND.name} — chauffeur-driven car rental in Karachi. Airport
            transfers, corporate travel, wedding VIP cars, and inter-city
            journeys with transparent pricing.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm">
            <a
              href={generalWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-wa-700 hover:underline"
            >
              Book via WhatsApp
            </a>
            <a
              href={BRAND.phoneHref}
              className="text-ink-700 hover:text-brand-800"
            >
              {BRAND.phoneDisplay}
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="text-ink-700 hover:text-brand-800"
            >
              {BRAND.email}
            </a>
          </div>
        </div>

        {SERVICE_LINKS.map((column) => (
          <div key={column.title}>
            <h2 className="text-sm font-semibold text-ink-950">
              {column.title}
            </h2>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-600 transition-colors hover:text-brand-800"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-ink-200">
        <Container className="py-8 text-xs text-ink-500">
          <p>
            Service areas: {serviceAreas.slice(0, 6).join(" • ")} and
            surrounding areas.
          </p>
          <p className="mt-2">
            &copy; {SITE_YEAR} {BRAND.name}. All rights reserved. Fleet imagery
            is illustrative placeholder artwork.
          </p>
        </Container>
      </div>
    </footer>
  );
}
