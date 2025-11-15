import React from 'react'
import { ArrowRight, Wand2, Palette, PackageOpen } from 'lucide-react'

const steps = [
  {
    title: 'Describe',
    desc: 'Type a short prompt or paste a mood-board. Lock palette and size.',
    icon: <Wand2 className="w-5 h-5" />,
    color: 'from-blue-500/30 to-indigo-500/30',
  },
  {
    title: 'Generate',
    desc: 'Pixel-perfect layers appear in your Photoshop group. Keep masks intact.',
    icon: <Palette className="w-5 h-5" />,
    color: 'from-pink-500/30 to-rose-500/30',
  },
  {
    title: 'Export',
    desc: 'Export spritesheets, PNGs with alpha, or PSD templates.',
    icon: <PackageOpen className="w-5 h-5" />,
    color: 'from-emerald-500/30 to-teal-500/30',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="container-xl py-16 md:py-24">
      <div className="max-w-2xl mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold">A focused workflow, end-to-end</h2>
        <p className="text-white/70 mt-3">
          No more context switching. Stay in Photoshop—from ideation to export—in three frictionless steps.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {steps.map((s) => (
          <div key={s.title} className="card p-6">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} border border-white/10 flex items-center justify-center`}>
              <span className="text-white">{s.icon}</span>
            </div>
            <h3 className="font-bold mt-4">{s.title}</h3>
            <p className="text-white/70 text-sm mt-1">{s.desc}</p>

            <div className="mt-4 rounded-xl overflow-hidden border border-white/10">
              <div className="bg-black/60 p-3 text-xs text-white/60">Photoshop · PixelCrafter AI</div>
              <div className="bg-gradient-to-b from-white/5 to-white/0 p-4 h-32 flex items-center justify-center">
                <div className="text-white/60 text-sm flex items-center gap-2">
                  {s.icon}
                  {s.title} preview
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-white/60 text-xs">
              <ArrowRight className="w-3.5 h-3.5" />
              Next: {s.title === 'Export' ? 'Ship' : 'Continue'}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
