import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, ArrowRight, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const SHOPIFY_STORE = 'nysxt1-k4.myshopify.com';

const TrackOrder = () => {
  const [email, setEmail] = useState('');
  const [orderNumber, setOrderNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      toast({ title: 'Please enter the email used at checkout.' });
      return;
    }
    toast({
      title: 'Redirecting to your account',
      description: 'Sign in with a one-time code sent to your email to view order status and tracking.',
    });
    // Shopify hosted customer accounts: passwordless email code login,
    // then full order history + tracking + invoices.
    window.open(`https://${SHOPIFY_STORE}/account?channel=online_store`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Track Your Order | DORI"
        description="Track your DORI order status, shipment and delivery. Enter your order number and email to view live updates."
        canonical="https://thedori.in/track-order"
      />
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Your Order</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-5">
              Track Your Order
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
              Enter your order number and the email you used at checkout. We'll take you to your secure
              account to view shipment status, tracking link and invoices.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="bg-secondary/30 border border-border/60 rounded-lg p-6 md:p-10 space-y-5"
          >
            <div>
              <label htmlFor="order" className="block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">
                Order number
              </label>
              <div className="relative">
                <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="order"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="#1001"
                  className="pl-10 h-12 bg-background"
                  maxLength={32}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  maxLength={255}
                  className="pl-10 h-12 bg-background"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-xs tracking-[0.2em] uppercase font-medium group"
            >
              View Order Status
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>

            <p className="text-xs text-muted-foreground/80 text-center font-light pt-2">
              You'll receive a one-time login code at your email. No password needed.
            </p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground font-light">
              Can't find your order number?{' '}
              <a href="/contact" className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity">
                Write to us
              </a>{' '}
              and we'll look it up for you.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrackOrder;
