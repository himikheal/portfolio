import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-12"
        >
          Get in Touch
        </motion.h2>
        <motion.a
          href="mailto:hello@alexmorgan.dev"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-semibold hover:text-primary transition-colors"
        >
          hello@alexmorgan.dev
        </motion.a>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex gap-8"
        >
          {["GitHub", "LinkedIn", "Twitter"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-muted-foreground text-sm tracking-wider uppercase hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
