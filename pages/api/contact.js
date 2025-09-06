
// Contact form API with Nodemailer integration.
// Requires environment variables in `.env.local`:
// EMAIL_TO, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {
    const { name, email, message } = req.body || {}
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Eveloup Contact" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Новая заявка с Eveloup от ${name}`,
      text: `Имя: ${name}\nEmail: ${email}\n\n${message}`,
    })

    return res.status(200).json({ ok: true, message: 'Сообщение успешно отправлено!' })
  } catch (err) {
    console.error('Contact error:', err)
    return res.status(500).json({ error: 'Ошибка при отправке сообщения' })
  }
}
