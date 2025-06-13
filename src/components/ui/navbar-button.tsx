
import React from 'react';

interface NavbarButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ children, onClick, className = '' }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`
        relative px-5 py-2.5 rounded-lg border border-blue-500 text-sm uppercase font-semibold tracking-wider
        bg-transparent text-white overflow-hidden transition-all duration-200 ease-in
        hover:bg-blue-500 hover:shadow-[0_0_30px_5px_rgba(0,142,236,0.815)]
        active:shadow-none active:transition-[box-shadow] active:duration-200 active:ease-in
        before:content-[''] before:block before:w-0 before:h-[86%] before:absolute before:top-[7%] before:left-0 
        before:opacity-0 before:bg-white before:shadow-[0_0_50px_30px_white] before:transform before:skew-x-[-20deg]
        hover:before:animate-[shine_0.5s_0s_linear]
        ${className}
      `}
      style={{
        fontSize: '14px',
        padding: '10px 20px',
        fontWeight: 600,
        letterSpacing: '2px'
      }}
    >
      {children}
      <style jsx>{`
        @keyframes shine {
          from {
            opacity: 0;
            left: 0%;
          }
          50% {
            opacity: 1;
          }
          to {
            opacity: 0;
            left: 100%;
          }
        }
      `}</style>
    </button>
  );
};

export default NavbarButton;
