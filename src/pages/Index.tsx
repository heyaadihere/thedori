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
import VideoShowcase from '@/components/VideoShowcase';
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
        <ReversibleShowcase />
        <LuxuryShowcase />
        <SplitEditorial />
        <BehindTheWeave />
        <StatsSection />
        <CraftsmanshipSection />
        <CollectionBanner />
        <CuratedPicks />
        <ProductSpotlight />
        <ScrollRevealText />
        <ProcessSection />
        <VideoShowcase />
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
