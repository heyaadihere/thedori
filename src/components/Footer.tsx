import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Mail, Globe, Check } from 'lucide-react';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaCcApplePay, FaGooglePay } from 'react-icons/fa6';
import { SiRazorpay } from 'react-icons/si';
import doriLogo from '@/assets/dori-logo-ivory.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from '@/hooks/use-toast';

const regions = [
  { code: 'IN', label: 'India', currency: 'INR ₹' },
  { code: 'US', label: 'United States', currency: 'USD $' },
  { code: 'GB', label: 'United Kingdom', currency: 'GBP £' },
  { code: 'EU', label: 'Europe', currency: 'EUR €' },
  { code: 'AE', label: 'UAE', currency: 'AED د.إ' },
  { code: 'AU', label: 'Australia', currency: 'AUD $' },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState(regions[0]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || trimmed.length > 255) {
      toast({ title: 'Please enter a valid email address.' });
      return;
    }
    toast({ title: 'Welcome to DORI', description: 'You are on the list. Look out for our next dispatch.' });
    setEmail('');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Hero logo block */}
        <div className="pt-14 md:pt-20 pb-10 md:pb-14 flex flex-col items-center text-center border-b border-primary-foreground/10">
          <img
            src={doriLogo}
            alt="DORI"
            className="h-56 md:h-72 lg:h-96 w-auto mb-6"
          />
          <p className="text-sm md:text-base text-primary-foreground/70 font-light max-w-md leading-relaxed">
            Everyday luxury jackets for modern Indian women.
            <br />
            Designed with intention, defined by presence.
          </p>
        </div>

        {/* Newsletter */}
        <div className="py-10 md:py-14 grid md:grid-cols-2 gap-8 md:gap-12 items-center border-b border-primary-foreground/10">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/40 mb-3">The DORI Letter</p>
            <h3 className="text-2xl md:text-3xl font-serif font-medium leading-snug">
              New cuts, quiet stories, first looks.
            </h3>
            <p className="text-sm text-primary-foreground/60 font-light mt-3 max-w-md">
              One thoughtful note a month. No noise, ever.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-foreground/40" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                maxLength={255}
                required
                className="pl-10 h-12 bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-primary-foreground/30"
              />
            </div>
            <Button
              type="submit"
              className="h-12 px-7 bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xs tracking-[0.2em] uppercase font-medium"
            >
              Subscribe
            </Button>
          </form>
        </div>

        {/* Link columns */}
        <div className="py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/40 mb-4 md:mb-5">Shop</p>
            <nav className="space-y-2.5 md:space-y-3">
              <Link to="/collections" className="block text-sm md:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">All Collections</Link>
              <Link to="/collections" className="block text-sm md:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">Blazers</Link>
              <Link to="/collections" className="block text-sm md:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">Waistcoats</Link>
              <Link to="/collections" className="block text-sm md:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">Jackets</Link>
            </nav>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/40 mb-4 md:mb-5">Company</p>
            <nav className="space-y-2.5 md:space-y-3">
              <Link to="/about" className="block text-sm md:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">About DORI</Link>
              <Link to="/sustainability" className="block text-sm md:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">Sustainability</Link>
              <Link to="/contact" className="block text-sm md:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">Contact</Link>
            </nav>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/40 mb-4 md:mb-5">Help</p>
            <nav className="space-y-2.5 md:space-y-3">
              <Link to="/faq" className="block text-sm md:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">FAQ</Link>
              <Link to="/shipping-returns" className="block text-sm md:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">Shipping & Returns</Link>
              <Link to="/size-guide" className="block text-sm md:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">Size Guide</Link>
              <Link to="/care-instructions" className="block text-sm md:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light">Care Instructions</Link>
            </nav>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/40 mb-4 md:mb-5">Connect</p>
            <div className="flex gap-4 mb-6">
              <a href="https://www.instagram.com/dori.styleit" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/doristyleit/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/dori.styleit" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            {/* Region / currency switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors border border-primary-foreground/20 px-3 py-2 rounded-sm">
                  <Globe className="h-3.5 w-3.5" />
                  {region.label} · {region.currency}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background text-foreground">
                {regions.map((r) => (
                  <DropdownMenuItem
                    key={r.code}
                    onClick={() => setRegion(r)}
                    className="text-sm flex items-center justify-between gap-6 cursor-pointer"
                  >
                    <span>{r.label}</span>
                    <span className="flex items-center gap-2 text-muted-foreground">
                      {r.currency}
                      {region.code === r.code && <Check className="h-3.5 w-3.5" />}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Payment & shipping bar */}
        <div className="py-6 md:py-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/40">We accept</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 text-primary-foreground/80">
            <FaCcVisa className="h-7 w-auto md:h-8" aria-label="Visa" title="Visa" />
            <FaCcMastercard className="h-7 w-auto md:h-8" aria-label="Mastercard" title="Mastercard" />
            <FaCcAmex className="h-7 w-auto md:h-8" aria-label="American Express" title="American Express" />
            <FaCcPaypal className="h-7 w-auto md:h-8" aria-label="PayPal" title="PayPal" />
            <FaCcApplePay className="h-7 w-auto md:h-8" aria-label="Apple Pay" title="Apple Pay" />
            <FaGooglePay className="h-7 w-auto md:h-8" aria-label="Google Pay" title="Google Pay" />
            <SiRazorpay className="h-5 w-auto md:h-6" aria-label="Razorpay" title="Razorpay (UPI / Netbanking)" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 md:py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs text-primary-foreground/40 tracking-wider">&copy; 2026 DORI. All rights reserved.</p>
          <p className="text-xs text-primary-foreground/40 tracking-wider">
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
