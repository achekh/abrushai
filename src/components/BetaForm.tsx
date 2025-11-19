import React, { useState, useRef } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useLanguage } from '../contexts/LanguageContext'

interface BetaFormProps {
  isSubmitted: boolean
  setIsSubmitted: (value: boolean) => void
}

const BetaForm = ({ isSubmitted, setIsSubmitted }: BetaFormProps) => {
  const { t } = useLanguage()
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occupation: '',
    companyName: '',
    aiTool: '',
    customAiTool: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!recaptchaToken) {
      alert(t('beta.recaptcha.required'))
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Clear custom AI tool if user changes from "Other"
    if (name === 'aiTool' && value !== 'other') {
      setFormData(prev => ({ ...prev, customAiTool: '' }))
    }
  }

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
  }

  if (isSubmitted) {
    return (
      <section id="beta-form" className="py-24 px-6 bg-[#E0E5EC]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-[#E0E5EC] shadow-[12px_12px_24px_#b8bdc4,-12px_-12px_24px_#ffffff] flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('beta.success.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('beta.success.message')}
          </p>
          <div className="p-6 rounded-2xl bg-[#E0E5EC] shadow-[inset_8px_8px_16px_#b8bdc4,inset_-8px_-8px_16px_#ffffff]">
            <p className="text-gray-700">
              {t('beta.success.note')}
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="beta-form" className="py-24 px-6 bg-[#E0E5EC]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('beta.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('beta.subtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-3xl bg-[#E0E5EC] shadow-[20px_20px_40px_#b8bdc4,-20px_-20px_40px_#ffffff]">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {t('beta.name')} {t('common.required')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl bg-[#E0E5EC] text-gray-800 shadow-[inset_8px_8px_16px_#b8bdc4,inset_-8px_-8px_16px_#ffffff] focus:outline-none focus:shadow-[inset_12px_12px_24px_#b8bdc4,inset_-12px_-12px_24px_#ffffff] transition-all duration-300"
                placeholder={t('beta.name.placeholder')}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t('beta.email')} {t('common.required')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl bg-[#E0E5EC] text-gray-800 shadow-[inset_8px_8px_16px_#b8bdc4,inset_-8px_-8px_16px_#ffffff] focus:outline-none focus:shadow-[inset_12px_12px_24px_#b8bdc4,inset_-12px_-12px_24px_#ffffff] transition-all duration-300"
                placeholder={t('beta.email.placeholder')}
              />
            </div>

            <div>
              <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-2">
                {t('beta.occupation')} {t('common.required')}
              </label>
              <select
                id="occupation"
                name="occupation"
                required
                value={formData.occupation}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl bg-[#E0E5EC] text-gray-800 shadow-[inset_8px_8px_16px_#b8bdc4,inset_-8px_-8px_16px_#ffffff] focus:outline-none focus:shadow-[inset_12px_12px_24px_#b8bdc4,inset_-12px_-12px_24px_#ffffff] transition-all duration-300"
              >
                <option value="">{t('beta.occupation.select')}</option>
                <option value="concept-artist">{t('beta.occupation.concept')}</option>
                <option value="character-artist">{t('beta.occupation.character')}</option>
                <option value="environment-artist">{t('beta.occupation.environment')}</option>
                <option value="ui-ux-artist">{t('beta.occupation.uiux')}</option>
                <option value="lighting-artist">{t('beta.occupation.lighting')}</option>
                <option value="technical-artist">{t('beta.occupation.technical')}</option>
                <option value="storyboard-artist">{t('beta.occupation.storyboard')}</option>
                <option value="general-artist">{t('beta.occupation.general')}</option>
                <option value="illustrator">{t('beta.occupation.illustrator')}</option>
                <option value="art-director">{t('beta.occupation.director')}</option>
                <option value="other">{t('beta.occupation.other')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                {t('beta.company')}
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl bg-[#E0E5EC] text-gray-800 shadow-[inset_8px_8px_16px_#b8bdc4,inset_-8px_-8px_16px_#ffffff] focus:outline-none focus:shadow-[inset_12px_12px_24px_#b8bdc4,inset_-12px_-12px_24px_#ffffff] transition-all duration-300"
                placeholder={t('beta.company.placeholder')}
              />
            </div>

            <div>
              <label htmlFor="aiTool" className="block text-sm font-medium text-gray-700 mb-2">
                {t('beta.aiTool')} {t('common.required')}
              </label>
              <select
                id="aiTool"
                name="aiTool"
                required
                value={formData.aiTool}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl bg-[#E0E5EC] text-gray-800 shadow-[inset_8px_8px_16px_#b8bdc4,inset_-8px_-8px_16px_#ffffff] focus:outline-none focus:shadow-[inset_12px_12px_24px_#b8bdc4,inset_-12px_-12px_24px_#ffffff] transition-all duration-300"
              >
                <option value="">{t('beta.aiTool.select')}</option>
                <option value="firefly">{t('beta.aiTool.firefly')}</option>
                <option value="comfyui">{t('beta.aiTool.comfyui')}</option>
                <option value="leonardo">{t('beta.aiTool.leonardo')}</option>
                <option value="recraft">{t('beta.aiTool.recraft')}</option>
                <option value="midjourney">{t('beta.aiTool.midjourney')}</option>
                <option value="other">{t('beta.aiTool.other')}</option>
              </select>
            </div>

            {formData.aiTool === 'other' && (
              <div className="animate-fadeIn">
                <label htmlFor="customAiTool" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('beta.customAiTool')} {t('common.required')}
                </label>
                <input
                  type="text"
                  id="customAiTool"
                  name="customAiTool"
                  required
                  value={formData.customAiTool}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-[#E0E5EC] text-gray-800 shadow-[inset_8px_8px_16px_#b8bdc4,inset_-8px_-8px_16px_#ffffff] focus:outline-none focus:shadow-[inset_12px_12px_24px_#b8bdc4,inset_-12px_-12px_24px_#ffffff] transition-all duration-300"
                  placeholder={t('beta.customAiTool.placeholder')}
                />
              </div>
            )}

            <div className="flex justify-center pt-4">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
                theme="light"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !recaptchaToken}
              className="w-full px-8 py-5 rounded-2xl bg-[#E0E5EC] text-gray-800 font-bold text-lg shadow-[12px_12px_24px_#b8bdc4,-12px_-12px_24px_#ffffff] hover:shadow-[inset_8px_8px_16px_#b8bdc4,inset_-8px_-8px_16px_#ffffff] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t('beta.submitting')}
                </>
              ) : (
                t('beta.submit')
              )}
            </button>

            <p className="text-sm text-gray-600 text-center">
              {t('beta.privacy')}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default BetaForm
