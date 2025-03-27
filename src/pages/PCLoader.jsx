import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import React from "react";

const PCLoader = () => {
  const { progress } = useProgress();

  return (
    <Html as='div' center>
      <div className="flex flex-col items-center">
       
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full"
        />
    
        <motion.p
          className="mt-4 text-lg font-bold text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {progress.toFixed(0)}%
        </motion.p>
      </div>
    </Html>
  );
};

export default PCLoader;
