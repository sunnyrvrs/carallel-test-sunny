import Header from '../components/Header';
import './globals.css'
import ClientProviders from '@/components/ClientProviders';
import { Montserrat } from 'next/font/google';
import React from "react";

// The 'swap' value ensures that if the font takes time to load, the text is initially displayed with a fallback font,
// and then swaps to Montserrat once it's loaded. This helps in maintaining a good user experience by reducing the perceived load time.
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    // Enables us to use useSession() getSession()
    <ClientProviders>
      <html lang="en" className={montserrat.className}>
        <body className="flex flex-col min-h-screen">
            <Header />
            {children}
        </body>
      </html>
    </ClientProviders>
    
  )
}
