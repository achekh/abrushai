import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LogoWall() {
  const { t } = useTranslation()

  const logos = [
    { name: 'Adobe', width: 120 },
    { name: 'Pixar', width: 100 },
    { name: 'Disney', width: 110 },
    { name: 'Netflix', width: 130 },
    { name: 'Spotify', width: 120 },
  ]

  return (
    <section className="py-16 border-y border-white/10">
      <div className="container-xl">
        <p className="text-center text-white/50 text-sm mb-8 uppercase tracking-wider">
          {t('logoWall.title')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-white/60 font-bold text-2xl"
              style={{ width: logo.width }}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
