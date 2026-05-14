import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesBar from '@/components/FeaturesBar';
import BrandStatement from '@/components/BrandStatement';
import PhilosophyMarquee from '@/components/PhilosophyMarquee';
import CategoryShowcase from '@/components/CategoryShowcase';
import ProductGrid from '@/components/ProductGrid';
import LuxuryShowcase from '@/components/LuxuryShowcase';
import BehindTheWeave from '@/components/BehindTheWeave';
import CraftsmanshipSection from '@/components/CraftsmanshipSection';
import CollectionBanner from '@/components/CollectionBanner';

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
import CuratedPicks from '@/components/CuratedPicks';
import SplitEditorial from '@/components/SplitEditorial';
import ScrollRevealText from '@/components/ScrollRevealText';
import ReversibleShowcase from '@/components/ReversibleShowcase';
import ServiceCards from '@/components/ServiceCards';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Dori — Premium Activewear Made to Move With You"
        description="Premium, sustainable activewear designed in Mumbai for women — handcrafted pieces made to move with you, in comfort and quiet confidence."
        path="/"
      />
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <FeaturesBar />
        <BrandStatement />
        <PhilosophyMarquee />
        <CategoryShowcase />
        <ProductGrid />
        <ReversibleShowcase />
        <LuxuryShowcase />
        <SplitEditorial />
        <BehindTheWeave />
        <CraftsmanshipSection />
        <CollectionBanner />
        <CuratedPicks />
        <ProductSpotlight />
        <ScrollRevealText />
        <ProcessSection />
        <EditorialBanner />
        <LookbookGallery />
        <WardrobeGuide />
        <Testimonials />
        <BrandStory />
        <ServiceCards />
        <FAQSection />
        <InstagramFeed />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
