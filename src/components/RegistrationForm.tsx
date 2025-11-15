import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReCAPTCHA from 'react-google-recaptcha'
import { Send, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react'

type EvaluatorRole = 'individual-creator' | 'studio-artist' | 'studio-executive'

interface FormData {
  name: string
  email: string
  role: EvaluatorRole | ''
}

export default function RegistrationForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: '',
  })
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (!formData.name || !formData.email || !formData.role) {
      setErrorMessage(t('registration.form.fillAllFields'))
      return
    }

    if (!captchaValue) {
      setErrorMessage(t('registration.form.captchaError'))
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      // Here you would make your actual API call
      // const response = await fetch('/api/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...formData, captcha: captchaValue }),
      // })

      setSubmitStatus('success')
      setFormData({ name: '', email: '', role: '' })
      setCaptchaValue(null)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(t('registration.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="apply" className="container-xl py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">{t('registration.title')}</h2>
          <p className="text-white/70 mt-3">
            {t('registration.subtitle')}
          </p>
        </div>

        <div className="card p-8 md:p-10 shine">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{t('registration.success.title')}</h3>
              <p className="text-white/70">
                {t('registration.success.message')}
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="button-secondary mt-6"
              >
                {t('registration.success.button')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  {t('registration.form.name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all text-white"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  {t('registration.form.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all text-white"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-semibold mb-2">
                  {t('registration.form.role')} *
                </label>
                <div className="relative">
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all appearance-none cursor-pointer text-white pr-10"
                    style={{
                      colorScheme: 'dark'
                    }}
                    required
                  >
                    <option value="" disabled className="bg-[rgb(22,22,26)] text-white/70">
                      {t('registration.form.rolePlaceholder')}
                    </option>
                    <option value="individual-creator" className="bg-[rgb(22,22,26)] text-white">
                      {t('registration.form.roleIndividual')}
                    </option>
                    <option value="studio-artist" className="bg-[rgb(22,22,26)] text-white">
                      {t('registration.form.roleStudioArtist')}
                    </option>
                    <option value="studio-executive" className="bg-[rgb(22,22,26)] text-white">
                      {t('registration.form.roleStudioExecutive')}
                    </option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
                </div>
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={handleCaptchaChange}
                  theme="dark"
                />
              </div>

              {errorMessage && (
                <div className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t('registration.form.submitting')}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t('registration.form.submit')}
                  </>
                )}
              </button>

              <p className="text-xs text-white/50 text-center">
                {t('registration.form.terms')}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
