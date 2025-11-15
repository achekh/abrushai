import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoWall from './components/LogoWall'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <LogoWall />
        <Features />
        <Workflow />
        <Gallery />
        <Testimonials />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
