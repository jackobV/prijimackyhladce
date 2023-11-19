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




export default function Page(){
return <main>
    <section className="pt-5 pb-10">
        <LandingHeroPP />
    </section>
    <section className="py-20">
        <LandingFeaturesOnePP />
    </section>
    <section className="py-20 bg-sky-100">
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