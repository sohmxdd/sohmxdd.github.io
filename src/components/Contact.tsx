import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // EDIT THIS: Add your form submission logic here
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="code-accent">&lt;</span>
            Contact
            <span className="code-accent">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's work together! Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left column - Contact info */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-mono text-sm mb-4">// quick-contact.js</p>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                {/* EDIT THIS: Update with your contact information */}
                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a 
                      href="mailto:email@example.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      email@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a 
                      href="tel:+000000000000" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +00 000 000 0000
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-muted-foreground">
                      Your City, Country
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Code comment */}
            <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
              <p className="text-muted-foreground">
                <span className="text-code-green">// Open for opportunities</span>
              </p>
              <p className="text-muted-foreground mt-2">
                <span className="text-code-purple">const</span>{" "}
                <span className="text-code-blue">availability</span>{" "}
                <span>= </span>
                <span className="text-code-yellow">true</span>
                <span>;</span>
              </p>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  rows={6}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/50"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
