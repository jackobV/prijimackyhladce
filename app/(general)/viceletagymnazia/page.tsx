import LandingHeroVG from "@/app/(general)/viceletagymnazia/(components-viceleta)/LandingHeroVG";
import GetNotified from "@/app/(general)/viceletagymnazia/(components-viceleta)/get-notified";
import FeaturesViceleta from "@/app/(general)/viceletagymnazia/(components-viceleta)/featuresViceleta";
import Priceviceleta from "@/app/(general)/viceletagymnazia/(components-viceleta)/priceviceleta";
import SocialProof from "@/app/(general)/LP/(components)/SocialProof";
import LocationSection from "@/app/(general)/(components)/locationSection";
import Footer from "@/app/(general)/(components)/footer";
import Qna from "@/app/(general)/(components)/qna";
import JakFungujeKoupe from "@/app/(general)/(components)/jakFungujeKoupe";

export default function Page(){
    return(
        <main>
            <div className="">
                <LandingHeroVG />
            </div>
            <section className="py-20">
                <SocialProof />
            </section>
            <section className="py-10">
                <FeaturesViceleta />
            </section>
            <section className="py-20">
                <Priceviceleta />
            </section>
            <JakFungujeKoupe />
            <section className="py-20">
                <Qna />
            </section>
            <Footer />
        </main>

    )
}