# AI Photoshop Plugin Landing Page

A modern, bilingual landing page for an AI-powered Photoshop plugin with beta registration.

## Features

- 🌐 Bilingual support (English/Ukrainian)
- 🎨 Neumorphic design with TailwindCSS
- 🤖 reCAPTCHA integration for bot protection
- 📱 Fully responsive design
- ⚡ Built with React, TypeScript, and Vite

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure reCAPTCHA:
   - Get your reCAPTCHA site key from [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
   - Update `.env` file with your site key:
   ```
   VITE_RECAPTCHA_SITE_KEY=your_actual_site_key_here
   ```

3. Start development server:
```bash
npm run dev
```

## Environment Variables

- `VITE_RECAPTCHA_SITE_KEY`: Your Google reCAPTCHA v2 site key

## Form Fields

The beta registration form includes:
- Name (required)
- Email (required)
- Occupation (required) - 11 artist specializations
- Company Name (optional)
- AI Tools (required) - 6 popular AI tools + Other option
- Custom AI Tool (conditional, required if "Other" selected)
- reCAPTCHA verification (required)

## Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```
