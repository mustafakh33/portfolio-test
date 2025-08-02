import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import ResumeSection from "./components/ResumeSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";



export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ResumeSection />
      <PortfolioSection />
      <ServicesSection  />
      <ContactSection />
      <Footer />
    </>
  );
}
