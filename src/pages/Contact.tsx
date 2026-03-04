import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { MapPin, Mail, Clock } from 'lucide-react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent', {
      description: 'We'll get back to you within 24 hours.',
      position: 'top-center',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        {/* Header */}
        <section className="py-16 lg:py-24 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl font-normal mb-4">Contact Us</h1>
            <p className="text-sm text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
              We'd love to hear from you. Whether it's a question about sizing, a custom order, or just to say hello.
            </p>
          </motion.div>
        </section>

        <section className="pb-20 lg:pb-28 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-2 space-y-8"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Visit Us</p>
                  </div>
                  <p className="text-sm font-light leading-relaxed">
                    DORI Studio<br />
                    123 Fashion District<br />
                    Mumbai, India 400001
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Email</p>
                  </div>
                  <p className="text-sm font-light">hello@dori.com</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Hours</p>
                  </div>
                  <p className="text-sm font-light leading-relaxed">
                    Mon — Fri: 10am — 6pm<br />
                    Sat: 11am — 5pm<br />
                    Sun: Closed
                  </p>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-3"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="rounded-none h-12 border-border"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="rounded-none h-12 border-border"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      required
                      className="rounded-none h-12 border-border"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                      className="rounded-none min-h-[150px] border-border resize-none"
                      placeholder="Tell us everything..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-none tracking-[0.15em] uppercase text-xs py-6">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
