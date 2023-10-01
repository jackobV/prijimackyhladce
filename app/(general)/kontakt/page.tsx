import KontaktSection from "@/app/(general)/kontakt/(components)/kontaktSection";
import KontaktSectionHeader from "@/app/(general)/kontakt/(components)/kontaktSectionHeader";
import Footer from "@/app/(general)/(components)/footer";

export default function Page(){
    return(
        <div>
            <KontaktSection />
            <section className="border-t">
                <Footer />
            </section>
        </div>
    )
}