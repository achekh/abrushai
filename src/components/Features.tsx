import React from 'react'
import { Wand2, Image, Layers, Box, Sparkles } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Features = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: Image,
      titleKey: 'features.controlGen.title',
      descKey: 'features.controlGen.desc',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop'
    },
    {
      icon: Wand2,
      titleKey: 'features.textGen.title',
      descKey: 'features.textGen.desc',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop'
    },
    {
      icon: Layers,
      titleKey: 'features.inpainting.title',
      descKey: 'features.inpainting.desc',
      image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&h=400&fit=crop'
    },
    {
      icon: Sparkles,
      titleKey: 'features.textEdit.title',
      descKey: 'features.textEdit.desc',
      image: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=600&h=400&fit=crop'
    },
    {
      icon: Box,
      titleKey: 'features.3d.title',
      descKey: 'features.3d.desc',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=400&fit=crop'
    }
  ]

  const professionalItems = [
    'features.professional.item1',
    'features.professional.item2',
    'features.professional.item3',
    'features.professional.item4'
  ]

  return (
    <section className="py-24 px-6 bg-[#E0E5EC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group rounded-3xl bg-[#E0E5EC] p-8 shadow-[12px_12px_24px_#b8bdc4,-12px_-12px_24px_#ffffff] hover:shadow-[inset_8px_8px_16px_#b8bdc4,inset_-8px_-8px_16px_#ffffff] transition-all duration-300"
            >
              <div className="mb-6 relative overflow-hidden rounded-2xl shadow-[inset_4px_4px_8px_#b8bdc4,inset_-4px_-4px_8px_#ffffff]">
                <img 
                  src={feature.image} 
                  alt={t(feature.titleKey)}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-[#E0E5EC] shadow-[8px_8px_16px_#b8bdc4,-8px_-8px_16px_#ffffff] flex items-center justify-center mb-4 group-hover:shadow-[inset_4px_4px_8px_#b8bdc4,inset_-4px_-4px_8px_#ffffff] transition-all duration-300">
                <feature.icon className="w-7 h-7 text-purple-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {t(feature.titleKey)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-[#E0E5EC] shadow-[inset_8px_8px_16px_#b8bdc4,inset_-8px_-8px_16px_#ffffff]">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {t('features.professional.title')}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                {t('features.professional.desc')}
              </p>
              <ul className="space-y-3">
                {professionalItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-lg bg-[#E0E5EC] shadow-[4px_4px_8px_#b8bdc4,-4px_-4px_8px_#ffffff] flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                    </div>
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden shadow-[12px_12px_24px_#b8bdc4,-12px_-12px_24px_#ffffff]">
                <img 
                  src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&h=400&fit=crop" 
                  alt="Professional Artist"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
