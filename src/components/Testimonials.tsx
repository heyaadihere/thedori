import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import bannerWaistcoat from '@/assets/banner-waistcoat.jpg';

const testimonials = [
  {
    quote: "The structured blazer became the anchor of my wardrobe overnight. Nothing else comes close to this level of quiet confidence.",
    author: "Priya M.",
    location: "Mumbai",
    rating: 5,
  },
  {
    quote: "I've never owned a piece that receives so many compliments without trying. The reversible construction is genius — two looks, zero compromise.",
    author: "Ananya R.",
    location: "Delhi",
    rating: 5,
  },
  {
    quote: "DORI understands that luxury isn't about logos. It's about how a piece makes you feel when you put it on. Impeccable craftsmanship.",
    author: "Meera K.",
    location: "Bangalore",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={bannerWaistcoat} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-white/40 mb-4">What They Say</p>
          <div className="luxury-divider w-16 mx-auto mb-12" />
        </motion.div>

        <div className="min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1.5 mb-8">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl lg:text-2xl font-light text-white leading-relaxed mb-8 max-w-2xl mx-auto italic font-serif">
                "{testimonials[current].quote}"
              </blockquote>
              <p className="text-xs tracking-[0.3em] uppercase text-white/50">
                {testimonials[current].author} — {testimonials[current].location}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === current ? 'bg-gold w-8' : 'bg-white/20 w-2'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
