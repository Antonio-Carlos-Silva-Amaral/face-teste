import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Facebook - entre ou cadastre-se',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Head>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
    </>
  )
}
