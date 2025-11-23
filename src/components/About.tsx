import developerImage from "@/assets/developer.jpg";

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
                Hey, I'm Soham — a developer who loves mixing engineering and creativity.
                I build machine learning tools, cinematic interfaces, and aesthetic user experiences.
              </p>
              
              <p>
                Currently working on SPIRAL — my personal AI assistant — and exploring advanced ML concepts.
                I enjoy experimenting with Python, React, Blender, and Arduino to bring ideas to life.
              </p>
              
              <p>
                When I'm not coding, you'll find me creating cinematic content, learning new algorithms,
                or building gesture-controlled interfaces. Always exploring the intersection of technology and art.
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
                  {/* Developer image */}
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={developerImage} 
                      alt="Soham Mishra" 
                      className="w-full h-full object-cover"
                    />
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
