import LandingPageHero from "@/app/(components)/landingPageHero";
import MenuBar from "@/app/(components)/menuBar";
import LandingFeaturesOne from "@/app/(components)/landingFeaturesOne";
import TestCardItemCTA from "@/app/(components)/testCardItemCTA";
import LocationSection from "@/app/(components)/locationSection";

export default function Home() {
  return (
    <main>
        <MenuBar />
        <LandingPageHero />
        <div className="pb-10">
            <LandingFeaturesOne />
        </div>
        <div className="bg-gray-50 py-10">
            <TestCardItemCTA />
            <LocationSection />

        </div>
    </main>
  )
}
