import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit',
})

export const metadata: Metadata = {
  title: 'Muh. Ikhsan Fahmi - Portfolio',
  description: 'Personal portfolio website of Muh. Ikhsan Fahmi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={kanit.variable}>
      <body>{children}</body>
    </html>
  )
}
