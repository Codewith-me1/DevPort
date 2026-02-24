// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full relative flex justify-center top-10 z-10">
//       <div className="w-full max-w-7xl  absolute backdrop-blur-md border border-gray-200 rounded-xl px-6 py-3 flex items-center justify-between shadow-sm">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <div className="text-xl font-bold">🐨 koala</div>
//         </div>

//         {/* Nav Links */}
//         <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
//           <Link href="/" className="hover:text-black transition">
//             Home
//           </Link>

//           <Link href="/about" className="hover:text-black transition">
//             About
//           </Link>

//           <Link
//             href="/features"
//             className="px-3 py-1 rounded-md bg-gray-100 text-black"
//           >
//             Features
//           </Link>

//           <Link href="/blog" className="hover:text-black transition">
//             Blog
//           </Link>

//           <Link href="/pricing" className="hover:text-black transition">
//             Pricing
//           </Link>

//           {/* Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setOpen(true)}
//             onMouseLeave={() => setOpen(false)}
//           >
//             <button className="flex items-center gap-1 hover:text-black">
//               Company <ChevronDown size={16} />
//             </button>

//             {open && (
//               <div className="absolute top-8 left-0 bg-white border rounded-lg shadow-md p-3 w-40">
//                 <Link
//                   href="/team"
//                   className="block px-3 py-2 rounded hover:bg-gray-100"
//                 >
//                   Team
//                 </Link>
//                 <Link
//                   href="/careers"
//                   className="block px-3 py-2 rounded hover:bg-gray-100"
//                 >
//                   Careers
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="block px-3 py-2 rounded hover:bg-gray-100"
//                 >
//                   Contact
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Buttons */}
//         <div className="flex items-center gap-3">
//           <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-md font-medium transition">
//             Get full access
//           </button>

//           <button className="border border-gray-300 text-sm px-4 py-2 rounded-md hover:bg-gray-100 transition">
//             Join us
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function AnimatedNavbar() {
  const [open, setOpen] = useState(false);

  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tlRefs = useRef<(gsap.core.Timeline | null)[]>([]);

  /* ---------------- PILL ANIMATION ---------------- */
  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, i) => {
        if (!circle?.parentElement) return;

        const pill = circle?.parentElement;
        const rect = pill.getBoundingClientRect();

        const w = rect.width;
        const h = rect.height;

        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R);

        gsap.set(circle, {
          width: D,
          height: D,
          bottom: -D / 3,
          left: "50%",
          xPercent: -50,
          scale: 0,
          transformOrigin: "50% 50%",
        });

        const label = pill.querySelector(".pill-label");
        const hover = pill.querySelector(".pill-hover");

        const tl = gsap.timeline({ paused: true });

        tl.to(circle, {
          scale: 1.2,
          duration: 0.4,
          ease: "power3.out",
        });

        tl.to(
          label,
          {
            y: -30,
            duration: 0.4,
          },
          0,
        );

        tl.to(
          hover,
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
          },
          0,
        );

        tlRefs.current[i] = tl;
      });
    };

    layout();
    window.addEventListener("resize", layout);
    return () => window.removeEventListener("resize", layout);
  }, []);

  const enter = (i: number) => {
    tlRefs.current[i]?.play();
  };

  const leave = (i: number) => {
    tlRefs.current[i]?.reverse();
  };

  /* ---------------- UI ---------------- */

  return (
    <nav className="w-full flex justify-center absolute top-10 z-50">
      <div
        className="w-full max-w-7xl backdrop-blur-md
      border border-gray-200 rounded-xl
      px-6 py-3 flex items-center justify-between shadow-sm"
      >
        {/* LOGO */}
        <div className="text-xl font-bold">🐨 koala</div>

        {/* NAV ITEMS */}
        <div className="hidden md:flex items-center gap-3 bg-white/70 rounded-full p-1">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => enter(i)}
              onMouseLeave={() => leave(i)}
              className="relative overflow-hidden
              px-5 py-2 rounded-full
              font-medium text-sm
              flex items-center justify-center"
            >
              {/* Liquid Circle */}
              <span
                ref={(el) => {
                  circleRefs.current[i] = el;
                }}
                className="absolute bg-[#F25C4D] rounded-full z-0"
              />

              {/* Text stack */}
              <span className="relative z-10 h-[18px] overflow-hidden">
                <span className="pill-label block text-gray-800">
                  {item.label}
                </span>

                <span
                  className="pill-hover absolute left-0 top-0
                  text-white opacity-0 translate-y-6"
                >
                  {item.label}
                </span>
              </span>
            </Link>
          ))}

          {/* DROPDOWN */}
          <div
            className="relative px-4 py-2"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {open && (
              <div className="absolute top-8 bg-white border rounded-lg shadow-md p-3 w-40">
                <Link
                  href="/team"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Team
                </Link>
                <Link
                  href="/careers"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex gap-3">
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-md">
            Contact Now!
          </button>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(AnimatedNavbar);
