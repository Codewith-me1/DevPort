"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const CAROUSEL_IMAGES = [
  "/hero-carousel/0.png",
  "/hero-carousel/0.png",
  "/hero-carousel/0.png",
  "/hero-carousel/0.png",
];

const CAROUSEL_DURATION_MS = 4000;

// Stacked vertical carousel: card height and how many px of each inactive card "peek"
const CARD_HEIGHT = 380;
const PEEK = 28;
const STEP = CARD_HEIGHT - PEEK; // vertical offset between card starts

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark, mounted]);

  useEffect(() => {
    const count = CAROUSEL_IMAGES.length || 1;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % count);
    }, CAROUSEL_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  const images = CAROUSEL_IMAGES.length ? CAROUSEL_IMAGES : ["/hero-carousel/0.png"];

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white dark:bg-zinc-950">
      {/* Blue stripe accent on the right */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[40%] min-w-[280px] max-w-[520px] opacity-90 dark:opacity-70"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-sky-200/40 to-sky-400/50 dark:via-sky-900/30 dark:to-sky-700/40" />
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute right-0 w-24 h-full bg-gradient-to-l from-transparent to-sky-300 dark:to-sky-800" style={{ transform: "skewX(-8deg)" }} />
          <div className="absolute right-16 w-20 h-full bg-gradient-to-l from-transparent to-sky-400 dark:to-sky-700" style={{ transform: "skewX(-6deg)" }} />
          <div className="absolute right-32 w-16 h-full bg-gradient-to-l from-transparent to-sky-300 dark:to-sky-600" style={{ transform: "skewX(-10deg)" }} />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-10">
        {/* Left: Headline, paragraph, CTAs */}
        <div className="flex-1 text-left lg:max-w-[55%]">
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-black dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Hybrid creative
            <br />
            and marketing,
            <br />
            built to{" "}
            <span className="text-[#F25C4D]">iklipse</span>
            <br />
            the noise.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
            We work with fast-growing SMEs and big names alike to build brands, produce content, and cut through the noise with smart creative backed by AI.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#F25C4D] px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-[#e04a3d] focus:outline-none focus:ring-2 focus:ring-[#F25C4D] focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
            >
              Get Started
            </Link>
            <button
              type="button"
              onClick={() => setIsDark((d) => !d)}
              className="inline-flex items-center justify-center rounded-lg border-2 border-black bg-white px-5 py-3 text-base font-medium text-black transition hover:bg-zinc-100 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-zinc-800"
              aria-label="Toggle dark mode"
            >
              Lights Off
            </button>
            <Link
              href="#about"
              className="inline-flex items-center gap-1.5 text-base font-medium text-black underline decoration-2 underline-offset-4 transition hover:decoration-[#F25C4D] dark:text-white dark:hover:decoration-[#F25C4D]"
            >
              About us
              <span className="text-lg" aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* Right: Vertical stacked carousel — active card full, others peek from top/bottom */}
        <div className="relative w-full max-w-[340px] flex-shrink-0 sm:max-w-[380px]">
          <div
            className="mx-auto overflow-hidden rounded-xl"
            style={{ height: CARD_HEIGHT + PEEK * 2 }}
          >
            <div
              className="relative w-full"
              style={{
                height: (images.length - 1) * STEP + CARD_HEIGHT,
                transform: `translateY(${PEEK - activeIndex * STEP}px)`,
                transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {images.map((src, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 overflow-hidden rounded-lg border border-zinc-200/90 bg-white shadow-xl dark:border-zinc-700 dark:bg-zinc-900"
                  style={{
                    top: i * STEP,
                    height: CARD_HEIGHT,
                    width: "100%",
                    zIndex: activeIndex === i ? images.length : Math.max(0, images.length - Math.abs(i - activeIndex)),
                  }}
                >
                  <Image
                    src={src}
                    alt={`Portfolio ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 340px, 380px"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
