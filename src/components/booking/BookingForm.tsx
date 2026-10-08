"use client";

import { useState } from "react";

import {
  buildBookingMessage,
  pickupAreas,
  tripTypes,
  vehicleTiers,
} from "@/lib/booking";
import { whatsappLink } from "@/lib/site";

import { Field } from "../ui/Field";
import { SelectField } from "../ui/SelectField";
import { WhatsAppButton } from "../ui/WhatsAppButton";

type BookingFormProps = {
  initialArea?: string;
  initialTripType?: string;
  initialVehicle?: string;
  initialPickup?: string;
  initialReturn?: string;
};

const today = new Date().toISOString().slice(0, 10);
const defaultReturn = new Date(Date.now() + 3 * 86_400_000)
  .toISOString()
  .slice(0, 10);

export function BookingForm({
  initialArea,
  initialTripType,
  initialVehicle,
  initialPickup,
  initialReturn,
}: BookingFormProps) {
  const [area, setArea] = useState(initialArea ?? pickupAreas[0]);
  const [tripType, setTripType] = useState(initialTripType ?? tripTypes[0]);
  const [vehicleSlug, setVehicleSlug] = useState(
    initialVehicle && vehicleTiers.some((tier) => tier.id === initialVehicle)
      ? initialVehicle
      : "any",
  );
  const [pickupDate, setPickupDate] = useState(initialPickup ?? today);
  const [returnDate, setReturnDate] = useState(initialReturn ?? defaultReturn);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (returnDate && pickupDate && returnDate < pickupDate) {
      event.preventDefault();
      setError("The return date must be on or after the pick-up date.");
    }
  }

  const href = whatsappLink(
    buildBookingMessage({
      area,
      tripType,
      vehicleSlug,
      pickupDate,
      returnDate,
      name: name.trim() || undefined,
      phone: phone.trim() || undefined,
    }),
  );

  return (
    <div className="rounded-card border border-ink-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-ink-950">
        Get an instant quote on WhatsApp
      </h2>
      <p className="mt-1.5 text-sm leading-6 text-ink-600">
        Fill in four details. We build the message for you and WhatsApp opens
        with it ready to send — no forms, no sign-up, no waiting on a callback.
      </p>

      <form
        className="mt-6 grid gap-4 sm:grid-cols-2"
        onSubmit={(event) => event.preventDefault()}
      >
        <SelectField
          label="Trip type"
          name="tripType"
          value={tripType}
          onChange={(event) => setTripType(event.target.value)}
        >
          {tripTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectField>

        <SelectField
          label="Pick-up area"
          name="area"
          value={area}
          onChange={(event) => setArea(event.target.value)}
        >
          {pickupAreas.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectField>

        <SelectField
          label="Vehicle"
          name="vehicle"
          value={vehicleSlug}
          onChange={(event) => setVehicleSlug(event.target.value)}
          className="sm:col-span-2"
        >
          {vehicleTiers.map((tier) => (
            <option key={tier.id} value={tier.id}>
              {tier.label}
            </option>
          ))}
        </SelectField>

        <Field
          label="Pick-up date"
          name="pickupDate"
          type="date"
          min={today}
          value={pickupDate}
          onChange={(event) => {
            setPickupDate(event.target.value);
            setError(null);
          }}
        />

        <Field
          label="Return date"
          name="returnDate"
          type="date"
          min={pickupDate}
          value={returnDate}
          onChange={(event) => {
            setReturnDate(event.target.value);
            setError(null);
          }}
        />

        <Field
          label="Your name (optional)"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <Field
          label="Phone (optional)"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />

        {error ? (
          <p role="alert" className="text-sm text-red-600 sm:col-span-2">
            {error}
          </p>
        ) : null}

        <div className="sm:col-span-2">
          <WhatsAppButton
            href={href}
            size="lg"
            className="w-full"
            onClick={handleClick}
          >
            Send booking request on WhatsApp
          </WhatsAppButton>
        </div>
      </form>

      <p className="mt-3 text-xs leading-5 text-ink-500">
        Tap the button and WhatsApp opens with your trip details already typed.
        Send it and our reservation team replies with availability and a firm
        quote.
      </p>

      <details className="mt-4 rounded-btn border border-ink-200 p-4 text-sm text-ink-600">
        <summary className="cursor-pointer font-medium text-ink-900">
          Prefer a call instead?
        </summary>
        <p className="mt-2 leading-6">
          Ring us directly and we will confirm the vehicle and driver on the
          spot — usually within 15 minutes for in-city bookings.
        </p>
      </details>
    </div>
  );
}
