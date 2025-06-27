
import React from 'react';

interface YouTubeBackgroundProps {
  videoId: string;
  className?: string;
}

const YouTubeBackground: React.FC<YouTubeBackgroundProps> = ({ videoId, className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=1`}
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
          allow="autoplay; encrypted-media"
          title="Background Video"
          style={{
            border: 'none',
            pointerEvents: 'none'
          }}
        />
      </div>
      {/* Overlay para garantir legibilidade do conteúdo */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
    </div>
  );
};

export default YouTubeBackground;
