// import React, { useMemo } from "react";

// interface SweepingFractalGlassProps {
//   className?: string;
//   children?: React.ReactNode;
// }

// export default function SweepingFractalGlass({
//   className = "",
//   children,
// }: SweepingFractalGlassProps) {
//   const { backgroundBlades, foregroundBlades } = useMemo(() => {
//     const bg = [];
//     const fg = [];
//     const width = 1600;
//     const height = 900;

//     // Fewer blades, but much wider to make the "fractal size big"
//     const numBlades = 30;

//     // Start drawing from 15% of the screen width
//     const startX = width * 0.15;

//     for (let i = 0; i < numBlades; i++) {
//       const t = i / (numBlades - 1);

//       // X position sweeps to the right
//       const xPos = startX + (width - startX + 200) * Math.pow(t, 0.85);

//       // THIS is the key to removing them from the bottom right:
//       // The base Y coordinate starts at the bottom (height + 50) and swiftly
//       // arcs UPWARDS to the top of the screen (0) as it moves right.
//       const yBase = height + 50 - (height + 200) * Math.pow(t, 2.5);

//       // The tips shoot way past the top of the screen for the right-side blades
//       const yTip = yBase - (150 + 3500 * Math.pow(t, 2));

//       // Make the blades progressively MUCH wider as they go up and right
//       const baseWidth = 40 + t * 180;

//       // Background Layer (Offset slightly, more transparent for depth)
//       bg.push({
//         id: `bg-${i}`,
//         d: `M ${xPos - 30},${yBase + 50} L ${xPos + baseWidth - 20},${yBase - 20} L ${xPos + baseWidth * 0.4 - 20},${yTip} Z`,
//       });

//       // Foreground Layer (The main thick, glossy glass blades)
//       fg.push({
//         id: `fg-${i}`,
//         d: `M ${xPos},${yBase} L ${xPos + baseWidth},${yBase} L ${xPos + baseWidth * 0.45},${yTip} Z`,
//       });
//     }

//     return { backgroundBlades: bg, foregroundBlades: fg };
//   }, []);

//   return (
//     <div
//       className={`relative min-h-screen w-full overflow-hidden bg-white ${className}`}
//     >

//       {/* SVG Container */}
//       <svg
//         viewBox="0 0 1600 900"
//         preserveAspectRatio="xMidYMax slice"
//         className="pointer-events-none absolute inset-0 h-full w-full"
//       >
//         <defs>
//           {/* Main Glossy Glass Gradient (Translucent & Shiny) */}
//           <linearGradient id="glassGlossy" x1="0%" y1="0%" x2="100%" y2="0%">
//             {/* Extremely sharp white edge to simulate a glass bevel */}
//             <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
//             {/* Immediate dark shadow for the 3D fold effect */}
//             <stop offset="3%" stopColor="#001a4d" stopOpacity="0.8" />
//             {/* Deep rich blue */}
//             <stop offset="15%" stopColor="#0044cc" stopOpacity="0.75" />
//             {/* Bright, electric light blue shining through */}
//             <stop offset="50%" stopColor="#33aaff" stopOpacity="0.6" />
//             {/* Highly transparent light cyan */}
//             <stop offset="85%" stopColor="#b3e6ff" stopOpacity="0.4" />
//             {/* Soft, glowing white fade on the opposite edge */}
//             <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
//           </linearGradient>

//           <linearGradient
//             id="glassBackground"
//             x1="0%"
//             y1="0%"
//             x2="100%"
//             y2="0%"
//           >
//             <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
//             <stop offset="5%" stopColor="#002266" stopOpacity="0.5" />
//             <stop offset="50%" stopColor="#0077ff" stopOpacity="0.4" />
//             <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
//           </linearGradient>

//           <filter id="glassShadow" x="-20%" y="-20%" width="140%" height="140%">
//             <feDropShadow
//               dx="15"
//               dy="10"
//               stdDeviation="12"
//               floodColor="#002b80"
//               floodOpacity="0.15"
//             />
//           </filter>
//         </defs>

//         <g filter="url(#glassShadow)">
//           {backgroundBlades.map((blade) => (
//             <path key={blade.id} d={blade.d} fill="url(#glassBackground)" />
//           ))}
//         </g>

