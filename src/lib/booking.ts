import { vehicles } from "./fleet";

export const pickupAreas = [
  "Jinnah International Airport",
  "DHA (Phase 1–8)",
  "Clifton",
  "Gulshan-e-Iqbal",
  "Gulistan-e-Johar",
  "PECHS",
  "Karsaz",
  "Malir Cantt",
  "Lucky One Mall",
  "Port Qasim",
  "Other / let us decide",
] as const;

export type PickupArea = (typeof pickupAreas)[number];

export const tripTypes = [
  "City booking",
  "Airport pick & drop",
  "Inter-city / outstation",
  "Wedding or event",
  "Corporate monthly",
] as const;

export type TripType = (typeof tripTypes)[number];

export const vehicleTiers = [
  { id: "any", label: "Recommend a vehicle for me", pricePerDay: 0 },
  ...vehicles.map((vehicle) => ({
    id: vehicle.slug,
    label: `${vehicle.name} — from PKR ${vehicle.pricePerDay.toLocaleString("en-PK")}/day`,
    pricePerDay: vehicle.pricePerDay,
  })),
] as const;

export type BookingDetails = {
  area: string;
  tripType: string;
  vehicleSlug: string;
  pickupDate: string;
  returnDate: string;
  name?: string;
  phone?: string;
};

export function formatDate(date: string): string {
  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) return date || "—";

  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function tripDays(pickupDate: string, returnDate: string): number {
  const pickup = Date.parse(pickupDate);
  const returned = Date.parse(returnDate);

  if (Number.isNaN(pickup) || Number.isNaN(returned)) return 0;

  return Math.max(0, Math.round((returned - pickup) / 86_400_000));
}

export function buildBookingMessage(details: BookingDetails): string {
  const vehicle = vehicles.find((item) => item.slug === details.vehicleSlug);
  const days = tripDays(details.pickupDate, details.returnDate);

  const lines = [
    `Hello Karachi Rental Car, I would like to book a car with driver.`,
    ``,
    `Trip type: ${details.tripType}`,
    `Pick-up area: ${details.area}`,
    `Vehicle: ${vehicle ? vehicle.name : "Please recommend"}`,
    `Pick-up date: ${formatDate(details.pickupDate)}`,
    `Return date: ${details.returnDate ? formatDate(details.returnDate) : "Open / to be decided"}`,
    days > 0 ? `Duration: ${days} day${days === 1 ? "" : "s"}` : null,
    details.name ? `Name: ${details.name}` : null,
    details.phone ? `Phone: ${details.phone}` : null,
  ].filter((line): line is string => line !== null);

  return lines.join("\n");
}
