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
    answer: 'Primarily Italian wool blends, organic cotton, and responsibly sourced linen. We select fabrics for structure, breathability, and how they age over time.',
  },
  {
    question: 'How does the reversible construction work?',
    answer: 'The interior is fully finished with no raw seams. Turn the garment inside out for a different colourway and texture. Two considered looks from one piece.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We accept returns within 14 days on unworn items with tags attached. Returns within India are on us. International returns are at the customer\'s cost.',
  },
  {
    question: 'Do you offer custom sizing?',
    answer: 'We offer made-to-measure for select styles. Write to us at hello@dori.com with your measurements and preferred piece.',
  },
  {
    question: 'How should I care for my DORI piece?',
    answer: 'Dry clean for structured pieces. For casual styles, hand wash cold and lay flat to dry. Each garment comes with specific care instructions.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to 15+ countries. Orders within India ship free above ₹5,000. International rates are calculated at checkout.',
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
          <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-muted-foreground mb-3 md:mb-4">Questions</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-serif">Good to know</h2>
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
