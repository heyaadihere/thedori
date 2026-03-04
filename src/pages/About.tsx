import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import aboutHeroImage from '@/assets/about-hero.jpg';
import atelierImage from '@/assets/atelier.jpg';
import brandDetailImage from '@/assets/brand-detail.jpg';

const values = [
  {
    number: '01',
    title: 'Intentional Design',
    description: "Every detail serves a purpose. No excess, no filler — just design that works harder so you don't have to think about it.",
  },
  {
    number: '02',
    title: 'Reversible Construction',
    description: 'Two looks in one piece. Our reversible construction means your wardrobe doubles without the footprint.',
  },
  {
    number: '03',
    title: 'Premium Materials',
    description: 'We source fabrics that age with grace — getting softer, richer, and more personal with every wear.',
  },
  {
    number: '04',
    title: 'Structured Silhouettes',
    description: 'Our tailoring holds its shape so you can hold yours. Clean lines that command attention without demanding it.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
          <img src={aboutHeroImage} alt="DORI brand story" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-8 lg:p-16"
          >
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs tracking-[0.4em] uppercase text-primary-foreground/60 mb-3">Our Story</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-primary-foreground leading-[1.1]">
                Built on<br />restraint
              </h1>
            </div>
          </motion.div>
        </section>

        {/* Intro */}
        <section className="py-20 lg:py-28 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto max-w-3xl text-center"
          >
            <p className="text-lg md:text-xl leading-relaxed text-foreground font-light">
              DORI was born from a belief that the best design disappears into the wearer. We create structured outerwear for people who understand that real presence doesn't require volume — just intention.
            </p>
            <div className="w-12 h-[1px] bg-foreground/20 mx-auto mt-12" />
          </motion.div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 px-6 bg-secondary/50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Our Principles</p>
              <h2 className="text-3xl md:text-4xl font-normal">What guides us</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {values.map((value, i) => (
                <motion.div
                  key={value.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-t border-border pt-6"
                >
                  <span className="text-[10px] tracking-[0.3em] text-muted-foreground">{value.number}</span>
                  <h3 className="text-lg font-medium mt-2 mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Atelier */}
        <section className="py-20 lg:py-28 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">The Atelier</p>
                <h2 className="text-3xl md:text-4xl font-normal leading-[1.2] mb-6">
                  Where every<br />piece begins
                </h2>
                <div className="space-y-4 text-sm text-muted-foreground font-light leading-relaxed">
                  <p>
                    Our atelier is where raw materials become intention. Working with a small team of skilled artisans, every DORI piece passes through dozens of hands — each one adding a layer of craft that machines can't replicate.
                  </p>
                  <p>
                    From the first cut to the final press, we take our time. Because the kind of quality we're after doesn't come from rushing — it comes from caring about the details most people never see.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="aspect-[3/4] rounded overflow-hidden">
                  <img src={atelierImage} alt="DORI atelier" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="aspect-[3/4] rounded overflow-hidden mt-8">
                  <img src={brandDetailImage} alt="DORI detail" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default About;
