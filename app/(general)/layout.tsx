import { Inter } from 'next/font/google'
import './global.css';
import MenuBar from "@/app/(general)/(components)/menuBar";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import { Suspense } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className="font-sans">
          <GoogleAnalytics />
      <MenuBar />
      {children}
      </body>
    </html>
  )
}
