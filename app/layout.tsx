// app/layout.tsx

import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ToasterProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/ConfettiProvider'
import { ThemeProvider } from 'next-themes'
import { Theme } from "@radix-ui/themes"
import { metadata } from './metadata' // Import metadata here

const inter = Inter({ subsets: ['latin'] })

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
