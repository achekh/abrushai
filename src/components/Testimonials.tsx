import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ava Reynolds',
    role: 'Art Director · Playmint',
    quote:
      'We cut our UI iteration time by 80%. PixelCrafter keeps layers intact so our designers never fight exports.',
  },
  {
    name: 'Kenji Morita',
    role: 'Lead Artist · Tiny Titan',
    quote:
      'Sprite Sheet Builder is magic—idle, run, attack in minutes. It fits perfectly into our Photoshop workflow.',
  },
  {
    name: 'Maya Singh',
    role: 'Solo Dev',
    quote:
      'From idea to App Store images in a weekend. The palette lock is a godsend for keeping brand consistency.',
  },
]

export default function Testimonials() {
  return (
    <section className="container-xl py-16 md:py-24">
      <div className="max-w-2xl mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold">Loved by artists and studios</h2>
        <p className="text-white/70 mt-3">Consistent results, fewer clicks, and no surprise layer flattening.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {testimonials.map((t) => (
          <figure key={t.name} className="card p-6">
            <div className="flex items-center gap-1 text-yellow-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-300" />
              ))}
            </div>
            <blockquote className="mt-3 text-white/80 leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm text-white/60">
              <span className="font-semibold text-white/80">{t.name}</span> — {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
