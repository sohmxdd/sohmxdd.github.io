const Skills = () => {
  const skills = {
    languages: ["Python", "JavaScript", "TypeScript", "C++"],
    frameworks: ["React", "TensorFlow", "Node.js", "Streamlit"],
    tools: ["Git", "Arduino", "Blender", "D3.js"],
    databases: ["MongoDB", "PostgreSQL"],
    specializations: ["Machine Learning", "Data Visualization", "Cinematics", "NLP"]
  };

  const skillBadges = [
    "Python", "React", "Machine Learning", "Blender", "Arduino", 
    "TensorFlow", "Git", "Data Visualization"
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="code-accent">&lt;</span>
            Skills
            <span className="code-accent">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A look inside my digital toolbox and the technologies I use.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Skill badges grid */}
          <div className="flex flex-wrap gap-3 justify-center">
            {skillBadges.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 font-mono text-sm hover:bg-primary/20 hover:scale-105 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Code block display */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
            {/* Mac-style window header */}
            <div className="bg-secondary px-4 py-3 flex items-center gap-2 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-code-yellow" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-2">skills.js</span>
            </div>

            {/* Code content */}
            <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="space-y-1">
                <div>
                  <span className="text-code-purple">const</span>{" "}
                  <span className="text-code-blue">developerSkills</span>{" "}
                  <span className="text-foreground">= {"{"}</span>
                </div>
                
                {/* Languages */}
                <div className="ml-4">
                  <span className="text-code-green">languages</span>
                  <span className="text-foreground">: [</span>
                </div>
                <div className="ml-8 flex flex-wrap gap-2">
                  {skills.languages.map((lang, i) => (
                    <span key={lang}>
                      <span className="text-code-orange">'{lang}'</span>
                      {i < skills.languages.length - 1 && <span className="text-foreground">,</span>}
                    </span>
                  ))}
                </div>
                <div className="ml-4">
                  <span className="text-foreground">],</span>
                </div>

                {/* Frameworks */}
                <div className="ml-4">
                  <span className="text-code-green">frameworks</span>
                  <span className="text-foreground">: [</span>
                </div>
                <div className="ml-8 flex flex-wrap gap-2">
                  {skills.frameworks.map((fw, i) => (
                    <span key={fw}>
                      <span className="text-code-orange">'{fw}'</span>
                      {i < skills.frameworks.length - 1 && <span className="text-foreground">,</span>}
                    </span>
                  ))}
                </div>
                <div className="ml-4">
                  <span className="text-foreground">],</span>
                </div>

                {/* Tools */}
                <div className="ml-4">
                  <span className="text-code-green">tools</span>
                  <span className="text-foreground">: [</span>
                </div>
                <div className="ml-8 flex flex-wrap gap-2">
                  {skills.tools.map((tool, i) => (
                    <span key={tool}>
                      <span className="text-code-orange">'{tool}'</span>
                      {i < skills.tools.length - 1 && <span className="text-foreground">,</span>}
                    </span>
                  ))}
                </div>
                <div className="ml-4">
                  <span className="text-foreground">],</span>
                </div>

                {/* Databases */}
                <div className="ml-4">
                  <span className="text-code-green">databases</span>
                  <span className="text-foreground">: [</span>
                </div>
                <div className="ml-8 flex flex-wrap gap-2">
                  {skills.databases.map((db, i) => (
                    <span key={db}>
                      <span className="text-code-orange">'{db}'</span>
                      {i < skills.databases.length - 1 && <span className="text-foreground">,</span>}
                    </span>
                  ))}
                </div>
                <div className="ml-4">
                  <span className="text-foreground">],</span>
                </div>

                {/* Specializations */}
                <div className="ml-4">
                  <span className="text-code-green">specializations</span>
                  <span className="text-foreground">: [</span>
                </div>
                <div className="ml-8 flex flex-wrap gap-2">
                  {skills.specializations.map((spec, i) => (
                    <span key={spec}>
                      <span className="text-code-orange">'{spec}'</span>
                      {i < skills.specializations.length - 1 && <span className="text-foreground">,</span>}
                    </span>
                  ))}
                </div>
                <div className="ml-4">
                  <span className="text-foreground">],</span>
                </div>

                {/* Closing */}
                <div className="ml-4">
                  <span className="text-code-green">continuousLearning</span>
                  <span className="text-foreground">: </span>
                  <span className="text-code-yellow">true</span>
                  <span className="text-foreground">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-code-green">problemSolver</span>
                  <span className="text-foreground">: </span>
                  <span className="text-code-yellow">true</span>
                  <span className="text-foreground">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-code-green">passionateAboutCode</span>
                  <span className="text-foreground">: </span>
                  <span className="text-code-yellow">true</span>
                  <span className="text-foreground">,</span>
                </div>
                <div>
                  <span className="text-foreground">{"}"};</span>
                </div>
                
                <div className="mt-4 text-muted-foreground">
                  <span>// Always improving and adding new skills!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
