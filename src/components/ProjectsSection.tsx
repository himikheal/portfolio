import { motion } from "framer-motion";

const projects = [
  {
    title: "Lumina",
    description: "A minimalist task management app with focus on clarity.",
    tags: ["React", "TypeScript", "Tailwind"],
    year: "2025",
  },
  {
    title: "Forma",
    description: "Design system and component library for modern web apps.",
    tags: ["Design Systems", "Figma", "Storybook"],
    year: "2024",
  },
  {
    title: "Verdant",
    description: "Sustainable e-commerce platform with carbon tracking.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    year: "2024",
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-16"
        >
          Selected Work
        </motion.h2>
        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border-b border-border pb-16 last:border-0 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-3xl md:text-4xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="text-muted-foreground text-sm mt-2">{project.year}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-lg">
                {project.description}
              </p>
              <div className="flex gap-3 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs tracking-wider uppercase text-muted-foreground border border-border px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
