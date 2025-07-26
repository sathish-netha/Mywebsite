import { Award, Heart, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "Certified Professional",
      description: "Microsoft Power Platform certified with PL-600 & PL-900"
    },
    {
      icon: Heart,
      title: "Client-First Approach",
      description: "Free lifetime support and affordable pricing for all clients"
    },
    {
      icon: Users,
      title: "Business Focused",
      description: "Helping individuals and businesses go digital efficiently"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            My journey as a Power Platform Developer & Web Development Expert
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold gradient-text">My Story</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With over 6 years of experience in the digital space, I've dedicated my career to 
                helping businesses transform their operations through technology. My expertise spans 
                across Microsoft Power Platform and modern web development.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                What sets me apart is my commitment to affordability and ongoing support. I believe 
                quality digital solutions shouldn't break the bank, which is why I offer competitive 
                pricing with free lifetime support for all my clients.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">Core Skills</h4>
              <div className="grid grid-cols-2 gap-3">
                {['Power Apps', 'Power Automate', 'Dataverse', 'HTML/CSS/JS'].map((skill) => (
                  <div key={skill} className="skill-badge text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">My Mission</h4>
              <p className="text-foreground/80 italic">
                "Helping individuals and businesses go digital — on a budget, with care."
              </p>
            </div>
          </div>
          
          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="glass-card p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="glass-button p-3 rounded-xl">
                    <highlight.icon size={24} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">{highlight.title}</h4>
                </div>
                <p className="text-foreground/70">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;