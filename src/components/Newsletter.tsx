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
      toast.success('Welcome to the DORI inner circle', {
        description: "You'll be the first to know about new drops and early access.",
        position: 'top-center',
      });
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-primary text-primary-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto text-center"
      >
        <div className="luxury-divider w-16 mx-auto mb-6 md:mb-8" />
        <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-primary-foreground/40 mb-4 md:mb-6">
          Join the Inner Circle
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-4 font-serif">
          First access, always
        </h2>
        <p className="text-sm md:text-base text-primary-foreground/50 font-light mb-8 md:mb-10 leading-relaxed">
          New collections, early access, and stories from the atelier. Be the first to know when something new drops.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 rounded-none bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-gold/30 h-12 text-sm md:text-base"
          />
          <Button
            type="submit"
            className="rounded-none tracking-[0.15em] uppercase text-xs md:text-sm px-8 h-12 bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
          >
            Join
          </Button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
