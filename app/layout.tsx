// app/layout.tsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ToasterProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/ConfettiProvider'
import { ThemeProvider } from 'next-themes'
import { Theme } from "@radix-ui/themes"

const inter = Inter({ subsets: ['latin'] })

// Server-side metadata export (no client-side dependencies here)
export const metadata: Metadata = {
  title: 'LMS-Platform',
  description: 'Courses For Free',
}

// RootLayout component (client-side logic inside)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* ThemeProvider should be fine here for client-side rendering */}
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Theme appearance="dark">
              <ConfettiProvider />
              <ToasterProvider />
              {children}
            </Theme>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
