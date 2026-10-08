export type VehicleCategory =
  "economy" | "executive" | "suv" | "luxury" | "van";

export type Vehicle = {
  slug: string;
  name: string;
  category: VehicleCategory;
  seats: number;
  luggage: number;
  pricePerDay: number;
  image: string;
  blurb: string;
  bestFor: string;
  features: string[];
};

export const categoryLabels: Record<VehicleCategory, string> = {
  economy: "Economy",
  executive: "Executive",
  suv: "SUV",
  luxury: "Luxury",
  van: "Vans & Coaches",
};

export const vehicles: Vehicle[] = [
  {
    slug: "toyota-yaris",
    name: "Toyota Yaris",
    category: "economy",
    seats: 4,
    luggage: 2,
    pricePerDay: 4500,
    image: "/cars/economy.svg",
    blurb:
      "The budget workhorse for daily errands and short city hops. Compact enough for DHA streets, cheap enough to run all day.",
    bestFor: "Daily city use, errands, family visits",
    features: [
      "Uniformed chauffeur",
      "Air conditioning",
      "Bluetooth & USB",
      "Rear AC vents",
    ],
  },
  {
    slug: "toyota-corolla",
    name: "Toyota Corolla",
    category: "economy",
    seats: 4,
    luggage: 3,
    pricePerDay: 5500,
    image: "/cars/economy.svg",
    blurb:
      "Karachi's default sedan. Comfortable on the long run to Clifton or Gulshan with a full-to-full fuel plan.",
    bestFor: "Everyday bookings and airport transfers",
    features: [
      "Uniformed chauffeur",
      "Dual AC",
      "Power steering",
      "Cleaned before every trip",
    ],
  },
  {
    slug: "honda-civic",
    name: "Honda Civic",
    category: "executive",
    seats: 4,
    luggage: 3,
    pricePerDay: 6500,
    image: "/cars/economy.svg",
    blurb:
      "A well-kept executive sedan for meetings in PECHS and Karsaz, with a quieter cabin than the entry tier.",
    bestFor: "Business meetings, staff travel",
    features: [
      "Uniformed chauffeur",
      "Sunroof",
      "Reverse camera",
      "Phone charging",
    ],
  },
  {
    slug: "toyota-grande",
    name: "Toyota Grande",
    category: "executive",
    seats: 4,
    luggage: 3,
    pricePerDay: 8000,
    image: "/cars/economy.svg",
    blurb:
      "Bigger boot, smoother ride, and the comfort Pakistani executives expect for airport drops and client meetings.",
    bestFor: "Corporate travel and VIP airport pick & drop",
    features: [
      "Uniformed chauffeur",
      "Power seats",
      "Navigation ready",
      "Water & phone charging",
    ],
  },
  {
    slug: "toyota-hilux-revo",
    name: "Toyota Hilux Revo",
    category: "suv",
    seats: 6,
    luggage: 4,
    pricePerDay: 12000,
    image: "/cars/suv.svg",
    blurb:
      "The wedding favourite. Plenty of room for the family, and the ride quality that suits Baraat and long wedding days.",
    bestFor: "Weddings, family outings, outstation trips",
    features: [
      "Uniformed chauffeur",
      "4x4 available",
      "Android display",
      "Push roof rails",
    ],
  },
  {
    slug: "toyota-fortuner",
    name: "Toyota Fortuner",
    category: "suv",
    seats: 6,
    luggage: 5,
    pricePerDay: 15000,
    image: "/cars/suv.svg",
    blurb:
      "A commanding SUV for corporate fleets and outstation runs to Hyderabad, Sukkur, or Northern Pakistan.",
    bestFor: "Corporate fleets, mountain and northern trips",
    features: [
      "Uniformed chauffeur",
      "4WD drivetrain",
      "Leather seats",
      "Dual climate control",
    ],
  },
  {
    slug: "toyota-land-cruiser-prado",
    name: "Toyota Land Cruiser Prado",
    category: "suv",
    seats: 7,
    luggage: 5,
    pricePerDay: 18000,
    image: "/cars/suv.svg",
    blurb:
      "Seven seats and serious ground clearance for Gilgit, Skardu, and Hunza routes where comfort matters more than speed.",
    bestFor: "Northern Areas, Skardu, long family tours",
    features: [
      "Uniformed chauffeur",
      "4WD drivetrain",
      "Sunroof",
      "Extended fuel range",
    ],
  },
  {
    slug: "mercedes-benz-e-class",
    name: "Mercedes-Benz E-Class",
    category: "luxury",
    seats: 4,
    luggage: 3,
    pricePerDay: 30000,
    image: "/cars/luxury.svg",
    blurb:
      "Executive-class arrival for directors and VVIP guests, with a cabin that stays quiet at motorway speed.",
    bestFor: "VIPS guests, board meetings, wedding VIP cars",
    features: [
      "Uniformed chauffeur",
      "Leather interior",
      "Premium audio",
      "Ambient lighting",
    ],
  },
  {
    slug: "audi-a6",
    name: "Audi A6",
    category: "luxury",
    seats: 4,
    luggage: 3,
    pricePerDay: 32000,
    image: "/cars/luxury.svg",
    blurb:
      "Understated German luxury for senior corporate travel and event nights where arrival matters.",
    bestFor: "Corporate VIP, event and banquet arrivals",
    features: [
      "Uniformed chauffeur",
      "Quattro all-wheel drive",
      "Navigation",
      "Massage seats",
    ],
  },
  {
    slug: "toyota-land-cruiser-v8",
    name: "Toyota Land Cruiser V8",
    category: "luxury",
    seats: 6,
    luggage: 5,
    pricePerDay: 38000,
    image: "/cars/luxury.svg",
    blurb:
      "The flagship. Top-tier cabin and presence for wedding valaidas, high-security runs, and executive fleets.",
    bestFor: "V8 LC300, wedding valaidas, executive fleets",
    features: [
      "Uniformed chauffeur",
      "V8 engine",
      "Leather & wood trim",
      "360° cameras",
    ],
  },
  {
    slug: "toyota-hiace",
    name: "Toyota Hiace",
    category: "van",
    seats: 12,
    luggage: 8,
    pricePerDay: 11000,
    image: "/cars/van.svg",
    blurb:
      "Twelve seats with a high roof and rear AC — the stress-free way to move a big family or staff group.",
    bestFor: "Family groups, staff transfers, pilgrim groups",
    features: ["Uniformed chauffeur", "Rear AC", "Sliding door", "PA system"],
  },
  {
    slug: "toyota-coaster",
    name: "Toyota Coaster",
    category: "van",
    seats: 29,
    luggage: 12,
    pricePerDay: 16000,
    image: "/cars/van.svg",
    blurb:
      "Twenty-nine seats for conferences, off-site events, and large wedding guest shuttles around Karachi.",
    bestFor: "Conferences, large events, guest shuttles",
    features: [
      "Uniformed chauffeur",
      "Air conditioned",
      "Reclining seats",
      "PA system",
    ],
  },
];

export function getVehicle(slug: string): Vehicle | undefined {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

export function getFeaturedVehicles(count = 3): Vehicle[] {
  return vehicles.slice(0, count);
}

export function getVehiclesByCategory(category: VehicleCategory): Vehicle[] {
  return vehicles.filter((vehicle) => vehicle.category === category);
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(amount);
}
