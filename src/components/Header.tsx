import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import doriLogo from '@/assets/dori-logo-mocha.png';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import CartDrawer from '@/components/CartDrawer';

const navLinks = [
  { label: 'Shop', href: '/collections' },
  { label: 'Jackets', href: '/collections' },
  { label: 'Waistcoats', href: '/collections' },
  { label: 'Blazers', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Size Guide', href: '/size-guide' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24 lg:h-28">
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-background p-0">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between px-6 h-16 border-b border-border">
                    <img src={doriLogo} alt="DORI" className="h-16 w-auto" />
                  </div>
                  <nav className="flex flex-col py-8 px-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-3 text-sm tracking-[0.15em] uppercase text-foreground hover:text-muted-foreground transition-colors border-b border-border/50"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Nav links - desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img src={doriLogo} alt="DORI" className="h-20 lg:h-24 w-auto" />
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <div className="hidden md:flex items-center gap-6 mr-4">
              <Link to="/about" className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
            <Button variant="ghost" size="icon" className="text-foreground">
              <Search className="h-4 w-4" />
            </Button>
            <CartDrawer />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
