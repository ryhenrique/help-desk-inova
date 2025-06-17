
import React from 'react';
import { Headphones } from 'lucide-react';

interface SupportButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const SupportButton: React.FC<SupportButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <>
      <style>{`
        .user-profile {
          width: clamp(100px, 25vw, 131px);
          height: clamp(38px, 10vw, 51px);
          border-radius: clamp(8px, 3vw, 15px);
          cursor: pointer;
          transition: 0.3s ease;
          background: linear-gradient(
            to bottom right,
            #2e8eff 0%,
            rgba(46, 142, 255, 0) 30%
          );
          background-color: rgba(46, 142, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .user-profile:hover,
        .user-profile:focus {
          background-color: rgba(46, 142, 255, 0.7);
          box-shadow: 0 0 10px rgba(46, 142, 255, 0.5);
          outline: none;
        }

        .user-profile-inner {
          width: calc(100% - 4px);
          height: calc(100% - 4px);
          border-radius: clamp(6px, 2.5vw, 13px);
          background-color: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(4px, 2vw, 10px);
          color: #fff;
          font-weight: 600;
          font-size: clamp(10px, 3vw, 14px);
        }

        .user-profile-inner svg {
          width: clamp(14px, 4vw, 20px);
          height: clamp(14px, 4vw, 20px);
          fill: none;
          stroke: #fff;
          stroke-width: 2;
        }

        @media (max-width: 640px) {
          .user-profile {
            width: 90px;
            height: 35px;
          }
          
          .user-profile-inner {
            font-size: 10px;
            gap: 4px;
          }
          
          .user-profile-inner svg {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>
      <button 
        onClick={onClick}
        className={`user-profile ${className}`}
      >
        <div className="user-profile-inner">
          <Headphones />
          <span>{children}</span>
        </div>
      </button>
    </>
  );
};

export default SupportButton;
