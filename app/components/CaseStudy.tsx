"use client";

import React from "react";
import { motion } from "framer-motion";

const SIMotorsCaseStudy = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="max-w-7xl mx-auto bg-white p-6 md:p-12 font-sans overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN: Visual Assets */}
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
          {/* Header (SI MOTORS) positioned above the visuals */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute top-0 left-0 z-30"
          >
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-black">
                SI MOTORS
              </h1>
              <div className="h-1 w-full bg-red-600 absolute -bottom-1 left-0"></div>
              {/* The red extension line */}
              <div className="hidden lg:block absolute top-1/2 left-full ml-6 w-[250px] h-[2px] bg-red-600"></div>
            </div>
            <p className="mt-4 text-xs font-black tracking-[0.2em] uppercase max-w-[200px] leading-tight text-center lg:text-left">
              The Auto Parts Store and Auto Service
            </p>
          </motion.div>

          {/* Overlapping Asset Layer */}
          <div className="relative w-full h-full">
            {/* Spark Plugs */}
            <motion.div
              initial={{ opacity: 0, x: 20, rotate: 10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              className="absolute top-10 right-10 md:top-10 md:right-20 z-10 w-32 md:w-48"
            >
              <img
                src="/sparkplug.png"
                alt="Spark Plugs"
                className="w-full object-contain"
              />
            </motion.div>

            {/* Red SI Motors Cap */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="absolute top-32 left-10 md:left-10 md:top-45 z-20 w-64 md:w-80 drop-shadow-2xl"
            >
              <img
                src="/cap.png"
                alt="SI Motors Cap"
                className="w-full object-contain transform scale-x-[-1]"
              />
            </motion.div>

            {/* License Plate/Part at Bottom */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              className="absolute -bottom-10 left-0 md:right-0 z-10 w-full max-w-md md:max-w-lg"
            >
              <img
                src="/autoparts.png"
                alt="Auto Parts"
                className="w-full object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: Content */}
        <div className="space-y-12">
          {/* Top Description Block */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            className="bg-white p-8 md:p-10 shadow-sm border-l-4 border-gray-50"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              These are specialized stores of spare parts for European cars, in
              which more than 32,000 positions of spare parts are always
              available. And also a network of its own auto repair shops.
            </p>
          </motion.div>

          {/* Bottom Block (Formation of Image) */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            className="bg-white p-8 md:p-10 shadow-sm border-l-4 border-gray-50"
          >
            <div className="relative inline-block mb-6">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none italic">
                Formation of <br /> A Positive Image
              </h2>
              <div className="h-1 w-full bg-red-600 absolute -bottom-1 left-0"></div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Focused on the competitive advantages of the company such as a
              wide range and quality guarantee. Created a and quality guarantee
              company in corporate materials as a tool for demonstrating the
              values and mission of the company, strengthening loyalty and trust
              of customers.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SIMotorsCaseStudy;
