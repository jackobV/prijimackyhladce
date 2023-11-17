import VideoIntroduction from "@/app/(general)/prijimacky-nanecisto/(components)/videoIntroduction";
import Calendar from "@/app/(general)/(components)/calendar";
import DetailedIntroductionText from "@/app/(general)/prijimacky-nanecisto/(components)/detailedIntroductionText";
import Testimonials from "@/app/(general)/(components)/testimonials";
import JakFungujeKoupe from "@/app/(general)/(components)/jakFungujeKoupe";
import LocationSection from "@/app/(general)/(components)/locationSection";
import LandingPageHero from "@/app/(general)/(components)/landingPageHero";
import SaleModal from "@/app/(general)/(components)/SaleModal";

export default function Page(){
    return(
        <div>
            <section className="py-20">
                <LandingPageHero />
            </section>
            <div className="bg-gray-50 pt-20 ">
                <section className="">
                    <VideoIntroduction />
                </section>
                <section className="py-20">
                    <LocationSection />

                </section>
            </div>

            <section className="pt-20">
                <Calendar />

            </section>
            <section className="pt-20">
                <DetailedIntroductionText />

            </section>
            <section className="pt-20">
                <Testimonials />

            </section>
            <section className="pt-20">
                <JakFungujeKoupe />

            </section>

        </div>
    )
}