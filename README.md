# ABrush Landing Page

Revolutionary AI plugin for Adobe Photoshop that transforms your creative process.

## Features

- 🎨 AI-powered image generation
- ✏️ Text-to-image creation
- 🖌️ Mask inpainting
- 📝 Text-based editing
- 🎭 3D model generation
- 🌍 Bilingual support (English/Ukrainian)
- 🤖 Bot protection with Google reCAPTCHA

## Tech Stack

- React 18
- TypeScript
- Vite
- TailwindCSS
- Lucide React Icons
- Google reCAPTCHA v2

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```env
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Environment Variables

- `VITE_RECAPTCHA_SITE_KEY` - Your Google reCAPTCHA v2 site key

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── BetaForm.tsx
│   └── Footer.tsx
├── contexts/
│   └── LanguageContext.tsx
├── App.tsx
└── main.tsx
```

## License

© 2024 ABrush. All rights reserved.
