import './global.css';
import GoogleAnalytics from "@/app/GoogleAnalytics";
import TopNavBarCheckout from "@/app/(newcheckout)/newcheckout/(components)/(navigation)/topNavBar";
export const revalidate = 0
export const dynamic = 'force-dynamic'
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="cs" className="dark">
        <body className="font-sans">
        <TopNavBarCheckout />
        <GoogleAnalytics />
        {children}
        </body>
        </html>
    )
}
