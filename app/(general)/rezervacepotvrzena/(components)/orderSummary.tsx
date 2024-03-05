import Image from "next/image";
import logo from "../../../favicon.ico"
import formateUTCDateString from "@/app/helperFunctions/formateUTCDateString";
import OrderStatusIndicator from "@/app/(general)/rezervacepotvrzena/(components)/orderStatusIndicator";
export interface testInfoSummary{
    testDate:string,
    pobocka:string,
    variant:string
}
export interface orderSummary{
    email:string,
    testArray: testInfoSummary[],
    status:number
}
export default function OrderSummary({summary}:{summary:orderSummary}){
    return(
        <div className="flex flex-col max-w-6xl mx-auto px-8 py-20">
            <h1 className="text-center text-3xl font-medium">Děkujeme vám za objednávku!</h1>
            <div className="py-10"><OrderStatusIndicator status={summary.status} />
                <p className="text-center pt-2 text-gray-600">Prosím věnujte minutu ověření správnosti vybraných termínů a variant testů.</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl gap-y-5">
                    {summary.testArray.map((testInstance:any)=>(
                        <div className="grid grid-cols-12 bg-white rounded-xl w-full p-2">
                            <div className="col-span-6 lg:col-span-4 flex flex-row items-center gap-x-3">
                                <div>
                                    <Image src={logo} alt={"logo"} className="w-14 h-14"/>
                                </div>
                                <div className="flex flex-col">
                                    <p>Test na-zkoušku</p>
                                    <p className="text-sm text-gray-700">Prezenční varianta 690,-</p>
                                </div>
                            </div>
                            <div className="col-span-6 lg:col-span-4 flex flex-row items-center justify-center gap-x-3">{testInstance.pobocka}</div>
                            <div className="lg:col-span-4 col-span-12 font-medium text-gray-700 text-sm flex flex-col justify-center items-center gap-x-3">
                                <p className="">{formateUTCDateString(testInstance.testDate).day}.{formateUTCDateString(testInstance.testDate).month}.{formateUTCDateString(testInstance.testDate).year}</p>
                                <p className="">{testInstance.variant}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}