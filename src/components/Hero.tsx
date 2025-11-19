import React from 'react'
import { Sparkles, ArrowDown } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  
  const scrollToForm = () => {
    document.getElementById('beta-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E0E5EC] mb-8 shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff]">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <span className="text-sm font-medium text-gray-700">{t('hero.badge')}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
          {t('hero.title.line1')}<br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t('hero.title.line2')}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={scrollToForm}
            className="group px-8 py-4 rounded-2xl bg-[#E0E5EC] text-gray-800 font-semibold text-lg shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#b8bdc4,inset_-8px_-8px_16px_#ffffff] transition-all duration-300 flex items-center gap-2"
          >
            {t('hero.cta.primary')}
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
          
          <button className="px-8 py-4 rounded-2xl bg-[#E0E5EC] text-gray-700 font-medium text-lg shadow-[inset_4px_4px_8px_#b8bdc4,inset_-4px_-4px_8px_#ffffff] hover:shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff] transition-all duration-300">
            {t('hero.cta.secondary')}
          </button>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-[20px_20px_40px_#b8bdc4,-20px_-20px_40px_#ffffff] max-w-5xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=675&fit=crop" 
            alt="AI Generated Art"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#E0E5EC] via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
