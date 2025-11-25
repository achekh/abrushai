import React, { useState } from 'react'
import { Users } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Features: React.FC = () => {
  const { t } = useLanguage()
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const features = [
    {
      image1: '/1_control.png',
      image2: '/2_control.png',
      title: t('features.controlGen.title'),
      description: t('features.controlGen.desc')
    },
    {
      image1: '/1_txt2img.png',
      image2: '/2_txt2img.png',
      title: t('features.textGen.title'),
      description: t('features.textGen.desc')
    },
    {
      image1: '/1_inpainting.png',
      image2: '/2_inpainting.png',
      title: t('features.inpainting.title'),
      description: t('features.inpainting.desc')
    },
    {
      image1: '/1_edit.png',
      image2: '/2_edit.png',
      title: t('features.textEdit.title'),
      description: t('features.textEdit.desc')
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <style>{`
        @keyframes curtainReveal {
          from {
            clip-path: inset(0 100% 0 0);
          }
          to {
            clip-path: inset(0 0 0 0);
          }
        }
        
        .curtain-image {
          animation: curtainReveal 0.6s ease-in-out forwards;
        }
      `}</style>
      
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
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={feature.image1}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                {hoveredFeature === index && (
                  <img
                    src={feature.image2}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover curtain-image"
                  />
                )}
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
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>{t('features.professional.item5')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>{t('features.professional.item6')}</span>
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
