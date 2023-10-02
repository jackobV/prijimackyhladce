import LandingFeaturesOnePribram from "@/app/(general)/pribram/(components)/LandingFeaturesOnePribram";
import LandingPageHero from "@/app/(general)/(components)/landingPageHero";
import VideoIntroduction from "@/app/(general)/prijimacky-nanecisto/(components)/videoIntroduction";
import Pricing from "@/app/(general)/(components)/pricing";
import PricingPribram from "@/app/(general)/pribram/(components)/pricingPribram";
import Testimonials from "@/app/(general)/(components)/testimonials";
import TestDaySchedule from "@/app/(general)/(components)/testDaySchedule";
import JakVypadaTest from "@/app/(general)/(components)/jakVypadaTest";
import JakFungujeKoupe from "@/app/(general)/(components)/jakFungujeKoupe";
import CTAbuy from "@/app/(general)/(components)/CTAbuy";
import LocationSection from "@/app/(general)/(components)/locationSection";
import JsmeSVami from "@/app/(general)/(components)/jsmeSVami";
import Qna from "@/app/(general)/(components)/qna";
import Footer from "@/app/(general)/(components)/footer";

export default function Page(){
    return(
        <div>
            <section className="pt-20">
               <LandingPageHero />
            </section>
            <section className="py-20">
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
                <CTAbuy />
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