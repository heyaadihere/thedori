import { motion } from 'framer-motion';

const milestones = [
  { year: '2021', title: 'The Idea', description: 'DORI was conceived in a small Mumbai studio — a response to fast fashion\'s noise.' },
  { year: '2022', title: 'First Collection', description: 'Our debut collection of 8 reversible blazers sold out within 3 weeks.' },
  { year: '2023', title: 'The Atelier', description: 'We opened our dedicated atelier, bringing together 12 skilled artisans under one roof.' },
  { year: '2024', title: 'Going Global', description: 'DORI expanded to international markets, shipping to 15 countries across Asia and Europe.' },
  { year: '2025', title: 'Sustainable Pledge', description: 'We achieved carbon-neutral production and committed to zero-waste pattern cutting.' },
  { year: '2026', title: 'SS26 Collection', description: 'Our most ambitious collection yet — 24 pieces that redefine structured outerwear.' },
];

const TimelineSection = () => {
  return (
    <section className="py-24 lg:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Our Journey</p>
          <h2 className="text-3xl md:text-4xl font-normal">Built over time</h2>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`md:flex items-center md:py-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className="text-4xl font-serif text-border block mb-2">{m.year}</span>
                  <h3 className="text-lg font-medium mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{m.description}</p>
                </div>
                {/* Dot */}
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="w-3 h-3 rounded-full bg-foreground border-4 border-background relative z-10"
                  />
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
