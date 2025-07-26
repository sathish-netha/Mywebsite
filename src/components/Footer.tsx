import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <div className="text-2xl font-bold gradient-text">
            Sathish Kumar
          </div>
          
          {/* Tagline */}
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Power Platform Developer & Web Development Expert
            <br />
            Building digital solutions with care, one project at a time.
          </p>
          
          {/* Made with love */}
          <div className="flex items-center justify-center gap-2 text-foreground/60">
            <span>Made with</span>
            <Heart size={16} className="text-red-400 fill-current" />
            <span>,</span>
            <Code size={16} className="text-primary" />
            <span>and lots of</span>
            <Coffee size={16} className="text-amber-400" />
          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-sm text-foreground/60">
              © {currentYear} Sathish Kumar. All rights reserved.
            </p>
            <p className="text-xs text-foreground/40 mt-2">
              Free lifetime support included with all services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;