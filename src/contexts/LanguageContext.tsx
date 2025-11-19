import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'uk'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Hero
    'hero.badge': 'AI Revolution for Photoshop',
    'hero.title.line1': 'Create art with',
    'hero.title.line2': 'artificial intelligence',
    'hero.description': 'Powerful AI plugin for Adobe Photoshop that transforms your creative process. Generation, editing, and 3D modeling in one click.',
    'hero.cta.primary': 'Join Beta Testing',
    'hero.cta.secondary': 'Learn More',
    
    // Features
    'features.title': 'Powerful Features for Creators',
    'features.subtitle': 'Everything a professional artist and illustrator needs in one plugin',
    'features.controlGen.title': 'Generation with Control',
    'features.controlGen.desc': 'Create unique images with full control over the output. Use reference images for precise style and composition control.',
    'features.textGen.title': 'Text Generation',
    'features.textGen.desc': 'Turn your ideas into reality with text prompts. Simply describe what you want to see, and AI will create it for you.',
    'features.inpainting.title': 'Mask Inpainting',
    'features.inpainting.desc': 'Edit specific areas of an image with surgical precision. Create masks and change only what you need, keeping the rest intact.',
    'features.textEdit.title': 'Text Editing',
    'features.textEdit.desc': 'Modify existing images by simply describing desired changes. "Make the sky red" or "add mountains in the background" - AI will understand and execute.',
    'features.3d.title': '3D Generation',
    'features.3d.desc': 'Create three-dimensional models from 2D images or text descriptions. Perfect for concept art, prototyping, and idea visualization.',
    'features.professional.title': 'Built for Professionals',
    'features.professional.desc': 'Our plugin is designed specifically for 2D artists and illustrators who want to accelerate their workflow without compromising quality.',
    'features.professional.item1': 'Intuitive interface',
    'features.professional.item2': 'Fast processing',
    'features.professional.item3': 'Full Photoshop integration',
    'features.professional.item4': 'Regular updates',
    
    // Beta Form
    'beta.title': 'Join Beta Testing',
    'beta.subtitle': 'Be one of the first to try the revolutionary AI plugin for Photoshop',
    'beta.name': 'Full Name',
    'beta.name.placeholder': 'John Doe',
    'beta.email': 'Email',
    'beta.email.placeholder': 'john@example.com',
    'beta.occupation': 'Occupation',
    'beta.occupation.select': 'Select your occupation',
    'beta.occupation.concept': 'Concept Artist',
    'beta.occupation.character': 'Character Artist',
    'beta.occupation.environment': 'Environment Artist',
    'beta.occupation.uiux': 'UI/UX Artist',
    'beta.occupation.lighting': 'Lighting Artist',
    'beta.occupation.technical': 'Technical Artist',
    'beta.occupation.storyboard': 'Storyboard Artist',
    'beta.occupation.general': 'General Artist',
    'beta.occupation.illustrator': 'Illustrator',
    'beta.occupation.director': 'Art Director',
    'beta.occupation.other': 'Other',
    'beta.company': 'Company Name',
    'beta.company.placeholder': 'e.g., Pixar Animation Studios',
    'beta.aiTool': 'What AI tools do you use in your work?',
    'beta.aiTool.select': 'Select AI tool',
    'beta.aiTool.firefly': 'FireFly',
    'beta.aiTool.comfyui': 'ComfyUI',
    'beta.aiTool.leonardo': 'Leonardo',
    'beta.aiTool.recraft': 'Recraft',
    'beta.aiTool.midjourney': 'Midjourney',
    'beta.aiTool.other': 'Other',
    'beta.customAiTool': 'Your AI tool',
    'beta.customAiTool.placeholder': 'Please specify the AI tool you use',
    'beta.submit': 'Register for Beta Testing',
    'beta.submitting': 'Submitting...',
    'beta.privacy': 'By registering, you agree to receive updates about beta testing and product launch',
    'beta.recaptcha.required': 'Please complete the reCAPTCHA verification',
    'beta.success.title': 'Thank you for registering!',
    'beta.success.message': 'We will send you instructions for accessing the beta version to your email within 24 hours.',
    'beta.success.note': 'Check your Spam folder if you don\'t see the email in your inbox. We\'re excited to have you among our beta testers! 🎨',
    
    // Footer
    'footer.description': 'Revolutionary tool for artists and illustrators that combines the power of artificial intelligence with Adobe Photoshop.',
    'footer.links': 'Quick Links',
    'footer.link.about': 'About',
    'footer.link.docs': 'Documentation',
    'footer.link.support': 'Support',
    'footer.link.privacy': 'Privacy Policy',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 AI Photoshop Plugin. All rights reserved.',
    
    // Common
    'common.required': '*'
  },
  uk: {
    // Hero
    'hero.badge': 'Революція в AI для Photoshop',
    'hero.title.line1': 'Створюйте мистецтво',
    'hero.title.line2': 'силою штучного інтелекту',
    'hero.description': 'Потужний AI плагін для Adobe Photoshop, який перетворює ваш творчий процес. Генерація, редагування та 3D моделювання в один клік.',
    'hero.cta.primary': 'Приєднатись до бета-тестування',
    'hero.cta.secondary': 'Дізнатись більше',
    
    // Features
    'features.title': 'Потужні можливості для творців',
    'features.subtitle': 'Все що потрібно професійному художнику та ілюстратору в одному плагіні',
    'features.controlGen.title': 'Генерація з контролем',
    'features.controlGen.desc': 'Створюйте унікальні зображення з повним контролем над вихідним результатом. Використовуйте референсні зображення для точного керування стилем та композицією.',
    'features.textGen.title': 'Текстова генерація',
    'features.textGen.desc': 'Перетворюйте ваші ідеї в реальність за допомогою текстових промптів. Просто опишіть що ви хочете побачити, і AI створить це для вас.',
    'features.inpainting.title': 'Інпейтинг по масці',
    'features.inpainting.desc': 'Редагуйте конкретні області зображення з хірургічною точністю. Створюйте маски та змінюйте тільки те, що потрібно, зберігаючи решту недоторканою.',
    'features.textEdit.title': 'Редагування текстом',
    'features.textEdit.desc': 'Змінюйте існуючі зображення просто описуючи бажані зміни. "Зроби небо червоним" або "додай гори на фоні" - AI зрозуміє та виконає.',
    'features.3d.title': '3D Генерація',
    'features.3d.desc': 'Створюйте тривимірні моделі з 2D зображень або текстових описів. Ідеально для концепт-арту, прототипування та візуалізації ідей.',
    'features.professional.title': 'Створено для професіоналів',
    'features.professional.desc': 'Наш плагін розроблений спеціально для 2D художників та ілюстраторів, які хочуть прискорити свій робочий процес без компромісів у якості.',
    'features.professional.item1': 'Інтуїтивний інтерфейс',
    'features.professional.item2': 'Швидка обробка',
    'features.professional.item3': 'Повна інтеграція з Photoshop',
    'features.professional.item4': 'Регулярні оновлення',
    
    // Beta Form
    'beta.title': 'Приєднуйтесь до бета-тестування',
    'beta.subtitle': 'Станьте одним з перших, хто випробує революційний AI плагін для Photoshop',
    'beta.name': 'Ім\'я та прізвище',
    'beta.name.placeholder': 'Іван Петренко',
    'beta.email': 'Електронна пошта',
    'beta.email.placeholder': 'ivan@example.com',
    'beta.occupation': 'Спеціалізація',
    'beta.occupation.select': 'Оберіть вашу спеціалізацію',
    'beta.occupation.concept': 'Концепт-художник',
    'beta.occupation.character': 'Художник персонажів',
    'beta.occupation.environment': 'Художник оточення',
    'beta.occupation.uiux': 'UI/UX художник',
    'beta.occupation.lighting': 'Художник освітлення',
    'beta.occupation.technical': 'Технічний художник',
    'beta.occupation.storyboard': 'Художник розкадровки',
    'beta.occupation.general': 'Загальний художник',
    'beta.occupation.illustrator': 'Ілюстратор',
    'beta.occupation.director': 'Арт-директор',
    'beta.occupation.other': 'Інше',
    'beta.company': 'Назва компанії',
    'beta.company.placeholder': 'Наприклад: Pixar Animation Studios',
    'beta.aiTool': 'Які AI інструменти ви використовуєте у роботі?',
    'beta.aiTool.select': 'Оберіть AI інструмент',
    'beta.aiTool.firefly': 'FireFly',
    'beta.aiTool.comfyui': 'ComfyUI',
    'beta.aiTool.leonardo': 'Leonardo',
    'beta.aiTool.recraft': 'Recraft',
    'beta.aiTool.midjourney': 'Midjourney',
    'beta.aiTool.other': 'Інший',
    'beta.customAiTool': 'Ваш AI інструмент',
    'beta.customAiTool.placeholder': 'Будь ласка, вкажіть AI інструмент, який ви використовуєте',
    'beta.submit': 'Зареєструватись на бета-тестування',
    'beta.submitting': 'Відправка...',
    'beta.privacy': 'Реєструючись, ви погоджуєтесь отримувати оновлення про бета-тестування та запуск продукту',
    'beta.recaptcha.required': 'Будь ласка, пройдіть перевірку reCAPTCHA',
    'beta.success.title': 'Дякуємо за реєстрацію!',
    'beta.success.message': 'Ми надішлемо вам інструкції для доступу до бета-версії на вказану електронну адресу протягом 24 годин.',
    'beta.success.note': 'Перевірте папку "Спам", якщо не побачите лист у вхідних. Ми раді бачити вас серед наших бета-тестерів! 🎨',
    
    // Footer
    'footer.description': 'Революційний інструмент для художників та ілюстраторів, який поєднує силу штучного інтелекту з Adobe Photoshop.',
    'footer.links': 'Швидкі посилання',
    'footer.link.about': 'Про проект',
    'footer.link.docs': 'Документація',
    'footer.link.support': 'Підтримка',
    'footer.link.privacy': 'Політика конфіденційності',
    'footer.contact': 'Зв\'язок',
    'footer.copyright': '© 2024 AI Photoshop Plugin. Всі права захищені.',
    
    // Common
    'common.required': '*'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uk')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
