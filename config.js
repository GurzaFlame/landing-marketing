const CONFIG = {
  company: {
    name: 'MarketPro Academy',
    slogan: 'Научитесь маркетингу за 3 месяца',
    description: 'Онлайн-академия маркетинга. Практические курсы от действующих специалистов рынка. Запускайте карьеру в digital-маркетинге с нуля или прокачивайте навыки.',
    city: 'Москва',
    yearFounded: 2021
  },

  contact: {
    phone: '+7 (800) 234-56-78',
    phoneLink: 'tel:+78002345678',
    email: 'info@marketpro.ru',
    address: 'Москва, ул. Тверская, д. 12, офис 305',
    workHours: 'Пн-Пт: 10:00–19:00, Сб: 11:00–16:00',
    whatsapp: '+78002345678',
    telegram: '@marketpro_academy'
  },

  seo: {
    title: 'MarketPro Academy — Онлайн-курсы по маркетингу',
    description: 'Научитесь маркетингу за 3 месяца. Практические онлайн-курсы по SMM, таргетированной рекламе, SEO и контент-маркетингу. Диплом и трудоустройство.',
    keywords: 'курсы маркетинга, онлайн-маркетинг, SMM курс, таргетированная реклама обучение, SEO курсы, digital маркетинг Москва',
    ogImage: '/assets/og-marketpro.jpg',
    canonical: 'https://marketpro.ru'
  },

  design: {
    bgPrimary: '#0A0A0A',
    bgSecondary: '#111118',
    bgCard: '#16161E',
    bgGlass: 'rgba(22, 22, 30, 0.6)',
    textPrimary: '#FFFFFF',
    textSecondary: '#B0B0C0',
    textMuted: '#6C6C80',
    accentBlue: '#6C3CE1',
    accentGreen: '#00E5A0',
    accentPurple: '#6C3CE1',
    gradientPrimary: 'linear-gradient(135deg, #6C3CE1 0%, #00E5A0 100%)',
    gradientBorder: 'linear-gradient(135deg, #6C3CE1, #00E5A0)',
    glassBlur: '20px',
    glassBorder: '1px solid rgba(108, 60, 225, 0.2)',
    fontPrimary: "'Inter', sans-serif",
    fontMono: "'JetBrains Mono', monospace"
  },

  hero: {
    headline: 'Научитесь маркетингу',
    subheadline: 'ЗА 3 МЕСЯЦА',
    description: 'Практические онлайн-курсы от действующих специалистов. Научитесь запускать рекламу, продвигать бизнес в соцсетях и анализировать результаты.',
    ctaText: 'Начать обучение',
    ctaSecondaryText: 'Смотреть программу',
    ctaLink: '#pricing',
    showStats: true,
    stats: [
      { value: '2 500+', label: 'Выпускников' },
      { value: '92%', label: 'Трудоустроены' },
      { value: '4.9', label: 'Рейтинг курсов' },
      { value: '3', label: 'Месяца обучения' }
    ],
    showVisualization: true
  },

  features: {
    title: 'Чему вы научитесь',
    subtitle: 'Полный спектр навыков современного маркетолога',
    showBentoGrid: true,
    items: [
      {
        id: 'smm',
        title: 'SMM',
        description: 'Создание и продвижение аккаунтов в социальных сетях. Стратегии контента, вовлечение аудитории, рост подписчиков.',
        icon: '📱',
        size: 'medium',
        type: 'feature',
        color: '#6C3CE1'
      },
      {
        id: 'target',
        title: 'Таргетированная реклама',
        description: 'Настройка рекламы в VK Ads, myTarget и Facebook Ads. Поиск целевой аудитории, A/B тестирование, оптимизация бюджета.',
        icon: '🎯',
        size: 'medium',
        type: 'feature',
        color: '#00E5A0'
      },
      {
        id: 'seo',
        title: 'SEO',
        description: 'Поисковая оптимизация сайтов. Семантическое ядро, внутренняя и внешняя оптимизация, технический аудит.',
        icon: '🔍',
        size: 'medium',
        type: 'feature',
        color: '#6C3CE1'
      },
      {
        id: 'content',
        title: 'Контент-маркетинг',
        description: 'Создание контента, который привлекает и конвертирует. Сторителлинг, визуал, тексты для разных платформ.',
        icon: '✍️',
        size: 'medium',
        type: 'feature',
        color: '#00E5A0'
      },
      {
        id: 'email',
        title: 'Email-маркетинг',
        description: 'Создание рассылок, сегментация базы, автоматизация триггерных писем, анализ открываемости и конверсий.',
        icon: '📧',
        size: 'medium',
        type: 'feature',
        color: '#6C3CE1'
      },
      {
        id: 'analytics',
        title: 'Аналитика',
        description: 'Яндекс.Метрика, Google Analytics, построение дашбордов. Измерение ROI, анализ воронки продаж, принятие решений на данных.',
        icon: '📊',
        size: 'medium',
        type: 'feature',
        color: '#00E5A0'
      }
    ]
  },

  pricing: {
    showPricing: true,
    title: 'Выберите свой план обучения',
    subtitle: 'Инвестируйте в себя — вернётся с лихвой',
    plans: [
      {
        name: 'Старт',
        price: '4 990',
        currency: '₽',
        period: 'единоразово',
        description: 'Для тех, кто хочет попробовать',
        features: [
          'Доступ к 2 модулям (SMM, Контент)',
          'Видеоуроки с доступом 3 месяца',
          'Чек-листы и шаблоны',
          'Чат поддержки'
        ],
        excludedFeatures: [
          'Таргетированная реклама',
          'SEO модуль',
          'Email-маркетинг',
          'Личный куратор',
          'Сертификат',
          'Помощь с трудоустройством'
        ],
        cta: 'Начать обучение',
        popular: false,
        yookassaAmount: 4990,
        yookassaDescription: 'Курс Старт — MarketPro Academy'
      },
      {
        name: 'Профессионал',
        price: '14 990',
        currency: '₽',
        period: 'единоразово',
        description: 'Полная программа для карьеры в маркетинге',
        features: [
          'Доступ ко всем 6 модулям',
          'Видеоуроки с доступом 6 месяцев',
          'Практические задания с проверкой',
          'Личный куратор',
          'Сертификат о прохождении',
          'Чат выпускников'
        ],
        excludedFeatures: [
          'Помощь с трудоустройством',
          'Индивидуальные менторские сессии'
        ],
        cta: 'Выбрать Профессионал',
        popular: true,
        yookassaAmount: 14990,
        yookassaDescription: 'Курс Профессионал — MarketPro Academy'
      },
      {
        name: 'Максимум',
        price: '29 990',
        currency: '₽',
        period: 'единоразово',
        description: 'Всё включено + карьерная поддержка',
        features: [
          'Доступ ко всем 6 модулям',
          'Видеоуроки с доступом 12 месяцев',
          'Практические задания с проверкой',
          'Личный куратор',
          'Сертификат о прохождении',
          '4 индивидуальные сессии с ментором',
          'Помощь с трудоустройством',
          'Разбор портфолио'
        ],
        excludedFeatures: [],
        cta: 'Выбрать Максимум',
        popular: false,
        yookassaAmount: 29990,
        yookassaDescription: 'Курс Максимум — MarketPro Academy'
      }
    ]
  },

  testimonials: {
    showTestimonials: true,
    title: 'Отзывы наших выпускников',
    items: [
      {
        name: 'Анна Петрова',
        role: 'SMM-специалист в Яндексе',
        text: 'За 3 месяца обучения я перешла из офиса в digital-сферу. Сейчас работаю SMM-специалистом и получаю в 2 раза больше, чем раньше. Практические задания — это то, чего не хватает в других курсах.',
        rating: 5
      },
      {
        name: 'Дмитрий Козлов',
        role: 'Фрилансер, контент-маркетолог',
        text: 'Курс дал мне всё необходимое для старта фриланса. Уже через месяц после окончания я набрал первых 5 клиентов. Особенно полезными оказались модули по аналитике и email-маркетингу.',
        rating: 5
      },
      {
        name: 'Мария Сидорова',
        role: 'Head of Marketing в стартапе',
        text: 'Пришла на курс с базовыми знаниями, ушла с полным пониманием digital-маркетинга. Менторы — действующие специалисты, которые знают реальный рынок. Рекомендую тем, кто хочет расти.',
        rating: 5
      }
    ]
  },

  faq: {
    showFaq: true,
    title: 'Часто задаваемые вопросы',
    items: [
      {
        question: 'Нужны ли предварительные знания?',
        answer: 'Нет, курс построен с нуля. Мы начинаем с основ и постепенно переходим к продвинутым темам. Подходит как для новичков, так и для тех, кто хочет систематизировать знания.'
      },
      {
        question: 'Как проходит обучение?',
        answer: 'Обучение проходит онлайн в комфортном темпе. Вы смотрите видеоуроки, выполняете практические задания и получаете обратную связь от куратора. Все материалы доступны из личного кабинета.'
      },
      {
        question: 'Выдаётся ли сертификат?',
        answer: 'Да, по окончании курса вы получаете сертификат MarketPro Academy. Для получения необходимо выполнить все практические задания и сдать финальный проект.'
      },
      {
        question: 'Можно ли оплатить курс в рассрочку?',
        answer: 'Да, мы предлагаем рассрочку на 3 или 6 месяцев без переплат. Оформление занимает несколько минут онлайн. Также доступна оплата через карты рассрочки.'
      },
      {
        question: 'Помогаете ли вы с трудоустройством?',
        answer: 'Да, пакет «Максимум» включает помощь с трудоустройством: составление резюме, подготовку к собеседованиям и рекомендации от наших партнёров-работодателей.'
      }
    ]
  },

  form: {
    title: 'Запишитесь на бесплатную консультацию',
    subtitle: 'Расскажем о курсах, подберём программу и ответим на вопросы',
    fields: [
      { name: 'name', label: 'Ваше имя', type: 'text', placeholder: 'Анна', required: true },
      { name: 'phone', label: 'Телефон', type: 'tel', placeholder: '+7 (___) ___-__-__', required: true },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'anna@example.com', required: false },
      { name: 'message', label: 'Сообщение', type: 'textarea', placeholder: 'Какой курс вас интересует?', required: false }
    ],
    submitText: 'Записаться на консультацию',
    privacyText: 'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности',
    formsubmitEmail: 'info@marketpro.ru',
    autoResponse: 'Спасибо за заявку! Мы свяжемся с вами в ближайшее время.'
  },

  social: {
    vk: 'https://vk.com/marketpro_academy',
    telegram: 'https://t.me/marketpro_academy'
  },

  sections: {
    showHero: true,
    showBentoGrid: true,
    showPricing: true,
    showTestimonials: true,
    showFaq: true,
    showForm: true,
    showSocial: true,
    showWhatsapp: true,
    showTelegram: true
  },

  yookassa: {
    shopId: 'YOUR_SHOP_ID',
    secretKey: 'YOUR_SECRET_KEY',
    successUrl: 'https://marketpro.ru/success',
    cancelUrl: 'https://marketpro.ru/cancel'
  },

  analytics: {
    yandexMetrika: '',
    googleAnalytics: ''
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
