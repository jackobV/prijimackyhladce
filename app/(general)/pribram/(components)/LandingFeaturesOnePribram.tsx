interface Feature {
    uptitle:string;
    title:string;
    text:string;
}
let features:Array<Feature> = [
    {
        uptitle:"(Co)",
        title:"Přijímačky na zkoušku pro 9.třídu",
        text:"Pořádáme simulace testů, které Vás potkají u přijímaček na střední školu/gymnázium. Přijímačky nanečisto s Vámi v ten samý den rozebereme a vysvětlíme jednotlivé úlohy."
    },
    {
        uptitle:"(Kde)",
        title:"V Příbrami",
        text:"nám. T. G. Masaryka čp. 152, Příbram I.\n" +
            "Můžete k nám odjet autem i autobusem. Parkování je poblíž pobočky Eduarts, přímo na náměstí. Vchod je v průchodu.\n"
    },
    {
        uptitle:"(Kdy)",
        title:"Vybrané soboty",
        text:"V období listopad - duben pořádáme přijímačky na zkoušku každou sobotu. Všechny termíny najdete níže v kalendáři."
    },
]
export default function LandingFeaturesOnePribram(){
    return(
        <div className="max-w-6xl px-6 lg:px-8 mx-auto">
            <ul className="bg-sky-50 px-4 rounded-lg py-2 md:hidden">
                {features.map((item)=>(
                    <li className="py-4 md:py-4 flex flex-col md:flex-row">
                        <div className="w-full">
                            <p className="text-xs md:text-sm text-sky-700 font-medium">{item.uptitle}</p>
                            <h2 className="font-semibold tracking-tight text-lg pt-[2px]">{item.title}</h2>
                        </div>
                        <p className="font-light pt-2 tracking-wide text-sm leading-relaxed">{item.text}</p>
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
                        <p className="font-light pt-5 tracking-wide text-sm md:text-base">{item.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}