import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Ruler, Truck, Sparkles, MessageCircle } from 'lucide-react';

const services = [
  {
    icon: Ruler,
    title: 'Size Guide',
    description: 'Find your perfect fit with our detailed measurement guide.',
    href: '/size-guide',
    color: 'text-gold',
  },
  {
    icon: Truck,
    title: 'Shipping & Returns',
    description: 'Free shipping above ₹5,000. Easy 30-day returns.',
    href: '/shipping-returns',
    color: 'text-gold',
  },
  {
    icon: Sparkles,
    title: 'Care Instructions',
    description: 'Keep your DORI pieces looking perfect, season after season.',
    href: '/care-instructions',
    color: 'text-gold',
  },
  {
    icon: MessageCircle,
    title: 'Get in Touch',
    description: 'Questions? Our team is here to help with styling and orders.',
    href: '/contact',
    color: 'text-gold',
  },
];

const ServiceCards = () => {
  return (
    <section className="py-16 lg:py-24 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-4">At Your Service</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium font-serif">How Can We Help?</h2>
          <div className="luxury-divider w-16 mx-auto mt-5" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={service.href} className="group block p-6 lg:p-8 border border-border hover:border-gold/40 bg-background transition-all duration-500 hover:shadow-lg hover:shadow-gold/5 h-full">
                <service.icon className={`h-6 w-6 ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.2} />
                <h3 className="text-sm font-medium tracking-wider uppercase mb-2">{service.title}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{service.description}</p>
                <div className="mt-4 w-0 group-hover:w-8 h-[1px] bg-gold transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
