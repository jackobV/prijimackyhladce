import LandingHeroVG from "@/app/(general)/viceletagymnazia/(components-viceleta)/LandingHeroVG";
import GetNotified from "@/app/(general)/viceletagymnazia/(components-viceleta)/get-notified";

export default function Page(){
    return(
        <main>
            <div className="pt-5">
                <LandingHeroVG />
            </div>
            <GetNotified />
        </main>

    )
}