import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import PCModel from './PCModel'
import About from './About'
import Skills from './Skills'
import Projects from '../pages/Projects/Projects'
import Experience from './Experience'
import Contact from './Contact'
import Footer from '../components/Footer'

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
       <div
       className="hidden md:block fixed z-[9999] w-2.5 h-2.5 bg-white rounded-full pointer-events-none mix-blend-difference shadow-[0_0_8px_2px_white] transition-transform duration-75 ease-linear"
       style={{
       transform: `translate(${position.x - 5}px, ${position.y - 5}px)`
       }}
      ></div>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
