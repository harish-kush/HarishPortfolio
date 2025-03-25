import React from 'react'
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
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home