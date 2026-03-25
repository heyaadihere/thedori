import { motion } from 'framer-motion';
import process1 from '@/assets/process-1.jpg';
import process2 from '@/assets/process-2.jpg';
import process3 from '@/assets/process-3.jpg';

const steps = [
  {
    number: '01',
    title: 'Design & Pattern',
    description: 'Every piece begins with a hand-drawn sketch and precision pattern - balancing structure with fluidity.',
    image: process1,
  },
  {
    number: '02',
    title: 'Cut & Construct',
    description: 'Our artisans cut each panel by hand, ensuring the grain of the fabric aligns perfectly with the silhouette.',
    image: process2,
  },
  {
    number: '03',
    title: 'Finish & Press',
    description: 'The final press gives every DORI piece its signature crispness - sharp lines that hold their shape.',
    image: process3,
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-muted-foreground mb-3 md:mb-4">The Process</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-serif">From thread to finish</h2>
          <div className="luxury-divider w-20 mx-auto mt-5 md:mt-6" />
        </motion.div>

        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? 'md:direction-rtl' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="luxury-frame"
                >
                  <div className="aspect-square overflow-hidden">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </motion.div>
              </div>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-serif text-gold/25 block mb-3 md:mb-4"
                >
                  {step.number}
                </motion.span>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-3 md:mb-4 font-serif">{step.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
