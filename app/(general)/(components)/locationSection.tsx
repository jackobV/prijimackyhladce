import edisonaPhoto from "../../(media)/edisona-trida-1.jpg"
import fotoEduarts from "../pribram/(media)/eduarts-prostor.jpg"
import Image from "next/image";
import PocketBase from "pocketbase";
import moment from "moment"
import Map from "@/app/(general)/(components)/map"
export const revalidate = 3600
export default async function LocationSection(){
    const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');
    const currentDate = moment();
    const testydateCallPraha = await pb.collection("testy").getList(1,4,{
        filter:`location = "praha" && archived = false`,
        sort:`date`
    })
    const testydateCallPribram = await pb.collection("testy").getList(1,4,{
        filter:`location = "pribram" && archived = false`,
        sort:`date`
    })
    const futureDatesForPrague = testydateCallPraha.items.filter(obj => {
        const dateInFuture = moment(obj.date) >= currentDate;
        return dateInFuture;
    })
    const futureDatesForPribram = testydateCallPribram.items.filter(obj => {
        const dateInFuture = moment(obj.date) >= currentDate;
        return dateInFuture;
    })
    console.log(futureDatesForPrague)
    console.log(futureDatesForPribram)
    function timestampToDayMonthString(timestampString: string): string {
        const timesTampSanitized = timestampString.replace(" ", "T")
        const date = new Date(timesTampSanitized);
        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1; // Adding 1 to month as it is 0-indexed
        // Use template literals to format the day and month with leading zeros if needed
        const formattedDay = day < 10 ? `0${day}` : `${day}`;
        const formattedMonth = month < 10 ? `0${month}` : `${month}`;
        console.log(date)
        return `${formattedDay}.${formattedMonth}`;
    }
    return(
        <div className="max-w-6xl px-6 lg:px-8 mx-auto" id="pobocky">
            <h2 className="font-bold text-2xl pb-5 md:pb-10">Kde testy probíhají?</h2>
            <div className="flex flex-col md:flex-row w-full">
                <div className="flex flex-col gap-y-10 w-full">
                    <div className="flex flex-col md:flex-row w-full gap-x-4">
                        <div className="md:w-3/4 w-full">
                            <Image src={edisonaPhoto} alt={"lokace edisona fotka"} className="rounded-md" quality={10} />
                        </div>
                        <div className="flex flex-col w-full  justify-between">
                                <div className="flex flex-col pt-2 md:pt-0">
                                    <h3 className="w-full font-medium text-xl pb-1">Praha 4 ZŠ Edisona</h3>
                                    <p className="w-full text-sm">Bítovská 1122/5</p>
                                    <p className="text-sm">140 00 Praha 4-Michle</p>
                                </div>
                            <div className="flex flex-col gap-y-2 pt-5 md:pt-0">
                                <p className="text-gray-600 font-medium">Nadcházející termíny</p>
                                <div className="flex flex-row gap-x-3">
                                    {futureDatesForPrague.map((item:any)=>(
                                        <a href="/kosik?pobocka=praha"
                                        id="vyberterminlokace"
                                        >
                                            <div className="w-fit px-4 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-700 duration-75">{timestampToDayMonthString(item.date)}</div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row w-full gap-x-4">
                        <div className="md:w-3/4 w-full">
                            <Image src={fotoEduarts} alt={"lokace Eduarts fotka"} className="rounded-md" quality={10} />
                        </div>
                        <div className="flex flex-col w-full  justify-between">
                            <div className="flex flex-col pt-2 md:pt-0">
                                <h3 className="w-full font-medium text-xl pb-1">Příbram Eduarts</h3>
                                <p className="w-full text-sm">Nám. T. G. Masaryka </p>
                                <p className="text-sm">čp. 152, Příbram I.</p>
                            </div>
                            <div className="flex flex-col gap-y-2 pt-5 md:pt-0">
                                <p className="text-gray-600 font-medium">Nadcházející termíny</p>
                                <div className="flex flex-row gap-x-3">
                                    {futureDatesForPribram.map((item:any)=>(
                                        <a className="" href="/kosik?pobocka=pribram">
                                            <div className="w-fit px-4 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-700 duration-75">{timestampToDayMonthString(item.date)}</div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-3/4">
                    <Map />
                </div>
            </div>
        </div>
    )
}