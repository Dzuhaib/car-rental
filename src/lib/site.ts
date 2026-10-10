export const SITE_YEAR = 2026;

export const BRAND = {
  name: "Burhan Rent A Car",
  short: "Burhan",
  tagline: "Rent a Car in Karachi with Driver",
  phoneDisplay: "+92 333 2666690",
  phoneHref: "tel:+923332666690",
  whatsapp: "923332666690",
  email: "info@burhanrentacar.pk",
  rating: "4.9",
  trips: "5,000+",
} as const;

export const serviceAreas = [
  "DHA (Phases 1–8)",
  "Clifton",
  "Gulshan-e-Iqbal",
  "Gulistan-e-Johar",
  "PECHS",
  "Jinnah International Airport",
  "Malir Cantt",
  "Port Qasim",
  "Lucky One Mall Area",
  "Karsaz",
] as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}
