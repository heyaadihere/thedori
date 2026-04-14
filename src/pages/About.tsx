import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

import SustainabilitySection from '@/components/SustainabilitySection';
import StatsSection from '@/components/StatsSection';
import AboutProductBanner from '@/components/AboutProductBanner';
import FounderNote from '@/components/FounderNote';
import MaterialsSection from '@/components/MaterialsSection';
import DesignPhilosophy from '@/components/DesignPhilosophy';
import AboutValues from '@/components/AboutValues';
import AboutAtelier from '@/components/AboutAtelier';
import AboutProcessGallery from '@/components/AboutProcessGallery';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <AboutProductBanner />

        {/* Intro */}
        <section className="py-24 lg:py-32 px-6">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-lg md:text-xl leading-relaxed text-foreground font-light font-serif">
              DORI creates effortless everyday luxury jackets for modern Indian women who want to look put-together without changing outfits. We blend distinctive Western silhouettes with premium Indian fabrics to deliver design-led versatility that feels personal, not prescribed.
            </p>
            <div className="luxury-divider w-16 mx-auto mt-12" />
          </div>
        </section>

        <FounderNote />
        <AboutValues />
        <StatsSection />
        <MaterialsSection />
        <AboutAtelier />
        <DesignPhilosophy />
        <AboutProcessGallery />
        
        <SustainabilitySection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default About;
