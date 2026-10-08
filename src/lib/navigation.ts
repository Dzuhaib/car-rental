import type { Route } from "next";

export const navigation: { href: Route; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Fleet" },
  { href: "/booking", label: "Booking" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const SERVICE_LINKS: {
  title: string;
  links: { href: Route; label: string }[];
}[] = [
  {
    title: "Rent",
    links: [
      { href: "/fleet", label: "Our fleet" },
      { href: "/fleet?category=economy", label: "Economy cars" },
      { href: "/fleet?category=executive", label: "Executive sedans" },
      { href: "/fleet?category=suv", label: "SUVs & 4x4" },
      { href: "/fleet?category=van", label: "Hiace & Coaster" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/booking", label: "Airport pick & drop" },
      { href: "/booking", label: "Corporate travel" },
      { href: "/booking", label: "Wedding VIP transport" },
      { href: "/booking", label: "Inter-city travel" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/contact", label: "Contact" },
      { href: "/booking", label: "Get an instant quote" },
    ],
  },
];
