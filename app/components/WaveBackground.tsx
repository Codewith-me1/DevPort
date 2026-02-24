// "use client";

// import React, { useMemo } from "react";

// interface WaveBackgroundProps {
//   children?: React.ReactNode;
//   className?: string;
// }

// export const WaveBackground: React.FC<WaveBackgroundProps> = ({
//   children,
//   className = "",
// }) => {
//   // Generate the spikes mathematically
//   const spikes = useMemo(() => {
//     const numSpikes = 40;
//     return Array.from({ length: numSpikes }).map((_, i) => {
//       const progress = i / (numSpikes - 1);

//       const height = Math.pow(progress, 6) * 100;
//       const x = progress * 100;
//       const width = (100 / numSpikes) * 1.5;

//       return {
//         x,
//         width,
//         height: Math.max(0.5, height),
//       };
//     });
//   }, []);

//   // Extracted the SVG so we can render it in multiple positions cleanly
//   const SvgBlinds = () => (
//     <svg
//       viewBox="0 0 100 100"
//       preserveAspectRatio="none"
//       className="w-full h-full"
//     >
//       <defs>
//         {/* Glossy Metallic Gradient */}
//         <linearGradient id="metallic-gloss" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="#ffffff" />
//           <stop offset="15%" stopColor="#bae6fd" />
//           <stop offset="35%" stopColor="#0284c7" />
//           <stop offset="65%" stopColor="#0f172a" />
//           <stop offset="90%" stopColor="#020617" />
//           <stop offset="100%" stopColor="#38bdf8" />
//         </linearGradient>
//       </defs>

//       {spikes.map((spike, i) => (
//         <polygon
//           key={i}
//           points={`
//             ${spike.x},100
//             ${spike.x + spike.width},100
//             ${spike.x + spike.width / 2},${100 - spike.height}
//           `}
//           fill="url(#metallic-gloss)"
//         />
//       ))}
//     </svg>
//   );

//   return (
//     <div
//       className={`relative min-h-screen w-full bg-white overflow-hidden ${className}`}
//     >
//       {/* Top Right Blinds - Flipped upside down to hang from the top */}
//       <div className="absolute top-0 right-0 w-full md:w-3/4 lg:w-1/2 h-[45%] md:h-[90%] pointer-events-none transform scale-y-[-1]">
//         <SvgBlinds />
//       </div>

//       {/* Bottom Blinds - Shifted to the left to create a gap in the bottom-right corner */}
//       {/* The right-[15%] and md:right-[25%] classes create the empty space on the right */}
//       <div className="absolute bottom-0 right-[15%] md:right-[5%] w-full md:w-3/4 lg:w-1/2 h-[45%] md:h-[100%] pointer-events-none">
//         <SvgBlinds />
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-10 w-full h-full min-h-screen">{children}</div>
//     </div>
//   );
// };

// export default WaveBackground;

"use client";

import React, { useMemo } from "react";

