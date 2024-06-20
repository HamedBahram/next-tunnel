import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { TunnelToolbar } from '@tunnel/nextjs'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className='scroll-smooth antialiased'
      suppressHydrationWarning
    >
      <body className={`flex min-h-screen flex-col ${inter.className}`}>
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='system'
          disableTransitionOnChange
        >
          <Header />
          <main className='grow'>{children}</main>
          {process.env.NODE_ENV !== 'development' && (
            <TunnelToolbar
              projectId={process.env.NEXT_PUBLIC_TUNNEL_PROJECT_ID as string}
            />
          )}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
