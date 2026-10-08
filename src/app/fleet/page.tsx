import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { VehicleCard } from "@/components/ui/VehicleCard";
import { buttonClasses } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import {
  categoryLabels,
  getVehiclesByCategory,
  vehicles,
  type VehicleCategory,
} from "@/lib/fleet";
import { whatsappLink } from "@/lib/site";

const generalWhatsApp = whatsappLink(
  "Hello Karachi Rental Car, I would like help choosing a car with driver for my trip.",
);

export const metadata: Metadata = {
  title: "Our chauffeur-driven fleet",
  description:
    "Browse economy cars, executive sedans, SUVs, luxury saloons, and vans from Karachi Rental Car. Daily rates with chauffeur included across Karachi and outstation routes.",
};

const filters: { value: "all" | VehicleCategory; label: string }[] = [
  { value: "all", label: "All vehicles" },
  ...(Object.keys(categoryLabels) as VehicleCategory[]).map((value) => ({
    value,
    label: categoryLabels[value],
  })),
];

type FleetResultsProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default function FleetPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fleet"
        title="Our executive chauffeur-driven fleet"
        description="Well-maintained cars for airport transfers, corporate travel, weddings, and daily rentals. Every rate includes a uniformed driver."
      />

      <Container className="py-12">
        <Suspense fallback={null}>
          <FleetResults />
        </Suspense>
      </Container>
    </>
  );
}

async function FleetResults({ searchParams }: FleetResultsProps) {
  const params = (await searchParams) ?? {};
  const requested = Array.isArray(params.category)
    ? params.category[0]
    : params.category;

  const active = filters.some((filter) => filter.value === requested)
    ? (requested as "all" | VehicleCategory)
    : "all";

  const shown =
    active === "all"
      ? vehicles
      : getVehiclesByCategory(active as VehicleCategory);

  return (
    <>
      <nav aria-label="Filter by category" className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = filter.value === active;

          return (
            <Link
              key={filter.value}
              href={
                filter.value === "all"
                  ? "/fleet"
                  : `/fleet?category=${filter.value}`
              }
              aria-current={isActive ? "page" : undefined}
              className={`rounded-btn border px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "border-ink-950 text-ink-950"
                  : "border-ink-200 text-ink-600 hover:border-ink-400"
              }`}
            >
              {filter.label}
            </Link>
          );
        })}
      </nav>

      <p className="mt-6 text-sm text-ink-600">
        {shown.length} {shown.length === 1 ? "vehicle" : "vehicles"} available
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((vehicle) => (
          <VehicleCard key={vehicle.slug} vehicle={vehicle} />
        ))}
      </div>

      <div className="mt-12 rounded-card border border-ink-200 p-8 sm:p-10">
        <h2 className="text-2xl font-semibold text-ink-950 sm:text-3xl">
          Not sure which one suits your trip?
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-ink-600">
          Send us your dates, passenger count, and route on WhatsApp. We will
          suggest the smallest car that comfortably fits, which usually shaves a
          fair bit off the quote.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <WhatsAppButton href={generalWhatsApp} size="md">
            Book via WhatsApp
          </WhatsAppButton>
          <Link href="/contact" className={buttonClasses("outline", "md")}>
            Ask for advice
          </Link>
        </div>
      </div>
    </>
  );
}
