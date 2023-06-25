import LandingPageHero from "@/app/(components)/landingPageHero";
import MenuBar from "@/app/(components)/menuBar";
import LandingFeaturesOne from "@/app/(components)/landingFeaturesOne";
import TestCardItemCTA from "@/app/(components)/testCardItemCTA";
import LocationSection from "@/app/(components)/locationSection";
import TestDaySchedule from "@/app/(components)/testDaySchedule";
import Testimonials from "@/app/(components)/testimonials";
import JakVypadaTest from "@/app/(components)/jakVypadaTest";
import CTAbuy from "@/app/(components)/CTAbuy";
import JsmeSVami from "@/app/(components)/jsmeSVami";
import JakFungujeKoupe from "@/app/(components)/jakFungujeKoupe";

export default function Home() {
  return (
    <main>
        <MenuBar />
        <LandingPageHero />
        <div className="pb-10">
            <LandingFeaturesOne />
        </div>
        <div className="pb-10">
            <JakVypadaTest />
        </div>
        <div className="bg-gray-50 py-20">
            <LocationSection />
            <TestCardItemCTA />
        </div>
        <TestDaySchedule />
        <Testimonials />
        <JsmeSVami />
        <JakFungujeKoupe />
        <div className="py-20">
            <CTAbuy />

        </div>

    </main>
  )
}
