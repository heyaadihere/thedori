import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl tracking-[0.3em] uppercase mb-4">DORI</h3>
            <p className="text-xs text-muted-foreground leading-relaxed font-light max-w-xs">
              Structured outerwear designed with intention. Clean lines, quiet confidence, built to move with you.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Shop</p>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-foreground hover:text-muted-foreground transition-colors">Jackets</Link>
              <Link to="/" className="block text-sm text-foreground hover:text-muted-foreground transition-colors">Waistcoats</Link>
              <Link to="/" className="block text-sm text-foreground hover:text-muted-foreground transition-colors">Blazers</Link>
            </nav>
          </div>

          {/* Info */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Info</p>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-foreground hover:text-muted-foreground transition-colors">About</Link>
              <Link to="/" className="block text-sm text-foreground hover:text-muted-foreground transition-colors">Contact</Link>
              <Link to="/" className="block text-sm text-foreground hover:text-muted-foreground transition-colors">Shipping & Returns</Link>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 DORI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
