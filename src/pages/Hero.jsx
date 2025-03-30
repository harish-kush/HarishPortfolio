import { motion } from "framer-motion";
import { useState, useEffect, lazy, Suspense } from "react";
import PCLoader from "./PCLoader"; 

const PCModel = lazy(() => import("./PCModel"));

const Hero = () => {
  const text = "Hi, I'm Harish"; 
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100); 
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden pt-[4rem]">
      <div className="absolute inset-0 bg-blue-500 opacity-10 blur-3xl z-[-1]"></div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ fontFamily: "fh1" }}
        className="text-5xl md:text-7xl font-bold text-center"
      >
        {displayText}
        <span className="text-blue-400">|</span> 
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        style={{ fontFamily: "fh2" }}
        className="mt-4 text-lg md:text-xl text-center max-w-2xl px-6"
      >
        A passionate <span className="text-blue-400 font-semibold">Developer</span> crafting seamless, interactive, and transforming ideas into reality with creativity🚀✨
      </motion.p>

      <div className="w-full h-[50vh] flex justify-center items-center">
          <PCModel />
      </div>

      <div 
        className="w-[7vh] h-[7vh] md:h-[10vh] md:w-[7vh] border border-blue-400 rounded-full flex justify-center items-center relative cursor-pointer mt-4"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        <motion.div
          className="w-2 h-2 bg-blue-400 rounded-full shadow-lg"
          animate={{ 
            y: [0, 12, 0], 
            opacity: [0.3, 1, 0.3], 
            scale: [1, 1.2, 1] 
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1 w-1 h-6 md:h-8 bg-blue-400 rounded-full"
          animate={{ height: [6, 12, 6], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
