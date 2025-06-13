
import React from 'react';

interface CustomCtaButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const CustomCtaButton: React.FC<CustomCtaButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <>
      <style>{`
        .custom-cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          background-color: #006aff;
          border: 6px solid #c0dfff;
          color: white;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
          margin: 0 auto;
        }
        
        .custom-cta-text {
          font-size: 1.3em;
          font-weight: 700;
          letter-spacing: 1px;
        }
        
        .custom-cta-button:hover {
          border: 6px solid #b1d8ff;
          background-color: #1b7aff;
        }
        
        .custom-cta-button:active {
          border: 4px solid #c0dfff;
        }
      `}</style>
      <button 
        onClick={onClick}
        className={`custom-cta-button ${className}`}
      >
        <span className="custom-cta-text">{children}</span>
      </button>
    </>
  );
};

export default CustomCtaButton;
