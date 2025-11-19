import React from 'react'
import { Mail, Twitter, Github, Linkedin } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  const links = [
    { key: 'footer.link.about', href: '#' },
    { key: 'footer.link.docs', href: '#' },
    { key: 'footer.link.support', href: '#' },
    { key: 'footer.link.privacy', href: '#' }
  ]

  return (
    <footer className="py-12 px-6 bg-[#E0E5EC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">AI Photoshop Plugin</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">{t('footer.links')}</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 hover:text-purple-600 transition-colors">
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">{t('footer.contact')}</h4>
            <div className="flex gap-3">
              {[
                { icon: Mail, href: 'mailto:info@example.com' },
                { icon: Twitter, href: '#' },
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-xl bg-[#E0E5EC] shadow-[6px_6px_12px_#b8bdc4,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#b8bdc4,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 flex items-center justify-center"
                >
                  <social.icon className="w-5 h-5 text-gray-700" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-300">
          <p className="text-center text-gray-600">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
