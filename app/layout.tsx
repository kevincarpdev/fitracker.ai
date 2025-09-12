import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

// Nunito font for all text
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
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
      <body className={`${nunito.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
