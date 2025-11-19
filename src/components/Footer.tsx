import React from 'react'
import { Mail } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer: React.FC = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">ABrush</h3>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.contact')}</h4>
            <a
              href="mailto:contact@abrush.ai"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              contact@abrush.ai
            </a>
          </div>

          <div>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                {t('footer.link.about')}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                {t('footer.link.docs')}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                {t('footer.link.support')}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                {t('footer.link.privacy')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
