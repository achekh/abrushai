import React from 'react'
import { useTranslation } from 'react-i18next'
import { Brush, Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container-xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl blur-lg opacity-60 bg-gradient-to-tr from-blue-500 to-pink-500" />
                <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-black border border-white/10">
                  <Brush className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <span className="font-extrabold tracking-tight text-white text-lg">ABrush</span>
            </div>
            <p className="text-white/60 mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5 text-white/60" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5 text-white/60" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5 text-white/60" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2 text-white/60">
              <li><a href="#features" className="hover:text-white transition">{t('footer.features')}</a></li>
              <li><a href="#workflow" className="hover:text-white transition">{t('footer.workflow')}</a></li>
              <li><a href="#gallery" className="hover:text-white transition">{t('footer.gallery')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-white/60">
              <li><a href="#" className="hover:text-white transition">{t('footer.about')}</a></li>
              <li><a href="#" className="hover:text-white transition">{t('footer.blog')}</a></li>
              <li><a href="#" className="hover:text-white transition">{t('footer.careers')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2 text-white/60">
              <li><a href="#" className="hover:text-white transition">{t('footer.documentation')}</a></li>
              <li><a href="#" className="hover:text-white transition">{t('footer.contact')}</a></li>
              <li><a href="#faq" className="hover:text-white transition">{t('footer.faq')}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2024 ABrush. {t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
