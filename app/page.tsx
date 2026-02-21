import { HeroSection } from "./components/HeroSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { CertificatesSection } from "./components/CertificatesSection";
import { ContactSection } from "./components/ContactSection";
import ScrollZoomSection from "./components/AboutSection";
import AnimatedResume from "./components/AnimatedResume";
import PhoBoCaseStudy from "./components/Work";
import SIMOTORS from "./components/CaseStudy";
import SIMotorsCaseStudy from "./components/CaseStudy";
import Index from "./components/Index";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <HeroSection />
      <ScrollZoomSection />
      <AnimatedResume />
      <PhoBoCaseStudy />
      <SIMotorsCaseStudy />
      <ContactSection />
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
