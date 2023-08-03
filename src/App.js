import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App