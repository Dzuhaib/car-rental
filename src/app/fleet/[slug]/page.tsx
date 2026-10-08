import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { vehicles, categoryLabels, formatPrice, getVehicle } from "@/lib/fleet";
import { whatsappLink } from "@/lib/site";

type VehiclePageProps = PageProps<"/fleet/[slug]">;

export async function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({
  params,
}: VehiclePageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicle(slug);

  if (!vehicle) {
    return { title: "Vehicle not found" };
  }

  return {
    title: `${vehicle.name} with driver in Karachi`,
    description: `${vehicle.blurb} From ${formatPrice(vehicle.pricePerDay)} per day with chauffeur included.`,
  };
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  const { slug } = await params;
  const vehicle = getVehicle(slug);

  if (!vehicle) notFound();

  const specs = [
    { label: "Category", value: categoryLabels[vehicle.category] },
    { label: "Seats", value: String(vehicle.seats) },
    { label: "Luggage", value: `${vehicle.luggage} bags` },
    { label: "Chauffeur", value: "Included" },
    { label: "Booking", value: "Daily, weekly, monthly" },
    { label: "Service area", value: "Karachi & outstation" },
  ];

  const vehicleWhatsApp = whatsappLink(
    `Hello Karachi Rental Car, I would like to book the ${vehicle.name} with driver. Please share availability and rates.`,
  );

  return (
    <Container className="py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
        <Link href="/fleet" className="hover:text-brand-700">
          Fleet
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink-800">{vehicle.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="overflow-hidden rounded-card bg-ink-100">
            <div className="relative aspect-16/10">
              <Image
                src={vehicle.image}
                alt={`${vehicle.name} with chauffeur in Karachi`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8">
            <Badge tone="brand">{categoryLabels[vehicle.category]}</Badge>
            <h1 className="mt-3 text-3xl font-semibold text-ink-950 sm:text-4xl">
              {vehicle.name}
            </h1>
            <p className="mt-4 text-lg leading-8 text-ink-600">
              {vehicle.blurb}
            </p>
            <p className="mt-3 text-sm text-ink-600">
              <span className="font-medium text-ink-900">Best for:</span>{" "}
              {vehicle.bestFor}
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-ink-950">
              Specification
            </h2>
            <dl className="mt-4 grid gap-px overflow-hidden rounded-card bg-ink-200 sm:grid-cols-3">
              {specs.map((spec) => (
                <div key={spec.label} className="bg-white p-4">
                  <dt className="text-xs tracking-wide text-ink-500 uppercase">
                    {spec.label}
                  </dt>
                  <dd className="mt-1 font-medium text-ink-900">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-ink-950">
              Included as standard
            </h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {[
                ...vehicle.features,
                "Cleaned and serviced before every trip",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2.5 text-ink-700"
                >
                  <span
                    aria-hidden
                    className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-xs text-brand-800"
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside>
          <Card className="sticky top-24 p-6">
            <p className="text-sm text-ink-500">Daily rate with chauffeur</p>
            <p className="mt-1 text-3xl font-semibold text-ink-950">
              {formatPrice(vehicle.pricePerDay)}
              <span className="text-base font-normal text-ink-500"> / day</span>
            </p>
            <p className="mt-3 text-sm leading-6 text-ink-600">
              Fuel is managed full-to-full or per kilometre. Weekly and monthly
              packages available on request.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <WhatsAppButton href={vehicleWhatsApp} size="md">
                Book this car on WhatsApp
              </WhatsAppButton>
              <Link
                href={`/booking?vehicle=${vehicle.slug}`}
                className={buttonClasses("outline", "md")}
              >
                Open booking form
              </Link>
            </div>
          </Card>
        </aside>
      </div>
    </Container>
  );
}
