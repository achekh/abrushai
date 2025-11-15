import React from 'react'
import { PlayCircle, Rocket, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative soft-grid grid-overlay overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[35rem] h-[35rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[35rem] h-[35rem] rounded-full bg-pink-500/20 blur-3xl" />
      </div>
      <div className="container-xl py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/70">
            <Rocket className="w-3.5 h-3.5" />
            New: Sprite Sheet Generator v1.4
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
            Draw mobile game art at lightspeed, right inside Photoshop.
          </h1>
          <p className="mt-5 text-white/70 text-lg md:text-xl">
            PixelCrafter AI turns short prompts into production-ready sprites, tiles, and UI elements.
            Keep your layers, color profiles, and dimensions intact—ship 10x faster without leaving your canvas.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#download" className="button-primary">
              Get the Plugin for Photoshop
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#demo" className="button-secondary">
              <PlayCircle className="w-4 h-4" />
              Watch 90s demo
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ['100k+', 'assets generated'],
              ['8x', 'faster iteration'],
              ['99%', 'layer fidelity'],
              ['24/7', 'local inference'],
            ].map(([big, small]) => (
              <div key={big} className="card p-4">
                <div className="text-2xl font-extrabold">{big}</div>
                <div className="text-white/60 text-xs">{small}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
