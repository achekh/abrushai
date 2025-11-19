import React from 'react'
import { Sparkles, Type, Paintbrush, Edit3, Users } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Features: React.FC = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: Sparkles,
      title: t('features.controlGen.title'),
      description: t('features.controlGen.desc')
    },
    {
      icon: Type,
      title: t('features.textGen.title'),
      description: t('features.textGen.desc')
    },
    {
      icon: Paintbrush,
      title: t('features.inpainting.title'),
      description: t('features.inpainting.desc')
    },
    {
      icon: Edit3,
      title: t('features.textEdit.title'),
      description: t('features.textEdit.desc')
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {t('features.professional.title')}
              </h3>
              <p className="text-lg mb-6 text-white/90">
                {t('features.professional.desc')}
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>{t('features.professional.item1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>{t('features.professional.item2')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>{t('features.professional.item3')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>{t('features.professional.item4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
