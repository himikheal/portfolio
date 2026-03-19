import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-background/80 backdrop-blur-sm">
        <span className="font-display text-sm tracking-[0.2em] uppercase font-semibold">AM</span>
        <div className="flex gap-8">
          {["Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground text-xs tracking-[0.2em] uppercase hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <footer className="py-8 px-6 text-center text-muted-foreground text-xs tracking-wider">
        © 2025 Alex Morgan
      </footer>
    </main>
  );
};

export default Index;
