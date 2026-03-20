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
          href="mailto:business.mzhang@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-semibold hover:text-primary transition-colors"
        >
          business.mzhang@gmail.com
        </motion.a>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex gap-8"
        >
          {[
            { name: "GitHub", url: "https://github.com/himikheal/" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/michael-zhang-url/" },
            { name: "Resume", url: "/resume.pdf" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm tracking-wider uppercase hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
