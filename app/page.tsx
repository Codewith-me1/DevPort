// import { HeroSection } from "./components/HeroSection";
// import { ExperienceSection } from "./components/ExperienceSection";
// import { SkillsSection } from "./components/SkillsSection";
// import { ProjectsSection } from "./components/ProjectsSection";
// import { CertificatesSection } from "./components/CertificatesSection";
// import { ContactSection } from "./components/ContactSection";
// import ScrollZoomSection from "./components/AboutSection";
// import AnimatedResume from "./components/AnimatedResume";
// import PhoBoCaseStudy from "./components/Work";
// import SIMOTORS from "./components/CaseStudy";
// import SIMotorsCaseStudy from "./components/CaseStudy";
// import Index from "./components/Index";
// import WaveBackground from "./components/WaveBackground";
// import FractalGlassGradient from "./components/Fractal";
// import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";

// export default function Home() {
//   return (
//     <div className="min-h-screen light!">
//       <Navbar />
//       <section id="home">
//         <FractalGlassGradient>
//           <HeroSection />
//         </FractalGlassGradient>
//       </section>
//       <div className="bg-paper">
//         <ScrollZoomSection />
//         <section id="about">
//           <AnimatedResume />
//         </section>

//         <section id="portfolio">
//           <PhoBoCaseStudy />
//           <SIMOTORS />
//         </section>
//         <section id="skills">
//           <Skills />
//         </section>
//         <section id="contact">
//           <ContactSection />
//         </section>
//       </div>
//     </div>
//   );
// }

"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import FractalGlassGradient from "./components/Fractal";

/* ---------- CRITICAL ABOVE FOLD ---------- */
import { HeroSection } from "./components/HeroSection";

/* ---------- LAZY SECTIONS ---------- */
const ScrollZoomSection = dynamic(() => import("./components/AboutSection"), {
  ssr: false,
});

const AnimatedResume = dynamic(() => import("./components/AnimatedResume"), {
  ssr: false,
});

const PhoBoCaseStudy = dynamic(() => import("./components/Work"), {
  ssr: false,
});

const SIMOTORS = dynamic(() => import("./components/CaseStudy"), {
  ssr: false,
});

const Skills = dynamic(() => import("./components/Skills"), { ssr: false });

const ContactSection = dynamic(() => import("./components/ContactSection"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO ONLY FIRST */}
      <section id="home">
        <FractalGlassGradient>
          <HeroSection />
        </FractalGlassGradient>
      </section>

      {/* LOAD REST ONLY WHEN NEEDED */}
      <div className="bg-paper">
        <ScrollZoomSection />

        <section id="about">
          <AnimatedResume />
        </section>

        <section id="portfolio">
          <PhoBoCaseStudy />
          <SIMOTORS />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </div>
    </div>
  );
}

// import VerticalCarousel from "./components/VerticalCarousel";

// export default function Home() {
//   return (
//     <main>
//       <VerticalCarousel />
//     </main>
//   );
// }
