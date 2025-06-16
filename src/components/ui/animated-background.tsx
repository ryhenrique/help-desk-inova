
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white" />
      
      {/* Animated circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '0s' }} />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '8s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '4s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
};

export default AnimatedBackground;
