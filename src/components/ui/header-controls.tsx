
import React from 'react';
import SupportButton from '@/components/ui/support-button';

interface HeaderControlsProps {
  onSupportClick: () => void;
}

const HeaderControls: React.FC<HeaderControlsProps> = ({ onSupportClick }) => {
  return (
    <div className="fixed top-2 sm:top-4 right-2 sm:right-4 z-50">
      <SupportButton onClick={onSupportClick} className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
        Suporte
      </SupportButton>
    </div>
  );
};

export default HeaderControls;
