import type { Metadata } from "next";
import Link from "next/link";

import { BookingForm } from "@/components/booking/BookingForm";
import { buttonClasses } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ReviewCarousel } from "@/components/ui/ReviewCarousel";
import { Section } from "@/components/ui/Section";
import { VehicleCard } from "@/components/ui/VehicleCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getFeaturedVehicles } from "@/lib/fleet";
import { BRAND, serviceAreas, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
title: `Rent a Car in Karachi with Driver | ${BRAND.name}`,
    description:
      `${BRAND.name} provides chauffeur-driven car rental in Karachi: 24/7 airport pick & drop at Jinnah International Airport, corporate and executive travel, wedding VIP transport, and inter-city journeys to Lahore, Islamabad and Northern Pakistan.`,
  alternates: { canonical: "/" },
};

const stats = [
  { value: "4.9", label: "Google rating" },
  { value: "5,000+", label: "Successful trips" },
  { value: "24/7", label: "Airport & city cover" },
  { value: "12+", label: "Vehicles in fleet" },
];

const services = [
  {
    title: "Karachi Airport Pick & Drop",
    body: "Avoid the taxi lines at Jinnah International Airport. We offer 24/7 flight-tracked pickups. Your driver waits at arrivals with a personalised name board to help with your luggage.",
    points: [
      "Flight-number tracking",
      "Name board at arrivals",
      "Meet & greet included",
    ],
  },
  {
    title: "Corporate & Executive Travel",
    body: "Maintain your professional image. Uniformed drivers and premium vehicles for business meetings in PECHS, Karsaz, and the Financial District.",
    points: [
      "Honda Civic, Toyota Grande, Prado, Fortuner, V8",
      "Monthly and weekly packages",
      "Uniformed chauffeurs",
    ],
  },
  {
    title: "Wedding & Event VIP Transport",
    body: "Make a grand entrance with our luxury fleet. Decorated SUVs and luxury sedans with dedicated chauffeurs for the entire event duration.",
    points: [
      "Decorated cars on request",
      "Valaida and baraat cars",
      "Dedicated driver all day",
    ],
  },
  {
    title: "Inter-City Travel from Karachi",
    body: "Safe long-distance travel to Islamabad, Lahore, Multan, Kharian, or Northern Pakistan. Packages include fuel options and driver accommodation coverage.",
    points: [
      "Islamabad, Lahore, Multan, Kharian",
      "Gilgit, Skardu, Hunza routes",
      "Driver accommodation included",
    ],
  },
];

const differentiators = [
  {
    title: "Vetted chauffeurs",
    body: "Background-checked, punctual, and well-versed in every Karachi route from DHA to Korangi.",
  },
  {
    title: "24/7 availability",
    body: "From early-morning airport pickups to late-night event drop-offs, we answer and we send.",
  },
  {
    title: "Executive fleet",
    body: "Pristine sedans, luxury SUVs, and spacious vans for every occasion, cleaned before each trip.",
  },
  {
    title: "Transparent rates",
    body: "No hidden costs. Fixed daily, weekly, and monthly packages quoted before the trip starts.",
  },
];

const assurances = [
  {
    title: "First Class Services",
    body: "Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.",
  },
  {
    title: "Pick-Up & Drop-Off",
    body: "Enjoy pickup and drop-off services, adding an extra layer of ease to your car rental experience.",
  },
  {
    title: "24/7 Road Assistance",
    body: "Reliable support when you need it most, keeping you on the move with confidence and peace of mind.",
  },
];

const testimonials = [
  {
    quote:
      "Booked for 3 days. Excellent service and staff well mannered. Will definitely use again.",
    name: "Bilal Khan",
    detail: "Corporate client, United Kingdom (UK)",
  },
  {
    quote:
      "Great rental service. Got the same car as shown in the pictures while making the reservation. Pickup from Jinnah International Airport was really neat and clean and the chauffeur was good too. Their reservation manager Mr. Mohammed Abbasi was very accommodating and courteous. Highly recommended.",
    name: "Fahim Taj",
    detail: "24/7 airport pick & drop",
  },
  {
    quote:
      "Absolutely brilliant team. Perfect service. Extremely happy with Burhan Rent A Car.",
    name: "Murtaza Bukhari",
    detail: "Luxury wedding car rental, United Kingdom",
  },
  {
    quote:
      "Highly reliable and efficient service, the vehicle comes in no time after booking. Driver DJ Nasir deserves appreciation for his personality, great driving and protocol handling.",
    name: "Adnan Tariq",
    detail: "Northern areas / outstation tour client",
  },
  {
    quote:
      "I recently rented this car and I'm really happy with it. Comfortable, easy to drive, and the ride is very smooth. Fuel efficiency is good too and the interior feels modern and spacious. Reliable car with excellent value for money.",
    name: "Harmain Noman",
    detail: "PECHS / business travel",
  },
];

