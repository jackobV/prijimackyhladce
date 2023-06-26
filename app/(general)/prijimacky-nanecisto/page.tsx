import LandingFeatures1 from "@/app/(general)/prijimacky-nanecisto/(components)/landingFeatures1";
import TestDaySchedule from "@/app/(general)/(components)/testDaySchedule";
import VideoIntroduction from "@/app/(general)/prijimacky-nanecisto/(components)/videoIntroduction";
import Calendar from "@/app/(general)/(components)/calendar";
import TestCardItemCTA from "@/app/(general)/(components)/testCardItemCTA";
import DetailedIntroductionText from "@/app/(general)/prijimacky-nanecisto/(components)/detailedIntroductionText";
import Testimonials from "@/app/(general)/(components)/testimonials";
import JakFungujeKoupe from "@/app/(general)/(components)/jakFungujeKoupe";

export default function Page(){
    return(
        <div>
            <section className="py-20">
                <LandingFeatures1 />
            </section>
            <div className="bg-gray-50 pt-20 ">
                <section className="">
                    <VideoIntroduction />
                </section>
                <section className="py-20">
                    <TestCardItemCTA />

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