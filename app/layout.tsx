import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/Sidebar'
import BackToTopButton from './components/BackToTopButton'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex Smith - Photographer',
  description: 'Professional photographer and designer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 md:ml-72">
            {children}
          </main>
          <BackToTopButton />
        </div>
      </body>
    </html>
  )
}