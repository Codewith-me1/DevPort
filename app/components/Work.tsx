"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

const PhoBoCaseStudy = () => {
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12  font-sans text-gray-900 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        {/* LEFT COLUMN: Visuals */}
        <div className="lg:col-span-5 space-y-12 relative">
          {/* Header Area */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="relative inline-block">
              <h1 className="text-6xl font-black tracking-tighter mb-2">
                PHOBO
              </h1>
              <div className="h-1 w-full bg-red-500 absolute -bottom-1 left-0"></div>
              {/* Decorative Red Line extending right */}
              <div className="hidden lg:block absolute h-[2px] bg-red-500 w-[200px] left-full top-1/2 ml-4"></div>
            </div>
            <p className="text-xs font-black tracking-[0.2em] mt-4 leading-tight max-w-[200px]">
              FAST CASUAL VIETNAMESE RESTAURANT
            </p>
          </motion.div>

          {/* Floating Bun Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute top-20 right-0 z-20 w-40 h-40 md:w-56 md:h-56"
          >
            <img src="/momo.png" alt="Steamed Bun" className="object-contain" />
            <div className="absolute -bottom-10 left-0 flex gap-4">
              <img
                src="/leaf-1.png"
                className="w-20 h-20 rotate-12"
                alt="decorative leaf"
              />
              <img
                src="/leaf-1.png"
                className="w-10 h-12 -rotate-45 mt-4"
                alt="decorative leaf"
              />
            </div>
          </motion.div>

          {/* Product Showcase */}
          <div className="space-y-16 mt-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <span className="italic font-serif text-xl block mb-4">
                Final Product
              </span>
              <img
                src="/bowl.png"
                alt="PhoBo Bowl"
                className="w-60 max-w-sm drop-shadow-2xl absolute -left-12 top-0"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative "
            >
              {/* Decorative Arrow/Swirl */}
              <div className="absolute -left-12 top-0 text-blue-900 italic">
                <svg
                  width="60"
                  height="100"
                  viewBox="0 0 60 100"
                  fill="none"
                  className="opacity-60"
                >
                  <path
                    d="M10 10C30 30 10 70 40 90"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M35 85L42 92L33 98"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <img
                src="/phobowlfull.png"
                alt="Pho Bowl Concept"
                className="w-full max-w-md drop-shadow-2xl ml-10 pt-10 "
              />
              <span className="italic font-serif text-xl block mt-4 ml-8 ">
                Concept Design
              </span>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: Text Content */}
        <div className="lg:col-span-7 space-y-12">
          {/* Top White Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 shadow-sm border-l-4 border-gray-100"
          >
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Founded in 2016, PhoBo positioned itself as a contemporary
              Vietnamese fast-casual concept, combining modern design,
              technology, and an open-kitchen experience.
            </p>

            <div className="relative inline-block mb-4">
              <h2 className="text-3xl font-black italic tracking-tighter">
                CHALLENGE
              </h2>
              <div className="h-1 w-full bg-red-500 absolute -bottom-1"></div>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-lg">
              Develop a comprehensive visual identity and scalable design
              evolution from a local café to an international franchise.
            </p>
          </motion.div>

          {/* Bottom White Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 shadow-sm border-l-4 border-gray-100 relative"
          >
            {/* The Chopsticks (Absolute Positioned) */}
            <div className="absolute -left-45 -top-20 w-94 h-94 pointer-events-none hidden lg:block">
              <img
                src="/chopstick.png"
                alt="Chopsticks"
                className="rotate-[15deg] "
              />
            </div>

            <div className="flex justify-end mb-8">
              <div className="relative inline-block">
                <h2 className="text-3xl font-black italic tracking-tighter pr-4">
                  SOLUTIONS
                </h2>
                <div className="h-1 w-full bg-red-500 absolute -bottom-1"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold uppercase italic">
                  Brand Development
                </span>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Built a cohesive brand identity aligned with the restaurant's
                  modern, clean, and welcoming positioning across physical and
                  digital environments.
                </p>
              </div>

              <div>
                <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold uppercase italic">
                  Menu Design
                </span>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Designed multilingual menus (Russian, English, Chinese,
                  Arabic, Armenian) ensuring clarity, cultural sensitivity, and
                  seamless adaptation to in-store digital displays.
                </p>
              </div>

              <div>
                <div className="relative inline-block mb-3">
                  <h3 className="text-2xl font-black italic tracking-tighter">
                    SCOPE
                  </h3>
                  <div className="h-1 w-full bg-red-500 absolute -bottom-1"></div>
                </div>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Brand identity, menu system (multi-lingual & digital),
                  in-store graphics, franchise-ready materials
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PhoBoCaseStudy;
