import React from 'react'
import { Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E0E5EC] shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff]">
        <Globe className="w-4 h-4 text-gray-600" />
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
            language === 'en'
              ? 'bg-[#E0E5EC] text-purple-600 shadow-[inset_4px_4px_8px_#b8bdc4,inset_-4px_-4px_8px_#ffffff]'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('uk')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
            language === 'uk'
              ? 'bg-[#E0E5EC] text-purple-600 shadow-[inset_4px_4px_8px_#b8bdc4,inset_-4px_-4px_8px_#ffffff]'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          UK
        </button>
      </div>
    </div>
  )
}

export default LanguageToggle
