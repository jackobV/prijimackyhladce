import LandingHeroPP from "@/app/(general)/LP/(components)/LandingHeroPP";
import Testimonials from "@/app/(general)/(components)/testimonials";
import LandingFeaturesOne from "@/app/(general)/(components)/landingFeaturesOne";
import ValueProposition from "@/app/(general)/(components)/valueProposition";
import ValuePropositionPP from "@/app/(general)/LP/(components)/ValuePropositionPP";
import LandingFeaturesOnePP from "@/app/(general)/LP/(components)/LandingFeaturesOnePP";
import LocationSection from "@/app/(general)/(components)/locationSection";
import TestDaySchedule from "@/app/(general)/(components)/testDaySchedule";
import JakFungujeKoupe from "@/app/(general)/(components)/jakFungujeKoupe";
import JakVypadaTest from "@/app/(general)/(components)/jakVypadaTest";
import React from "react";
import CTAbuy from "@/app/(general)/(components)/CTAbuy";
import JsmeSVami from "@/app/(general)/(components)/jsmeSVami";
import Qna from "@/app/(general)/(components)/qna";
import Footer from "@/app/(general)/(components)/footer";
import Pricing from "@/app/(general)/(components)/pricing";
import PricingPP from "@/app/(general)/LP/(components)/PricingPP";
import TestDaySchedulePP from "@/app/(general)/LP/(components)/TestDayScheadulePP";
import SocialProof from "@/app/(general)/LP/(components)/SocialProof";



export const metadata = {
    title: 'Na-zkoušku | na-zkousku.cz',
    description: 'Pořádáme simulace testů, které Vás potkají u přijímaček na střední školu/gymnázium. Přijímačky nanečisto s Vámi v ten samý den rozebereme a vysvětlíme jednotlivé úlohy.',
}

export default function Page(){
return <main>
    <section className="pt-5">
        <LandingHeroPP />
    </section>
    <section className="md:pt-40  md:pb-32 py-10">
        <SocialProof />
    </section>
    <section className="py-20 bg-orange-400/10">
        <ValueProposition />
    </section>
    <section className="py-20">
        <LocationSection />
    </section>
    <section className="py-20">
        <Testimonials />
    </section>
    <section className="py-10">
        <TestDaySchedulePP />
    </section>
    <section className="py-10">
        <PricingPP />
    </section>
    <section className="py-20">
        <JakFungujeKoupe />
    </section>
    <section className="py-20">
        <JakVypadaTest />
    </section>

    <section className="">
        <CTAbuy />
    </section>
    <section className="py-20">
        <JsmeSVami />
    </section>
    <Qna />
    <Footer />
</main>
}