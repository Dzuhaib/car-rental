import type { Metadata } from "next";
import { Suspense } from "react";

import { BookingForm } from "@/components/booking/BookingForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { pickupAreas } from "@/lib/booking";
import { BRAND, serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a car with driver in Karachi",
  description:
    "Send your trip details on WhatsApp and get an instant quote for chauffeur-driven car rental in Karachi — airport transfers, corporate travel, weddings, and outstation journeys.",
};

type BookingPageProps = PageProps<"/booking">;

export default function BookingPage({ searchParams }: BookingPageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Booking"
        title="Book your car with driver"
        description="No long forms and no card details on this page. Fill in the basics and send everything to our reservation team on WhatsApp."
      />

      <Container className="py-12">
        <Suspense fallback={<BookingForm />}>
          <BookingPanel searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  );
}

async function BookingPanel({
  searchParams,
}: {
  searchParams: BookingPageProps["searchParams"];
}) {
  const params = await searchParams;

  function firstValue(
    value: string | string[] | undefined,
  ): string | undefined {
    return Array.isArray(value) ? value[0] : value;
  }

  const vehicle = firstValue(params.vehicle);
  const area = firstValue(params.area);
  const tripType = firstValue(params.trip);
  const pickup = firstValue(params.pickup);
  const returned = firstValue(params.return);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
      <BookingForm
        initialArea={area}
        initialTripType={tripType}
        initialVehicle={vehicle}
        initialPickup={pickup}
        initialReturn={returned}
      />

      <aside className="space-y-6">
        <Card className="p-6">
          <h2 className="text-sm font-semibold text-ink-950">How this works</h2>
          <ol className="mt-4 space-y-4 text-sm text-ink-600">
            {[
              "Choose your trip type, pick-up area, vehicle, and dates.",
              "Tap the WhatsApp button — your details are already written for you.",
              "Our reservation team replies with availability and a firm quote.",
              "Confirm the booking and your chauffeur is dispatched to your location.",
            ].map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-800 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-6 border-t border-ink-200 pt-5 text-sm text-ink-600">
            Prefer to talk? Call{" "}
            <a
              href={BRAND.phoneHref}
              className="font-medium text-brand-700 hover:underline"
            >
              {BRAND.phoneDisplay}
            </a>{" "}
            — available 24/7.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-sm font-semibold text-ink-950">Pick-up areas</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-600">
            {pickupAreas.map((location) => (
              <li key={location}>{location}</li>
            ))}
          </ul>
          <p className="mt-4 border-t border-ink-200 pt-4 text-xs text-ink-500">
            We also cover{" "}
            {serviceAreas
              .filter(
                (area) => !(pickupAreas as readonly string[]).includes(area),
              )
              .join(", ")}{" "}
            and nearby areas on request.
          </p>
        </Card>
      </aside>
    </div>
  );
}
