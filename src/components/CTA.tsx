import React from 'react'
import { Download, BookOpen } from 'lucide-react'

export default function CTA() {
  return (
    <section id="download" className="container-xl py-16 md:py-24">
      <div className="card p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-extrabold">Ready to craft your next hit?</h3>
          <p className="text-white/70 mt-2">
            Install the Photoshop plugin and ship pro-quality assets in hours, not weeks.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a className="button-primary" href="#">
              <Download className="w-4 h-4" />
              Download for Photoshop
            </a>
            <a className="button-secondary" id="demo" href="#">
              <BookOpen className="w-4 h-4" />
              Read docs
            </a>
          </div>
          <p className="text-white/50 text-xs mt-3">
            Works on macOS and Windows · Photoshop CC 2022+
          </p>
        </div>
      </div>
    </section>
  )
}
