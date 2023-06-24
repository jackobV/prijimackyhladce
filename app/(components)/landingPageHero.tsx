import LandingPageHeroCallout from "@/app/(components)/landingPageHeroCallout";
import classroomPhoto from "../(media)/classroompicture-copy.jpg"
import Image from "next/image";
export default function LandingPageHero(){
    return(
        <div className="px-4 pt-5 flex flex-col md:flex-row max-w-5xl mx-auto gap-x-10">
            <div className="md:max-w-md ">
            <h1 className="md:leading-relaxed leading-relaxed font-black md:font-bold tracking-tight text-2xl md:text-3xl inline">
                Test nanečisto, který tě <span className=" text-blue-600">hladce </span>dostane na vysněnou školu
            </h1>
            <p className="pt-4 text-gray-800 md:leading-loose">Jsme tým zkušených lektorů, který pořádá testy nanečisto. Naše testy slouží jako přesná simulace testů CERMAT. Zaměřujeme se na přípravu pro devátou třídu - přijímačky na střední školy a čtyřletá gymnázia</p>
            <div className="hidden md:inline">
                <LandingPageHeroCallout />
            </div>
            </div>
            <div className="pt-4 md:pt-0 w-full h-84 items-center ">
            <Image src={classroomPhoto} alt={"třída plná studentů"}  className="rounded-lg w-full h-full object-cover"/>
            </div>
            <div className="md:hidden">
                <LandingPageHeroCallout />
            </div>
        </div>
    )
}