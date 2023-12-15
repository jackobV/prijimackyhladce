import { Inter } from 'next/font/google'
import Providers from './(components)/providers'
// In your _app.js or a component
import 'katex/dist/katex.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Aplikace - na-zkousku.cz',
    description: 'Aplikace - na-zkousku.cz',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}