
import React from 'react';
import { useTheme } from '@/components/ui/theme-provider';

interface FixedLogoProps {
  isVisible: boolean;
}

const FixedLogo: React.FC<FixedLogoProps> = ({ isVisible }) => {
  const { theme } = useTheme();
  
  const isDarkMode = React.useMemo(() => 
    theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches),
    [theme]
  );

  const logoSrc = "/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png";

  return (
    <div 
      className={`fixed top-2 sm:top-4 left-2 sm:left-4 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'
      }`}
    >
      <img 
        src={logoSrc}
        alt="Help Desk Inova" 
        className={`h-5 sm:h-6 md:h-7 lg:h-8 w-auto ${isDarkMode ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
};

export default FixedLogo;
