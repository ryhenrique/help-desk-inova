
import React from 'react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import SupportButton from '@/components/ui/support-button';

interface HeaderControlsProps {
  onSupportClick: () => void;
}

const HeaderControls: React.FC<HeaderControlsProps> = ({ onSupportClick }) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-3">
      <ThemeToggle />
      <SupportButton onClick={onSupportClick}>
        Suporte
      </SupportButton>
    </div>
  );
};

export default HeaderControls;
