import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

// Note: Using stylized cards instead of external images to ensure reliability.
// Labels emulate Before/After comparisons for generated sprites and tiles.

type Item = {
  title: string
  tags: string[]
}

const items: Item[] = [
  { title: 'Rogue character — idle/run/attack', tags: ['Sprite Sheet', 'Character'] },
  { title: 'Forest tiles — seamless 32px', tags: ['Tileable', 'Environment'] },
  { title: 'UI buttons — 3 rarity tiers', tags: ['UI', 'Variants'] },
  { title: 'Enemy slimes — colorways', tags: ['NPC', 'Variants'] },
  { title: 'Icon set — consumables', tags: ['Icons', 'Batch'] },
  { title: 'Parallax background — 4 layers', tags: ['Background', 'Parallax'] },
]

export default function Gallery() {
  const [showAfter, setShowAfter] = useState(true)

  return (
    <section id="gallery" className="container-xl py-16 md:py-24">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold">Before / After</h2>
          <p className="text-white/70 mt-2">
            See how prompts become crisp, export-ready assets—layered, tileable, and alpha-correct.
          </p>
        </div>
        <button
          onClick={() => setShowAfter((v) => !v)}
          className="button-secondary whitespace-nowrap"
          aria-pressed={showAfter}
        >
          {showAfter ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          Toggle After
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.title} className="card overflow-hidden">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5" />
              <div className="absolute inset-0 p-4 flex items-end">
                <span className="text-xs font-semibold px-2 py-1 rounded bg-black/60 border border-white/10">
                  {showAfter ? 'After — Generated' : 'Before — Sketch'}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white/80 font-semibold">{it.title}</div>
                  <div className="text-white/50 text-xs mt-1">{it.tags.join(' • ')}</div>
                </div>
              </div>
            </div>
            <div className="p-4 flex items-center gap-2">
              {it.tags.map((t) => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