//         <g filter="url(#glassShadow)">
//           {foregroundBlades.map((blade) => (
//             <path key={blade.id} d={blade.d} fill="url(#glassGlossy)" />
//           ))}
//         </g>
//       </svg>

//       {/* UI Content Container */}
//       <div className="relative z-10 flex min-h-screen w-full flex-col justify-end p-12 lg:p-24">
//         {children ? (
//           children
//         ) : (
//           <div className="max-w-xl pb-32">
//             {/* Placed content at the bottom-left where the space is now clear */}
//             <h1 className="text-6xl font-black tracking-tight text-gray-900 drop-shadow-sm md:text-8xl">
//               PURE
//               <br />
//               <span className="text-[#0066ff]">GLASS</span>
//             </h1>
//             <p className="mt-6 text-xl text-gray-600 font-light">
//               The bottom right corner is now entirely empty. The glass sweeps
//               upward, forming a large, glossy connected arc.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";

// import React, { useMemo } from "react";
// import { useEffect, useState } from "react";

// interface SweepingFractalGlassProps {
//   className?: string;
//   children?: React.ReactNode;
// }

// export default function SweepingFractalGlass({
//   className = "",
//   children,
// }: SweepingFractalGlassProps) {
//   const { backgroundBlades, foregroundBlades } = useMemo(() => {
//     const bg: any[] = [];
//     const fg: any[] = [];

//     const width = 1600;
//     const height = 900;
//     const numBlades = 30;
//     const startX = width * 0.15;

//     for (let i = 0; i < numBlades; i++) {
//       const t = i / (numBlades - 1);

//       const xPos = startX + (width - startX + 200) * Math.pow(t, 0.85);

//       const yBase = height + 50 - (height + 200) * Math.pow(t, 2.5);

//       const yTip = yBase - (150 + 3500 * Math.pow(t, 2));

//       const baseWidth = 80 + t * 180;
//       const curveStrength = 0.6; // increase = smoother glass

//       bg.push({
//         id: `bg-${i}`,
//         d: `
//     M ${xPos - 40},${yBase + 40}

//     C ${xPos + baseWidth * 0.2},${yBase - 60},
//       ${xPos + baseWidth * 0.35},${yTip + 200},
//       ${xPos + baseWidth * 0.45},${yTip}

//     C ${xPos + baseWidth * 0.25},${yTip + 220},
//       ${xPos - 20},${yBase + 60},
//       ${xPos - 40},${yBase + 40}

//     Z
//   `,
//       });
//       fg.push({
//         id: `fg-${i}`,
//         d: `
//     M ${xPos},${yBase}

//     C ${xPos + baseWidth * curveStrength},
//       ${yBase - 120},

//       ${xPos + baseWidth * 0.55},
//       ${yTip + 250},

//       ${xPos + baseWidth * 0.45},
//       ${yTip}

//     C ${xPos + baseWidth * 0.25},
//       ${yTip + 260},

//       ${xPos - baseWidth * 0.15},
//       ${yBase + 40},

//       ${xPos},
//       ${yBase}

//     Z
//   `,
//       });
//     }

//     return { backgroundBlades: bg, foregroundBlades: fg };
//   }, []);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const max = document.documentElement.scrollHeight - window.innerHeight;

//       const progress = window.scrollY / max;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`relative min-h-screen w-full overflow-hidden bg-white ${className}`}
//     >
//       {/* ================= SVG ================= */}
//       {/* <svg
//         viewBox="0 0 1600 900"
//         preserveAspectRatio="xMidYMax slice"
//         className="absolute inset-0 w-full h-full pointer-events-none"
//       > */}
//       <svg
//         viewBox="0 0 1600 900"
//         preserveAspectRatio="xMidYMax slice"
//         className="absolute inset-0 w-full h-full pointer-events-none"
//         style={{
//           transform: `translateY(${scrollProgress * 20}px)`,
//         }}
//       >
//         <defs>
//           {/* ========= REAL GLASS GRADIENT ========= */}
//           {/* <linearGradient id="glassGlossy" x1="0%" y1="0%" x2="100%" y2="0%"> */}
//           <linearGradient
//             id="glassGlossy"
//             x1={`${scrollProgress * 40}%`}
//             y1="0%"
//             x2={`${100 + scrollProgress * 40}%`}
//             y2="0%"
//           >
//             <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
//             <stop offset="20%" stopColor="#1481e0" />
//             <stop offset="55%" stopColor="#040640" />
//             <stop offset="80%" stopColor="#1481e0" stopOpacity="0.18" />
//             <stop offset="100%" stopColor="#ffffff" stopOpacity="0.45" />
//           </linearGradient>

