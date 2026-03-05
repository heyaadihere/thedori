import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main className="flex items-center justify-center py-32 lg:py-44 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-8xl md:text-9xl font-serif text-border block mb-6">404</span>
          <h1 className="text-2xl md:text-3xl font-normal mb-4">Page not found</h1>
          <p className="text-sm text-muted-foreground font-light mb-10 max-w-sm mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block px-10 py-4 bg-foreground text-background text-xs tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
