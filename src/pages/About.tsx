import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import TimelineSection from '@/components/TimelineSection';
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
              DORI was born from a simple observation: the best-dressed women in any room aren't the loudest. We make structured outerwear for those who understand that presence is earned, not performed.
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
        <TimelineSection />
        <SustainabilitySection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default About;
