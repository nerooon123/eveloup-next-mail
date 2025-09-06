# Eveloup — Next.js App (App Router) — scaffold

## Что внутри
- Next.js (app router) scaffold: `app/layout.js`, `app/page.js`, `app/globals.css`
- `pages/api/contact.js` — stub API endpoint для формы обратной связи
- `public/logo.svg`, `public/*` — место для OG/иконок
- `package.json`, `next.config.js`

## Установка и запуск локально
1. Установите зависимости: `npm install`
2. Запустите dev: `npm run dev`
3. Откройте: http://localhost:3000

## Как настроить отправку формы
- Для продакшна используйте SendGrid, Mailgun или SMTP через Nodemailer.
- Задайте переменные окружения (пример):
  - `EMAIL_TO=you@domain.com`
  - `SMTP_HOST=smtp.example.com`
  - `SMTP_PORT=587`
  - `SMTP_USER=...`
  - `SMTP_PASS=...`

В `pages/api/contact.js` раскомментируйте блок с nodemailer и установите `nodemailer`.

## Деплой на Vercel
1. Создайте проект на Vercel, подключите репозиторий.
2. В переменных среды задайте EMAIL_TO и SMTP_* (если нужно).
3. Vercel автоматически соберёт проект (Next 13 appDir поддерживается).

## Что нужно заменить
- Контент, домен и контакты.
- Загрузить реальные OG/иконку в `public/`.
- Настроить реальные кейсы в портфолио.

## Настройка email-отправки
В `.env.local` укажите:
```
EMAIL_TO=you@domain.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_login
SMTP_PASS=your_password
```

Установите nodemailer:
```
npm install nodemailer
```

После этого контактная форма будет отправлять заявки на указанный EMAIL_TO.
