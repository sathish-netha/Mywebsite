import { MessageCircle, Check, Star, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

const ServicesSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      title: "Landing Page Website",
      description: "1-2 section static site",
      price: "₹1,999",
      features: ["Responsive Design", "Contact Form", "SEO Optimized", "Mobile Friendly"],
      popular: false,
      comingSoon: true
    },
    {
      title: "Business Website",
      description: "4-5 pages with contact form",
      price: "₹4,999", 
      features: ["Multi-page Design", "Contact Forms", "Gallery/Portfolio", "Admin Panel", "SEO Ready"],
      popular: true,
      comingSoon: true
    },
    {
      title: "Power Apps – Basic",
      description: "1 screen, 1 data source",
      price: "₹2,999",
      features: ["Single Screen App", "One Data Source", "Basic CRUD", "Mobile Ready"],
      popular: false,
      comingSoon: false
    },
    {
      title: "Power Apps – Standard",
      description: "3 screens, CRUD, automation",
      price: "₹6,999",
      features: ["Multi-screen App", "CRUD Operations", "Power Automate", "User Management"],
      popular: false,
      comingSoon: false
    },
    {
      title: "Power Platform – Full App",
      description: "Role-based, multi-source, workflows",
      price: "₹12,000+",
      features: ["Role-based Access", "Multiple Data Sources", "Complex Workflows", "Advanced Features"],
      popular: false,
      comingSoon: false
    },
    {
      title: "Website Maintenance",
      description: "Ongoing updates/support",
      price: "₹999/month",
      features: ["Regular Updates", "Bug Fixes", "Content Updates", "Performance Monitoring"],
      popular: false,
      comingSoon: false
    }
  ];

  const handleGetStarted = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello! I'm interested in your ${selectedService} service.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}

I found this service on your portfolio website.`;

    const whatsappUrl = `https://wa.me/+919701820970?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowForm(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const benefits = [
    "No upfront fees for small businesses",
    "Free 30-minute consultation",
    "Client-first approach, always",
    "Free lifetime support for all clients"
  ];

  return (
    <section id="services" className="py-24 relative">
      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-foreground/60 hover:text-foreground"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Get Started with {selectedService}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="glass-input w-full"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="glass-input w-full"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="glass-input w-full"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="glass-input w-full h-24 resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full glass-button group flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Send to WhatsApp
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Freelance <span className="gradient-text">Services & Pricing</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto mb-8">
            Offering affordable digital services with free full-time support — because quality shouldn't be expensive.
          </p>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-4 text-center">
                <Check className="mx-auto mb-2 text-primary" size={20} />
                <p className="text-sm text-foreground/80">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className={`glass-card p-8 relative ${service.popular ? 'ring-2 ring-primary/50' : ''}`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star size={16} />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-foreground/70 mb-4">{service.description}</p>
                <div className="text-3xl font-bold gradient-text">{service.price}</div>
              </div>
              
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="text-primary" size={16} />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              {service.comingSoon ? (
                <button className="w-full glass-button group flex items-center justify-center gap-2 opacity-60 cursor-not-allowed" disabled>
                  Coming Soon
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button 
                  onClick={() => handleGetStarted(service.title)}
                  className="w-full glass-button group flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center space-y-8">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Need a Custom Solution?</h3>
            <p className="text-foreground/70 mb-6">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleGetStarted('Custom Solution')}
                className="glass-button flex items-center gap-2 justify-center"
              >
                Get a Custom Quote
                <ArrowRight size={20} />
              </button>
              <a href="https://wa.me/+919701820970" className="glass-button flex items-center gap-2 justify-center">
                <MessageCircle size={20} />
                WhatsApp Chat
              </a>
            </div>
          </div>
          
          {/* Free Support Highlight */}
          <div className="glass-card p-6 max-w-2xl mx-auto bg-primary/10 border-primary/30">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-2xl">🆓</div>
              <h4 className="text-xl font-bold gradient-text">Free Lifetime Support</h4>
            </div>
            <p className="text-foreground/80">
              All clients receive free ongoing support for the lifetime of their project. No hidden costs, ever.
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/+919701820970" 
        className="fixed bottom-6 right-6 glass-button p-4 rounded-full z-40 hover:scale-110 transition-transform"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={24} className="text-primary" />
      </a>
    </section>
  );
};

export default ServicesSection;