//           {/* Background Refraction */}

//           {/* Glass Highlight */}

//           {/* Shadow Depth */}
//           <filter id="glassShadow" x="-20%" y="-20%" width="140%" height="140%">
//             <feDropShadow
//               dx="12"
//               dy="10"
//               stdDeviation="14"
//               floodColor="#040640"
//               floodOpacity="0.15"
//             />
//           </filter>

//           {/* EDGE COLOR BLENDING */}
//           <filter id="glassEdgeBlur">
//             <feGaussianBlur stdDeviation="2" result="blur" />

//             <feBlend in="SourceGraphic" in2="blur" mode="normal" />
//           </filter>
//         </defs>

//         {/* Background Glass */}
//         <g filter="url(#glassShadow)">
//           {backgroundBlades.map((blade) => (
//             <path key={blade.id} d={blade.d} fill="url(#glassBackground)" />
//           ))}
//         </g>

//         {/* Foreground Real Glass */}
//         <g filter="url(#glassEdgeBlur)">
//           {/* {foregroundBlades.map((blade) => (
//             <path key={blade.id} d={blade.d} fill="url(#glassGlossy)" />
//           ))} */}
//           {foregroundBlades.map((blade, i) => {
//             const fold =
//               Math.sin(scrollProgress * Math.PI) *
//               (i / foregroundBlades.length) *
//               6; // VERY SMALL

//             return (
//               <path
//                 key={blade.id}
//                 d={blade.d}
//                 fill="url(#glassGlossy)"
//                 style={{
//                   transformOrigin: "center",
//                   transform: `
//           translateX(${fold}px)
//           rotate(${fold * 0.15}deg)
//         `,

//                   transition: "transform 0.2s ease-out",
//                 }}
//               />
//             );
//           })}
//         </g>

//         {/* Internal Light Refraction */}
//         <g>
//           {foregroundBlades.map((blade) => (
//             <path
//               key={blade.id + "-light"}
//               d={blade.d}
//               fill="url(#glassLight)"
//               opacity="0.35"
//             />
//           ))}
//         </g>
//       </svg>

//       {/* ================= CONTENT ================= */}
//       <div className="relative z-10 flex min-h-screen flex-col justify-end p-12 lg:p-24">
//         {children ?? (
//           <div className="max-w-xl pb-32">
//             <h1 className="text-6xl md:text-8xl font-black tracking-tight text-gray-900">
//               PURE
//               <br />
//               <span className="text-[#1481e0]">GLASS</span>
//             </h1>

//             <p className="mt-6 text-xl text-gray-600 font-light">
//               Real refractive glass with blended fractal edges and soft light
//               diffusion.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useMemo, useRef } from "react";
import { useEffect, useState } from "react";

