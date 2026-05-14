import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const groups = [
  {
    title: 'Sizing & Fit',
    items: [
      {
        q: 'How do DORI jackets fit?',
        a: 'Our blazers and waistcoats are cut close through the shoulder with ease across the body. If you are between sizes, size up for a relaxed fit or down for a sharper silhouette.',
      },
      {
        q: 'Do you offer custom sizing?',
        a: 'Yes, made-to-measure is available on select styles. Write to hello@dori.com with your measurements and the piece you have in mind.',
      },
      {
        q: 'Where can I find a size guide?',
        a: 'Our detailed size guide lives in the footer under Help, with measurements in inches and centimetres for every cut.',
      },
    ],
  },
  {
    title: 'Shipping & Delivery',
    items: [
      {
        q: 'Do you ship internationally?',
        a: 'We ship to 15+ countries. Orders within India ship free above ₹5,000. International rates are calculated at checkout.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Within India, 4 to 7 working days. International orders typically arrive in 8 to 14 working days, depending on customs.',
      },
      {
        q: 'Will I be charged customs duties?',
        a: 'International customers may be charged duties on arrival, set by the destination country. These are not included in your order total.',
      },
    ],
  },
  {
    title: 'Returns & Exchanges',
    items: [
      {
        q: 'What is your return policy?',
        a: 'We accept returns within 14 days on unworn items with tags attached. Returns within India are on us. International returns are at the customer\'s cost.',
      },
      {
        q: 'How do I start a return?',
        a: 'Email hello@dori.com with your order number and the reason for return. We will share the next steps within one working day.',
      },
      {
        q: 'Are exchanges possible?',
        a: 'Yes, subject to stock. The fastest route is usually a return for refund and a fresh order in the size you want.',
      },
    ],
  },
  {
    title: 'Care & Materials',
    items: [
      {
        q: 'What fabrics do you use?',
        a: 'Handwoven Indian textiles including khadi, organic cotton, linen and chikan. Many pieces feature artisanal embroidery and block prints.',
      },
      {
        q: 'Can I wash DORI pieces at home?',
        a: 'Most styles are hand-washable in cold water with mild detergent. Lay flat to dry. Detailed care lives on each product page and in our Care Instructions guide.',
      },
      {
        q: 'How should I store my jacket?',
        a: 'On a broad, padded hanger inside a breathable garment bag. Keep away from direct sunlight to protect the dyes and weaves.',
      },
    ],
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: groups.flatMap(g => g.items.map(it => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a },
  }))),
};

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="FAQ | Dori — Sizing, Shipping, Returns & Care"
        description="Answers to common questions about Dori — sizing and fit, shipping and delivery, returns and exchanges, and how to care for your pieces."
        path="/faq"
        jsonLd={faqJsonLd}
      />
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        <section className="py-20 md:py-28 px-4 md:px-6 bg-secondary/30">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-4">Help Centre</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif leading-[1.05]">Frequently asked</h1>
              <div className="luxury-divider w-20 mx-auto my-6" />
              <p className="text-base text-muted-foreground font-light max-w-xl mx-auto">
                Everything you may want to know before, during and after your DORI order.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-3xl space-y-14 md:space-y-16">
            {groups.map((group, gi) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.05 }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">{group.title}</h2>
                <Accordion type="single" collapsible className="space-y-0">
                  {group.items.map((item, i) => (
                    <AccordionItem key={i} value={`${gi}-${i}`} className="border-b border-gold/15">
                      <AccordionTrigger className="py-5 md:py-6 text-sm md:text-base font-medium tracking-wide text-left hover:no-underline font-serif">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 md:pb-6 text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-6 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-serif font-medium mb-3">Still have a question?</h3>
            <p className="text-sm md:text-base text-primary-foreground/70 font-light mb-6">
              Our team replies within one working day.
            </p>
            <a
              href="mailto:hello@dori.com"
              className="inline-block text-xs tracking-[0.3em] uppercase border-b border-primary-foreground/40 pb-1 hover:border-primary-foreground transition-colors"
            >
              Write to us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
