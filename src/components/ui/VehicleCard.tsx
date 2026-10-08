import Image from "next/image";
import Link from "next/link";

import { categoryLabels, formatPrice, type Vehicle } from "@/lib/fleet";

import { Badge } from "./Badge";
import { Card } from "./Card";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-colors hover:border-ink-400">
      <div className="relative aspect-16/10 bg-ink-100">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} with chauffeur in Karachi`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute top-3 left-3">
          <Badge tone="brand">{categoryLabels[vehicle.category]}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="text-lg font-semibold text-ink-950">{vehicle.name}</h3>
          <p className="mt-1.5 text-sm leading-6 text-ink-600">
            {vehicle.blurb}
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-3 border-y border-ink-100 py-3 text-center text-xs">
          <div>
            <dt className="text-ink-500">Seats</dt>
            <dd className="mt-0.5 font-medium text-ink-900">{vehicle.seats}</dd>
          </div>
          <div>
            <dt className="text-ink-500">Luggage</dt>
            <dd className="mt-0.5 font-medium text-ink-900">
              {vehicle.luggage} bags
            </dd>
          </div>
        </dl>

        <p className="text-xs text-ink-500">
          <span className="font-medium text-ink-700">Best for:</span>{" "}
          {vehicle.bestFor}
        </p>

        <div className="mt-auto flex items-end justify-between gap-4">
          <p className="text-sm text-ink-500">
            from{" "}
            <span className="text-lg font-semibold text-ink-950">
              {formatPrice(vehicle.pricePerDay)}
            </span>{" "}
            / day
          </p>
          <Link
            href={`/fleet/${vehicle.slug}`}
            className="text-sm font-medium text-brand-700 hover:text-brand-800"
          >
            Details
          </Link>
        </div>
      </div>
    </Card>
  );
}
