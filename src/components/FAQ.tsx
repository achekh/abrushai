import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    { questionKey: 'faq.q1.question', answerKey: 'faq.q1.answer' },
    { questionKey: 'faq.q2.question', answerKey: 'faq.q2.answer' },
    { questionKey: 'faq.q3.question', answerKey: 'faq.q3.answer' },
    { questionKey: 'faq.q4.question', answerKey: 'faq.q4.answer' },
    { questionKey: 'faq.q5.question', answerKey: 'faq.q5.answer' },
    { questionKey: 'faq.q6.question', answerKey: 'faq.q6.answer' },
  ]

  return (
    <section id="faq" className="container-xl py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold">{t('faq.title')}</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="card shine overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-semibold text-lg pr-8">{t(faq.questionKey)}</span>
              <ChevronDown
                className={`w-5 h-5 text-white/60 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-white/70">
                {t(faq.answerKey)}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
