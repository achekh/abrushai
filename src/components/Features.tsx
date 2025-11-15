import React from 'react'
import { Brush, Sparkles, Layers, Grid, ImagePlus, Scissors, Shapes, Workflow } from 'lucide-react'

type Feature = {
  title: string
  description: string
  icon: React.ReactNode
  badge?: string
}

const features: Feature[] = [
  {
    title: 'Prompt → Brush',
    description: 'Generate Photoshop brushes and layer groups from a short prompt with style controls.',
    icon: <Brush className="w-5 h-5" />,
    badge: 'Popular',
  },
  {
    title: 'Sprite Sheet Builder',
    description: 'Auto-arrange character states into a clean, export-ready sprite sheet.',
    icon: <Grid className="w-5 h-5" />,
  },
  {
    title: 'Style Transfer',
    description: 'Match references to your current canvas with lockable palettes and textures.',
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: 'Tileable Textures',
    description: 'One-click seamless tiling for backgrounds and environments.',
    icon: <Shapes className="w-5 h-5" />,
  },
  {
    title: 'Layer Fidelity',
    description: 'Respects masks, adjustment layers, and smart objects—no flattening required.',
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: 'Smart Cutouts',
    description: 'Non-destructive cutouts with alpha-aware edge refinement for crisp sprites.',
    icon: <Scissors className="w-5 h-5" />,
  },
  {
    title: 'Asset Variations',
    description: 'Batch-generate colorways, rarity tiers, and effects for live ops.',
    icon: <ImagePlus className="w-5 h-5" />,
  },
  {
    title: 'Guided Workflow',
    description: 'A simple 3-step flow tailored for mobile game pipelines.',
    icon: <Workflow className="w-5 h-5" />,
  },
]

export default function Features() {
  return (
    <section id="features" className="container-xl py-16 md:py-24">
      <div className="max-w-2xl mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold">Production features that respect your canvas</h2>
        <p className="text-white/70 mt-3">
          Every tool is built for speed, iteration, and compatibility with common mobile game pipelines.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <div key={f.title} className="card p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
                <span className="text-blue-300">{f.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold">{f.title}</h3>
                  {f.badge ? (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-200 border border-blue-400/25">{f.badge}</span>
                  ) : null}
                </div>
                <p className="text-white/70 text-sm mt-1">{f.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
