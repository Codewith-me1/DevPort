"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BookCallButton from "./UnderLineButton";

export default function ScrollZoomFixed() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the section is visible
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Progress when section enters and exits viewport
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        // Section is visible
        const visibleTop = Math.max(0, -sectionTop);
        const visibleBottom = Math.min(
          sectionHeight,
          windowHeight - sectionTop,
        );
        const visibleHeight = visibleBottom - visibleTop;
        const progress = visibleHeight / windowHeight;

        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      } else if (sectionTop >= windowHeight) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate image zoom - zooms from 1.0 to 1.3 and back
  const getImageScale = () => {
    // Sine wave for smooth zoom in and out
    const baseScale = 1.0;
    const zoomAmount = 0.3;
    const scale = baseScale + Math.sin(scrollProgress * Math.PI) * zoomAmount;
    return scale;
  };

  const imageScale = getImageScale();

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Container with max-width and padding */}
      <div className="  px-4 lg:px-8 xl:px-12 py-8 lg:py-12 h-full min-h-screen flex items-center">
        {/* Main card with rounded corners */}
        <div className="w-full bg-[#2E3192] backdrop-blur-sm rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left side - Image container (FIXED, only image inside zooms) */}
            <div className="relative h-full overflow-hidden">
              {/* Vertical lines background (left side only) */}
              {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute left-0 top-0 bottom-0 w-full flex justify-start pl-4 lg:pl-12 gap-1">
                  {[...Array(35)].map((_, i) => (
                    <div
                      key={`line-${i}`}
                      className="w-[3px] lg:w-1 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
                      style={{
                        height: "100%",
                        opacity: Math.random() * 0.5 + 0.3,
                      }}
                    />
                  ))}
                </div>
              </div> */}

              <div className="relative w-full flex justify-center">
                <div className="relative w-full bg-[#2E3192] rounded-[2.5rem] overflow-clip">
                  {/* Image fills full height */}
                  <div className="relative  md:h-[700px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
                    {/* Zoom Layer */}
                    <div
                      className="absolute inset-0 transition-transform duration-300 ease-out"
                      style={{
                        transform: `scale(${imageScale})`,
                        transformOrigin: "center center",
                      }}
                    >
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=90"
                        alt="Creative professional"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-purple-500/30 pointer-events-none" />
                  </div>

                  {/* Glow */}
                  <div
                    className="absolute inset-0 -z-10 blur-2xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-[3rem] transition-opacity duration-500"
                    style={{
                      opacity: 0.4 + scrollProgress * 0.2,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="relative p-10 lg:p-12 xl:pl-40  flex flex-col justify-center text-white">
              <div className="space-y-10 lg:space-y-8">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-4xl font-bold leading-tight">
                  Creative genius fused with{" "}
                  <span className="block mt-2">advanced AI</span>
                </h1>

                {/* Description with bullet point */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3 lg:gap-4 lg:pl-10 lg:pr-10">
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white mt-2.5 flex-shrink-0" />
                    <p className="text-base lg:text-lg xl:text-xl text-white/95 leading-relaxed">
                      So you get sharper visuals, smarter videos, and more
                      relatable campaigns. Delivered at break-neck speed, and
                      all without breaking the bank.
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div className="pt-2">
                  <BookCallButton
                    text="Find Out More!"
                    onClick={() => alert("Booking a call...")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 lg:opacity-70">
        <p className="text-white/80 text-xs lg:text-sm font-light">
          Scroll to zoom
        </p>
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-white/40 rounded-full flex justify-center p-1">
          <div
            className="w-1 h-2 lg:w-1.5 lg:h-3 bg-white/60 rounded-full animate-bounce"
            style={{ animationDuration: "1.5s" }}
          />
        </div>
      </div>
    </section>
  );
}
