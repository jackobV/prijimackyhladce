import { Inter } from 'next/font/google'
import './global.css';
import GoogleAnalytics from "@/app/GoogleAnalytics";
import { Suspense } from 'react'
const inter = Inter({ subsets: ['latin'] })
export const revalidate = 3700
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className="font-sans">
          <GoogleAnalytics />
      {children}
      </body>
    </html>
  )
}
