# ABrush Landing Page

A modern, responsive landing page for ABrush - a creative software tool for digital artists and studios. Built with React, TypeScript, and Tailwind CSS.

![ABrush Landing Page](https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop)

## Features

- ✨ Modern UI with responsive design
- 🌐 Bilingual support (English/Ukrainian)
- 📝 Registration form with role selection
- 🔒 reCAPTCHA integration
- 🎨 Tailwind CSS for styling
- 📱 Mobile-first approach
- 🔄 Language detection and persistence

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Internationalization**: i18next with react-i18next
- **Form Security**: Google reCAPTCHA v2

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/abrush-landing.git
cd abrush-landing
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Project Structure

```
abrush-landing/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── i18n/            # Internationalization
│   │   ├── locales/     # Translation files
│   │   └── config.ts    # i18n configuration
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

## Key Components

- **Navbar**: Navigation with language switcher
- **Hero**: Main landing section
- **LogoWall**: Partner/client logos
- **Features**: Product features showcase
- **Workflow**: How the product works
- **Gallery**: Visual showcase
- **Testimonials**: User testimonials
- **FAQ**: Frequently asked questions
- **RegistrationForm**: User registration with role selection
- **Footer**: Site footer with links and information

## Internationalization

The application supports English and Ukrainian languages. The language is automatically detected from the browser settings and can be changed using the language switcher in the navbar. Language preferences are stored in localStorage.

### Adding New Translations

1. Add new translation keys to `src/i18n/locales/en.json`
2. Add corresponding translations to `src/i18n/locales/uk.json`
3. Use the `useTranslation` hook in components to access translations

```typescript
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return <h1>{t('myKey')}</h1>;
}
```

## Form Integration

The registration form collects:
- Name
- Email
- Role (individual creator, studio artist, or studio executive)

It includes validation and reCAPTCHA verification. For production, replace the test reCAPTCHA site key with your actual key.

## Building for Production

```bash
npm run build
# or
yarn build
```

This will generate optimized files in the `dist` directory that can be deployed to any static hosting service.

## Deployment

The site can be deployed to any static hosting service like Netlify, Vercel, GitHub Pages, etc.

### Example: Deploying to Netlify

1. Push your code to a GitHub repository
2. Log in to Netlify
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy site"

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons by [Lucide](https://lucide.dev/)
