"use client";

import { BarChart3, ToolCase, TrendingUp } from "lucide-react";
import React from "react";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <>
      {" "}
      <div className="min-h-screen  p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto space-y-8">
          <section className=" translate-y-8 transition-all duration-700 ease-out delay-300">
            <div className=" rounded-3xl  p-6 md:p-8 lg:p-10  relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-1 -left-10 text-6xl  rotate-12">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Top Curve */}
                  <path
                    d="M60 20 C 90 25, 105 45, 110 65"
                    stroke="#F4A261"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />

                  {/* Middle Curve */}
                  <path
                    d="M40 50 C 70 55, 85 70, 95 85"
                    stroke="#F4A261"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />

                  {/* Bottom Curve */}
                  <path
                    d="M30 80 C 60 85, 75 95, 85 110"
                    stroke="#F4A261"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="absolute top-2 right-0 text-6xl -rotate-280">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Top Curve */}
                  <path
                    d="M60 20 C 90 25, 105 45, 110 65"
                    stroke="#F4A261"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />

                  {/* Middle Curve */}
                  <path
                    d="M40 50 C 70 55, 85 70, 95 85"
                    stroke="#F4A261"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />

                  {/* Bottom Curve */}
                  <path
                    d="M30 80 C 60 85, 75 95, 85 110"
                    stroke="#F4A261"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-center relative z-10">
                *skills.
              </h2>

              <div className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-10 ">
                {[
                  "Content & Branding",
                  "Growth Marketing",
                  "Social Media & Strategy",
                  "Analytics",
                  "Marketing Strategy",
                  "Brand Management",
                  "Creative Campaign",
                ].map((skill, index) => (
                  <div
                    key={skill}
                    className="group hover:scale-110 transition-all duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isVisible
                        ? "fadeInUp 0.6s ease-out forwards"
                        : "none",
                      opacity: 0,
                    }}
                  >
                    <div className="px-4 py-2 border-2 font-sans border-gray-800 rounded-lg font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 cursor-pointer">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tools and Certification Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tools Section */}
            <section
              ref={addToRefs}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out delay-400"
            >
              <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 border border-gray-100 h-full">
                <h2 className="text-4xl md:text-5xl font-bold -mt-6 mb-6 flex items-center gap-3">
                  <ToolCase className="w-10 h-10 text-gray-800" />
                  tools.
                </h2>

                <div className="grid grid-cols-2 gap-6">
                  {/* Marketing Strategy */}
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-gray-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-2">
                        Marketing Strategy
                      </h3>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Google Analytics</li>
                        <li>• Google Trends</li>
                        <li>• Google Search Console</li>
                      </ul>
                    </div>
                  </div>

                  {/* Branding & Social Media */}
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-500 rounded-lg" />
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">X</span>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-2">
                        Branding & Social Media Marketing
                      </h3>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Adobe Creative Suit</li>
                        <li>• CapCut</li>
                        <li>• Figma</li>
                      </ul>
                    </div>
                  </div>

                  {/* Analytics & Insight */}
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg" />
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg" />
                      <div className="w-12 h-12 bg-red-600 rounded-lg" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-2">
                        Analytics & Insight
                      </h3>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• PowerBI</li>
                        <li>• Google Analytics</li>
                        <li>• Microsoft 365</li>
                      </ul>
                    </div>
                  </div>

                  {/* Ads & Growth */}
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">M</span>
                      </div>
                      <div className="w-12 h-12 bg-blue-800 rounded-lg" />
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-2">Ads & Growth</h3>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Meta Ads</li>
                        <li>• Google Ads</li>
                        <li>• Mixpanelgaja</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Certification Section */}
            <section
              ref={addToRefs}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out delay-500"
            >
              <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 border border-gray-100 h-full">
                <h2 className="text-4xl md:text-5xl -mt-6 mb-6 font-bold mb-6">
                  certification.
                </h2>

                <div className="space-y-4">
                  {/* Rakamin Academy - Scholarship */}
                  <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300 border border-gray-200">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">RA</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm text-gray-900">
                          Rakamin Academy - Scholarship Digital Marketing
                          Bootcamp
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          Jul 2021 - Aug 2024
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Rakamin Academy - Advanced */}
                  <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300 border border-gray-200">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">RA</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm text-gray-900">
                          Rakamin Academy - Advanced Social Media Marketing
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          Aug, 2021 - Aug, 2021
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Coursera - Google Project Management */}
                  <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300 border border-gray-200">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">C</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm text-gray-900">
                          Coursera- Google Project Management: Professional
                          Certificate
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">2022</p>
                      </div>
                    </div>
                  </div>

                  {/* Coursera - Google Data Analytics */}
                  <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300 border border-gray-200">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">C</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm text-gray-900">
                          Coursera- Google Data Analytics Professional
                          Certificate
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">2021</p>
                      </div>
                    </div>
                  </div>

                  {/* DQLab */}
                  <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300 border border-gray-200">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">DQ</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm text-gray-900">
                          Dqtaquest.io-Business Analyst Certification
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          Jan 2022 - Apr 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-in {
              opacity: 1 !important;
              transform: translateY(0) !important;
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default Skills;
