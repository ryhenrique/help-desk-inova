
import React from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';

interface TypewriterTextProps {
  words: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  className = '',
  speed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000
}) => {
  const text = useTypewriter({ words, speed, deleteSpeed, delayBetweenWords });

  return (
    <span className={`relative ${className}`}>
      {text}
      <span className="animate-pulse text-blue-600 ml-1">|</span>
    </span>
  );
};

export default TypewriterText;
