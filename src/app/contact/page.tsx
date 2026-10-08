import type { Metadata } from "next";

import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { serviceAreas, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Message Karachi Rental Car on WhatsApp or call for a quote, an existing booking, or 24/7 airport assistance at Jinnah International Airport.",
};

const generalWhatsApp = whatsappLink(
  "Hello Karachi Rental Car, I have an enquiry about chauffeur-driven car rental in Karachi.",
);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to a person, not a call centre"
        description="WhatsApp is the fastest way to reach us — send your route and dates and our reservation team replies with availability and a firm quote."
      />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-sm font-semibold text-ink-950">
              WhatsApp, phone and email
            </h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-ink-500">WhatsApp</dt>
                <dd className="mt-0.5 font-medium text-ink-900">
                  <a
                    href={generalWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wa-700 hover:underline"
                  >
                    Message our reservation team
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-ink-500">Phone</dt>
                <dd className="mt-0.5 font-medium text-ink-900">
                  <a href="tel:+923332666690" className="hover:text-brand-700">
                    +92 333 2666690
                  </a>
                  <span className="block text-xs font-normal text-ink-500">
                    24/7, including airport pickups
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-ink-500">Email</dt>
                <dd className="mt-0.5 font-medium text-ink-900">
                  <a
                    href="mailto:info@karachirentalcar.pk"
                    className="hover:text-brand-700"
                  >
                    info@karachirentalcar.pk
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-6">
              <WhatsAppButton href={generalWhatsApp} size="md">
                Book via WhatsApp
              </WhatsAppButton>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-sm font-semibold text-ink-950">
              What to include in a message
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-ink-600">
              {[
                "Pick-up area and drop-off point (or flight number for airport transfers)",
                "Pick-up and return dates",
                "Number of passengers and luggage",
                "Any occasion — corporate, wedding, outstation, or daily city use",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-xs text-brand-800"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <aside>
          <Card className="p-6">
            <h2 className="text-sm font-semibold text-ink-950">
              Service areas in Karachi
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-ink-600">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-6 text-ink-500">
              Outstation routes to Hyderabad, Sukkur, Multan, Lahore, Islamabad,
              Kharian, and the Northern Areas are available on request.
            </p>
          </Card>
        </aside>
      </div>
    </>
  );
}
