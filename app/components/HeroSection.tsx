"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import VerticalCarousel from "./VerticalCarousel";
import BookCallButton from "./UnderLineButton";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import PixelBlast from "@/components/PixelBlast";
import GradientBlinds from "@/components/GradientBlinds";
import RotatingText from "./RotatingText";

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
    document.documentElement.classList.toggle("light", isDark);
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
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Blue stripe accent on the right */}

      {/* Shader Gradient Background */}
      <div className="absolute inset-0 z-1">
        <div style={{ width: "100%", height: "100%" }}></div>
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col  lg:flex-row lg:items-center lg:justify-between z-10">
        {/* Left: Headline, paragraph, CTAs */}
        <div className="flex-1 text-left lg:max-w-[55%]">
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-black dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Hybrid creative
            <br />
            and marketing,
            <span className="flex gap-2 mt-4 ">
              <h1>Create</h1>
              <RotatingText
                mainClassName="bg-[#F25C4D]! p-2 rounded-md text-white ml-2"
                texts={["the noise.", "the clutter.", "the confusion."]}
              />
            </span>
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
