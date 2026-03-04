import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-secondary min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/20" />
      
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          New Collection
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 font-normal">
          Made to move<br />with you
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-10 max-w-md mx-auto font-light leading-relaxed">
          Structured outerwear designed with intention — clean lines, contrast panels, and a silhouette that holds presence without noise.
        </p>
        <Link to="/">
          <Button 
            variant="default" 
            size="lg" 
            className="tracking-[0.15em] uppercase text-xs px-10 py-6 rounded-none"
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
