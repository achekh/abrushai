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
    'hero.title.line1': 'A complete AI studio',
    'hero.title.line2': 'right inside Photoshop',
    'hero.description': 'A tool created by artists for artists. Get full control over generation without leaving your usual workspace.',
    'hero.cta.primary': 'Get Early Access',
    'hero.cta.secondary': 'Learn More',
    
    // Features
    'features.title': 'Powerful Features for Creators',
    'features.subtitle': 'ABrush combines the broadest set of AI tools',
    'features.controlGen.title': 'Flexible Control',
    'features.controlGen.desc': 'Manage composition, style and details. Use ControlNet, LoRA and detailed settings for generation that matches your vision exactly.',
    'features.textGen.title': 'Text Generation',
    'features.textGen.desc': 'From idea to concept - in seconds. Describe your idea in text, generate a visual foundation and focus on what matters - the final result.',
    'features.inpainting.title': 'Inpainting',
    'features.inpainting.desc': 'Fill selected areas with new content.',
    'features.textEdit.title': 'Text Editing',
    'features.textEdit.desc': 'Modify existing images by simply describing desired changes. "Make the sky red" or "add mountains in the background" - AI will understand and execute.',
    'features.professional.title': 'Built for Professionals',
    'features.professional.desc': 'ABrush is designed specifically for 2D artists and illustrators who want to accelerate their workflow without compromising quality.',
    'features.professional.item1': 'Full Photoshop integration',
    'features.professional.item2': 'Generation control',
    'features.professional.item3': 'Multiple generation modes',
    'features.professional.item4': 'History and variations',
    'features.professional.item5': 'Speed and Quality',
    'features.professional.item6': 'Intuitive interface',
    
    // Beta Form
    'beta.title': 'Register for Early Testing',
    'beta.subtitle': 'A tool developed by artists for artists. Creates business advantage. Reduces routine, frees up more time for creativity.',
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
    'beta.company': 'Company',
    'beta.company.placeholder': 'Pixar Animation Studios',
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
    'beta.submit': 'Register for Early Testing',
    'beta.submitting': 'Submitting...',
    'beta.privacy': 'By registering, you agree to receive updates about early access and product launch',
    'beta.recaptcha.required': 'Please complete the reCAPTCHA verification',
    'beta.success.title': 'Thank you for registering!',
    'beta.success.message': 'We will send you instructions for early access to your email within 24 hours.',
    'beta.success.note': 'Check your Spam folder if you don\'t see the email in your inbox. We\'re excited to have you among our first users! 🎨',
    
    // Footer
    'footer.description': 'ABrush - A tool created by artists for artists. Accelerates the implementation of ideas into finished art.',
    'footer.link.about': 'About',
    'footer.link.docs': 'Documentation',
    'footer.link.support': 'Support',
    'footer.link.privacy': 'Privacy Policy',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 ABrush. All rights reserved.',
    
    // Common
    'common.required': '*'
  },
  uk: {
    // Hero
    'hero.title.line1': 'Повна ШІ-студія',
    'hero.title.line2': 'безпосередньо у Photoshop',
    'hero.description': 'Інструмент створений художниками для художників. Отримайте повний контроль над генерацією, не покидаючи ваш звичний робочий простір.',
    'hero.cta.primary': 'Отримати ранній доступ',
    'hero.cta.secondary': 'Дізнатись більше',
    
    // Features
    'features.title': 'Потужні можливості для творців',
    'features.subtitle': 'ABrush об\'єднує найширший набір ШІ-інструментів',
    'features.controlGen.title': 'Гнучкий контроль',
    'features.controlGen.desc': 'Керуйте композицією, стилем і деталями. Використовуйте ControlNet, LoRA та детальні налаштування для генерації, що точно відповідає вашому баченню.',
    'features.textGen.title': 'Генерація за текстом',
    'features.textGen.desc': 'Від ідеї до концепту - за секунди. Опишіть вашу ідею текстом, згенеруйте візуальну основу і зосередьтеся на тому, що важливо - на фінальному результаті.',
    'features.inpainting.title': 'Інпейтинг',
    'features.inpainting.desc': 'Заповнюйте виділені області новим контентом.',
    'features.textEdit.title': 'Редагування текстом',
    'features.textEdit.desc': 'Змінюйте існуючі зображення просто описуючи бажані зміни. "Зроби небо червоним" або "додай гори на фоні" - AI зрозуміє та виконає.',
    'features.professional.title': 'Створено для професіоналів',
    'features.professional.desc': 'ABrush розроблений спеціально для 2D художників та ілюстраторів, які хочуть прискорити свій робочий процес без компромісів у якості.',
    'features.professional.item1': 'Повна інтеграція з Photoshop ',
    'features.professional.item2': 'Контроль над генерацією',
    'features.professional.item3': 'Множинні режими генерації',
    'features.professional.item4': 'Історія та варіації',
    'features.professional.item5': 'Швидкість та якість',
    'features.professional.item6': 'Інтуїтивний інтерфейс',
    
    // Beta Form
    'beta.title': 'Реєструйтесь на раннє тестування',
    'beta.subtitle': 'Інструмент розроблений художниками для художників. Створює перевагу для бізнесу. Зменшує рутину, вивільняє більше часу для творчості.',
    'beta.name': 'Ім\'я та прізвище',
    'beta.name.placeholder': 'Іван Петренко',
    'beta.email': 'Електронна пошта',
    'beta.email.placeholder': 'ivan@example.com',
    'beta.occupation': 'Професія',
    'beta.occupation.select': 'Оберіть вашу професію',
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
    'beta.company': 'Компанія',
    'beta.company.placeholder': 'Pixar Animation Studios',
    'beta.aiTool': 'Якими ШІ-інструментами ви користуєтесь в роботі?',
    'beta.aiTool.select': 'Оберіть AI інструмент',
    'beta.aiTool.firefly': 'FireFly',
    'beta.aiTool.comfyui': 'ComfyUI',
    'beta.aiTool.leonardo': 'Leonardo',
    'beta.aiTool.recraft': 'Recraft',
    'beta.aiTool.midjourney': 'Midjourney',
    'beta.aiTool.other': 'Інший',
    'beta.customAiTool': 'Ваш AI інструмент',
    'beta.customAiTool.placeholder': 'Будь ласка, вкажіть AI інструмент, який ви використовуєте',
    'beta.submit': 'Зареєструватись на раннє тестування',
    'beta.submitting': 'Відправка...',
    'beta.privacy': 'Реєструючись, ви погоджуєтесь отримувати оновлення про ранній доступ та запуск продукту',
    'beta.recaptcha.required': 'Будь ласка, пройдіть перевірку reCAPTCHA',
    'beta.success.title': 'Дякуємо за реєстрацію!',
    'beta.success.message': 'Ми надішлемо вам інструкції для раннього доступу на вказану електронну адресу протягом 24 годин.',
    'beta.success.note': 'Перевірте папку "Спам", якщо не побачите лист у вхідних. Ми раді бачити вас серед наших перших користувачів! 🎨',
    
    // Footer
    'footer.description': 'ABrush - Інструмент створений художниками для художників. Прискорює втілення ідеї в готовий арт.',
    'footer.link.about': 'Про проект',
    'footer.link.docs': 'Документація',
    'footer.link.support': 'Підтримка',
    'footer.link.privacy': 'Політика конфіденційності',
    'footer.contact': 'Зв\'язок',
    'footer.copyright': '© 2025 ABrush. Всі права захищені.',
    
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
