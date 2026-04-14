import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesBar from '@/components/FeaturesBar';
import PressMentions from '@/components/PressMentions';
import BrandStatement from '@/components/BrandStatement';
import PhilosophyMarquee from '@/components/PhilosophyMarquee';
import CategoryShowcase from '@/components/CategoryShowcase';
import ProductGrid from '@/components/ProductGrid';
import LuxuryShowcase from '@/components/LuxuryShowcase';
import BehindTheWeave from '@/components/BehindTheWeave';
import StatsSection from '@/components/StatsSection';
import CraftsmanshipSection from '@/components/CraftsmanshipSection';
import CollectionBanner from '@/components/CollectionBanner';
import ProductSpotlight from '@/components/ProductSpotlight';
import ProcessSection from '@/components/ProcessSection';
import EditorialBanner from '@/components/EditorialBanner';
import LookbookGallery from '@/components/LookbookGallery';
import WardrobeGuide from '@/components/WardrobeGuide';
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
        <PressMentions />
        <BrandStatement />
        <PhilosophyMarquee />
        <CategoryShowcase />
        <ProductGrid />
        <LuxuryShowcase />
        <BehindTheWeave />
        <StatsSection />
        <CraftsmanshipSection />
        <CollectionBanner />
        <ProductSpotlight />
        <ProcessSection />
        <EditorialBanner />
        <LookbookGallery />
        <WardrobeGuide />
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
