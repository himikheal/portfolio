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
          I'm a software developer with a passion for learning and building well-crafted solutions.
          I'm committed to growing both technically and personally, always looking to improve as a{" "}
          <span className="text-primary"> developer </span> and{" "}
          <span className="text-primary"> collaborator</span>.
          I have a love for music and an interest in nutrition.
          If you'd like to connect or explore opportunities to collaborate, I'd love to hear from you.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
