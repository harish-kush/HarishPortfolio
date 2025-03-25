import { motion } from "framer-motion";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import git from "../assets/tech/git.png";
import javascript from "../assets/tech/javascript.png";
import mongodb from "../assets/tech/mongodb.png";
import nodejs from "../assets/tech/nodejs.png";
import reactjs from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import threejs from "../assets/tech/threejs.svg";
import dart from "../assets/tech/dart1.png"
import flutter from "../assets/tech/flutter.png"
import gsap from "../assets/tech/gsap.png"
import c from "../assets/tech/c.png"
import c2 from "../assets/tech/c2.png"
import github from "../assets/tech/github.png"
import express from "../assets/tech/express.webp"
import { img } from "framer-motion/client";

const skills = [
  {name: "C", img:c},
  {name: "C++", img:c2},
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: javascript },
  { name: "React", img: reactjs },
  {name:"Dart",img: dart},
  {name:"Flutter",img: flutter},
  {name:"GSAP",img:gsap},
  { name: "Three.js", img: threejs },
  { name: "Node.js", img: nodejs },
  { name: "MongoDB", img: mongodb },
  {name:"Express",img:express},
  { name: "Tailwind", img: tailwind },
  { name: "Git", img: git },
  {name: "Github", img: github}
  
];

const Skills = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center py-12">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{fontFamily:'fh1'}}
        className="text-6xl font-bold text-blue-400 mb-12"
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center justify-center w-40 h-40 rounded-full md:w-36 md:h-36 bg-gray-800 shadow-lg p-5 hover:shadow-blue-400/50 transition-all"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <img src={skill.img} alt={skill.name} className="w-12 h-12 object-contain" />
            <p className="mt-2 text-xs md:text-sm text-blue-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export default Skills;
