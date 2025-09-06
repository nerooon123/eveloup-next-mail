import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Eveloup — разработка сайтов и программ для малого бизнеса',
  description: 'Eveloup — малая IT-команда. Создаём сайты, веб-приложения и ПО для стартапов и компаний, которые только открылись. Делаем быстро, прозрачно и по делу.',
  icons: {
    icon: '/public/favicon.ico',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  )
}