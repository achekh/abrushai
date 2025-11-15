import React from 'react'
import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'uk' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white/80 hover:text-white"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium uppercase">
        {i18n.language === 'en' ? 'EN' : 'УКР'}
      </span>
    </button>
  )
}
