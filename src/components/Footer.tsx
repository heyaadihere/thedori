import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import doriLogo from '@/assets/dori-logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Main footer */}
        <div className="py-16 lg:py-20 grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={doriLogo} alt="DORI" className="h-16 w-auto mb-4" />
            <p className="text-xs text-primary-foreground/60 leading-relaxed font-light max-w-xs">
              Structured outerwear designed with intention. Clean lines, quiet confidence, built to move with you.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/40 mb-5">Shop</p>
            <nav className="space-y-3">
              <Link to="/collections" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">All Collections</Link>
              <Link to="/collections" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">Blazers</Link>
              <Link to="/collections" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">Waistcoats</Link>
              <Link to="/collections" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">Jackets</Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/40 mb-5">Company</p>
            <nav className="space-y-3">
              <Link to="/about" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">About DORI</Link>
              <Link to="/contact" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">Contact</Link>
              <Link to="/size-guide" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">Size Guide</Link>
            </nav>
          </div>

          {/* Help */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/40 mb-5">Help</p>
            <nav className="space-y-3">
              <Link to="/shipping-returns" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">Shipping & Returns</Link>
              <Link to="/size-guide" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">Size Guide</Link>
              <Link to="/care-instructions" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">Care Instructions</Link>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-primary-foreground/40 tracking-wider">&copy; 2026 DORI. All rights reserved.</p>
          <p className="text-[10px] text-primary-foreground/40 tracking-wider">
            Website powered by{' '}
            <a href="https://techbook.co.in/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors underline underline-offset-2">
              Techbook Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
