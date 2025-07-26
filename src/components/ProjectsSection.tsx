import { BadgeCheck, Code, Database, Zap, FileCode, Globe2, Terminal, Server, BarChart2, Cloud, Share2, GitBranch } from 'lucide-react';
import React, { useState } from 'react';

// Skill icon map
const skillIcons = {
  'React': FileCode,
  'TypeScript': Code,
  'Tailwind CSS': Globe2,
  'Node.js': Server,
  'Power Apps': Zap,
  'Dataverse': Database,
  'Power Automate': BarChart2,
  'SharePoint': Share2,
  'Azure': Cloud,
  'REST APIs': GitBranch,
  '.NET': Terminal,
  // Add more as needed
};

const sampleProjects = [
  {
    title: 'Business Analytics Dashboard',
    description: 'A modern web app for business analytics and reporting, featuring real-time data visualization and secure access.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    images: [
      'https://via.placeholder.com/400x250?text=Analytics+1',
      'https://via.placeholder.com/400x250?text=Analytics+2',
      'https://via.placeholder.com/400x250?text=Analytics+3',
    ],
  },
  {
    title: 'Power Platform CRM',
    description: 'A CRM solution built on Microsoft Power Platform, enabling efficient customer management and automation.',
    skills: ['Power Apps', 'Dataverse', 'Power Automate', 'SharePoint'],
    images: [
      'https://via.placeholder.com/400x250?text=CRM+1',
      'https://via.placeholder.com/400x250?text=CRM+2',
    ],
  },
  {
    title: 'Cloud Integration Suite',
    description: 'A robust integration suite for connecting cloud services and automating workflows.',
    skills: ['Azure', 'REST APIs', 'Node.js'],
    images: [
      'https://via.placeholder.com/400x250?text=Cloud+1',
      'https://via.placeholder.com/400x250?text=Cloud+2',
      'https://via.placeholder.com/400x250?text=Cloud+3',
      'https://via.placeholder.com/400x250?text=Cloud+4',
    ],
  },
  {
    title: 'Legacy Modernization',
    description: 'Transforming legacy business systems into modern, scalable web applications.',
    skills: ['.NET', 'React', 'TypeScript'],
    images: [
      'https://via.placeholder.com/400x250?text=Legacy+1',
    ],
  },
];

const ProjectsSection = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selectedProject = sampleProjects[selectedIdx];
  const [showPopup, setShowPopup] = useState(false);

  // Show popup after a delay
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // Show after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-24 relative">
      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
          <div className="p-4 pr-12 relative border border-green-500 shadow-2xl max-w-md bg-green-500 rounded-2xl">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors font-bold"
            >
              ✕
            </button>
            <div className="text-center">
              <div className="text-lg font-bold text-white mb-1">
                🎉 Limited Time Offer!
              </div>
              <p className="text-sm text-white">
                Be the first to book a consultation and get <span className="font-bold text-yellow-300">50% off</span> your first project!
              </p>
              <a
                href="#contact"
                className="inline-block mt-3 bg-white text-green-600 hover:bg-gray-100 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text" style={{letterSpacing: '0.01em'}}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Explore solutions built for business success. Select a project to see details and technologies used.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Project List */}
          <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-4 md:gap-2 mb-6 md:mb-0">
            {sampleProjects.map((project, idx) => (
              <button
                key={project.title}
                onClick={() => setSelectedIdx(idx)}
                className={`glass-card px-4 py-3 w-full text-left font-semibold transition-all duration-200 border-2 ${selectedIdx === idx ? 'ring-2 ring-primary/60 gradient-text border-primary/40 scale-105 shadow-xl' : 'hover:ring-1 hover:ring-primary/30 border-transparent'} hover:scale-105`}
                style={{minHeight: '64px'}}
              >
                {project.title}
                <div className="text-xs text-foreground/60 font-normal mt-1">{project.description.slice(0, 40)}...</div>
              </button>
            ))}
          </div>
          {/* Project Details & Images */}
          <div className="w-full md:w-3/4">
            {/* Project Description */}
            <div className="mb-4">
              <div className="glass-card p-4 text-lg font-medium text-foreground/90 shadow-md">
                {selectedProject.description}
              </div>
            </div>
            {/* Image Carousel */}
            <div className="overflow-x-auto mb-4">
              <div className="flex gap-6 pb-2 snap-x snap-mandatory px-2" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
                {selectedProject.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="glass-card min-w-[320px] max-w-[360px] flex-shrink-0 flex flex-col items-center p-2 transition-transform duration-300 hover:z-20 hover:scale-105 hover:shadow-2xl snap-center cursor-pointer border border-primary/10"
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <div className="relative w-full h-48 mb-2">
                      <img
                        src={img}
                        alt={selectedProject.title + ' ' + (imgIdx + 1)}
                        className="rounded-xl w-full h-full object-cover shadow-lg"
                        style={{ zIndex: 1 }}
                      />
                      {/* Glossy overlay */}
                      <div
                        className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none"
                        style={{
                          background: 'linear-gradient(120deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.10) 60%, rgba(255,255,255,0.05) 100%)',
                          zIndex: 2,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <style>{`
                .overflow-x-auto::-webkit-scrollbar { display: none; }
                .overflow-x-auto { -ms-overflow-style: none; scrollbar-width: none; }
              `}</style>
            </div>
            {/* Skills Used */}
            <div className="mt-2">
              <div className="flex flex-wrap gap-3 items-center">
                <span className="text-base font-semibold text-primary mr-2">Technologies Used:</span>
                {selectedProject.skills.map((skill, idx) => {
                  const Icon = skillIcons[skill] || BadgeCheck;
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 shadow-sm text-sm font-medium text-primary transition-all duration-200 hover:scale-105 hover:shadow-md"
                    >
                      <Icon size={16} className="text-primary" />
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;