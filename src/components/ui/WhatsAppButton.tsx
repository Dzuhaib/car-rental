const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-7 text-base",
} as const;

export type WhatsAppButtonSize = keyof typeof sizes;

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-medium transition-colors";

export function whatsappButtonClasses(size: WhatsAppButtonSize = "md"): string {
  return `${base} bg-wa-500 text-ink-950 hover:bg-wa-600 active:bg-wa-700 ${sizes[size]}`;
}

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96A9.9 9.9 0 0 0 19.1 4.9 9.9 9.9 0 0 0 12.04 2Zm0 1.84c2.15 0 4.17.84 5.69 2.36a8 8 0 0 1 2.35 5.68c0 4.42-3.6 8.02-8.03 8.02a8 8 0 0 1-4.08-1.12l-.3-.18-3.02.79.8-2.95-.19-.31a7.98 7.98 0 0 1-1.23-4.26c0-4.42 3.6-8.03 8.01-8.03Zm-2.6 4.1c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26 0 1.33.97 2.62 1.11 2.8.14.18 1.9 2.9 4.6 4.06.64.28 1.14.44 1.53.57.64.2 1.23.17 1.69.1.52-.07 1.6-.65 1.82-1.29.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31-.27-.14-1.6-.79-1.84-.88-.25-.09-.42-.14-.6.13-.18.27-.68.88-.83 1.06-.15.18-.3.2-.57.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.15-.27-.02-.42.12-.55.12-.12.27-.3.4-.45.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.44-.82-1.97-.21-.5-.43-.44-.6-.45h-.5Z" />
    </svg>
  );
}

export function WhatsAppButton({
  href,
  children = "Book via WhatsApp",
  size = "md",
  className = "",
  onClick,
}: {
  href: string;
  children?: React.ReactNode;
  size?: WhatsAppButtonSize;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`${whatsappButtonClasses(size)} ${className}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}
