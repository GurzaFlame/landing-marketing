/* =============================================
   MARKETING COURSES LANDING — MAIN.JS
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------
     1. NAV — scroll effect + mobile toggle
     ----------------------------------------- */
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelector('.nav-links');
  const burger = document.querySelector('.nav-burger');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  burger?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const spans = burger.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  /* Close mobile menu on link click */
  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('active');
      burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });

  /* -----------------------------------------
     2. HERO — generate via innerHTML
     ----------------------------------------- */
  const heroContent = document.getElementById('hero-content');
  if (heroContent) {
    heroContent.innerHTML = `
      <div class="hero-badge">
        <span class="hero-badge-dot"></span>
        Набор открыт — старт 15 августа
      </div>
      <h1 class="hero-title">
        Станьте маркетологом<br>за <span class="gradient-text">3 месяца</span>
      </h1>
      <p class="hero-description">
        Практический курс с реальными проектами, наставниками из индустрии и трудоустройством. Научитесь создавать стратегии, которые приносят результат.
      </p>
      <div class="hero-buttons">
        <a href="#form" class="btn btn-primary">Записаться на курс →</a>
        <a href="#pricing" class="btn btn-outline">Смотреть цены</a>
      </div>
      <div class="hero-stats">
        <div>
          <div class="hero-stat-value gradient-text">2 400+</div>
          <div class="hero-stat-label">Выпускников</div>
        </div>
        <div>
          <div class="hero-stat-value gradient-text">94%</div>
          <div class="hero-stat-label">Трудоустроены</div>
        </div>
        <div>
          <div class="hero-stat-value gradient-text">4.9</div>
          <div class="hero-stat-label">Средний рейтинг</div>
        </div>
      </div>
    `;
  }

  /* -----------------------------------------
     3. BENTO GRID — generate via innerHTML
     ----------------------------------------- */
  const bentoGrid = document.getElementById('bento-grid');
  if (bentoGrid) {
    const bentoCards = [
      {
        icon: '💻',
        color: 'purple',
        title: 'Веб-разработка',
        text: 'HTML, CSS, JavaScript, React. Создавайте лендинги и рекламные креативы с нуля.',
        tags: ['HTML/CSS', 'JavaScript', 'React', 'Figma'],
        anim: 'circles'
      },
      {
        icon: '🎨',
        color: 'cyan',
        title: 'Дизайн',
        text: 'UI/UX, брендинг, типографика. Визуал, который продаёт и запоминается.',
        tags: ['Figma', 'Adobe', 'Брендинг', 'UI/UX'],
        anim: 'bars'
      },
      {
        icon: '📣',
        color: 'purple',
        title: 'Маркетинг',
        text: 'SMM, таргет, контент-маркетинг, email-рассылки. Полный арсенал digital-маркетолога.',
        tags: ['SMM', 'Таргет', 'SEO', 'Email'],
        anim: 'dots'
      },
      {
        icon: '📊',
        color: 'cyan',
        title: 'Аналитика',
        text: 'Яндекс.Метрика, Google Analytics, A/B-тесты. Принимайте решения на данных.',
        tags: ['GA4', 'Метрика', 'SQL', 'A/B тесты'],
        anim: 'chart'
      }
    ];

    const anims = {
      circles: `<div class="bento-anim bento-anim-circles">
        <div class="bento-anim-circle"></div>
        <div class="bento-anim-circle"></div>
        <div class="bento-anim-circle"></div>
      </div>`,
      bars: `<div class="bento-anim bento-anim-bars">
        <div class="bento-anim-bar"></div>
        <div class="bento-anim-bar"></div>
        <div class="bento-anim-bar"></div>
        <div class="bento-anim-bar"></div>
        <div class="bento-anim-bar"></div>
      </div>`,
      dots: `<div class="bento-anim bento-anim-dots">
        <div class="bento-anim-dot"></div>
        <div class="bento-anim-dot"></div>
        <div class="bento-anim-dot"></div>
        <div class="bento-anim-dot"></div>
        <div class="bento-anim-dot"></div>
        <div class="bento-anim-dot"></div>
      </div>`,
      chart: `<div class="bento-anim bento-anim-chart">
        <div class="bento-anim-line"></div>
        <div class="bento-anim-line"></div>
        <div class="bento-anim-line"></div>
        <div class="bento-anim-line"></div>
        <div class="bento-anim-line"></div>
        <div class="bento-anim-line"></div>
        <div class="bento-anim-line"></div>
      </div>`
    };

    bentoGrid.innerHTML = bentoCards.map((c, i) => `
      <div class="bento-card reveal reveal-delay-${i + 1}">
        <div class="bento-card-icon ${c.color}">${c.icon}</div>
        <h3 class="bento-card-title">${c.title}</h3>
        <p class="bento-card-text">${c.text}</p>
        <div class="bento-card-tags">
          ${c.tags.map(t => `<span class="bento-tag">${t}</span>`).join('')}
        </div>
        ${anims[c.anim]}
      </div>
    `).join('');
  }

  /* -----------------------------------------
     4. STEPS — generate via innerHTML
     ----------------------------------------- */
  const stepsGrid = document.getElementById('steps-grid');
  if (stepsGrid) {
    const steps = [
      { icon: '📝', title: 'Заявка', text: 'Заполните форму и получите бесплатную консультацию по программе.' },
      { icon: '🎯', title: 'Собеседование', text: 'Короткий разговор с куратором — подберём оптимальный формат обучения.' },
      { icon: '🚀', title: 'Обучение', text: '3 месяца интенсивной программы с домашками и реальными проектами.' },
      { icon: '💼', title: 'Трудоустройство', text: 'Помогаем с резюме, портфолио и подводим к работодателям-партнёрам.' }
    ];

    stepsGrid.innerHTML = steps.map((s, i) => `
      <div class="step-card reveal reveal-delay-${i + 1}">
        <div class="step-number">${i + 1}</div>
        <div class="step-icon">${s.icon}</div>
        <h3 class="step-title">${s.title}</h3>
        <p class="step-text">${s.text}</p>
      </div>
    `).join('');
  }

  /* -----------------------------------------
     5. PRICING — generate via innerHTML
     ----------------------------------------- */
  const pricingGrid = document.getElementById('pricing-grid');
  if (pricingGrid) {
    const plans = [
      {
        name: 'Базовый',
        desc: 'Для тех, кто хочет начать карьеру в маркетинге',
        price: '4 990',
        features: [
          'Доступ к 12 модулям видеоуроков',
          'Домашние задания с проверкой',
          'Чат с однокурсниками',
          'Сертификат о прохождении'
        ],
        featured: false,
        badge: ''
      },
      {
        name: 'Продвинутый',
        desc: 'Полная программа с наставничеством',
        price: '14 990',
        features: [
          'Всё из тарифа «Базовый»',
          'Индивидуальный наставник',
          'Реальные коммерческие проекты',
          'Портфолио из 5 кейсов',
          'Помощь с трудоустройством'
        ],
        featured: true,
        badge: 'Популярный'
      },
      {
        name: 'Премиум',
        desc: 'Максимальный результат и карьерный рост',
        price: '29 990',
        features: [
          'Всё из тарифа «Продвинутый»',
          '1-on-1 менторство 24/7',
          'Гарантия трудоустройства',
          'Доступ навсегда + обновления',
          'VIP-вакансии от партнёров',
          'Возврат денег, если не найдёте работу'
        ],
        featured: false,
        badge: ''
      }
    ];

    pricingGrid.innerHTML = plans.map((p, i) => `
      <div class="pricing-card ${p.featured ? 'featured' : ''} reveal reveal-delay-${i + 1}">
        ${p.badge ? `<span class="pricing-badge">${p.badge}</span>` : ''}
        <h3 class="pricing-name">${p.name}</h3>
        <p class="pricing-desc">${p.desc}</p>
        <div class="pricing-price">
          <span class="pricing-value">${p.price}</span>
          <span class="pricing-currency"> руб.</span>
          <div class="pricing-period">или 3 платежа</div>
        </div>
        <div class="pricing-features">
          ${p.features.map(f => `
            <div class="pricing-feature">
              <span class="pricing-check">✓</span>
              <span>${f}</span>
            </div>
          `).join('')}
        </div>
        <a href="#form" class="btn ${p.featured ? 'btn-primary' : 'btn-outline'}">Выбрать тариф</a>
      </div>
    `).join('');
  }

  /* -----------------------------------------
     6. TESTIMONIALS — generate via innerHTML
     ----------------------------------------- */
  const testimonialsGrid = document.getElementById('testimonials-grid');
  if (testimonialsGrid) {
    const testimonials = [
      {
        stars: 5,
        text: 'За 3 месяца я полностью сменила профессию. До этого работала бухгалтером, а теперь — digital-маркетолог в IT-компании. Зарплата выросла в 2 раза!',
        name: 'Анна К.',
        role: 'Digital-маркетолог, Яндекс',
        initials: 'АК',
        avatarClass: 'p1'
      },
      {
        stars: 5,
        text: 'Курс дал мне именно то, чего не хватало — практические навыки. Уже на 2-м месяце делал проекты для реальных клиентов. Наставник всегда был на связи.',
        name: 'Дмитрий Л.',
        role: 'Performance-маркетолог, VK',
        initials: 'ДЛ',
        avatarClass: 'p2'
      },
      {
        stars: 5,
        text: 'Лучшая инвестиция в себя. Особенно понравились модули по аналитике — теперь уверенно работаю с данными и могу обосновать любое маркетинговое решение.',
        name: 'Мария В.',
        role: 'Контент-маркетер, Skillbox',
        initials: 'МВ',
        avatarClass: 'p3'
      }
    ];

    testimonialsGrid.innerHTML = testimonials.map((t, i) => `
      <div class="testimonial-card reveal reveal-delay-${i + 1}">
        <div class="testimonial-stars">${'★'.repeat(t.stars)}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar ${t.avatarClass}">${t.initials}</div>
          <div>
            <div class="testimonial-name">${t.name}</div>
            <div class="testimonial-role">${t.role}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* -----------------------------------------
     7. FAQ — generate + toggle
     ----------------------------------------- */
  const faqList = document.getElementById('faq-list');
  if (faqList) {
    const faqs = [
      {
        q: 'Нужны ли пред знания для прохождения курса?',
        a: 'Нет, курс подходит для новичков. Мы начинаем с основ и постепенно переходим к сложным темам. Главное — желание учиться и уделять 10-15 часов в неделю.'
      },
      {
        q: 'Какой график занятий?',
        a: 'Видеоуроки доступны в любое время. Вебинары проходят по вечерам 2 раза в неделю. Домашние задания сдаются до дедлайна, но вы планируете своё время самостоятельно.'
      },
      {
        q: 'Выдаётся ли сертификат?',
        a: 'Да, по окончании курса вы получаете сертификат установленного образца. На тарифах «Продвинутый» и «Премиум» — additionally портфолио из реальных проектов.'
      },
      {
        q: 'Правда ли помогаете с трудоустройством?',
        a: 'Да. Мы сотрудничаем с 50+ компаниями-партнёрами. На тарифе «Премиум» — гарантия трудоустройства или возврат денег. На «Продвинутом» — помощь с резюме и подбор вакансий.'
      },
      {
        q: 'Можно ли оплатить курс в рассрочку?',
        a: 'Да, доступна оплата в 3 равных платежа без переплаты. Также принимаем оплату от работодателя — предоставим всё необходимые документы.'
      },
      {
        q: 'Что если курс мне не подойдёт?',
        a: 'В течение первых 14 дней вы можете вернуть деньги без вопросов. Мы уверены в качестве, поэтому даём эту гарантию.'
      }
    ];

    faqList.innerHTML = faqs.map((f, i) => `
      <div class="faq-item reveal" data-index="${i}">
        <button class="faq-question">
          <span>${f.q}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">${f.a}</div>
        </div>
      </div>
    `).join('');

    faqList.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const isActive = item.classList.contains('active');

        // Close all others
        faqList.querySelectorAll('.faq-item.active').forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove('active');
            openItem.querySelector('.faq-answer').style.maxHeight = '0';
          }
        });

        if (isActive) {
          item.classList.remove('active');
          answer.style.maxHeight = '0';
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  /* -----------------------------------------
     8. FORM — submit handler
     ----------------------------------------- */
  const leadForm = document.getElementById('lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = leadForm.querySelector('.btn');
      const origText = btn.textContent;
      btn.textContent = 'Извините, заявки временно не принимаются';
      btn.style.pointerEvents = 'none';
      setTimeout(() => {
        btn.textContent = origText;
        btn.style.pointerEvents = '';
        leadForm.reset();
      }, 2500);
    });
  }

  /* -----------------------------------------
     9. SCROLL REVEAL — IntersectionObserver
     ----------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* Re-observe dynamically added elements */
  const dynamicObserver = new MutationObserver(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      revealObserver.observe(el);
    });
  });
  dynamicObserver.observe(document.body, { childList: true, subtree: true });

  /* -----------------------------------------
     10. SMOOTH ANCHOR SCROLL
     ----------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* -----------------------------------------
     11. PROGRESS BAR ANIMATION
     ----------------------------------------- */
  const progressFill = document.querySelector('.progress-fill');
  if (progressFill) {
    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          progressFill.classList.add('animated');
          progressObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    progressObserver.observe(progressFill);
  }

  /* -----------------------------------------
     12. COUNTER ANIMATION
     ----------------------------------------- */
  function animateCounter(el, target, suffix = '') {
    const isFloat = String(target).includes('.');
    const duration = 2000;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isFloat
        ? (target * eased).toFixed(1)
        : Math.floor(target * eased).toLocaleString('ru-RU');
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const statValues = document.querySelectorAll('.hero-stat-value');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent;
        if (text.includes('+')) {
          animateCounter(el, 2400, '+');
        } else if (text.includes('%')) {
          animateCounter(el, 94, '%');
        } else if (text.includes('.')) {
          animateCounter(el, 4.9, '');
        }
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statValues.forEach(el => counterObserver.observe(el));

});

