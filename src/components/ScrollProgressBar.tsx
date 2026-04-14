import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, hsl(38 65% 50% / 0.6), hsl(38 65% 50%), hsl(40 55% 70% / 0.8))',
      }}
    />
  );
};

export default ScrollProgressBar;
