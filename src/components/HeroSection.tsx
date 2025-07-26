import { ArrowRight, Download } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import sathishPortrait from '@/assets/sathish-portrait.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 glass-card rounded-full float opacity-30" />
      <div className="absolute bottom-20 right-10 w-24 h-24 glass-card rounded-full float-delayed opacity-20" />
      <div className="absolute top-1/2 right-20 w-16 h-16 glass-card rounded-full float opacity-25" />
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Sathish Kumar</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-foreground/80 font-light">
                Power Platform Developer &
                <br />
                <span className="gradient-text">Web Development Expert</span>
              </h2>
            </div>
            
            <p className="text-xl text-foreground/70 max-w-2xl">
              I build business apps and websites that are sleek, functional, and affordable. 
              With 6 years of experience, I help businesses go digital with free full-time support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#services" className="glass-button group flex items-center gap-2 justify-center">
                View My Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="glass-button flex items-center gap-2 justify-center">
                Let's Work Together
              </a>
            </div>
            
            <div className="flex items-center gap-6 justify-center lg:justify-start text-foreground/60">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">6+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-sm">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>
          
          {/* Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="glass-card p-8 rounded-3xl">
                <img 
                  src={sathishPortrait} 
                  alt="Sathish Kumar" 
                  className="w-80 h-80 rounded-2xl object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 glass-card p-4 rounded-2xl">
                <div className="text-sm text-center">
                  <div className="font-bold gradient-text">Certified</div>
                  <div className="text-foreground/60">PL-600 & PL-900</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;