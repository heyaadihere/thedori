import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 48, suffix: 'hrs', label: 'Average crafting time per piece' },
  { value: 12, suffix: '', label: 'Artisans in our atelier' },
  { value: 97, suffix: '%', label: 'Repeat customer rate' },
  { value: 0, suffix: '', label: 'Unsold inventory - we produce on intent', displayValue: 'Zero' },
];

function AnimatedNumber({ value, suffix, displayValue }: { value: number; suffix: string; displayValue?: string }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView && !displayValue) {
      const controls = animate(count, value, { duration: 2, ease: 'easeOut' });
      const unsub = rounded.on('change', (v) => setDisplay(v));
      return () => { controls.stop(); unsub(); };
    }
  }, [inView, value, displayValue]);

  if (displayValue) {
    return <span ref={ref} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium">{displayValue}</span>;
  }

  return (
    <span ref={ref} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium">
      {display}{suffix}
    </span>
  );
}

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 border-y border-gold/20 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} displayValue={stat.displayValue} />
              <div className="luxury-divider w-8 mx-auto mt-3 md:mt-4 mb-2 md:mb-3" />
              <p className="text-xs md:text-sm text-muted-foreground font-light mt-2 md:mt-3 leading-relaxed max-w-[180px] mx-auto">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
