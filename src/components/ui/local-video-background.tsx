
import React from 'react';

interface LocalVideoBackgroundProps {
  videoSrc: string;
  className?: string;
}

const LocalVideoBackground: React.FC<LocalVideoBackgroundProps> = ({ videoSrc, className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover"
          style={{
            pointerEvents: 'none'
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      </div>
      {/* Overlay gradiente para melhor legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
    </div>
  );
};

export default LocalVideoBackground;
