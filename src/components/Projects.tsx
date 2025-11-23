import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "LuminaScope",
    description: "ExoPlanet Detector using NASA's Kepler dataset to identify potential exoplanets with machine learning.",
    date: "2024",
    gradient: "from-blue-500 to-cyan-400",
    tags: ["Python", "Streamlit", "scikit-learn"],
    link: "https://github.com/sohmxdd/LuminaScope-Lite"
  },
  {
    id: 2,
    title: "Quoteify",
    description: "Mood-based music recommender that analyzes your current mood and suggests the perfect playlist.",
    date: "2024",
    gradient: "from-purple-500 to-violet-400",
    tags: ["React", "Node.js"],
    link: "https://github.com/sohmxdd/AI-Mood-Music"
  },
];

const wipProjects = [
  {
    id: 1,
    title: "SPIRAL — Personal AI Assistant",
    description: "A full AI voice assistant powered by Python and NLP with custom behaviour for personalized interactions.",
    gradient: "from-pink-500 to-rose-400",
    tags: ["Python", "NLP", "Rasa", "LLM APIs"],
  },
  {
    id: 2,
    title: "Arduino Gesture Interface",
    description: "Converts wrist motion into letters using gyroscope + Arduino Uno for gesture-based text input.",
    gradient: "from-green-500 to-emerald-400",
    tags: ["C++", "Arduino", "Sensors"],
  },
  {
    id: 3,
    title: "LearnRate",
    description: "An interactive app to visualise algorithms and data structures using step-by-step animations and performance insights.",
    gradient: "from-blue-500 to-cyan-400",
    tags: ["React", "D3.js", "Three.js"],
    link: "https://github.com/sohmxdd/learnrate"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="code-accent">&lt;</span>
            Projects
            <span className="code-accent">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Featured projects and works in progress — from machine learning tools to interactive interfaces.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 code-accent">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover-lift shadow-lg"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                {/* Gradient banner with decorative elements */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  {/* Decorative circles */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full" />
                  <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 rounded-full" />
                  <div className="absolute bottom-6 left-1/3 w-6 h-6 bg-white/30 rounded-full" />
                  <div className="absolute bottom-12 right-12 w-10 h-10 bg-white/15 rounded-full" />
                  
                  {/* Icon placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-30">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                </div>
                
                {/* Card content */}
                <div className="p-6 space-y-4">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{project.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View More link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                  >
                    View More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work in Progress */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 code-accent">Work in Progress</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {wipProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover-lift shadow-lg"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                {/* Gradient banner */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/20" />
                </div>
                
                {/* Card content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium text-sm"
                    >
                      View More
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
