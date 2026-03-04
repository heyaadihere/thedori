import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesBar from '@/components/FeaturesBar';
import BrandStatement from '@/components/BrandStatement';
import CategoryShowcase from '@/components/CategoryShowcase';
import ProductGrid from '@/components/ProductGrid';
import CraftsmanshipSection from '@/components/CraftsmanshipSection';
import BrandStory from '@/components/BrandStory';
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
        <CategoryShowcase />
        <ProductGrid />
        <CraftsmanshipSection />
        <BrandStory />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
