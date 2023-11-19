import {ReactElement} from "react";

interface Feature {
    uptitle:string;
    title:string;
    text:React.ReactNode;
}
let features:Array<Feature> = [
    {
        uptitle:"(Co)",
        title:"Přijímačky nanečisto pro 9. třídu",
        text:<p>Pořádáme <span className="font-medium">přesné simulace testů,</span> které Vás potkají u přijímaček na <span className="font-medium">střední školu / gymnázium</span>. Přijímačky nanečisto s Vámi ten samý den <span className="font-medium">rozebereme</span> a vysvětlíme jednotlivé úlohy.</p>
    },
    {
        uptitle:"(Kde)",
        title:"V Praze (u metra Budějovická)",
        text:<p>Testy na zkoušku se konají v prostorech školy <span className="font-medium">Edisona.</span> Můžete k nám dojet autem a zaparkovat přímo v ulici. Od stanice <span className="font-medium">Budějovická</span> (metro C) je to k nám deset minut pěšky.</p>
    },
    {
        uptitle:"(Proč)",
        title:"Celostní příprava",
        text:<p>Přijímačky na zkoušku slouží jako <span className="font-medium">komplexní příprava.</span> Opakovanou účastí žáci pochopí <span className="font-medium">látku v souvislostech</span> a budou připraveni na všechny druhy úloh, které je mohou u přijímaček potkat. </p>
    },
]
export default function LandingFeaturesOnePP(){
    return(
        <div className="max-w-6xl px-6 lg:px-8 mx-auto">
            <ul className="bg-sky-100 px-4 rounded-lg py-2 md:hidden">
                {features.map((item)=>(
                    <li className="py-4 md:py-4 flex flex-col md:flex-row">
                        <div className="w-full">
                            <p className="text-xs md:text-sm text-sky-700 font-medium">{item.uptitle}</p>
                            <h2 className="font-semibold tracking-tight text-lg pt-[2px]">{item.title}</h2>
                        </div>
                        <div className="font-light pt-2 tracking-wide text-sm leading-relaxed">{item.text}</div>
                    </li>
                ))}
            </ul>
            <ul className="rounded-lg py-2 flex flex-row gap-x-10 hidden md:flex ">
                {features.map((item)=>(
                    <li className="py-10 flex flex-col bg-sky-50 px-4 rounded-lg w-full">
                        <div className="w-full">
                            <p className="text-xs md:text-sm text-sky-700 font-medium">{item.uptitle}</p>
                            <h2 className="font-semibold tracking-tight md:text-xl pt-3">{item.title}</h2>
                        </div>
                        <div className="font-light pt-5 tracking-wide text-sm md:text-base">{item.text}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}