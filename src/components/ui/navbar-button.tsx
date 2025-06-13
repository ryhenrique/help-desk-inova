
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
    <>
      <style>{`
        @keyframes sh02 {
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
        .navbar-button:hover::before {
          animation: sh02 0.5s 0s linear;
        }
        .navbar-button::before {
          content: '';
          display: block;
          width: 0px;
          height: 86%;
          position: absolute;
          top: 7%;
          left: 0%;
          opacity: 0;
          background: #fff;
          box-shadow: 0 0 50px 30px #fff;
          transform: skewX(-20deg);
        }
      `}</style>
      <button 
        onClick={handleClick}
        className={`
          navbar-button relative px-5 py-2.5 rounded-lg border border-blue-500 text-sm uppercase font-semibold tracking-wider
          bg-transparent text-white overflow-hidden transition-all duration-200 ease-in
          hover:bg-blue-500 hover:shadow-[0_0_30px_5px_rgba(0,142,236,0.815)]
          active:shadow-none active:transition-[box-shadow] active:duration-200 active:ease-in
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
      </button>
    </>
  );
};

export default NavbarButton;
