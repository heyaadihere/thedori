import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { MapPin, Mail, Clock, Phone, ArrowRight } from 'lucide-react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import Newsletter from '@/components/Newsletter';
import SEO from '@/components/SEO';

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Dori',
  image: 'https://thedori.in/og-image.jpg',
  url: 'https://thedori.in/contact',
  telephone: '+91-8088272704',
  email: 'dori.styleit@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'MH',
    addressCountry: 'IN',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    opens: '10:00',
    closes: '19:00',
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent', {
      description: "We'll get back to you within 24 hours.",
      position: 'top-center',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Dori | Mumbai Studio & Customer Care"
        description="Get in touch with Dori — visit our Mumbai atelier, message us on WhatsApp at +91-8088272704, or write to dori.styleit@gmail.com."
        path="/contact"
        jsonLd={localBusinessJsonLd}
      />
      <AnnouncementBar />
      <Header />
      <main>
        {/* Header */}
        <section className="py-20 lg:py-28 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Contact</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6">Let's talk</h1>
            <p className="text-sm text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
              Sizing, custom orders, or just a question. We're here.
            </p>
          </motion.div>
        </section>

        {/* Quick contact cards */}
        <section className="pb-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: MapPin, label: 'Visit Us', value: 'DORI Studio, Mumbai', detail: '123 Fashion District, 400001' },
                { icon: Mail, label: 'Email', value: 'hello@dori.com', detail: 'We reply within 24hrs' },
                { icon: Phone, label: 'Call', value: '+91 22 4000 5000', detail: 'Mon-Fri, 10am-6pm IST' },
                { icon: Clock, label: 'Hours', value: 'Mon - Fri: 10am - 6pm', detail: 'Sat: 11am - 5pm' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 border border-border bg-card hover:bg-secondary/50 transition-colors duration-300"
                >
                  <item.icon className="h-5 w-5 text-muted-foreground mb-4" strokeWidth={1.5} />
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">{item.label}</p>
                  <p className="text-sm font-medium mb-1">{item.value}</p>
                  <p className="text-xs text-muted-foreground font-light">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form section */}
        <section className="pb-20 lg:pb-28 px-6">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-normal mb-3">Write to us</h2>
              <p className="text-sm text-muted-foreground font-light">We'll get back to you within 24 hours.</p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Name</Label>
                  <Input id="name" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} required className="rounded-none h-12 border-border" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Email</Label>
                  <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} required className="rounded-none h-12 border-border" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Subject</Label>
                <Input id="subject" value={formData.subject} onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))} required className="rounded-none h-12 border-border" placeholder="What's this about?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Message</Label>
                <Textarea id="message" value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} required className="rounded-none min-h-[180px] border-border resize-none" placeholder="Tell us everything..." />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-none tracking-[0.15em] uppercase text-xs py-6 group">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.form>
          </div>
        </section>

        <FAQSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
