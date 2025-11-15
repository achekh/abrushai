import React from 'react'
import { useTranslation } from 'react-i18next'
import { Upload, Sparkles, Download } from 'lucide-react'

export default function Workflow() {
  const { t } = useTranslation()

  const steps = [
    {
      icon: Upload,
      titleKey: 'workflow.step1.title',
      descKey: 'workflow.step1.description',
    },
    {
      icon: Sparkles,
      titleKey: 'workflow.step2.title',
      descKey: 'workflow.step2.description',
    },
    {
      icon: Download,
      titleKey: 'workflow.step3.title',
      descKey: 'workflow.step3.description',
    },
  ]

  return (
    <section id="workflow" className="container-xl py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t('workflow.title')}</h2>
        <p className="text-white/70 text-lg">{t('workflow.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="card p-8 text-center shine">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{t(step.titleKey)}</h3>
              <p className="text-white/70">{t(step.descKey)}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
