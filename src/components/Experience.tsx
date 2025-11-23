// EDIT THIS: Add your own experience entries
const experiences = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Tech Company",
    period: "June 2024 - Present",
    description: "Developing innovative solutions and contributing to cutting-edge projects.",
    achievements: [
      "Built scalable applications using modern tech stack",
      "Collaborated with cross-functional teams",
      "Improved system performance by 40%"
    ]
  },
  {
    id: 2,
    title: "Research Assistant",
    company: "University Research Lab",
    period: "January 2024 - May 2024",
    description: "Conducted research in artificial intelligence and machine learning.",
    achievements: [
      "Published research findings",
      "Developed novel algorithms",
      "Presented at conferences"
    ]
  },
  {
    id: 3,
    title: "Technical Consultant",
    company: "Freelance",
    period: "September 2023 - December 2023",
    description: "Provided technical consultation for various client projects.",
    achievements: [
      "Delivered 10+ successful projects",
      "Mentored junior developers",
      "Implemented best practices"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="code-accent">&lt;</span>
            Experience
            <span className="code-accent">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-ml-px" />

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s forwards`,
                  opacity: 0
                }}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    
                    <ul className={`space-y-2 text-sm ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background -ml-2 md:-ml-2 z-10" />

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
