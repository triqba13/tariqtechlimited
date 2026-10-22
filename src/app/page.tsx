import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhoWeServeSection from '@/components/WhoWeServeSection';
import ProcessSection from '@/components/ProcessSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import OurWorkSection from '@/components/OurWorkSection';
import FAQSection from '@/components/FAQSection';
import ClientsFeedbackSection from '@/components/ClientsFeedbackSection';
import BlogSection from '@/components/BlogSection';
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
        <ProcessSection />
        <IntegrationsSection />
        <OurWorkSection />
        <FAQSection />
        <ClientsFeedbackSection />
        <BlogSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
