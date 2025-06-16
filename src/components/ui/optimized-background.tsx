
import React from 'react';
import { motion } from 'framer-motion';

const OptimizedBackground = () => {
  const paths = React.useMemo(() => {
    const result = [];
    // Reduced number of paths for better performance
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 6; y++) {
        if (Math.random() > 0.8) {
          result.push({
            id: `grid-${x}-${y}`,
            d: `M${x * 80},${y * 80} L${(x + 1) * 80},${y * 80} L${(x + 1) * 80},${(y + 1) * 80} L${x * 80},${(y + 1) * 80} Z`,
            delay: Math.random() * 3,
          });
        }
      }
    }
    return result;
  }, []);

  return (
    <div className="absolute inset-0 text-slate-400/20 dark:text-slate-500/20">
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 800 480">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 10,
              delay: path.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default OptimizedBackground;
