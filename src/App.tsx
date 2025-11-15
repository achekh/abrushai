import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoWall from './components/LogoWall'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

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
        <Pricing />
        <FAQ />
        <CTA />
      </main>
    </div>
  )
}

export default App
