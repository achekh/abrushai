import React from 'react'
import { useTranslation } from 'react-i18next'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  const { t } = useTranslation()

  const testimonials = [
    {
      textKey: 'testimonials.testimonial1.text',
      authorKey: 'testimonials.testimonial1.author',
      roleKey: 'testimonials.testimonial1.role',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      textKey: 'testimonials.testimonial2.text',
      authorKey: 'testimonials.testimonial2.author',
      roleKey: 'testimonials.testimonial2.role',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      textKey: 'testimonials.testimonial3.text',
      authorKey: 'testimonials.testimonial3.author',
      roleKey: 'testimonials.testimonial3.role',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ]

  return (
    <section className="container-xl py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t('testimonials.title')}</h2>
        <p className="text-white/70 text-lg">{t('testimonials.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card p-8 shine">
            <Quote className="w-10 h-10 text-blue-400 mb-4" />
            <p className="text-white/90 mb-6 italic">{t(testimonial.textKey)}</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={t(testimonial.authorKey)}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{t(testimonial.authorKey)}</p>
                <p className="text-sm text-white/60">{t(testimonial.roleKey)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
