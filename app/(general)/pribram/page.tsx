import LandingFeaturesOnePribram from "@/app/(general)/pribram/(components)/LandingFeaturesOnePribram";
import VideoIntroduction from "@/app/(general)/prijimacky-nanecisto/(components)/videoIntroduction";
import PricingPribram from "@/app/(general)/pribram/(components)/pricingPribram";
import Testimonials from "@/app/(general)/(components)/testimonials";
import TestDaySchedule from "@/app/(general)/(components)/testDaySchedule";
import JakVypadaTest from "@/app/(general)/(components)/jakVypadaTest";
import JakFungujeKoupe from "@/app/(general)/(components)/jakFungujeKoupe";
import LocationSection from "@/app/(general)/(components)/locationSection";
import JsmeSVami from "@/app/(general)/(components)/jsmeSVami";
import Qna from "@/app/(general)/(components)/qna";
import Footer from "@/app/(general)/(components)/footer";
import LandingPageHeroPribram from "@/app/(general)/pribram/(components)/landingPageHeroPribram";
import CTAbuyPribram from "@/app/(general)/pribram/(components)/CTAbuyPribram";
import MenuPribram from "@/app/(general)/pribram/(components)/menuPribram";
import pruh from "../pribram/(media)/pruh.png"
import Image from "next/image";
export const metadata = {
    title: 'Na-zkoušku - Příbram | na-zkousku.cz',
    description: 'Pořádáme simulace testů, které Vás potkají u přijímaček na střední školu/gymnázium. Přijímačky nanečisto s Vámi v ten samý den rozebereme a vysvětlíme jednotlivé úlohy.',
}
export const dynamic = 'force-dynamic'
export const revalidate = 0
export default function Page(){
    return(
        <div>
            <MenuPribram />
            <section className="pt-20">
               <LandingPageHeroPribram />
            </section>
            <section className="py-10 max-w-6xl px-8 mx-auto">
                <Image src={pruh} alt={""} />
            </section>
            <section className="">
                <LandingFeaturesOnePribram />
            </section>
            <section className="bg-gray-50 py-20">
                <VideoIntroduction />
            </section>
            <section className="pt-20">
                <PricingPribram />
            </section>
            <section className="pt-20">
                <Testimonials />
            </section>
            <section className="pt-20">
                <TestDaySchedule />
            </section>
            <section className="pt-20">
                <JakVypadaTest />
            </section>
            <section className="pt-20">
                <JakFungujeKoupe />
            </section>
            <section className="pt-20">
                <CTAbuyPribram />
            </section>
            <section className="">
                <div className="bg-gray-50 py-20">
                    <section>
                        <LocationSection />
                    </section>
                </div>
            </section>
            <section className="pt-20">
                <JsmeSVami />
            </section>
            <section className="py-20">
                <Qna />
            </section>
            <section className="border-t">
                <Footer />
            </section>
        </div>
    )
}