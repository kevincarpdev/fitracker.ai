import type { Metadata } from 'next'
import { Inter, Noto_Sans_Math } from 'next/font/google'
import './globals.css'

// Formula-style font (Noto Sans Math for mathematical expressions)
const notoSansMath = Noto_Sans_Math({
  weight: '400',
  subsets: ['math'],
  variable: '--font-noto-sans-math',
  display: 'swap',
})

// Inter for body text
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fitracker',
  description: 'Track your fitness journey',
  generator: 'Fitracker',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${notoSansMath.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
