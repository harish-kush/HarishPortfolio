import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const welcomeText = "Welcome to Harish's Portfolio";

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.035,
      },
    },
  };

  const charVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const handleLoad = () => setLoaded(true);
    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [loaded, onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-12 z-50 transition-opacity duration-500">
      
      <motion.div
        className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
        animate={{ rotateY: [0, 360] }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <span className="text-white text-3xl font-extrabold">H</span>
      </motion.div>

      <motion.h1
        className="text-white text-4xl md:text-5xl font-bold tracking-wide flex flex-wrap justify-center"
        variants={containerVariants}
        initial="initial"
        animate={progress > 5 ? "animate" : "initial"}
      >
        {welcomeText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden relative">
        
        <div className="h-full bg-gray-800 absolute inset-0 rounded-full" />
        
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 absolute inset-0 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-white text-2xl font-extrabold tracking-wide drop-shadow-lg">
        {Math.floor(progress)}%
      </p>
    </div>
  );
};

export default Loader;
