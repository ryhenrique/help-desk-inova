
import React from 'react';
import SupportButton from '@/components/ui/support-button';

interface HeaderControlsProps {
  onSupportClick: () => void;
  isVisible: boolean;
}

const HeaderControls: React.FC<HeaderControlsProps> = ({ onSupportClick, isVisible }) => {
  return (
    <div 
      id="helpdesk-header-controls"
      className={`fixed top-2 sm:top-4 right-2 sm:right-4 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'
      }`}
    >
      <SupportButton onClick={onSupportClick}>
        Suporte
      </SupportButton>
    </div>
  );
};

export default HeaderControls;
