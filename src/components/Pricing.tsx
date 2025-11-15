import React from 'react'
import { Check, Crown, Bolt, Sparkles } from 'lucide-react'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    cadence: 'forever',
    highlight: 'Best to try',
    features: [
      '50 generations / month',
      'Sprite Sheet Builder (basic)',
      'Tileable textures (up to 256px)',
      'Non-commercial license',
    ],
    icon: <Bolt className="w-5 h-5" />,
  },
  {
    name: 'Pro',
    price: '$12',
    cadence: 'per month',
    highlight: 'Most popular',
    features: [
      'Unlimited generations',
      'Full Sprite Sheet Builder',
      'Batch variants & palettes',
      'Commercial license',
      'Priority updates',
    ],
    icon: <Crown className="w-5 h-5" />,
  },
  {
    name: 'Studio',
    price: '$39',
    cadence: 'per seat / month',
    highlight: 'For teams',
    features: [
      'All Pro features',
      'Shared style libraries',
      'Team seats & permissions',
      'Private model hosting',
      'Dedicated support',
    ],
    icon: <Sparkles className="w-5 h-5" />,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="container-xl py-16 md:py-24">
      <div className="max-w-2xl mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold">Simple pricing, pro results</h2>
        <p className="text-white/70 mt-3">Start free—upgrade when you ship. Cancel anytime.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {tiers.map((t) => (
          <div key={t.name} className="card p-6 shine">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
                {t.icon}
              </div>
              <div className="text-sm text-white/70">{t.highlight}</div>
            </div>
            <h3 className="font-bold mt-3">{t.name}</h3>
            <div className="mt-2">
              <span className="text-4xl font-extrabold">{t.price}</span>{' '}
              <span className="text-white/60">/{t.cadence}</span>
            </div>

            <ul className="mt-5 space-y-2 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-300 mt-0.5" />
                  <span className="text-white/80">{f}</span>
                </li>
              ))}
            </ul>

            <a href="#download" className="button-primary mt-6 w-full text-center">Choose {t.name}</a>
          </div>
        ))}
      </div>
    </section>
  )
}
