import { Inter } from 'next/font/google'
import './global.css';
import MenuBar from "@/app/(general)/(components)/menuBar";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="cs">
      <body className="font-sans">
      {children}
      </body>
      </html>
  )
}
