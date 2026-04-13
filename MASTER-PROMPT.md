# Мастер промт: Создание многостраничного сайта услуг

## Суть проекта
Создание одностраничного (Landing Page) сайта для бизнеса, предоставляющего услуги (спортивная академия, курсы, консультации и т.д.). Сайт адаптируется под домен и настраивается через один конфигурационный файл.

## Технический стек
- **Фреймворк**: Next.js 14 (App Router)
- **Стилизация**: CSS Modules + CSS Variables
- **Пакетный менеджер**: Bun
- **Язык**: TypeScript

## Структура проекта

```
├── app/
│   ├── layout.tsx          # Корневой layout
│   ├── page.tsx            # Главная страница
│   └── globals.css         # Глобальные стили
├── components/
│   ├── Header.tsx          # Шапка с навигацией
│   ├── Hero.tsx            # Первый экран
│   ├── Programs.tsx        # Секция услуг/программ
│   ├── Coaches.tsx         # Секция команды/специалистов
│   ├── Testimonials.tsx    # Отзывы
│   ├── Gallery.tsx         # Галерея
│   ├── Contact.tsx         # Контакты и форма
│   └── Footer.tsx          # Подвал
├── config/
│   └── site-config.ts      # Конфигурация сайта (ЕДИНСТВЕННЫЙ файл для настройки)
├── public/                 # Изображения
└── package.json
```

## Конфигурация (site-config.ts)

```typescript
export interface CompanyConfig {
  domain: string;
  company: {
    name: string;
    tagline: string;
    logo: string;
    email: string;
    phone: string;
    address: string;
    social: {
      facebook?: string;
      instagram?: string;
      youtube?: string;
      telegram?: string;
    };
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    darkBackground: string;
    textPrimary: string;
    textLight: string;
  };
  fonts: {
    headings: string;
    body: string;
  };
  programs: Program[];
  coaches: Coach[];
  testimonials: Testimonial[];
  gallery: string[];
}

export interface Program {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  features?: string[];
}

export interface Coach {
  id: string;
  name: string;
  title: string;
  specialization: string;
  experience: string;
  photo: string;
  bio?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar?: string;
}

export const siteConfig: CompanyConfig = {
  domain: "procourt.example.com",
  company: {
    name: "Pro Court Academy",
    tagline: "Твой путь к баскетбольному мастерству",
    logo: "/logo.svg",
    email: "info@procourt.com",
    phone: "+7 (999) 123-45-67",
    address: "г. Москва, ул. Примерная, д. 1",
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
  },
  colors: {
    primary: "#E63946",
    secondary: "#1D3557",
    accent: "#F4A261",
    background: "#F8F9FA",
    darkBackground: "#1A1A2E",
    textPrimary: "#1D3557",
    textLight: "#FFFFFF",
  },
  fonts: {
    headings: "'Bebas Neue', sans-serif",
    body: "'Barlow', sans-serif",
  },
  programs: [
    {
      id: "1",
      title: "Начинающие",
      description: "Базовая подготовка для детей 6-10 лет",
      price: "5 000 ₽/мес",
      duration: "3 месяца",
      image: "/programs/beginners.jpg",
      features: ["2 тренировки в неделю", "Индивидуальный подход", "Игровые методики"],
    },
    // ... другие программы
  ],
  coaches: [
    {
      id: "1",
      name: "Алексей Иванов",
      title: "Главный тренер",
      specialization: "Нападение и защита",
      experience: "15 лет опыта",
      photo: "/coaches/coach1.jpg",
      bio: "Мастер спорта, чемпион России",
    },
    // ... другие тренеры
  ],
  testimonials: [
    {
      id: "1",
      name: "Мария Петрова",
      role: "Мама ученика",
      text: "Отличная академия! Сыну очень нравится...",
    },
    // ... другие отзывы
  ],
  gallery: [
    "/gallery/photo1.jpg",
    "/gallery/photo2.jpg",
    // ... другие фото
  ],
};
```

## Секции сайта

### 1. Header (Шапка)
- Фиксированная позиция при скролле
- Логотип слева (название компании из конфига)
- Навигация: Home, Programs, Coaches, Gallery, Contact
- Кнопка CTA "Enroll Now" / "Записаться"
- Высота: 80px
- Мобильное меню (гамбургер)

