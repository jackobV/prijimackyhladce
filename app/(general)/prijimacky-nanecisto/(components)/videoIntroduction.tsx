import nazkouskufoto from "../../../(media)/na-zkousku-banner-w-testy.jpg"
import Image from "next/image";
let features:Array<string> = [
    "Dodržení formátu CERMAT",
    "Důkladné vysvětlení profesionály",
    "Přátelská a uvolněná atmosféra",
    "Prostor pro dotazy k nepochopené látce",
    "Přístup do studentského portálu s historií výsledků",


]
export default function VideoIntroduction(){
    return(
        <div className="">
            <div className="flex md:flex-row flex-col mx-auto max-w-6xl px-6 lg:px-8 items-center">
                <div className="w-full pb-5 md:pb-0">
                    <h2 className="font-bold tracking-tight text-xl pb-5">Co můžeš od přijímaček na zkoušku <br></br>očekávat? </h2>
                    <ul className="px-4 flex flex-col gap-y-2">
                        {features.map((item)=>(
                            <li className="list-disc px-2 font-medium ">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className=" flex flex-col items-center w-full">
                    <div className="relative rounded-xl overflow-auto p-6 bg-slate-100 max-w-xl w-full shadow-lg">
                        <Image src={nazkouskufoto} alt={"fotka na zkousku"} className="rounded-sm shadow-lg" />
                    </div>
                </div>
            </div>

        </div>
    )
}