interface WaveBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export const WaveBackground: React.FC<WaveBackgroundProps> = ({
  children,
  className = "",
}) => {
  // Generate the spikes mathematically
  const spikes = useMemo(() => {
    const numSpikes = 30;
    return Array.from({ length: numSpikes }).map((_, i) => {
      const progress = i / (numSpikes - 1);

      // More aggressive exponential curve for sharper growth
      const height = Math.pow(progress, 4.5) * 100;
      const x = progress * 100;
      const width = (100 / numSpikes) * 0.8;

      return {
        x,
        width,
        height: Math.max(0.3, height),
      };
    });
  }, []);

  const SvgBlinds = () => (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="w-full h-full"
      style={{ filter: "blur(0.5px)" }}
    >
      <defs>
        {/* Rich Blue Metallic Gradient with depth */}
        <linearGradient id="blue-metallic" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.9" />
          <stop offset="20%" stopColor="#38bdf8" />
          <stop offset="40%" stopColor="#0ea5e9" />
          <stop offset="60%" stopColor="#0284c7" />
          <stop offset="80%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>

        {/* Glossy highlight gradient */}
        <linearGradient id="gloss-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="30%" stopColor="#bae6fd" stopOpacity="0.2" />
          <stop offset="70%" stopColor="#0284c7" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#075985" stopOpacity="0.05" />
        </linearGradient>

        {/* Subtle shadow for depth */}
        <filter id="soft-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
          <feOffset dx="0.5" dy="0.5" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glass blur effect */}
        <filter id="glass-blur">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
      </defs>

      {/* Shadow layer */}
      <g opacity="0.15">
        {spikes.map((spike, i) => (
          <polygon
            key={`shadow-${i}`}
            points={`
              ${spike.x + 0.3},100 
              ${spike.x + spike.width + 0.3},100 
              ${spike.x + spike.width / 2 + 0.3},${100 - spike.height + 0.5}
            `}
            fill="#000000"
            filter="url(#glass-blur)"
          />
        ))}
      </g>

      {/* Main spike layer with metallic gradient */}
      <g filter="url(#soft-shadow)">
        {spikes.map((spike, i) => (
          <polygon
            key={`main-${i}`}
            points={`
              ${spike.x},100 
              ${spike.x + spike.width},100 
              ${spike.x + spike.width / 2},${100 - spike.height}
            `}
            fill="url(#blue-metallic)"
            opacity="0.95"
          />
        ))}
      </g>

      {/* Glossy highlight overlay */}
      <g opacity="0.6" filter="url(#glass-blur)">
        {spikes.map((spike, i) => (
          <polygon
            key={`gloss-${i}`}
            points={`
              ${spike.x},100 
              ${spike.x + spike.width},100 
              ${spike.x + spike.width / 2},${100 - spike.height}
            `}
            fill="url(#gloss-highlight)"
          />
        ))}
      </g>

      {/* Bright edge highlights for glass effect */}
      <g opacity="0.7">
        {spikes.map((spike, i) => (
          <line
            key={`edge-${i}`}
            x1={spike.x}
            y1={100}
            x2={spike.x + spike.width / 2}
            y2={100 - spike.height}
            stroke="#ffffff"
            strokeWidth="0.15"
            strokeOpacity="0.6"
          />
        ))}
      </g>
    </svg>
  );

  const TopSvgBlind = () => (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="w-full h-full"
      style={{ filter: "blur(0.5px)" }}
    >
      <defs>
        {/* Rich Blue Metallic Gradient with depth */}
        <linearGradient id="blue-metallic" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.9" />
          <stop offset="20%" stopColor="#38bdf8" />
          <stop offset="40%" stopColor="#0ea5e9" />
          <stop offset="60%" stopColor="#0284c7" />
          <stop offset="80%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>

        {/* Glossy highlight gradient */}
        <linearGradient id="gloss-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="30%" stopColor="#bae6fd" stopOpacity="0.2" />
          <stop offset="70%" stopColor="#0284c7" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#075985" stopOpacity="0.05" />
        </linearGradient>

        {/* Subtle shadow for depth */}
        <filter id="soft-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
          <feOffset dx="0.5" dy="0.5" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glass blur effect */}
        <filter id="glass-blur">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
      </defs>

      {/* Shadow layer */}
      <g opacity="0.15">
        {spikes.map((spike, i) => (
          <polygon
            key={`shadow-${i}`}
            points={`
              ${spike.x + 0.3},100 
              ${spike.x + spike.width + 0.3},100 
              ${spike.x + spike.width / 2 + 0.3},${100 - spike.height + 0.5}
            `}
            fill="#000000"
            filter="url(#glass-blur)"
          />
        ))}
      </g>

      {/* Main spike layer with metallic gradient */}
      <g opacity="0.7">
        {spikes.map((spike, i) => (
          <line
            key={`edge-${i}`}
            x1={spike.x}
            y1={100}
            x2={spike.x + spike.width / 2}
            y2={100 - spike.height}
            stroke="#ffffff"
            strokeWidth="0.15"
            strokeOpacity="0.6"
          />
        ))}
      </g>
      <g filter="url(#soft-shadow)">
        {[...spikes].reverse().map((spike, i) => (
          <polygon
            key={`main-${i}`}
            points={`
  ${100 - spike.x},100
  ${100 - (spike.x + spike.width)},100
  ${100 - (spike.x + spike.width / 2)},${90 - spike.height}
`}
            fill="url(#blue-metallic)"
            opacity="0.95"
          />
        ))}
      </g>
      {/* Glossy highlight overlay */}

      {/* Bright edge highlights for glass effect */}
    </svg>
  );

  return (
    <div
      className={`relative min-h-screen w-full bg-gradient-to-br from-gray-50 to-white overflow-hidden ${className}`}
    >
      {/* Top Right Blinds - Flipped upside down with blur */}
      <div className="absolute top-0  right-0 w-full md:w-3/4 lg:w-1/2 h-[45%] md:h-[100%] pointer-events-none transform scale-y-[-1]">
        <TopSvgBlind />
      </div>

      {/* Bottom Blinds with blur */}
      <div className="absolute bottom-0 right-[15%] md:right-[30%] w-full md:w-3/4 lg:w-1/2 h-[45%] md:h-[100%] pointer-events-none">
        <SvgBlinds />
      </div>

      {/* Ambient glow effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 85% 50%, rgba(56, 189, 248, 0.08) 0%, transparent 50%)",
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full min-h-screen">{children}</div>
    </div>
  );
};

export default WaveBackground;
