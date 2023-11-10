import './global.css';
import GoogleAnalytics from "@/app/GoogleAnalytics";
export const revalidate = 0
export const dynamic = 'force-dynamic'
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
