"use client";

import { motion } from "framer-motion";

interface AnimateSvgProps {
  width?: string;
  height?: string;
  viewBox: string;
  path: string;
  strokeColor?: string;
  strokeWidth?: number;
  strokeLinecap?: "round" | "butt" | "square";

  animationDuration?: number;
  animationDelay?: number; // ✅ ADD
  animationBounce?: number; // ✅ ADD
  reverseAnimation?: boolean; // ✅ ADD
  enableHoverAnimation?: boolean; // ✅ ADD
  hoverAnimationType?: "redraw" | "none"; // ✅ ADD

  hoverStrokeColor?: string;
  className?: string;
}

export default function AnimateSvg({
  width = "100%",
  height = "100%",
  viewBox,
  path,
  strokeColor = "#000",
  strokeWidth = 2,
  strokeLinecap = "round",
  animationDuration = 1.5,
  animationDelay = 0,
  animationBounce = 0,
  reverseAnimation = false,
  enableHoverAnimation = false,
  hoverAnimationType = "none",
  hoverStrokeColor,
  className,
}: AnimateSvgProps) {
  return (
    <svg width={width} height={height} viewBox={viewBox} className={className}>
      <motion.path
        d={path}
        fill="transparent"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        initial={{ pathLength: reverseAnimation ? 1 : 0 }}
        animate={{ pathLength: reverseAnimation ? 0 : 1 }}
        whileHover={
          enableHoverAnimation && hoverAnimationType === "redraw"
            ? { pathLength: 0, stroke: hoverStrokeColor || strokeColor }
            : {}
        }
        transition={{
          duration: animationDuration,
          delay: animationDelay,
          ease: [0.22, 1, 0.36, 1],
          bounce: animationBounce,
        }}
      />
    </svg>
  );
}
