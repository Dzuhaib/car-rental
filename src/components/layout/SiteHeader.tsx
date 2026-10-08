"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation } from "@/lib/navigation";
import { BRAND, whatsappLink } from "@/lib/site";

import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { WhatsAppButton } from "../ui/WhatsAppButton";

const generalWhatsApp = whatsappLink(
  "Hello Karachi Rental Car, I would like to rent a car with driver in Karachi. Please share availability and rates.",
);

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-white">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label={BRAND.name}>
          <Image
            src="/logo.webp"
            alt={BRAND.name}
            width={168}
            height={104}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-btn px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-brand-800" : "text-ink-600 hover:text-ink-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <WhatsAppButton href={generalWhatsApp} size="sm">
            Book via WhatsApp
          </WhatsAppButton>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </Button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-ink-200 bg-white md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-btn px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-100"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <WhatsAppButton
                href={generalWhatsApp}
                size="md"
                onClick={closeMenu}
              >
                Book via WhatsApp
              </WhatsAppButton>
              <a
                href={BRAND.phoneHref}
                className="inline-flex h-12 items-center justify-center rounded-btn border border-ink-200 px-5 text-sm font-medium text-ink-900"
              >
                Call {BRAND.phoneDisplay}
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
