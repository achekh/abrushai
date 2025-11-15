import React from 'react'

const logos = [
  'HyperFrog',
  'NebulaSoft',
  'PixelPunk',
  'Playmint',
  'Tiny Titan',
  'ArcForge',
  'BlueMonk',
  'Moonbyte',
]

export default function LogoWall() {
  return (
    <section className="container-xl py-10 md:py-14">
      <p className="text-center text-white/60 text-sm mb-6">Trusted by game studios and solo devs</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {logos.map((name) => (
          <div
            key={name}
            className="card p-4 shine text-center text-white/70 text-sm font-semibold"
            aria-label={`Logo ${name}`}
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  )
}
