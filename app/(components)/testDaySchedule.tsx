interface timeSlot {
    title:string;
    subtitle:string;
    start:string;
    end:string;
}
let timeSlots:Array<timeSlot> = [
    {
        title:"Začátek dne",
        subtitle:"Příchod a zápis",
        start:"8:45",
        end:"9:00"
    },
    {
        title:"Psaní testu",
        subtitle:"Test z matematiky",
        start:"9:15",
        end:"11:00"
    },
    {
        title:"Vyhodnocení a oprava",
        subtitle:"vyhodnocení testu z matematiky",
        start:"11:00",
        end:"12:00"
    },
    {
        title:"Psaní testu",
        subtitle:"Test z Českého jazyka",
        start:"12:00",
        end:"13:00"
    },
    {
        title:"Vyhodnocení a oprava",
        subtitle:"vyhodnocení testu z Českého jazyka",
        start:"13:00",
        end:"14:00"
    },
    {
        title:"Konec dne",
        subtitle:"Ukončení dne",
        start:"14:00",
        end:"14:00"
    },
]
export default function TestDaySchedule(){
    return(
        <div className="px-4 pt-10 md:pt-20 mx-auto max-w-5xl">
            <h2 className="font-bold text-lg md:text-2xl pb-5 md:pb-10">Časový hormonogram testového dne</h2>
            <ol className="bg-sky-50 px-4 rounded-lg py-8 gap-y-6 flex flex-col">
                {timeSlots.map((item)=>(
                    <li className="text-center">
                        <p className="text-sky-700 font-medium text-xs md:text-sm md:pb-2">{item.title}</p>
                        <p className="font-semibold tracking-tight pb-1 md:pb-3 md:text-lg">{item.subtitle}</p>
                        <div className="flex flex-row  justify-center gap-x-1 font-light">
                            <p>{item.start}</p>
                            <p>-</p>
                            <p>{item.end}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}