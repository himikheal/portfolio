import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-12"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-display leading-snug font-light"
        >
          I'm a designer and developer who believes great products come from the intersection of{" "}
          <span className="text-primary">restraint</span> and{" "}
          <span className="text-primary">intention</span>. With 8+ years of experience, I help teams ship products that feel effortless.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
