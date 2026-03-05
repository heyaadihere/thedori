import { motion } from 'framer-motion';
import { Truck, RotateCcw, Shield, Package, Globe, Clock } from 'lucide-react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';

const shippingOptions = [
  { icon: Truck, title: 'Standard Shipping', time: '5–7 business days', cost: 'Free on orders above ₹2,999', description: 'Reliable delivery with tracking across India.' },
  { icon: Package, title: 'Express Shipping', time: '2–3 business days', cost: '₹299', description: 'Priority handling and expedited delivery.' },
  { icon: Globe, title: 'International', time: '7–14 business days', cost: 'Calculated at checkout', description: 'We ship to 15+ countries worldwide.' },
];

const returnSteps = [
  { step: '01', title: 'Initiate', description: 'Email us at hello@dori.com within 14 days of delivery with your order number.' },
  { step: '02', title: 'Pack', description: 'Place the unworn item in its original packaging with all tags attached.' },
  { step: '03', title: 'Ship', description: "We'll send a prepaid return label to your email within 24 hours." },
  { step: '04', title: 'Refund', description: 'Once received and inspected, your refund is processed within 5–7 business days.' },
];

const ShippingReturns = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-normal mb-4">Shipping & Returns</h1>
            <p className="text-sm text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
              We want every DORI experience to feel effortless — from order to unboxing.
            </p>
          </motion.div>
        </section>

        {/* Shipping options */}
        <section className="px-6 pb-20">
          <div className="container mx-auto max-w-5xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-10 text-center"
            >
              Shipping Options
            </motion.p>
            <div className="grid md:grid-cols-3 gap-6">
              {shippingOptions.map((opt, i) => (
                <motion.div
                  key={opt.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 border border-border hover:border-foreground/30 transition-colors duration-300"
                >
                  <opt.icon className="h-6 w-6 text-muted-foreground mb-5" strokeWidth={1.5} />
                  <h3 className="text-sm font-medium mb-1">{opt.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{opt.time}</span>
                  </div>
                  <p className="text-xs font-medium mb-3">{opt.cost}</p>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{opt.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Return policy */}
        <section className="px-6 py-20 lg:py-28 bg-secondary/50">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <RotateCcw className="h-8 w-8 mx-auto mb-6 text-muted-foreground" strokeWidth={1} />
              <h2 className="text-3xl md:text-4xl font-normal mb-3">Hassle-free returns</h2>
              <p className="text-sm text-muted-foreground font-light max-w-md mx-auto">
                14-day return window. No questions asked.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {returnSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="text-center"
                >
                  <span className="text-4xl font-serif text-border block mb-4">{step.step}</span>
                  <h3 className="text-sm font-medium mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee banner */}
        <section className="px-6 py-16">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-12 border border-border"
            >
              <Shield className="h-8 w-8 mx-auto mb-5 text-muted-foreground" strokeWidth={1} />
              <h3 className="text-xl font-normal mb-3">Quality Guarantee</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-md mx-auto">
                Every DORI piece is inspected for quality before shipping. If you receive a defective item, we'll replace it at no cost — no questions asked.
              </p>
            </motion.div>
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default ShippingReturns;
