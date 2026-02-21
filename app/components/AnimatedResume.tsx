"use client";

import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Award,
  BookOpen,
  Briefcase,
  ToolCase,
} from "lucide-react";
import AnimateSvg from "./AnimateSvg";

export default function AnimatedResume() {
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
    <div className="min-h-screen  p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Experience Section */}
        <div className="flex gap-10">
          <section
            ref={addToRefs}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 lg:p-10 border border-gray-100">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold -mt-9 flex items-center  gap-3">
                <span>experience.</span>
              </h2>

              <div className="space-y-6">
                {/* PT. Paragon Technology */}
                <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">Kahf</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg md:text-xl text-gray-900">
                        PT. Paragon Technology And Innovation - Digital
                        Transformation Specialist (Kahf)
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Nov 2022 - Present
                      </p>
                      <p className="text-gray-700 mt-3 leading-relaxed">
                        Managed end-to-end level TikTok strategy & steered brand
                        activations and campaigns social commerce, customer
                        acquisition and partner engagement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Jayz.inc */}
                <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">😊</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg md:text-xl text-gray-900">
                        Jayz.inc (Mego App) -Operations - Social Media & KOL
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Dec 2021 - Oct 2022
                      </p>
                      <p className="text-gray-700 mt-3 leading-relaxed">
                        Overseeing and developing social media and KOL
                        strategies, collaborated with KOLs, and measured brand
                        visibility and engagement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bluelite Group */}
                <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 bg-white rounded-full" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg md:text-xl text-gray-900">
                        Bluelite Group - Product Manager
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        May 2019 - May 2020
                      </p>
                      <p className="text-gray-700 mt-3 leading-relaxed">
                        Developed a product development workflow that allowed
                        cross-functional collaboration, product roadmaps,
                        pricing and go-to-market BTOC.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lazada */}

                {/* Horizon Kampus */}
              </div>
            </div>
          </section>

          {/* Education and Accolades Grid */}
          <div className=" gap-8">
            {/* Education Section */}
            <section
              ref={addToRefs}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100"
            >
              <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 border border-gray-100 h-full">
                <h2 className="text-4xl md:text-7xl font-bold -mt-7 flex items-center gap-3">
                  education.
                </h2>

                <div className="space-y-6">
                  {/* Universitas Pelita Bangsa */}
                  <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-bold text-lg text-gray-900">
                            Universitas Pelita Bangsa
                          </h3>
                          <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full whitespace-nowrap">
                            Cum Laude
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">3.6/4.00</p>
                        <p className="text-sm text-gray-500">2001 - Oct 2016</p>
                        <p className="text-gray-700 mt-2">
                          Universitas Pelita Bangsa - Informatika Studi Utama
                          Akad
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Rakamin Academy */}
                  <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">RA</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900">
                          Rakamin Academy - Scholarship Digital Marketing
                          Bootcamp
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Jul, 2021 - Aug, 2021
                        </p>
                        <p className="text-gray-700 mt-2 text-sm">
                          Received full KOL scholarship to learn data, A-Z
                          Digital Marketing for 3 months worth up to Rp 3
                          million, in which I learnt: SEO, SEM, social media
                          marketing, content marketing, email marketing, data
                          engagement, UX/ix, organic reach
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Accolades Section */}
            {/* Accolades Section */}
            <section
              ref={addToRefs}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 -mt-10"
            >
              <div className="rounded-3xl  p-6 md:p-10  h-full overflow-hidden">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-black">
                  accolades.
                </h2>

                {/* Speaker Theme Line */}
                <p className="text-sm md:text-base font-bold text-gray-800 mb-12">
                  Speaker Theme Social Media And Personal Branding with
                  participant 20+ Including CEO's — 2023
                </p>

                <div className="relative h-64 md:h-72 mt-8">
                  {/* "Ohh I forgot" Sticker */}
                  <div className="absolute left-0 top-0 -rotate-12 transition-transform hover:rotate-0 duration-300 z-20">
                    <div className="relative bg-white shadow-xl rounded-2xl p-4 md:p-6 transform scale-90 md:scale-100 ">
                      {/* The Fading Border Overlay */}
                      <div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                          padding: "1px", // This acts as the border thickness
                          background:
                            "linear-gradient(to top right, transparent, #e5e7eb)", // Gray-200 equivalent
                          WebkitMask:
                            "linear-gradient(45deg, transparent 0%, #e5e7eb 80%)",
                          maskImage:
                            "linear-gradient(135deg, transparent 0%, #e5e7eb 80%)",
                        }}
                      />
                      {/* Blur Fade on Right Side */}

                      <h3 className="text-3xl md:text-4xl font-extrabold text-blue-600 leading-tight">
                        Ohh I forgot,
                        <br />
                        <span className="text-blue-500">i Still Have</span>
                      </h3>

                      <div className="absolute -right-30 top-30 -rotate-z-20 text-gray-500">
                        {/* <svg
                          width="70"
                          height="30"
                          viewBox="0 0 40 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-gray-500"
                        >
                          <path
                            d="M2 2C20 2 25 15 38 15"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                          <path
                            d="M32 10L38 15L32 18"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg> */}

                        <AnimateSvg
                          width="50%"
                          height="100%"
                          viewBox="0 0 436 92"
                          className="my-svg-animation"
                          path="M3 11.6683C27.5507 31.3629 46.9422 39.6998 78.4385 38.3C106.882 37.0359 137.821 23.5277 164.275 13.6843C197.028 1.49724 261.319 -8.02763 280.351 30.7667C295.128 60.8895 272.979 96.9103 238.122 87.1069C224.684 83.3275 217.74 65.3879 223.692 52.9421C230.121 39.4995 249.34 33.0192 262.632 29.9179C298.328 21.5889 322.109 55.0269 354.41 60.8997C384.588 66.3865 406.997 52.8685 429.849 34.5864C431.806 33.0205 430.804 43.4396 430.804 46.0455C430.804 55.5985 432.714 51.3586 432.714 44.1356C432.714 39.4902 435.161 29.6135 428.894 32.2521C424.373 34.1558 414.869 34.5865 409.795 34.5865"
                          strokeColor="#000000"
                          strokeWidth={8}
                          strokeLinecap="round"
                          animationDuration={1.5}
                          animationDelay={0}
                          animationBounce={0.3}
                          reverseAnimation={false}
                          enableHoverAnimation={true}
                          hoverAnimationType="redraw"
                          hoverStrokeColor="#4f46e5"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Experience Sticker */}
                  <div className="absolute left-10 top-42 -rotate-6 z-30">
                    <div className="bg-white border-2 border-gray-50 shadow-lg rounded-xl p-3 px-5 transform hover:scale-110 transition-transform">
                      <p className="text-blue-500 font-bold text-lg leading-tight">
                        7 Experience
                        <br />
                        More!
                      </p>
                    </div>
                  </div>

                  {/* Role Description Text */}
                  <div className="absolute left-40 top-40 md:left-56 md:top-44 text-center max-w-[150px]">
                    <p className="text-[10px] md:text-xs font-medium text-gray-500 leading-tight">
                      From Bussines Developemnt through Project Manager!
                    </p>
                  </div>

                  {/* LinkedIn Profile Card */}
                  <div className="absolute right-0 md:right-3 top-5 rotate-3 z-10">
                    <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden w-48 md:w-56">
                      <div className="p-3 text-center border-b bg-blue-900  border-gray-50">
                        <span className="font-bold text-sm text-white">
                          See on My LinkedIn
                        </span>
                      </div>
                      <div className="p-6 flex flex-col items-center bg-white">
                        <a
                          href="#"
                          className="p-6 flex flex-col items-center bg-white"
                        >
                          <div className="bg-[#0077b5] rounded-lg p-2 mb-3">
                            <svg
                              className="w-12 h-12 text-white fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </div>
                          <div className="bg-blue-500 text-white text-[10px] font-bold py-1 px-4 rounded-full whitespace-nowrap">
                            Muhammad Helmi Muharram
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Skills Section */}
        <section
          ref={addToRefs}
          className=" translate-y-8 transition-all duration-700 ease-out delay-300"
        >
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
                        Rakamin Academy - Scholarship Digital Marketing Bootcamp
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
                        Coursera- Google Data Analytics Professional Certificate
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
  );
}
