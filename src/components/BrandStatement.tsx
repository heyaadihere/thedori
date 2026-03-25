import { motion } from 'framer-motion';

const BrandStatement = () => {
  return (
    <section className="py-28 lg:py-40 px-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="luxury-divider w-16 mx-auto mb-12" />
        <p className="text-xs tracking-[0.5em] uppercase text-gold/70 mb-10">
          Our Philosophy
        </p>
        <blockquote className="text-3xl md:text-4xl lg:text-5xl leading-[1.3] font-light italic text-foreground font-serif">
          "Good design doesn't shout.<br />It works."
        </blockquote>
        <p className="mt-10 text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed font-light">
          Every DORI piece is built on restraint — intentional cuts, reversible construction, and finishes that feel as good on the inside as they look on the outside.
        </p>
        <div className="luxury-divider w-16 mx-auto mt-12" />
      </motion.div>
    </section>
  );
};

export default BrandStatement;