const faqs = [
  {
    question: "What is the daily rental rate for a car with driver in Karachi?",
    answer:
      "Rates vary by vehicle tier. Economy cars (Corolla, Yaris) start from PKR 4,500–6,000/day, mid-size SUVs (Fortuner, Prado) range from PKR 12,000–18,000/day, and luxury V8 LC300 or VIP vans range higher based on fuel and route requirements.",
  },
  {
    question:
      "How much are airport pick-and-drop charges at Jinnah International Airport (KHI)?",
    answer:
      "Airport transfer packages start at competitive flat rates based on destination zone (DHA, Clifton, Gulshan, or PECHS). Drivers monitor real-time flight status so your vehicle is ready at arrivals regardless of delays.",
  },
  {
    question:
      "Is fuel included in the car rental packages, or charged separately?",
    answer:
      "Standard daily rentals cover vehicle hire and chauffeur allowance. Fuel is managed on a flexible full-to-full basis or calculated per kilometre based on your trip itinerary.",
  },
  {
    question:
      "How fast can a car be delivered to my location or hotel in DHA / Clifton / Johar?",
    answer:
      "On-demand chauffeur vehicles can be dispatched across major Karachi hubs (DHA, Clifton, Gulshan-e-Iqbal, PECHS, Airport) within 45 to 60 minutes of booking confirmation.",
  },
  {
    question:
      "Can I rent a luxury SUV (Revo, Prado, Fortuner) for outstation travel from Karachi?",
    answer:
      "Yes. Executive vehicles and 4x4 SUVs are available for intercity travel from Karachi to Hyderabad, Sukkur, Multan, Lahore, or Islamabad, complete with driver accommodation coverage.",
  },
];

const generalWhatsApp = whatsappLink(
  `Hello ${BRAND.name}, I would like to rent a car with driver in Karachi. Please share availability and rates.`,
);

