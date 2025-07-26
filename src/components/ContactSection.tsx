import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download, Send, Calendar } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sathish@example.com',
      href: 'mailto:sathish@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 12345 67890',
      href: 'tel:+919701820970'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sathishkumar'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sathishkumar'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:sathish@example.com'
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Resume & <span className="gradient-text">Contact</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass-input w-full"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass-input w-full"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="glass-input w-full"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="glass-input w-full resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full glass-button group flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            
            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="/resume.pdf" 
                download
                className="glass-button group flex items-center justify-center gap-2 p-4"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a 
                href="https://calendly.com/sathishkumar" 
                className="glass-button group flex items-center justify-center gap-2 p-4"
              >
                <Calendar size={20} />
                Book Free Consultation
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-2xl font-bold gradient-text">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 glass-card hover:scale-105 transition-transform"
                  >
                    <div className="glass-button p-3 rounded-xl">
                      <info.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-foreground/60">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-2xl font-bold gradient-text">Connect With Me</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="glass-button group flex flex-col items-center gap-2 p-4 hover:scale-105 transition-transform"
                  >
                    <social.icon size={24} className="text-primary" />
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Availability */}
            <div className="glass-card p-8 space-y-4 bg-primary/10 border-primary/30">
              <h3 className="text-xl font-bold gradient-text">Availability</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Available for new projects</span>
                </div>
                <div className="text-sm text-foreground/70">
                  Response time: Within 24 hours
                </div>
                <div className="text-sm text-foreground/70">
                  Free consultation: 30 minutes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;