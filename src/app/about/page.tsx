import type { Metadata } from "next";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Karachi Rental Car is a top-rated chauffeur-driven car rental company in Karachi, serving residents, corporate clients, families, and international travellers since day one.",
};

const values = [
  {
    title: "One clear price",
    body: "Chauffeur, vehicle hire, and servicing are quoted as a single daily rate. No surprise line items added on the road.",
  },
  {
    title: "Cars we would travel in ourselves",
    body: "Every car is cleaned and checked before it goes out and returned to service the moment it comes back.",
  },
  {
    title: "Answer fast",
    body: "WhatsApp messages get a reply from our reservation team, usually within minutes during working hours.",
  },
];

const generalWhatsApp = whatsappLink(
  "Hello Karachi Rental Car, I would like to know more about your chauffeur-driven car rental service.",
);

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A Karachi rental company built on drivers and trust"
        description="Our mission is simple: we do our job with dedication and keep every client happy."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 text-lg leading-8 text-ink-600">
            <p>
              Karachi Rental Car Company is a top-rated and trusted car rental
              service in Karachi. We offer clean cars, quick service, and honest
              communication. You can rent a car for business, travel, events, or
              family trips — and at Karachi Rental Car Company, your comfort and
              satisfaction come first.
            </p>
            <p>
              Our fleet ranges from economical sedans and executive vehicles to
              premium SUVs, high-end Mercedes and Audi models, and spacious vans
              like the Toyota Hiace and Coaster. Each one is chauffeur-driven,
              so you travel without worrying about Karachi traffic, parking, or
              routes you do not know.
            </p>
            <p>
              Most of our clients are people who have been disappointed by
              unreliable transport and decided they would rather deal with a
              local company that answers.
            </p>
          </div>

          <Card className="h-fit p-6">
            <h2 className="text-lg font-semibold text-ink-950">At a glance</h2>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ["Service", "Chauffeur-driven rentals with driver"],
                ["Coverage", "Karachi, airport, and outstation routes"],
                ["Fleet", "Economy, executive, SUV, luxury, vans & coaches"],
                ["Availability", "24/7, including flight-tracked pickups"],
                ["Booking", "Instant quote on WhatsApp"],
              ].map(([term, detail]) => (
                <div
                  key={term}
                  className="flex justify-between gap-4 border-b border-ink-100 pb-3 last:border-0 last:pb-0"
                >
                  <dt className="text-ink-500">{term}</dt>
                  <dd className="text-right font-medium text-ink-900">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </Section>

      <Section tone="muted" eyebrow="How we work" title="Three commitments">
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="h-full p-6">
              <h3 className="text-lg font-semibold text-ink-950">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">
                {value.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-ink-950 sm:text-4xl">
            Come and see the fleet
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink-600">
            If you would rather look at a car before you commit, message us and
            we will send current photos of the exact vehicle we can offer you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton href={generalWhatsApp} size="lg">
              Message us on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </Section>

      <Container className="pb-16">
        <p className="text-sm text-ink-500">
          Fleet details and availability change regularly — confirm the exact
          vehicle and rate with our reservation team before booking.
        </p>
      </Container>
    </>
  );
}
