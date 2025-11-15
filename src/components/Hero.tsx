import React from 'react'
import { useTranslation } from 'react-i18next'
import { Sparkles, Play } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
      
      <div className="container-xl relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-white/80">{t('hero.badge')}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#apply" className="button-primary">
              <Sparkles className="w-5 h-5" />
              {t('hero.cta')}
            </a>
            <button className="button-secondary">
              <Play className="w-5 h-5" />
              {t('hero.watchDemo')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
