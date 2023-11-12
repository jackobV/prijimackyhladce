import KontaktSection from "@/app/(general)/kontakt/(components)/kontaktSection";
import Footer from "@/app/(general)/(components)/footer";
import MenuBar from "@/app/(general)/(components)/menuBar";

export const metadata = {
    title: 'Na-zkoušku - Kontakt | na-zkousku.cz',
    description: 'Pořádáme simulace testů, které Vás potkají u přijímaček na střední školu/gymnázium. Přijímačky nanečisto s Vámi v ten samý den rozebereme a vysvětlíme jednotlivé úlohy.',
}
export default function Page(){
    return(
        <div>
            <section>
                <MenuBar />
            </section>
            <KontaktSection />
            <section className="border-t">
                <Footer />
            </section>
        </div>
    )
}