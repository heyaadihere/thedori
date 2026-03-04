import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BrandStatement from '@/components/BrandStatement';
import ProductGrid from '@/components/ProductGrid';
import BrandStory from '@/components/BrandStory';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <BrandStatement />
        <ProductGrid />
        <BrandStory />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
