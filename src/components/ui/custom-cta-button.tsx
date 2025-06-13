
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
          padding: 16px 32px;
          background-color: #006aff;
          border: 8px solid #c0dfff;
          color: white;
          gap: 8px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .custom-cta-text {
          font-size: 1.7em;
          font-weight: 700;
          letter-spacing: 1px;
        }
        
        .custom-cta-svg {
          padding-top: 5px;
          height: 100%;
          width: fit-content;
        }
        
        .custom-cta-svg svg {
          width: 50px;
          height: 30px;
        }
        
        .custom-cta-button:hover {
          border: 8px solid #b1d8ff;
          background-color: #1b7aff;
        }
        
        .custom-cta-button:active {
          border: 5px solid #c0dfff;
        }
        
        .custom-cta-button:hover .custom-cta-svg svg {
          animation: jello-vertical 0.9s both;
          transform-origin: left;
        }

        @keyframes jello-vertical {
          0% {
            transform: scale3d(1, 1, 1);
          }
          30% {
            transform: scale3d(0.75, 1.25, 1);
          }
          40% {
            transform: scale3d(1.25, 0.75, 1);
          }
          50% {
            transform: scale3d(0.85, 1.15, 1);
          }
          65% {
            transform: scale3d(1.05, 0.95, 1);
          }
          75% {
            transform: scale3d(0.95, 1.05, 1);
          }
          100% {
            transform: scale3d(1, 1, 1);
          }
        }
      `}</style>
      <button 
        onClick={onClick}
        className={`custom-cta-button ${className}`}
      >
        <span className="custom-cta-text">{children}</span>
        <div className="custom-cta-svg">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </button>
    </>
  );
};

export default CustomCtaButton;
