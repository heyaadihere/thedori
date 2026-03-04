import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesBar from '@/components/FeaturesBar';
import BrandStatement from '@/components/BrandStatement';
import PhilosophyMarquee from '@/components/PhilosophyMarquee';
import CategoryShowcase from '@/components/CategoryShowcase';
import ProductGrid from '@/components/ProductGrid';
import ProcessSection from '@/components/ProcessSection';
import StatsSection from '@/components/StatsSection';
import CraftsmanshipSection from '@/components/CraftsmanshipSection';
import EditorialBanner from '@/components/EditorialBanner';
import Testimonials from '@/components/Testimonials';
import BrandStory from '@/components/BrandStory';
import FAQSection from '@/components/FAQSection';
import InstagramFeed from '@/components/InstagramFeed';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <FeaturesBar />
        <BrandStatement />
        <PhilosophyMarquee />
        <CategoryShowcase />
        <ProductGrid />
        <StatsSection />
        <CraftsmanshipSection />
        <ProcessSection />
        <EditorialBanner />
        <Testimonials />
        <BrandStory />
        <FAQSection />
        <InstagramFeed />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
