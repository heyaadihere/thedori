import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What materials do you use?',
    answer: 'We work primarily with premium Italian wool blends, organic cotton, and responsibly sourced linen. Every fabric is chosen for its ability to hold structure while remaining breathable and comfortable.',
  },
  {
    question: 'How do your reversible pieces work?',
    answer: 'Our reversible construction uses a fully finished interior - no raw seams, no linings to hide. Simply turn the garment inside out for a completely different colorway and texture.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy on all unworn items with tags attached. Returns are complimentary within India. International returns are at the customer\'s expense.',
  },
  {
    question: 'Do you offer custom sizing?',
    answer: 'Yes, we offer made-to-measure services for select styles. Please contact our atelier team at hello@dori.com with your measurements and desired piece.',
  },
  {
    question: 'How should I care for my DORI pieces?',
    answer: 'We recommend dry cleaning for structured pieces. For casual styles, hand wash cold and lay flat to dry. Detailed care instructions are included with every garment.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship worldwide. Orders within India enjoy complimentary shipping over ₹5,000. International shipping rates are calculated at checkout.',
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-muted-foreground mb-3 md:mb-4">Common Questions</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-serif">Frequently Asked</h2>
          <div className="luxury-divider w-20 mx-auto mt-5 md:mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-gold/15">
                <AccordionTrigger className="py-5 md:py-6 text-sm md:text-base font-medium tracking-wide text-left hover:no-underline font-serif">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 md:pb-6 text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
