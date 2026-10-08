"use client";

import { useEffect, useRef } from "react";

import { Card } from "./Card";

export type Review = {
  quote: string;
  name: string;
  detail: string;
};

const GAP = 24;
const SPEED_PX_PER_SEC = 22;

export function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || reviews.length === 0) return;

    let position = track.scrollLeft;
    let last = performance.now();
    let frame = 0;

    function calcWidth() {
      const first = track?.firstElementChild as HTMLElement | null;
      if (!first) return 0;

      return (first.offsetWidth + GAP) * reviews.length;
    }

    let setWidth = 0;

    function tick(now: number) {
      if (!track) return;

      const delta = Math.min(now - last, 64);
      last = now;

      if (!pausedRef.current && !document.hidden && setWidth > 0) {
        position += (SPEED_PX_PER_SEC * delta) / 1000;

        if (position >= setWidth) {
          position -= setWidth;
        }

        track.scrollLeft = position;
      }

      frame = window.requestAnimationFrame(tick);
    }

    function handleResize() {
      const current = setWidth;
      setWidth = calcWidth();
      if (current > 0 && setWidth > 0) {
        position = (position / current) * setWidth;
        track?.scrollTo({ left: position, behavior: "auto" });
      }
    }

    setWidth = calcWidth();
    frame = window.requestAnimationFrame(tick);

    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, [reviews.length]);

  const loop = [...reviews, ...reviews];

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
      onFocusCapture={() => {
        pausedRef.current = true;
      }}
      onBlurCapture={() => {
        pausedRef.current = false;
      }}
    >
      <ul
        ref={trackRef}
        aria-label="Client reviews"
        className="-mx-4 flex gap-6 overflow-x-hidden px-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {loop.map((review, position) => (
          <li
            key={`${review.name}-${position}`}
            aria-hidden={position >= reviews.length}
            className="w-[85%] shrink-0 sm:w-[60%] lg:w-[calc(33.333%-1rem)]"
          >
            <Card className="flex h-full flex-col p-7">
              <p aria-hidden className="text-sm tracking-widest text-brand-700">
                ★★★★★
              </p>
              <p className="mt-4 text-sm leading-7 text-ink-700">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="mt-auto pt-6 text-sm font-semibold text-ink-950">
                {review.name}
                <span className="mt-1 block font-normal text-ink-500">
                  {review.detail}
                </span>
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