### 2. Hero Section
- Полноэкранный фон с затемнением
- Главный заголовок (company.tagline)
- Подзаголовок с описанием
- Две кнопки: "View Programs" и "Contact Us"
- Высота: 90vh
- Параллакс эффект при скролле
- Диагональное разделение с изображением

### 3. Programs Section
- Сетка из 3 колонок (desktop), 2 (tablet), 1 (mobile)
- Карточки программ:
  - Изображение
  - Название
  - Описание
  - Цена
  - Длительность
  - Список фич (если есть)
- Ховер эффект: тень + scale 1.02

### 4. Coaches Section
- Сетка 4 колонки (desktop), 2 (tablet), 1 (mobile)
- Карточки тренеров:
  - Фото
  - Имя
  - Должность
  - Специализация
  - Опыт
  - Краткая биография (если есть)

### 5. Testimonials Section
- Карусель отзывов
- Авто-переключение (5 сек)
- Навигация точками
- Имя, роль, текст отзыва
- Аватар (если есть)

### 6. Gallery Section
- Masonry сетка (плиточная)
- Lightbox при клике
- lazy-loading изображений

### 7. Contact Section
- Две колонки: форма + информация
- Поля формы:
  - Имя (required)
  - Email (required, валидация)
  - Телефон (маска)
  - Сообщение (textarea)
- Кнопка отправки
- Информация о компании:
  - Адрес
  - Телефон
  - Email
  - Соцсети
- Карта (placeholder или iframe)

### 8. Footer
- Логотип
- Быстрые ссылки
- Соцсети
- Copyright
- Копирайт с текущим годом

## Адаптивность (Breakpoints)

```css
/* Desktop: 1200px+ */
/* Tablet: 768px - 1199px */
/* Mobile: < 768px */
```

- Мобильное меню: бургер-иконка → fullscreen меню
- Сетки перестраиваются в одну колонку
- Отступы уменьшаются
- Размеры шрифтов адаптируются

## Визуальный стиль

### Цветовая схема (CSS Variables)
```css
:root {
  --color-primary: #E63946;
  --color-secondary: #1D3557;
  --color-accent: #F4A261;
  --color-background: #F8F9FA;
  --color-dark: #1A1A2E;
  --color-text: #1D3557;
  --color-text-light: #FFFFFF;
  
  --font-headings: 'Bebas Neue', sans-serif;
  --font-body: 'Barlow', sans-serif;
  
  --container-width: 1200px;
  --section-padding: 100px;
  --card-gap: 30px;
}
```

### Шрифты
- Заголовки: Bebas Neue (Google Fonts)
- Body: Barlow (Google Fonts)
- Размеры:
  - Hero title: 80px
  - Section titles: 48px
  - Card titles: 24px
  - Body: 16px
  - Small: 14px

### Эффекты
- Карточки: `box-shadow` при ховере, `transform: scale(1.02)`
- Кнопки: `transform: scale(1.05)` при ховере, смена цвета
- Плавный скролл между секциями
- Параллакс на Hero фоне
- Анимация появления секций (fade-in up)

## Функциональность

1. **Динамическая загрузка данных**: Все данные из site-config.ts
2. **Адаптация под домен**: Проверка domain в конфиге
3. **Валидация формы**: Проверка email, обязательные поля
4. **Мобильное меню**: Гамбургер → fullscreen overlay
5. **Карусель отзывов**: Автоматическое переключение
6. **Lightbox галереи**: Модальное окно с изображением
7. **Плавная навигация**: Scroll to section по клику
8. **SEO**: Meta tags, semantic HTML, alt тексты

## Как создать новый сайт

1. Скопировать структуру проекта
2. Заполнить `config/site-config.ts`:
   - Домен
   - Название компании
   - Контакты
   - Программы/Услуги
   - Тренеры/Команда
   - Отзывы
   - Галерея
3. Добавить изображения в `public/`
4. Настроить цвета и шрифты в конфиге
5. Задеплоить

## Примеры бизнесов

- 🏀 Спортивная академия (баскетбол, футбол, теннис)
- 🎓 Образовательные курсы (языки, программирование)
- 💪 Фитнес-центр / персональный тренер
- 🎨 Творческая студия (рисование, музыка)
- 🦷 Медицинская клиника
- 🏠 Недвижимость / агентство
- 🍽️ Ресторан / кафе
- 🎓 Tutor / репетитор

---

**Ключевой принцип**: Один конфиг-файл → полностью настроенный сайт. Не нужно менять код, только данные.