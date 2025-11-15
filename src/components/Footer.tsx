import React from 'react'
import { Github, ShieldCheck, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10">
      <div className="container-xl py-10 grid md:grid-cols-3 gap-6 items-start">
        <div>
          <div className="font-extrabold text-white">PixelCrafter AI</div>
          <p className="text-white/60 text-sm mt-2">
            Photoshop plugin for fast, production-ready mobile game art.
          </p>
        </div>
        <div className="text-sm text-white/70">
          <div className="font-semibold text-white mb-2">Product</div>
          <ul className="space-y-1">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#workflow" className="hover:text-white">Workflow</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div className="text-sm text-white/70">
          <div className="font-semibold text-white mb-2">Company</div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white flex items-center gap-2"><Github className="w-4 h-4" /> GitHub</a></li>
            <li><a href="#" className="hover:text-white flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Privacy</a></li>
            <li><a href="#" className="hover:text-white flex items-center gap-2"><Mail className="w-4 h-4" /> Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="container-xl py-6 border-t border-white/10 text-xs text-white/50">
        © {new Date().getFullYear()} PixelCrafter AI. All rights reserved.
      </div>
    </footer>
  )
}
