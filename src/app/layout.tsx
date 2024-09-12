import './globals.css'
import type { Metadata } from 'next'
import { Inter, Spicy_Rice } from 'next/font/google'
import { Toaster } from 'sonner'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900']
})
export const spicyRice = Spicy_Rice({ subsets: ['latin'], weight: '400' })

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
      className='scroll-smooth'
      lang='pt-BR'
    >
      <body>
        {children}
        <Toaster
          richColors
          position='top-right'
        />
      </body>
    </html>
  )
}
