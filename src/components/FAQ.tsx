import React from 'react'

const faqs = [
  {
    q: 'Does it run locally or in the cloud?',
    a: 'By default, generation runs locally with optimized models. You can switch to cloud for heavier styles.',
  },
  {
    q: 'Which Photoshop versions are supported?',
    a: 'Works with Photoshop CC 2022 and newer on macOS and Windows.',
  },
  {
    q: 'Do you keep my art private?',
    a: 'Yes. Your assets stay on your machine unless you opt-in to cloud features. No training on your data.',
  },
  {
    q: 'Can I export sprite sheets?',
    a: 'Yes. Export PNG sequences or a compact sprite sheet with spacing and naming templates.',
  },
  {
    q: 'Is there a free trial?',
    a: 'You can use the Free plan forever. Pro unlocks unlimited generations and commercial use.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="container-xl py-16 md:py-24">
      <div className="max-w-2xl mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold">FAQs</h2>
        <p className="text-white/70 mt-3">Everything you need to know about PixelCrafter AI.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {faqs.map((f) => (
          <div key={f.q} className="card p-5">
            <h3 className="font-semibold">{f.q}</h3>
            <p className="text-white/70 mt-2 text-sm">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
