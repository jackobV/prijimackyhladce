import LandingPageHeroCallout from "@/app/(components)/landingPageHeroCallout";

export default function LandingPageHero(){
    return(
        <div className="px-4 pt-5">
            <h1 className="font-black tracking-tight text-2xl inline">
                Test nanečisto, který tě <span className=" text-blue-600">hladce </span>dostane na vysněnou školu
            </h1>
            <p className="pt-4 text-gray-800 ">Jsme tým zkušených lektorů, který pořádá testy nanečisto. Naše testy slouží jako přesná simulace testů CERMAT. Zaměřujeme se na přípravu pro devátou třídu - přijímačky na střední školy a čtyřletá gymnázia</p>
            <LandingPageHeroCallout />
        </div>
    )
}