export default function Home() {
  const featured = getFeaturedVehicles(3);

  return (
    <>
      <section className="border-b border-ink-200">
        <Container className="grid gap-14 py-16 lg:grid-cols-2 lg:items-start lg:py-24">
          <div>
            <p className="text-sm font-medium tracking-wide text-brand-700">
              Karachi · Chauffeur-driven rentals · Available 24/7
            </p>
            <h1 className="mt-5 text-4xl font-semibold text-ink-950 sm:text-5xl">
              Rent a Car in Karachi with Driver
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink-600">
              {BRAND.name} delivers professional, chauffeur-driven
              transportation for residents, corporate clients, families, and
              international travellers across Pakistan. Our fleet ranges from
              economical sedans and executive vehicles to premium SUVs, Mercedes
              and Audi models, and spacious vans like the Toyota Hiace and
              Coaster.
            </p>
            <p className="mt-4 max-w-xl leading-7 text-ink-600">
              Operating across major commercial and residential hubs — DHA,
              Clifton, PECHS, and Gulshan-e-Iqbal — we specialise in 24/7
              flight-tracked airport pickups at Jinnah International Airport,
              corporate business travel, wedding VIP transport, and
              long-distance intercity journeys. Experienced drivers, transparent
              pricing, and flexible daily, weekly, or monthly packages.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton href={generalWhatsApp} size="lg">
                Book via WhatsApp
              </WhatsAppButton>
              <Link href="/fleet" className={buttonClasses("outline", "lg")}>
                Explore Luxury Fleet
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-semibold text-ink-950">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm text-ink-600">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-fade-up">
            <BookingForm />
          </div>
        </Container>
      </section>

      <Section
        eyebrow="What we do"
        title="Services built around how Karachi actually moves"
        description="One company for the airport run, the client meeting, the wedding baraat, and the drive up to Islamabad."
      >
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="h-full p-6">
              <h3 className="text-xl font-semibold text-ink-950">
                {service.title}
              </h3>
              <p className="mt-3 leading-7 text-ink-600">{service.body}</p>
              <ul className="mt-5 space-y-2 border-t border-ink-100 pt-4 text-sm text-ink-700">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span
                      aria-hidden
                      className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-xs text-brand-800"
                    >
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Why choose us"
        title="Why Choose Our Chauffeur-Driven Service with Burhan Rent A Car?"
        description="Navigating Karachi's traffic is a challenge — let our experts handle the road while you focus on your day. A top rated rent a car service in Karachi."
      >
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <Card key={item.title} className="h-full p-6">
              <h3 className="text-lg font-semibold text-ink-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Service areas"
        title="Rent a Car Service Areas in Karachi"
        description="We provide convenient chauffeur-driven car rental services across Karachi, with pickup and drop-off available in major areas."
      >
        <div className="mt-10 flex flex-wrap gap-2.5">
          {serviceAreas.map((area) => (
            <span
              key={area}
              className="rounded-btn border border-ink-200 px-4 py-2 text-sm font-medium text-ink-700"
            >
              {area}
            </span>
          ))}
        </div>
        <p className="mt-8 max-w-3xl leading-7 text-ink-600">
          Whether you need a car for airport transfers, business travel, family
          trips, weddings, or daily transportation, our team is ready to help
          you find the right vehicle for your needs. Contact us for availability
          and a customised quote.
        </p>
        <div className="mt-8">
          <WhatsAppButton href={generalWhatsApp} size="lg">
            Book via WhatsApp
          </WhatsAppButton>
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Our executive chauffeur-driven fleet"
        title="Explore our fleet of well-maintained rental cars in Karachi"
        description="We offer affordable and luxury vehicles for corporate travel, airport transfers, weddings, and daily rentals."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((vehicle) => (
            <VehicleCard key={vehicle.slug} vehicle={vehicle} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/fleet" className={buttonClasses("outline", "md")}>
            Explore Luxury Fleet
          </Link>
          <WhatsAppButton href={generalWhatsApp} size="md">
            Book Now
          </WhatsAppButton>
        </div>
      </Section>

      <Section
        eyebrow="Start your journey with us"
        title="First class services"
      >
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {assurances.map((item) => (
            <Card key={item.title} className="h-full p-6">
              <h3 className="text-lg font-semibold text-ink-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Get to know us"
        title="A top-rated and trusted car rental company in Karachi"
        description="For visitors flying into Pakistan from the USA"
      >
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 leading-7 text-ink-600">
            <p>
              {BRAND.name} is a top-rated and trusted car rental
              service in Karachi. Our mission is simple: we do our job with
              dedication and keep every client happy. We offer clean cars, quick
              service, and honest communication.
            </p>
            <p>
              You can rent a car for business, travel, events, or family trips.
              At {BRAND.name}, your comfort and satisfaction come first.
            </p>
            <p>
              Looking for a reliable rent a car Karachi service? We offer
              affordable and luxury solutions for airport transfers, corporate
              travel, weddings, family tours, and daily transportation. Our
              fleet includes economy cars, executive sedans, SUVs, and luxury
              vehicles to suit every budget and occasion.
            </p>
            <p>
              We provide professional car rental Karachi services with
              experienced drivers, transparent pricing, and fast booking support
              — available across DHA, Clifton, Gulshan-e-Iqbal,
              Gulistan-e-Johar, PECHS, Malir, and other major areas. With
              well-maintained vehicles, competitive rates, and 24/7 customer
              support, we make car rental simple, convenient, and hassle-free.
            </p>
          </div>

          <Card className="h-fit p-6">
            <h3 className="text-lg font-semibold text-ink-950">
              Book in three steps
            </h3>
            <ol className="mt-4 space-y-4 text-sm text-ink-600">
              {[
                "Send your trip details on WhatsApp — area, dates, and vehicle type.",
                "Get availability and a firm, all-inclusive quote from our reservation team.",
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
            <div className="mt-6">
              <WhatsAppButton
                href={generalWhatsApp}
                size="md"
                className="w-full"
              >
                Message us now
              </WhatsAppButton>
            </div>
          </Card>
        </div>
      </Section>

      <section
        aria-labelledby="reviews-heading"
        className="border-t border-ink-200 py-16 sm:py-20"
      >
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-wide text-brand-700">
              What our clients say
            </p>
            <h2
              id="reviews-heading"
              className="mt-2 text-3xl font-semibold text-ink-950 sm:text-4xl"
            >
              {BRAND.rating} ★★★★★ rating on Google Reviews
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Over {BRAND.trips} successful trips across Karachi, outstation
              routes, and airport transfers.
            </p>
          </div>

          <div className="mt-12">
            <ReviewCarousel reviews={testimonials} />
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="faq-heading"
        className="border-t border-ink-200 py-16 sm:py-20"
      >
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-wide text-brand-700">
              FAQs
            </p>
            <h2
              id="faq-heading"
              className="mt-2 text-3xl font-semibold text-ink-950 sm:text-4xl"
            >
              Ready for a smooth ride?
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Don&rsquo;t settle for unreliable transport. Book the best rent a
              car Karachi with driver today.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.question} className="p-6">
                  <h3 className="text-base font-semibold text-ink-950">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-ink-600">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>

            <Card className="h-fit p-6 lg:sticky lg:top-24">
              <h3 className="text-lg font-semibold text-ink-950">
                Ready for a Smooth Ride?
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink-600">
                Send us your dates, passenger count, and route on WhatsApp. Our
                reservation team replies with the best vehicle and a firm quote
                — usually within minutes.
              </p>
              <div className="mt-6">
                <WhatsAppButton
                  href={generalWhatsApp}
                  size="md"
                  className="w-full"
                >
                  Book via WhatsApp
                </WhatsAppButton>
              </div>
              <p className="mt-4 text-xs text-ink-500">
                Or call {BRAND.phoneDisplay} · 24/7
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <Section>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-ink-950 sm:text-4xl">
            Start your journey with us today
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink-600">
            Airport pickup, corporate day, wedding fleet, or a week in Northern
            Pakistan — tell us the plan and we will handle the car, the
            chauffeur, and the route.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton href={generalWhatsApp} size="lg">
              Book via WhatsApp
            </WhatsAppButton>
            <Link href="/contact" className={buttonClasses("outline", "lg")}>
              Request a quote
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
