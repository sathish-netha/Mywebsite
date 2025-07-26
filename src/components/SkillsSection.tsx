import { Badge, Code, Database, Zap, Globe, Award, Shield, Monitor, FileCode, Server, BarChart2, Cloud, Share2, GitBranch, Terminal, Globe2 } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Power Platform",
      icon: Zap,
      skills: [
        { name: "Power Apps", icon: Zap },
        { name: "Power Automate", icon: BarChart2 },
        { name: "Dataverse", icon: Database },
        { name: "Power BI", icon: BarChart2 }
      ]
    },
    {
      category: "Web Development",
      icon: Code,
      skills: [
        { name: "React", icon: FileCode },
        { name: "HTML/CSS/JS", icon: Globe2 }
      ]
    },
    {
      category: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "SQL Server", icon: Server },
        { name: "Azure", icon: Cloud },
        { name: "SharePoint", icon: Share2 },
        { name: "REST APIs", icon: GitBranch }
      ]
    }
  ];

  const certifications = [
    {
      name: "PL-600: Power Platform Solution Architect",
      icon: Award,
      color: "text-primary"
    },
    {
      name: "PL-900: Power Platform Fundamentals", 
      icon: Shield,
      color: "text-secondary"
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A comprehensive tech stack built over 6 years of professional experience
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-8 space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="glass-button p-3 rounded-xl">
                  <category.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              <ul className="space-y-2 pl-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-foreground/80 flex items-center gap-2">
                    <skill.icon size={16} className="text-primary" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8 gradient-text">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-card p-8 space-y-4">
                <div className="flex justify-center">
                  <div className="glass-button p-4 rounded-2xl">
                    <cert.icon size={32} className={cert.color} />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-center">{cert.name}</h4>
                <div className="flex justify-center">
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    Microsoft Certified
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;