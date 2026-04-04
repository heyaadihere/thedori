import { motion } from 'framer-motion';

const BrandStatement = () => {
  return (
    <section className="py-20 md:py-28 lg:py-40 px-4 md:px-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="luxury-divider w-16 mx-auto mb-8 md:mb-12" />
        <p className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase text-gold/70 mb-8 md:mb-10">
          Designed with Intention
        </p>
        <blockquote className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.3] font-light italic text-foreground font-serif">
          "Everyday luxury jackets for<br />women who don't have time<br />to change but always want to<br />look put-together."
        </blockquote>
        <p className="mt-8 md:mt-10 text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed font-light">
          Western silhouettes meet premium Indian fabrics. Confident, expressive, and naturally polished.
        </p>
        <div className="luxury-divider w-16 mx-auto mt-8 md:mt-12" />
      </motion.div>
    </section>
  );
};

export default BrandStatement;
