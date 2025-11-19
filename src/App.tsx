import React, { useState } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import Hero from './components/Hero'
import Features from './components/Features'
import BetaForm from './components/BetaForm'
import Footer from './components/Footer'
import LanguageToggle from './components/LanguageToggle'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#E0E5EC]">
        <LanguageToggle />
        <Hero />
        <Features />
        <BetaForm isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
