import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import CertificatesSection from "@/components/CertificatesSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <Hero />
    <WorkSection />
    <SkillsSection />
    <CertificatesSection />
    <EducationSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
