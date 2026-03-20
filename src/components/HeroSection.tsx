import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-6"
        >
          Software Developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
        >
          Michael
          <br />
          <span className="text-muted-foreground">Zhang</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-muted-foreground text-lg max-w-md leading-relaxed font-body"
        >
          Building software I would use. Currently interested in full-stack development and machine learning.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex gap-6"
        >
          <a href="#work" className="text-primary text-sm tracking-widest uppercase hover:opacity-70 transition-opacity font-display">
            View Work ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
