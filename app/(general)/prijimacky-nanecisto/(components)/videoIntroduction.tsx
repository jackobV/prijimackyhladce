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
                        <iframe src="https://www.youtube.com/embed/Hu65QCI8P2c?si=8bGJs_SZpx1LHFh-"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen className="w-full aspect-video rounded-lg shadow-lg ">
                        </iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}