import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to the DORI world', {
        description: "You'll be the first to know about new collections.",
        position: 'top-center',
      });
      setEmail('');
    }
  };

  return (
    <section className="py-24 lg:py-32 px-6 bg-primary text-primary-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto text-center"
      >
        <div className="luxury-divider w-16 mx-auto mb-8" />
        <p className="text-xs tracking-[0.5em] uppercase text-primary-foreground/40 mb-6">
          Stay Connected
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 font-serif">
          Join the DORI world
        </h2>
        <p className="text-sm text-primary-foreground/50 font-light mb-10 leading-relaxed">
          Be the first to know about new collections, exclusive access, and stories from our atelier.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 rounded-none bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-gold/30 h-12"
          />
          <Button
            type="submit"
            variant="outline"
            className="rounded-none tracking-[0.15em] uppercase text-xs px-8 h-12 border-gold/40 text-primary-foreground hover:bg-gold/10"
          >
            Subscribe
          </Button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
