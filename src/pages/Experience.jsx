import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const timelineData = [
  {
    type: "education",
    year: "2022 - 2026",
    title: "B.Tech in Electronics & Communication",
    institution: "MANIT Bhopal",
    description: "Currently pursuing my Bachelor's degree with a strong focus on development and problem-solving skills."
  },
  {
    type: "experience",
    year: "2024 - Present",
    title: "Technical Executive - Aaroha",
    institution: "Aaroha, MANIT Bhopal",
    description: "Worked on Aaroha's app and website, implementing interactive UI and seamless navigation where I learned alot about Flutter and Dart."
  },
  {
    type: "experience",
    year: "2024 - Present",
    title: "Frontend Developer - FiNIT",
    institution: "Finance Society, MANIT Bhopal",
    description: "Developed and maintaining the official website of FiNIT where I learned alot about using React, GSAP, and TailwindCSS."
  },
];

const Experience = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500 opacity-30 blur-3xl top-10 left-10"></div>
        <div className="absolute w-80 h-80 bg-purple-500 opacity-40 blur-3xl bottom-10 right-20"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{fontFamily:'fh1'}}
        className="text-5xl font-bold text-center mb-16 relative z-10 text-blue-400"
      >
        My Journey
      </motion.h2>

      <div className="relative flex flex-col items-center space-y-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative flex items-center w-full max-w-3xl ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <div className="absolute w-1 h-full bg-blue-400 left-1/2 transform -translate-x-1/2"></div>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white z-10 shadow-xl">
              {item.type === "education" ? <FaGraduationCap size={24} /> : <FaBriefcase size={24} />}
            </div>
            <div style={{fontFamily:'fh2'}} className={`w-80 p-6 bg-gray-800 rounded-lg shadow-lg z-10 ${index % 2 === 0 ? "ml-6" : "mr-6"}`}>
              <h3 className="text-xl font-bold text-blue-300">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.institution}</p>
              <p className="text-sm text-gray-400 mt-2">{item.year}</p>
              <p className="text-gray-300 mt-3">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;