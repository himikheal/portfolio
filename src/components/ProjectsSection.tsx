import { motion } from "framer-motion";

const projects: {
  title: string;
  description: string;
  tags: string[];
  year?: string;
  url?: string;
}[] = [
  {
    title: "Slicc",
    description:
      "A mobile app for splitting expenses and coordinating group events built with React Native, Expo, and Firebase. Supports group management, recurring event scheduling, itemized expense splitting with flexible split modes, and a real-time notification system for group invites and reminders, all backed by a structured Firestore schema.",
    tags: ["React Native", "Expo", "TypeScript", "Firebase", "NativeWind"],
    url: "https://github.com/mac-capstone/slicc",
  },
  {
    title: "Habit Together",
    description:
      "A React Native habit tracking app built with Firebase and TypeScript that lets users monitor and maintain daily habits. Worked within a 7-member agile team to design an intuitive interface that makes tracking collaborative habits feel effortless.",
    tags: ["React Native", "Nativewind", "Firebase", "TypeScript"],
    url: "https://github.com/habits-together/app",
  },
  {
    title: "DuberChat",
    description:
      "A full-stack chat application built in Java where clients communicate with a multi-threaded server over sockets. Features include user authentication, global and private chat rooms, a friend system, and persistent file-based storage, all rendered through a Java Swing interface.",
    tags: ["Java", "Java Swing"],
    url: "https://github.com/himikheal/duberChat",
  },
  {
    title: "Slackfish",
    description:
      "A CNN with residual blocks trained to regress Stockfish evaluations directly from bitboard-encoded FEN positions. Built a memory-efficient preprocessing pipeline over 9 million positions and integrated the model into a custom chess engine with automated gameplay, pushing evaluation accuracy from 35% to 80%.",
    tags: ["Python", "PyTorch", "NumPy", "sklearn"],
    url: "https://github.com/leungt30/slackfish",
  },
  {
    title: "OpenGL Planets",
    description:
      "A 3D solar system visualization in C++ where cube-based planets animate through hierarchical transforms. Built with custom shaders, VAO/VBO abstractions, texture mapping, lighting, and interactive camera controls using OpenGL.",
    tags: ["C++", "OpenGL"],
    url: "https://github.com/himikheal/OpenGL-Planets",
  },
  {
    title: "Stellar Structure Simulation",
    description:
      "A C++ solver that models stellar mass distribution and hydrostatic equilibrium by integrating coupled ODEs using a 4th-order Runge-Kutta algorithm. Simulation results are visualized in real time via the pgplot library, with a custom Makefile handling the full build in a single step.",
    tags: ["C++", "cpgplot"],
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
              className="group border-b border-border pb-16 last:border-0"
            >
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display text-3xl md:text-4xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.year && (
                      <span className="text-muted-foreground text-sm mt-2">
                        {project.year}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs tracking-wider uppercase text-muted-foreground border border-border px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ) : (
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display text-3xl md:text-4xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.year && (
                      <span className="text-muted-foreground text-sm mt-2">
                        {project.year}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs tracking-wider uppercase text-muted-foreground border border-border px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
