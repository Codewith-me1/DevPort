"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import VerticalCarousel from "./VerticalCarousel";
import BookCallButton from "./UnderLineButton";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

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
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
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

  const images = CAROUSEL_IMAGES.length
    ? CAROUSEL_IMAGES
    : ["/hero-carousel/0.png"];

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden ">
      {/* Blue stripe accent on the right */}

      {/* Shader Gradient Background */}

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col  lg:flex-row lg:items-center lg:justify-between z-10">
        {/* Left: Headline, paragraph, CTAs */}
        <div className="flex-1 text-left lg:max-w-[55%]">
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-black dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Hybrid creative
            <br />
            and marketing,
            <br />
            built to <span className="text-[#F25C4D]">iklipse</span>
            <br />
            the noise.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
            We work with fast-growing SMEs and big names alike to build brands,
            produce content, and cut through the noise with smart creative
            backed by AI.
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
            <Link href="#about" className="inline-flex ">
              <BookCallButton
                className="!text-black dark:!text-white  "
                underlineColor="bg-black"
                text="About Us"
                onClick={() => {}}
              />
            </Link>
          </div>
        </div>

        {/* Right: Vertical stacked carousel — active card full, others peek from top/bottom */}

        <div className="w-[45%]">
          <VerticalCarousel />
        </div>
      </div>
    </section>
  );
}
