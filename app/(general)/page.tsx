import LandingPageHero from "@/app/(general)/(components)/landingPageHero";
import MenuBar from "@/app/(general)/(components)/menuBar";
import LandingFeaturesOne from "@/app/(general)/(components)/landingFeaturesOne";
import LocationSection from "@/app/(general)/(components)/locationSection";
import TestDaySchedule from "@/app/(general)/(components)/testDaySchedule";
import Testimonials from "@/app/(general)/(components)/testimonials";
import JakVypadaTest from "@/app/(general)/(components)/jakVypadaTest";
import CTAbuy from "@/app/(general)/(components)/CTAbuy";
import JsmeSVami from "@/app/(general)/(components)/jsmeSVami";
import JakFungujeKoupe from "@/app/(general)/(components)/jakFungujeKoupe";
import Qna from "@/app/(general)/(components)/qna";
import VideoIntroduction from "@/app/(general)/(components)/videoIntroduction";
import Pricing from "@/app/(general)/(components)/pricing";
import Footer from "@/app/(general)/(components)/footer";
import React from "react";
import ValueProposition from "@/app/(general)/(components)/valueProposition";
import BannerPrijimackyZaRok from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/bannerPrijimackyZaRok";
export const metadata = {
    title: 'Na-zkoušku | na-zkousku.cz',
    description: 'Pořádáme simulace testů, které Vás potkají u přijímaček na střední školu/gymnázium. Přijímačky nanečisto s Vámi v ten samý den rozebereme a vysvětlíme jednotlivé úlohy.',
}

export default function Home() {

  return (
    <main>
        <BannerPrijimackyZaRok />
        <MenuBar />
        <section className="pt-20">
            <LandingPageHero />
        </section>
        <section className="py-20 ">
            <LandingFeaturesOne />
        </section>

        <section className="py-20 bg-gray-50">
            <ValueProposition />
        </section>
        <section className="py-20">
            <Pricing />
        </section>
        <section className="">
            <div className=" py-20">
                <section>
                    <LocationSection />
                </section>
            </div>
        </section>

        <section className="bg-gray-50 py-20">
            <VideoIntroduction />
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
            <CTAbuy />
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
    </main>
  )
}