interface SweepingFractalGlassProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SweepingFractalGlass({
  className = "",
  children,
}: SweepingFractalGlassProps) {
  const { backgroundBlades, foregroundBlades } = useMemo(() => {
    const bg: any[] = [];
    const fg: any[] = [];

    const width = 1600;
    const height = 900;
    const numBlades = 30;
    const startX = width * 0.15;

    for (let i = 0; i < numBlades; i++) {
      const t = i / (numBlades - 1);

      const xPos = startX + (width - startX + 200) * Math.pow(t, 0.85);

      const yBase = height + 50 - (height + 200) * Math.pow(t, 2.5);

      const yTip = yBase - (150 + 3500 * Math.pow(t, 2));

      const baseWidth = 80 + t * 180;
      const curveStrength = 0.6; // increase = smoother glass

      bg.push({
        id: `bg-${i}`,
        d: `
    M ${xPos - 40},${yBase + 40}

    C ${xPos + baseWidth * 0.2},${yBase - 60},
      ${xPos + baseWidth * 0.35},${yTip + 200},
      ${xPos + baseWidth * 0.45},${yTip}

    C ${xPos + baseWidth * 0.25},${yTip + 220},
      ${xPos - 20},${yBase + 60},
      ${xPos - 40},${yBase + 40}

    Z
  `,
      });
      fg.push({
        id: `fg-${i}`,
        d: `
    M ${xPos},${yBase}

    C ${xPos + baseWidth * curveStrength},
      ${yBase - 120},

      ${xPos + baseWidth * 0.55},
      ${yTip + 250},

      ${xPos + baseWidth * 0.45},
      ${yTip}

    C ${xPos + baseWidth * 0.25},
      ${yTip + 260},

      ${xPos - baseWidth * 0.15},
      ${yBase + 40},

      ${xPos},
      ${yBase}

    Z
  `,
      });
    }

    return { backgroundBlades: bg, foregroundBlades: fg };
  }, []);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const handleScroll = () => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;

        const progress = window.scrollY / max;
        setScrollProgress(Math.min(progress, 1));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  const [visible, setVisible] = useState(true);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden bg-white ${className}`}
    >
      {/* ================= SVG ================= */}
      {/* <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 w-full h-full pointer-events-none"
      > */}
      <svg
        ref={svgRef}
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          transform: `
    translateY(${scrollProgress * 12}px)
    scale(${1 + scrollProgress * 0.015})
  `,
        }}
      >
        <defs>
          {/* ========= REAL GLASS GRADIENT ========= */}
          {/* <linearGradient id="glassGlossy" x1="0%" y1="0%" x2="100%" y2="0%"> */}
          <linearGradient
            id="glassGlossy"
            x1={`${scrollProgress * 40}%`}
            y1="0%"
            x2={`${100 + scrollProgress * 40}%`}
            y2="0%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="20%" stopColor="#1481e0" />
            <stop offset="55%" stopColor="#040640" />
            <stop offset="80%" stopColor="#1481e0" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.45" />
          </linearGradient>
          {/* 
          <linearGradient
            id="glassGlossy"
            gradientUnits="userSpaceOnUse"
            x1={-200 + scrollProgress * 400}
            y1="0"
            x2={1200 + scrollProgress * 400}
            y2="0"
          ></linearGradient> */}
          {/* Background Refraction */}

          {/* Glass Highlight */}

          {/* Shadow Depth */}
          <filter id="glassShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="12"
              dy="10"
              stdDeviation="14"
              floodColor="#040640"
              floodOpacity="0.15"
            />
          </filter>

          {/* EDGE COLOR BLENDING */}
          <filter id="glassEdgeBlur">
            <feGaussianBlur stdDeviation="2" result="blur" />

            <feBlend in="SourceGraphic" in2="blur" mode="normal" />
          </filter>
        </defs>

        {/* Background Glass */}
        <g filter="url(#glassShadow)">
          {backgroundBlades.map((blade) => (
            <path key={blade.id} d={blade.d} fill="url(#glassBackground)" />
          ))}
        </g>

        {/* Foreground Real Glass */}
        <g filter="url(#glassEdgeBlur)">
          {/* {foregroundBlades.map((blade) => (
            <path key={blade.id} d={blade.d} fill="url(#glassGlossy)" />
          ))} */}
          {foregroundBlades.map((blade, i) => {
            const depth = i / foregroundBlades.length;

            // tiny closing motion
            const closeAmount = scrollProgress * 0.04 * depth;

            // subtle tilt
            const tilt = scrollProgress * 1.2 * depth;

            return (
              <path
                key={blade.id}
                d={blade.d}
                fill="url(#glassGlossy)"
                style={{
                  transformOrigin: "bottom center",
                  transform: `
          scaleY(${1 - closeAmount})
          rotate(${tilt}deg)
        `,
                  transition: "transform 0.15s linear",
                }}
              />
            );
          })}
        </g>

        {/* Internal Light Refraction */}
        <g>
          {foregroundBlades.map((blade) => (
            <path
              key={blade.id + "-light"}
              d={blade.d}
              fill="url(#glassLight)"
              opacity="0.35"
            />
          ))}
        </g>
      </svg>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end p-12 lg:p-24">
        {children ?? (
          <div className="max-w-xl pb-32">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-gray-900">
              PURE
              <br />
              <span className="text-[#1481e0]">GLASS</span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 font-light">
              Real refractive glass with blended fractal edges and soft light
              diffusion.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
