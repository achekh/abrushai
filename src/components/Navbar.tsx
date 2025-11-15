import React from 'react'
import { Brush, Sparkles, Download } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="container-xl flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl blur-lg opacity-60 bg-gradient-to-tr from-blue-500 to-pink-500" />
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-black border border-white/10">
              <Brush className="w-5 h-5 text-blue-400" />
            </div>
          </div>
          <span className="font-extrabold tracking-tight text-white text-lg">PixelCrafter AI</span>
          <span className="text-xs px-2 py-0.5 rounded bg-white/10 border border-white/10 text-white/70">for Photoshop</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a className="hover:text-white transition" href="#features">Features</a>
          <a className="hover:text-white transition" href="#workflow">Workflow</a>
          <a className="hover:text-white transition" href="#gallery">Gallery</a>
          <a className="hover:text-white transition" href="#pricing">Pricing</a>
          <a className="hover:text-white transition" href="#faq">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <a className="button-secondary" href="#demo">
            <Sparkles className="w-4 h-4" />
            Watch demo
          </a>
          <a className="button-primary" href="#download">
            <Download className="w-4 h-4" />
            Download
          </a>
        </div>
      </div>
    </header>
  )
}
