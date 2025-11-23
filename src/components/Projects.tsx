import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// EDIT THIS: Add your own projects here
const projects = [
  {
    id: 1,
    title: "AI-Powered Innovation",
    description: "Cutting-edge AI solution leveraging machine learning to solve complex problems with intelligent automation.",
    date: "May 2024 - Present",
    gradient: "from-blue-500 to-cyan-400",
    tags: ["Python", "TensorFlow", "React", "Node.js"],
    link: "#"
  },
  {
    id: 2,
    title: "Data Analytics Platform",
    description: "Comprehensive platform for data visualization and analysis with real-time insights and interactive dashboards.",
    date: "January 2024 - Present",
    gradient: "from-pink-500 to-rose-400",
    tags: ["Data Science", "Visualization", "Python", "SQL"],
    link: "#"
  },
  {
    id: 3,
    title: "Smart Application",
    description: "Innovative mobile application focused on enhancing user experience through intelligent features.",
    date: "March 2024 - August 2024",
    gradient: "from-green-500 to-emerald-400",
    tags: ["React Native", "Firebase", "UI/UX"],
    link: "#"
  },
  {
    id: 4,
    title: "Research Project",
    description: "Academic research exploring new methodologies and contributing to cutting-edge technological advancement.",
    date: "September 2023 - December 2023",
    gradient: "from-purple-500 to-violet-400",
    tags: ["Research", "Methodology", "Analysis"],
    link: "#"
  }
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
            Some notable projects and research I've worked on:
          </p>
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                
                {/* Icon placeholder - you can add specific icons per project */}
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
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary/90 p-0 h-auto font-medium group/btn"
                >
                  View More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
