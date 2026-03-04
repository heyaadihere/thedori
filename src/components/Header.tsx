import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartDrawer from '@/components/CartDrawer';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Nav links - hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">
              Jackets
            </Link>
            <Link to="/" className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">
              Waistcoats
            </Link>
            <Link to="/" className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">
              Blazers
            </Link>
          </nav>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-2xl lg:text-3xl tracking-[0.3em] uppercase font-medium">
              DORI
            </h1>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-2 ml-auto">
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
