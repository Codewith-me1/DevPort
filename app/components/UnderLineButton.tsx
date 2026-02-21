"use client";

import React, { useState, MouseEvent } from "react";
import { ArrowRight } from "lucide-react";

interface BookCallButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  underlineColor?: string;
}

const BookCallButton = ({
  text = "Book a Call",
  onClick,
  className = "",
  underlineColor = "bg-blue-200",
}: BookCallButtonProps) => {
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <button
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative overflow-hidden group
        px-8 py-4 text-white rounded-xl font-medium
        flex items-center gap-2 transition-all duration-500
        /* Slide-in Blur Entrance */
        animate-in fade-in zoom-in-95 slide-in-from-bottom-2 duration-1000 ease-out ${className}
      `}
    >
      {/* Dynamic Mouse-Move Glow */}
      {/* <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px, rgba(255,255,255,0.15), transparent 40%)`,
        }}
      /> */}

      {/* Button Content */}
      <span className="relative inline-block group overflow-hidden">
        {text}

        {/* OLD Underline */}
        <span
          className={`
      absolute left-0 bottom-0 w-full h-[2px] 
      transition-transform duration-300 ease-in-out
      group-hover:translate-x-full
      group-hover:delay-0
      ${underlineColor}
    `}
        />

        {/* NEW Underline */}
        <span
          className={`
      absolute left-0 bottom-0 w-full h-[2px] 
      -translate-x-full
      transition-transform duration-300 ease-in-out
      delay-0
      group-hover:translate-x-0
      group-hover:delay-300 ${underlineColor}
    `}
        />
      </span>

      {/* Arrow Icon Shift */}
      <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
    </button>
  );
};

export default BookCallButton;
