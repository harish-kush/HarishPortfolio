import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{fontFamily:'fh2'}} className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 px-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
        
        <h2 className="text-2xl font-bold text-white">Let's Talk!</h2>
        
        <div className="flex gap-6 text-xl">
          <a href="https://x.com/KushwahaHa37594" target="__blank" className="hover:text-blue-300 transition">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/harish-kushwaha-3895a428b/" target="__blank" className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/harish-kush" target="__blank" className="hover:text-gray-100 transition">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/harish.k_ush_05/" target="__blank" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
        </div>

        <p className="text-sm opacity-75">&copy; {new Date().getFullYear()} | Made by Harish Kushwaha.</p>

        <div className="w-full h-1 bg-blue-500 rounded-full max-w-xs mt-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
