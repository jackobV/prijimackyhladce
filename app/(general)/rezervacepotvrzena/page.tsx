
import { useSearchParams } from 'next/navigation'
import Reservationok from "@/app/(general)/rezervacepotvrzena/(components)/reservationok";
import Reservationfail from "@/app/(general)/rezervacepotvrzena/(components)/reservationfail";
import OrderSummary, {
    orderSummary,
    testInfoSummary
} from "@/app/(general)/rezervacepotvrzena/(components)/orderSummary";
import PocketBase from "pocketbase";
export default async function Page({searchParams}:{searchParams:any}){
    const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');
    const orderInfo = await pb.collection("checkout_session").getOne(searchParams.csid,{
        expand: 'test_ids',
    })
    const testInfos:testInfoSummary[]=orderInfo.expand.test_ids.map((test:any)=>(
        {testDate:test.date,
        variant:test.is_fifth_grade?"Pátá třída ZŠ":"Devátá třída ZŠ",
        pobocka:test.location==="praha"?"Praha-ZŠ Edisona":"Příbram-Eduarts"}
    ))
    console.log(testInfos)
    const summary:orderSummary={
        email:orderInfo.user,
        testArray:testInfos
    }
    console.log(orderInfo)

    return(
        <main>
            {
                searchParams.canceled == "true"?
                    <Reservationfail />
                    :
                    <OrderSummary summary={summary} />
            }
        </main>
    )
}