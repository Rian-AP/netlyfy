import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mineshish',
  description: 'Official site',
  generator: '',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
        sizes: '32x32',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}