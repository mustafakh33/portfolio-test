import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import ResumeSection from "./components/ResumeSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";

const servicesData = {
  title: "My Services",
  description: "Some of the services I offer in development and design.",
  serviceItems: [
    {
      icon: "VscCode", // Must match an icon supported by DynamicIcon
      title: "Web Development",
      description: "Building modern websites using React and Next.js."
    },
    {
      icon: "FiSmartphone",
      title: "Responsive Design",
      description: "Websites that work smoothly on all devices."
    },
    {
      icon: "BsPaintBucket",
      title: "UI Design",
      description: "Designing attractive and user-friendly interfaces."
    }
  ]
};


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
