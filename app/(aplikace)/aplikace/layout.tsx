
import { Inter } from 'next/font/google'
// In your _app.js or a component
import 'katex/dist/katex.min.css';

import dynamic from "next/dynamic";

const AppWrapper = dynamic(() => import('@/app/(aplikace)/aplikace/(components)/AppWrapper'), {
    ssr: false, // This will disable server-side rendering for this component
});
const Providers = dynamic(() => import('@/app/(aplikace)/aplikace/vektor/(components)/providers'), {
    ssr: false, // This will disable server-side rendering for this component
});
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
        <html lang='cs' className="h-full">
        <body className="h-full">
        <Providers>
            <AppWrapper>
                {children}
            </AppWrapper>
        </Providers>

        </body>

        </html>
    )
}