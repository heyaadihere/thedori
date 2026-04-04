import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import bannerWaistcoat from '@/assets/banner-waistcoat.jpg';

const testimonials = [
  {
    quote: "I wore it from a 9am meeting straight to dinner. No outfit change. Three compliments before dessert.",
    author: "Priya M.",
    location: "Mumbai",
    rating: 5,
  },
  {
    quote: "The reversible feature is genius. My travel wardrobe just got halved. And it's hand-washable, which is a game-changer.",
    author: "Ananya R.",
    location: "Delhi",
    rating: 5,
  },
  {
    quote: "It feels like it was made for my life. Breathable in Mumbai heat, structured enough for client presentations.",
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
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={bannerWaistcoat} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-white/40 mb-4">Women Who Wear DORI</p>
          <div className="luxury-divider w-16 mx-auto mb-8 md:mb-12" />
        </motion.div>

        <div className="min-h-[180px] md:min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1.5 mb-6 md:mb-8">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 md:h-4 md:w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-base md:text-lg lg:text-xl xl:text-2xl font-light text-white leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto italic font-serif">
                "{testimonials[current].quote}"
              </blockquote>
              <p className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/50">
                {testimonials[current].author} - {testimonials[current].location}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8 md:mt-12">
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
