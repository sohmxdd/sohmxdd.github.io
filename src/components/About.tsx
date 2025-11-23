const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column - Bio */}
          <div className="space-y-6">
            <p className="text-primary font-mono text-sm">// about-me.js</p>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="code-accent">&lt;</span>
              About Me
              <span className="code-accent">/&gt;</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate developer with a keen interest in creating innovative solutions 
                that make a real-world impact. My journey in tech has been driven by curiosity 
                and a desire to push boundaries.
              </p>
              
              <p>
                With experience spanning from AI and machine learning to full-stack development, 
                I enjoy tackling complex challenges and transforming ideas into elegant, 
                functional applications.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
              
              <p>
                I believe in continuous learning and staying at the forefront of technological 
                innovation. My goal is to create solutions that not only solve problems but also 
                inspire others in the tech community.
              </p>
            </div>
          </div>
          
          {/* Right column - Code window with polaroid */}
          <div className="relative">
            {/* Mac-style code window */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xl">
              {/* Window header */}
              <div className="bg-secondary px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive hover:brightness-110 transition-all cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-code-yellow hover:brightness-110 transition-all cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-primary hover:brightness-110 transition-all cursor-pointer" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">developer.jpg</span>
              </div>
              
              {/* Polaroid-style image container */}
              <div className="p-8 relative">
                <div className="bg-white p-4 shadow-2xl transform hover:rotate-2 hover:scale-105 transition-all duration-300 cursor-pointer relative group">
                  {/* Placeholder image - EDIT THIS */}
                  <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/40 flex items-center justify-center text-muted-foreground">
                    <div className="text-center space-y-2">
                      <p className="text-sm font-mono">Replace with</p>
                      <p className="text-sm font-mono">your photo</p>
                      <p className="text-xs opacity-60">src/assets/developer.jpg</p>
                    </div>
                  </div>
                  
                  {/* Polaroid caption */}
                  <p className="text-center mt-3 font-mono text-sm text-gray-800">
                    &lt;Developer/&gt;
                  </p>
                  
                  {/* Green corner accent */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
