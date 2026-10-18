import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhoWeServeSection from '@/components/WhoWeServeSection';
import OurWorkSection from '@/components/OurWorkSection';
import PricingSection from '@/components/PricingSection';
import ConsultationBooking from '@/components/ConsultationBooking';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <WhoWeServeSection />
        <OurWorkSection />
        <PricingSection />
        <ConsultationBooking />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
