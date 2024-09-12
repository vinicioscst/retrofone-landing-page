import ToasterContainer from '@/components/toaster-container'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Spicy_Rice } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-inter'
})
const spicyRice = Spicy_Rice({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-spicy'
})

export const metadata: Metadata = {
  title: 'Retrofone',
  description:
    'A forma simples e autêntica de guardar as mensagens de seus convidados',
  keywords: [
    'Casamento',
    'Audio Guest Book',
    'Audio Guestbook',
    'Livro de visitas',
    'Audio Guest Book casamento',
    'Audio Guestbook casamento',
    'festa',
    'festa casamento',
    'vou casar',
    'casamento joão pessoa',
    'audio guest book joão pessoa',
    'retrofone',
    'itens casamento',
    'atrativos casamento',
    'tendência casamento',
    'tendência festa'
  ]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={`scroll-smooth ${inter.variable} ${spicyRice.variable}`}
      lang='pt-BR'
    >
      <body>
        {children}
        <ToasterContainer />
      </body>
    </html>
  )
}
