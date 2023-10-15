import './global.css';
import GoogleAnalytics from "@/app/GoogleAnalytics";
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
