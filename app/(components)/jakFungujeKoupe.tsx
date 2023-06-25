interface Step {
    text:string;
    explenation:string;
    step:string;
}
let steps:Array<Step> = [
    {
        text:"Registrace",
        explenation:"Založení účtu zabere pouze pár sekund",
        step:"1"
    },
    {
        text:"Výběr termínu",
        explenation:"Zvolte si jeden či více termínů Přijímaček Hladce",
        step:"2"
    },
    {
        text:"Uhrazení objednávky",
        explenation:"Platba kartou přes platební bránu Stripe",
        step:"3"
    },
    {
        text:"Hotovo!",
        explenation:"Obdržíte email s detailními instrukcemi ke dni Přijímaček Hladce",
        step:"4"
    },
]

export default function JakFungujeKoupe(){
    return(
        <div className=" px-4 pt-10 max-w-5xl mx-auto md:pt-20">
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