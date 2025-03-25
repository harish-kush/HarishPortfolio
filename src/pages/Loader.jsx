import React, { useState, useEffect } from "react";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return oldProgress + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="relative w-28 h-28">
        {/* Background Circle */}
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="6"
            fill="none"
          />
          {/* Animated Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#gradient)"
            strokeWidth="6"
            fill="none"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 - (progress / 100) * 251.2}
            strokeLinecap="round"
            className="transition-all duration-300 animate-glow"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#facc15" />
            </linearGradient>
          </defs>
        </svg>
        {/* Progress Text */}
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Loader;
