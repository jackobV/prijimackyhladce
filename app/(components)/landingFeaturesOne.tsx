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
        <div className="pt-10 px-4">
            <ul className="bg-sky-50 px-4 rounded-lg py-2">
            {features.map((item)=>(
                    <li className="py-2">
                        <p className="text-xs text-sky-700 font-medium">{item.uptitle}</p>
                        <h2 className="font-semibold tracking-tight">{item.title}</h2>
                        <p className="font-light pt-2 tracking-wide text-sm">{item.text}</p>
                    </li>
            ))}
            </ul>
        </div>
    )
}