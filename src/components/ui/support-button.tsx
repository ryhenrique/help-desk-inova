
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
          width: 131px;
          height: 51px;
          border-radius: 15px;
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
          width: 127px;
          height: 47px;
          border-radius: 13px;
          background-color: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #fff;
          font-weight: 600;
          font-size: 14px;
        }

        .user-profile-inner svg {
          width: 20px;
          height: 20px;
          fill: none;
          stroke: #fff;
          stroke-width: 2;
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
