import './globals.css'
import type { Metadata } from 'next'
import { Inter, Spicy_Rice } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], weight: ['400', '700', '900'] })
export const spicyRice = Spicy_Rice({ subsets: ['latin'],weight:'400' })

export const metadata: Metadata = {
  title: 'Retrofone',
  description: 'A forma simples e autêntica de guardar as mensagens de seus convidados',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
