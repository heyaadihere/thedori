import { motion } from 'framer-motion';
import { RotateCcw, Shield, Sparkles, Gift, Clock, XCircle, PackageCheck, AlertTriangle, Ban, Mail } from 'lucide-react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import SEO from '@/components/SEO';

const ShippingReturns = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Returns & Refund Policy | Dori"
        description="Dori's return and refund policy — 7-day easy exchanges, complimentary reverse pickup on first orders, and 72-hour refund window."
        path="/shipping-returns"
      />
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
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">The Dori Confidence Promise</p>
            <h1 className="text-4xl md:text-5xl font-serif font-normal mb-5">Returns & Refund Policy</h1>
            <p className="text-sm md:text-base text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
              Every Dori piece is designed to make you feel confident, powerful and beautifully yourself. Our return and exchange philosophy is built around confidence, fairness and premium service.
            </p>
            <div className="luxury-divider w-16 mx-auto mt-8" />
          </motion.div>
        </section>

        {/* 7-Day Easy Exchanges */}
        <section className="px-6 pb-16">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 border border-border"
            >
              <Clock className="h-7 w-7 text-gold mb-5" strokeWidth={1.2} />
              <h2 className="text-2xl md:text-3xl font-serif font-normal mb-4">7-Day Easy Exchanges</h2>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                We offer easy exchanges within <span className="text-foreground font-medium">7 days of delivery</span> for eligible products.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">You may request an exchange if</p>
                  <ul className="space-y-2 text-sm font-light text-foreground/85">
                    <li>– The size doesn't fit as expected</li>
                    <li>– The style or silhouette does not suit your preference</li>
                    <li>– You received a damaged or incorrect product</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">To be eligible</p>
                  <ul className="space-y-2 text-sm font-light text-foreground/85">
                    <li>– The product must be unused</li>
                    <li>– All original tags must remain attached</li>
                    <li>– The item must be returned in its original packaging</li>
                    <li>– No signs of wear, perfume, makeup, washing or alterations</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* First Order Fit Assurance */}
        <section className="px-6 py-16 bg-secondary/40">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Sparkles className="h-7 w-7 mx-auto mb-5 text-gold" strokeWidth={1.2} />
              <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3">Complimentary</p>
              <h2 className="text-2xl md:text-3xl font-serif font-normal mb-4">First Order Fit Assurance</h2>
              <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xl mx-auto mb-6">
                Your first Dori purchase is protected by our complimentary First Order Fit Assurance.
              </p>
              <ul className="space-y-2 text-sm font-light text-foreground/85 max-w-md mx-auto text-left">
                <li>– Your first exchange is completely complimentary</li>
                <li>– Reverse pickup is included across India</li>
              </ul>
              <p className="text-xs text-muted-foreground italic mt-6">Because discovering your perfect Dori fit should feel effortless.</p>
            </motion.div>
          </div>
        </section>

        {/* Refund Eligibility */}
        <section className="px-6 py-16">
          <div className="container mx-auto max-w-4xl grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-border"
            >
              <RotateCcw className="h-6 w-6 text-gold mb-4" strokeWidth={1.2} />
              <h3 className="text-xl font-serif font-normal mb-3">Refund Eligibility</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                As a premium fashion brand, we primarily encourage exchanges or Dori Credit. Refunds are applicable within <span className="text-foreground font-medium">72 hours of delivery</span> only under:
              </p>
              <ul className="space-y-2 text-sm font-light text-foreground/85">
                <li>– Damaged product received</li>
                <li>– Manufacturing defect</li>
                <li>– Incorrect item delivered</li>
                <li>– Significant mismatch from product description or imagery</li>
              </ul>
              <p className="text-xs text-muted-foreground font-light mt-5 leading-relaxed">
                Approved refunds are processed to the original payment method within 7–10 business days after the returned item passes quality inspection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 border border-gold/40 bg-gold/5"
            >
              <Gift className="h-6 w-6 text-gold mb-4" strokeWidth={1.2} />
              <h3 className="text-xl font-serif font-normal mb-3">Prefer Dori Credit? Receive 5% Extra</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                Choose Dori Credit instead of a bank refund and receive an additional <span className="text-foreground font-medium">5% value instantly</span>.
              </p>
              <div className="bg-background/60 border border-gold/20 p-4 mb-4">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Example</p>
                <p className="text-sm font-light">Refund value: <span className="font-medium">₹10,000</span></p>
                <p className="text-sm font-light">Dori Credit offered: <span className="font-medium text-gold">₹10,500</span></p>
              </div>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                Dori Credit is valid for future purchases on our website and allows for a faster, seamless shopping experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intimation Window */}
        <section className="px-6 py-16 bg-secondary/40">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-normal mb-8">Return & Exchange Intimation Window</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 border border-border bg-background">
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Exchanges</p>
                  <p className="text-2xl font-serif">Within 7 days</p>
                  <p className="text-xs text-muted-foreground font-light mt-1">of delivery</p>
                </div>
                <div className="p-6 border border-border bg-background">
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Refunds</p>
                  <p className="text-2xl font-serif">Within 72 hours</p>
                  <p className="text-xs text-muted-foreground font-light mt-1">of delivery</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-light mt-6 italic">
                Requests raised outside these timelines may not be eligible for approval.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Reverse Pickup */}
        <section className="px-6 py-16">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <PackageCheck className="h-7 w-7 text-gold mb-5" strokeWidth={1.2} />
              <h2 className="text-2xl md:text-3xl font-serif font-normal mb-5">Reverse Pickup & Shipping</h2>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                Complimentary reverse pickup is available for:
              </p>
              <ul className="space-y-2 text-sm font-light text-foreground/85 mb-6">
                <li>– First exchanges under our Fit Assurance Promise</li>
                <li>– Damaged or incorrect products</li>
                <li>– Eligible orders above ₹10,000</li>
              </ul>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                For preference-based refund requests, a nominal reverse logistics fee of <span className="text-foreground font-medium">₹249</span> may apply.
              </p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                In certain serviceable limitations, customers may be requested to self-ship the product to our returns address. In such cases, guidance will be provided by our team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Non-Returnable & Quality Inspection */}
        <section className="px-6 py-16 bg-secondary/40">
          <div className="container mx-auto max-w-4xl grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-border bg-background"
            >
              <Ban className="h-6 w-6 text-muted-foreground mb-4" strokeWidth={1.2} />
              <h3 className="text-xl font-serif font-normal mb-4">Non-Returnable Items</h3>
              <ul className="space-y-2 text-sm font-light text-foreground/85">
                <li>– Made-to-order products</li>
                <li>– Customized or personalized pieces</li>
                <li>– Altered garments</li>
                <li>– Limited-edition or final-sale styles</li>
                <li>– Products purchased during exclusive clearance events</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 border border-border bg-background"
            >
              <Shield className="h-6 w-6 text-muted-foreground mb-4" strokeWidth={1.2} />
              <h3 className="text-xl font-serif font-normal mb-4">Quality Inspection</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                All returned items undergo quality inspection upon receipt. Dori reserves the right to decline returns or exchanges if:
              </p>
              <ul className="space-y-2 text-sm font-light text-foreground/85">
                <li>– The product shows signs of use</li>
                <li>– Tags are missing</li>
                <li>– Packaging is damaged significantly</li>
                <li>– The item is returned in non-mint condition</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Damaged & Cancellation */}
        <section className="px-6 py-16">
          <div className="container mx-auto max-w-4xl grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-border"
            >
              <AlertTriangle className="h-6 w-6 text-gold mb-4" strokeWidth={1.2} />
              <h3 className="text-xl font-serif font-normal mb-3">Damaged or Incorrect Orders</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                If you receive a damaged, defective, or incorrect item, contact us within <span className="text-foreground font-medium">72 hours of delivery</span> with:
              </p>
              <ul className="space-y-2 text-sm font-light text-foreground/85">
                <li>– Your order number</li>
                <li>– Clear photographs of the issue</li>
                <li>– Video highlighting the issue (recommended for faster resolution)</li>
              </ul>
              <p className="text-xs text-muted-foreground font-light mt-4 leading-relaxed">
                Our team will prioritise resolving the issue at the earliest.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 border border-border"
            >
              <XCircle className="h-6 w-6 text-muted-foreground mb-4" strokeWidth={1.2} />
              <h3 className="text-xl font-serif font-normal mb-3">Cancellation Policy</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                Orders may be cancelled only before shipped.
              </p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                Once an order has been shipped, it cannot be cancelled and will fall under the applicable exchange/refund policy.
              </p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Made-to-order pieces cannot be cancelled once the order has been placed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section className="px-6 py-16">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-10 md:p-14 border border-gold/30 bg-gold/5"
            >
              <Mail className="h-7 w-7 mx-auto mb-5 text-gold" strokeWidth={1.2} />
              <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3">Contact Us</p>
              <h3 className="text-2xl md:text-3xl font-serif font-normal mb-4">Client Experience Team</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-md mx-auto mb-6">
                For any assistance, our team is happy to help.
              </p>
              <div className="space-y-2 text-sm font-light">
                <p><span className="text-muted-foreground">Email:</span> <a href="mailto:connect@thedori.in" className="text-foreground hover:text-gold transition-colors">connect@thedori.in</a></p>
                <p><span className="text-muted-foreground">WhatsApp:</span> <a href="https://wa.me/918088272704" className="text-foreground hover:text-gold transition-colors">+91-8088272704</a></p>
                <p className="text-xs text-muted-foreground mt-3">Support Hours: Monday – Saturday | 10 AM – 7 PM IST</p>
              </div>
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
