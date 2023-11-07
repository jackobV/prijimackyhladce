import './global.css';
import GoogleAnalytics from "@/app/GoogleAnalytics";
export const revalidate = 36000
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
