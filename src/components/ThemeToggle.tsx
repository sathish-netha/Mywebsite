import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="glass-button p-3 rounded-xl group relative overflow-hidden"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-5 h-5">
        {/* Sun icon for light mode */}
        <Sun 
          size={20} 
          className={`absolute inset-0 transition-all duration-500 transform ${
            theme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-180 scale-0 opacity-0'
          }`} 
        />
        
        {/* Moon icon for dark mode */}
        <Moon 
          size={20} 
          className={`absolute inset-0 transition-all duration-500 transform ${
            theme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-180 scale-0 opacity-0'
          }`} 
        />
      </div>
      
      {/* Glow effect */}
      <div 
        className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
          theme === 'light' 
            ? 'bg-amber-400/20 opacity-0 group-hover:opacity-100' 
            : 'bg-blue-400/20 opacity-0 group-hover:opacity-100'
        }`} 
      />
    </button>
  );
};

export default ThemeToggle;