interface Feature {
    uptitle:string;
    title:string;
    text:string;
}
let features:Array<Feature> = [
    {
        uptitle:"Podle testů cermat",
        title:"O něco těžší než ty na ostro.",
        text:"Řídíme se zásadou těžko na cvičišti, lehko na bojišti. Testy obsahují přesné učivo, které se bude vyskytovat na těch opravdových, pouze o něco těžší."
    },
    {
        uptitle:"Podle testů cermat",
        title:"O něco těžší než ty na ostro.",
        text:"Řídíme se zásadou těžko na cvičišti, lehko na bojišti. Testy obsahují přesné učivo, které se bude vyskytovat na těch opravdových, pouze o něco těžší."
    },
    {
        uptitle:"Podle testů cermat",
        title:"O něco těžší než ty na ostro.",
        text:"Řídíme se zásadou těžko na cvičišti, lehko na bojišti. Testy obsahují přesné učivo, které se bude vyskytovat na těch opravdových, pouze o něco těžší."
    },
]
export default function LandingFeaturesOne(){
    return(
        <div className="pt-10 px-4 max-w-5xl mx-auto">
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
            <ul className="rounded-lg py-2 flex flex-row gap-x-5 hidden md:flex">
                {features.map((item)=>(
                    <li className="py-10 flex flex-col bg-sky-50 px-4 rounded-lg">
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