import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import EarthCanvas from "./Earth";

const Contact = () => {
  const formRef = useRef();
  const [result, setResult] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", "4c9f8b8b-94d8-4a20-977a-3d4c5ea07f44");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    const canvas = document.getElementById("bgCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
      });
    }

    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x < 0 || star.x > canvas.width) star.speedX *= -1;
        if (star.y < 0 || star.y > canvas.height) star.speedY *= -1;
      });

      requestAnimationFrame(animateStars);
    }

    animateStars();
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      <canvas id="bgCanvas" className="absolute inset-0 z-0"></canvas>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{fontFamily:'fh1'}}
        className="absolute  top-20 text-white text-5xl font-bold z-10"
      >
        Contact Me
      </motion.h1>

      <div className="relative flex flex-col xl:flex-row w-full h-[70vh] max-w-7xl px-6 xl:px-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="z-10 flex-1 h-[50vh] flex items-center justify-center xl:justify-start max-w-xl xl:max-w-[900px] order-first xl:order-none"
        >
          <EarthCanvas className="w-full h-full xl:scale-150 xl:-translate-x-20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="z-10 flex flex-col justify-center w-full max-w-lg bg-opacity-30 bg-gray-900 p-8 rounded-xl shadow-xl text-white backdrop-blur-lg border border-gray-700"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="bg-gray-800 p-3 rounded-lg outline-none border border-gray-700 focus:border-blue-500 text-white"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="bg-gray-800 p-3 rounded-lg outline-none border border-gray-700 focus:border-blue-500 text-white"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2">Your Message</label>
              <textarea
                rows="4"
                name="message"
                required
                placeholder="Type your message..."
                className="bg-gray-800 p-3 rounded-lg outline-none border border-gray-700 focus:border-blue-500 text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 cursor-pointer hover:bg-blue-600 transition p-3 rounded-lg text-white font-bold shadow-md"
            >
              Submit
            </button>
          </form>
          <span className="text-white mt-4">{result}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;