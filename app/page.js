import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className="header" role="banner">
        <div className="container nav">
          <Link href="/" className="logo" aria-label="На главную">
            <img src="/logo.svg" alt="" width="28" height="28" />
            Eveloup
          </Link>
          <nav aria-label="Основная навигация">
            <div className="menu" role="menubar">
              <a role="menuitem" href="#services">Услуги</a>
              <a role="menuitem" href="#portfolio">Портфолио</a>
              <a role="menuitem" href="#process">Процесс</a>
              <a role="menuitem" href="#contacts">Контакты</a>
            </div>
          </nav>
          <a className="cta-btn" href="#contacts">Связаться</a>
        </div>
      </header>

      <main id="main">
        <section className="hero container" id="home">
          <div className="hero-grid">
            <div>
              <span className="badge">IT-команда для стартапов</span>
              <h1>Eveloup — сайты и ПО для компаний, которые только стартуют</h1>
              <p className="lead">Делаем лендинги, корпоративные сайты и MVP-приложения. Сроки — короткие, коммуникация — прозрачная, код — поддерживаемый.</p>
              <div className="kpis">
                <div className="kpi"><strong>5–15 дней</strong><span>типичный срок</span></div>
                <div className="kpi"><strong>SEO-ready</strong><span>мета, OG, sitemap</span></div>
                <div className="kpi"><strong>Под ключ</strong><span>домен, хостинг, SSL</span></div>
              </div>
              <p className="notice">* Цены и сроки зависят от объёма работ.</p>
              <p><a className="cta-btn" href="#contacts">Обсудить проект</a></p>
            </div>
            <div className="card" aria-label="Краткий список услуг">
              <div className="grid-3">
                <div className="service">
                  <h3>Лендинги</h3>
                  <p className="notice">Адаптивные, быстрые, с аналитикой и формами.</p>
                </div>
                <div className="service">
                  <h3>Сайты</h3>
                  <p className="notice">Корпоративные сайты и блоги, CMS по требованию.</p>
                </div>
                <div className="service">
                  <h3>MVP-приложения</h3>
                  <p className="notice">Прототипы и пилоты на современных стек-технологиях.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section container" id="services">
          <h2>Услуги</h2>
          <p className="section-lead">Фокус — быстрый запуск и измеримый результат.</p>
          <div className="grid-3">
            <div className="card">
              <h3>Разработка лендингов</h3>
              <ul>
                <li>Дизайн в фирменных цветах</li>
                <li>Анимации без перегруза</li>
                <li>Интеграция форм и аналитики</li>
              </ul>
            </div>
            <div className="card">
              <h3>Корпоративные сайты</h3>
              <ul>
                <li>Структура, миграция контента</li>
                <li>CMS (по запросу)</li>
                <li>Оптимизация скорости</li>
              </ul>
            </div>
            <div className="card">
              <h3>MVP и веб-приложения</h3>
              <ul>
                <li>Проектирование API</li>
                <li>Аутентификация</li>
                <li>Деплой и мониторинг</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section container portfolio" id="portfolio">
          <h2>Портфолио</h2>
          <p className="section-lead">Кейсы появятся здесь. Пока — примеры макетов.</p>
          <div className="grid-2">
            <div className="item">
              <div className="thumb" role="img" aria-label="Превью проекта №1"></div>
              <div>
                <strong>Сайт производителя мебели</strong>
                <div className="notice">Лендинг, SEO, подключение CRM</div>
              </div>
            </div>
            <div className="item">
              <div className="thumb" role="img" aria-label="Превью проекта №2"></div>
              <div>
                <strong>Сервис записи к врачу</strong>
                <div className="notice">MVP, интеграция с Google Calendar</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section container" id="process">
          <h2>Как мы работаем</h2>
          <div className="grid-3">
            <div className="card"><strong>01</strong><br/>Бриф и оценка</div>
            <div className="card"><strong>02</strong><br/>Дизайн и прототип</div>
            <div className="card"><strong>03</strong><br/>Разработка и запуск</div>
          </div>
        </section>

        <section className="section container" id="contacts">
          <h2>Контакты</h2>
          <div className="grid-2">
            <div className="card">
              <form id="contact-form" className="form" onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target;
                  const data = {
                    name: form.name.value,
                    email: form.email.value,
                    message: form.message.value
                  };
                  try {
                    const res = await fetch('/api/contact', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data)
                    });
                    const result = await res.json();
                    if (res.ok) {
                      alert(result.message || 'Успешно!');
                      form.reset();
                    } else {
                      alert(result.error || 'Ошибка');
                    }
                  } catch (err) {
                    alert('Ошибка сети');
                  }
                }}>
                <div className="row">
                  <div>
                    <label className="sr-only" htmlFor="name">Имя</label>
                    <input id="name" name="name" placeholder="Имя" required/>
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="Email" required/>
                  </div>
                </div>
                <label className="sr-only" htmlFor="message">Сообщение</label>
                <textarea id="message" name="message" placeholder="Коротко опишите задачу" required></textarea>
                <button className="cta-btn" type="submit">Отправить</button>
                <p className="notice">Или напишите в Telegram: <a href="https://t.me/eveloup">@eveloup</a></p>
              </form>
            </div>
            <div className="card">
              <h3>Реквизиты</h3>
              <p className="notice">Eveloup, малая IT-команда. Email: <a href="mailto:info@eveloup@example.com">info@eveloup@example.com</a></p>
              <p className="notice">График: Пн–Пт, 10:00–19:00</p>
              <p className="notice">Локация: удалённо</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <img src="/logo.svg" alt="" width="20" height="20"/> Eveloup
          <small>© 2025 Eveloup. Все права защищены.</small>
        </div>
      </footer>
    </>
  )
}