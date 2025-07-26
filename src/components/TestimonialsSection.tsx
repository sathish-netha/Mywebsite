import { Star, Users, MessageSquare } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            What my clients say about working with me
          </p>
        </div>
        
        {/* Placeholder Content */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 text-center space-y-8">
            <div className="flex justify-center">
              <div className="glass-button p-6 rounded-2xl">
                <MessageSquare size={48} className="text-primary" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold gradient-text">
                Client Feedback Coming Soon!
              </h3>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Your project could be the first featured here! I'm committed to delivering 
                exceptional results that speak for themselves.
              </p>
            </div>
            
            {/* Preview Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="glass-card p-6 space-y-4">
                <div className="flex justify-center">
                  <Users size={32} className="text-primary" />
                </div>
                <h4 className="font-semibold">Quality Work</h4>
                <p className="text-sm text-foreground/70">
                  Professional, clean code and beautiful designs
                </p>
              </div>
              
              <div className="glass-card p-6 space-y-4">
                <div className="flex justify-center">
                  <Star size={32} className="text-secondary" />
                </div>
                <h4 className="font-semibold">Free Support</h4>
                <p className="text-sm text-foreground/70">
                  Lifetime support included with every project
                </p>
              </div>
              
              <div className="glass-card p-6 space-y-4">
                <div className="flex justify-center">
                  <MessageSquare size={32} className="text-primary" />
                </div>
                <h4 className="font-semibold">Great Communication</h4>
                <p className="text-sm text-foreground/70">
                  Clear updates throughout the project lifecycle
                </p>
              </div>
            </div>
            
            <div className="pt-8">
              <a href="#contact" className="glass-button group inline-flex items-center gap-2">
                Be My First Review
                <Star size={16} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;