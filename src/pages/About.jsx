import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import me from "../../src/assets/about.jpeg"
import Navbar from "../components/Navbar";
const About = () => {
  return (
    
    <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden px-6">
      <Navbar/>
      <motion.div 
        className="absolute w-52 h-52 bg-blue-500 opacity-25 blur-[80px] rounded-full top-16 left-10"
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute w-36 h-36 bg-purple-500 opacity-25 blur-[80px] rounded-full bottom-10 right-10"
        animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      
     
      <motion.div 
  initial={{ opacity: 0, scale: 0.8 }} 
  animate={{ opacity: 1, scale: 1 }} 
  transition={{ duration: 1 }}
  className="hidden md:block w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg"
>
  <img src={me} alt="Harish Kushwaha" className="w-full h-full object-cover" />
</motion.div>

    
      <div className="mt-6 md:mt-0 md:ml-12 text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-400"
        >
          About Me
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{fontFamily:'fh2'}}
          className="mt-4 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          Hi, I'm <span className="font-bold text-blue-400">Harish Kushwaha</span>, a <span className="text-blue-300">20-year-old B.Tech student</span> at 
          <span className="font-semibold text-blue-400"> MANIT Bhopal</span>.  
          I am a <span className="font-semibold text-blue-300">Technical Executive</span> at <span className="text-blue-400 font-semibold">Aaroha</span> and <span className="font-semibold text-[#14B8A6]">Web Developer</span> at <span className="text-[#14B8A6] font-semibold">FiNIT</span>, actively shaping the digital experience with <span className="text-blue-300">web & app development</span>. 
          
          <br /><br />

          I love <span className="text-[#14B8A6] font-semibold">Competitive Programming 💻 </span>and have <span className="font-semibold text-blue-300">2-star rating on Codechef and achieved <span className="font-semibold text-blue-300">max rating of 1629 on</span> <span className="text-yellow-500">Leetcode</span>.</span> Strong in <span className="text-[#14B8A6] font-semibold">Data Structures & Algorithms (DSA)</span>, I enjoy solving challenging problems and continuously sharpening my problem-solving skills. 

          <br /><br />

          Passionate about <span className="font-semibold text-blue-400">React</span> , <span className="text-[#14B8A6] font-semibold">GSAP</span>, and <span className="font-semibold">Three.js</span>, I build interactive & visually engaging UIs websites🚀.  
          Always exploring new tech stacks and pushing creative boundaries!  
        </motion.p>

       
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 flex justify-center md:justify-start space-x-6"
        >
          <a href="https://github.com/harish-kush" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl text-gray-400 hover:text-white transition-all duration-300" />
          </a>
          <a href="https://www.instagram.com/harish.k_ush_05/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl text-pink-500 hover:text-white transition-all duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/harish-kushwaha-3895a428b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl relative z-10 text-blue-500 hover:text-white transition-all duration-300" />
          </a>
          <a href="https://leetcode.com/u/harishk_ush_05/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="text-3xl relative z-10 text-yellow-500 hover:text-white transition-all duration-300" />
          </a>
        </motion.div>
        <motion.a 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          href="/harishResume.pdf" 
          download="Harish_Kushwaha_Resume.pdf" 
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
          >
          Download Resume
          </motion.a>
      </div>
    </section>
  );
};

export default About;