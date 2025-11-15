import React from 'react'
import { useTranslation } from 'react-i18next'
import { Wand2, Layers, Zap, Eye, Paintbrush, Cloud } from 'lucide-react'

export default function Features() {
  const { t } = useTranslation()

  const features = [
    {
      icon: Wand2,
      titleKey: 'features.aiAssisted.title',
      descKey: 'features.aiAssisted.description',
    },
    {
      icon: Layers,
      titleKey: 'features.seamlessIntegration.title',
      descKey: 'features.seamlessIntegration.description',
    },
    {
      icon: Zap,
      titleKey: 'features.smartAutomation.title',
      descKey: 'features.smartAutomation.description',
    },
    {
      icon: Eye,
      titleKey: 'features.realTimePreview.title',
      descKey: 'features.realTimePreview.description',
    },
    {
      icon: Paintbrush,
      titleKey: 'features.customBrushes.title',
      descKey: 'features.customBrushes.description',
    },
    {
      icon: Cloud,
      titleKey: 'features.cloudSync.title',
      descKey: 'features.cloudSync.description',
    },
  ]

  return (
    <section id="features" className="container-xl py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t('features.title')}</h2>
        <p className="text-white/70 text-lg">{t('features.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="card p-6 shine group hover:scale-105 transition-transform">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t(feature.titleKey)}</h3>
            <p className="text-white/70">{t(feature.descKey)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
