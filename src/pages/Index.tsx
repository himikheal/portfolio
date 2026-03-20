import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-background/80 backdrop-blur-sm">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <span className="font-display text-sm tracking-[0.2em] uppercase font-semibold">MZ</span>
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
        </div>
      </nav>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <footer className="py-8 px-6 text-center text-muted-foreground text-xs tracking-wider">
        © 2026 Michael Zhang
      </footer>
    </main>
  );
};

export default Index;
