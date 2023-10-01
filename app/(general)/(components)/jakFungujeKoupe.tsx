interface Step {
    text:string;
    explenation:string;
    step:string;
}
let steps:Array<Step> = [
    {
        text:"Výběr termínu",
        explenation:"Zvolte si jeden či více termínů testu Na zkoušku.",
        step:"1"
    },
    {
        text:"Registrace",
        explenation:"Založení účtu zabere pouze pár sekund.",
        step:"2"
    },
    {
        text:"Uhrazení objednávky",
        explenation:"Jednoduché uhrazení objednávky přes platební bránu.",
        step:"3"
    },
    {
        text:"Hotovo!",
        explenation:"Obdržíte email s potvrzením koupě účasti.",
        step:"4"
    },
]

export default function JakFungujeKoupe(){
    return(
        <div className=" max-w-6xl px-6 lg:px-8 mx-auto">
            <h2 className="font-bold text-xl tracking-tight pb-5 md:text-2xl">Jak funguje zakoupení termínu?</h2>

            <div className="px-4 py-4 md:py-6 bg-sky-50 rounded-xl">
            <ol className="gap-y-2 md:gap-y-5 flex flex-col">
                {steps.map((item)=>(
                    <li className="">
                        <div className="flex flex-row gap-x-2 pb-1">
                            <p className="text-blue-700 font-bold md:text-lg">{item.step}.</p>
                            <p className="font-semibold tracking-tight md:text-lg">{item.text}</p>
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <p className="text-sky-50 font-bold md:text-lg">{item.step}.</p>
                            <p className="text-sm font-light">{item.explenation}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
        </div>
    )
}