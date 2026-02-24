"use client";

import React from "react";

interface SoftGradientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SoftGradientBackground({
  children,
  className = "",
}: SoftGradientBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base background */}
      <div className="absolute inset-0 bg-[#f7f7f7]" />

      {/* Top Left Orange Glow */}
      <div
        className="
        absolute
       -top-60
        -left-80
        w-[900px]
        h-[900px]
        rounded-full
        blur-[140px]
        opacity-60
        bg-[radial-gradient(circle_at_center,#3b82f6,transparent_70%)]
      "
      />

      {/* Bottom Blue Glow */}

      <div
        className="
        absolute
     
            -bottom-70
        -right-10
        w-[900px]
        h-[900px]
        rounded-full
        blur-[120px]
        opacity-70
        bg-[radial-gradient(circle_at_center,#f59e0b,transparent_60%)]
      "
      />
      {/* Soft Neutral Blend */}
      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.9),transparent_70%)]
      "
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
