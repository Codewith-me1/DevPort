"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselItem {
  id: number;
  title: string;
  image: string;
  dotColor: string;
}

const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: "Hardee's",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
    dotColor: "bg-orange-500",
  },
  {
    id: 2,
    title: "Hannovae",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    dotColor: "bg-teal-400",
  },
  {
    id: 3,
    title: "Vitrac",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
    dotColor: "bg-amber-600",
  },

  {
    id: 4,
    title: "NextGen",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    dotColor: "bg-blue-400",
  },
  {
    id: 5,
    title: "DesignCo",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    dotColor: "bg-purple-500",
  },
  {
    id: 6,
    title: "DesignCo",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    dotColor: "bg-purple-500",
  },
  {
    id: 7,
    title: "DesignCo",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    dotColor: "bg-purple-500",
  },
  {
    id: 8,
    title: "DesignCo",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    dotColor: "bg-purple-500",
  },
];

export default function InfiniteSymmetricCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index: number) => {
    const total = carouselData.length;

    // Calculate the shortest distance in a circular array
    // This makes sure cards transition the "short way" around
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    // ACTIVE CARD (Center)
    if (diff === 0) {
      return {
        zIndex: 50,
        transform: "translateY(0px) scale(1.1)",
        opacity: 1,
        filter: "blur(0px)",
      };
    }

    // ABOVE CARDS (diff is -1 or -2)
    if (diff === -1 || diff === -2 || diff === -3) {
      return {
        zIndex: 50 - Math.abs(diff) * 10,
        transform: `translateY(${diff * 75}px) scale(${1 - Math.abs(diff) * 0.1})`,
        opacity: 1 - Math.abs(diff) * 0.1,
        filter: `blur(${Math.abs(diff) * 0}px)`,
      };
    }

    // BELOW CARDS (diff is 1 or 2)
    if (diff === 1 || diff === 2 || diff === 3) {
      return {
        zIndex: 50 - Math.abs(diff) * 10,
        transform: `translateY(${diff * 75}px) scale(${1 - Math.abs(diff) * 0.1})`,
        opacity: 1 - Math.abs(diff) * 0.1,
        filter: `blur(${Math.abs(diff) * 0}px)`,
      };
    }

    // HIDDEN CARDS (Everything else)
    return {
      zIndex: 0,
      transform: `translateY(${diff > 0 ? 100 : -100}px) scale(0.5)`,
      opacity: 0,
      filter: "blur(10px)",
    };
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 overflow-hidden">
      <div className="relative w-full max-w-[500px] h-[700px] flex items-center justify-center">
        {carouselData.map((item, index) => {
          const style = getCardStyle(index);

          return (
            <div
              key={item.id}
              className="absolute w-full h-[400px] rounded-[20px] overflow-hidden  transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] border border-white/10"
              style={{
                zIndex: style.zIndex,
                transform: style.transform,
                opacity: style.opacity,
                filter: style.filter,
              }}
            >
              {/* UI Header */}

              {/* Image */}
              <div className="relative w-full h-full">
                <div className="flex absolute w-full items-center justify-between z-10 p-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.dotColor}`} />
                    <span className="text-black/90 font-medium text-xl">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-black/40">
                    <span className="text-xl">•••</span>
                    <span className="text-xl">✕</span>
                  </div>
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority={index === activeIndex}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
