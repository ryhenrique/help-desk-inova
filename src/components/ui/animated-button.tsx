
import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, onClick, className = '' }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`
        relative overflow-hidden bg-slate-800 text-white border-none rounded-lg cursor-pointer
        font-medium text-lg px-11 py-4 font-medium transition-transform duration-200 active:scale-97
        ${className}
      `}
      style={{
        fontSize: '17px',
        padding: '1em 2.7em',
        fontWeight: 500
      }}
    >
      <span className="
        absolute w-0 h-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
        bg-emerald-500/60 rounded-full transition-all duration-500 ease-out
        hover:w-56 hover:h-56
      "></span>
      <span className="
        absolute w-full h-full left-0 top-0 rounded-lg -mt-1
        bg-gradient-to-b from-transparent via-transparent to-black/30
      "></span>
      <span className="relative -top-px">
        {children}
      </span>
    </button>
  );
};

export default AnimatedButton;
