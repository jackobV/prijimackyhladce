import PickADateAndReview from "@/app/(kosik)/kosik/(components)/pickADateAndReview";
import MenuBar from "@/app/(general)/(components)/menuBar";
import CheckoutContainer from "@/app/(kosik)/kosik/(components)/checkoutContainer";
import PocketBase from 'pocketbase';

interface TestDate{
    id:string;
    day:string;
    month:string;
    stripe_price_id:string;
    stripe_test_price_id:string;
    archived:boolean;
    full:boolean;
    price:string;
}

interface Date{
    id:string;
    day:string;
    month:string;
    available:boolean;
    active:boolean;
    inCart:number;
}
export interface TestDateProps{
    testDates:Array<Date>;
}
export default async function Kosik(){
    const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');
    const records = await pb.collection('testy').getFullList({
        sort: '-date',
    });
    function extractDayAndMonth(utcDateString: string): { day: string, month: string } {
        const date = new Date(utcDateString);

        // Get day and month. Note that getMonth() returns months from 0-11.
        const day = date.getUTCDate().toString();
        const month = (date.getUTCMonth() + 1).toString(); // Adding 1 to get months from 1-12.

        return { "day":day, "month":month };
    }
    const testDates:Array<TestDate> = records.map((item:any)=>({
        id:item.id,
        day:extractDayAndMonth(item.date).day,
        month:extractDayAndMonth(item.date).month,
        stripe_price_id:item.stripe_price_id,
        stripe_test_price_id:item.stripe_test_price_id,
        archived:item.archived,
        full:item.full,
        price:item.price,
    }))
    console.log(testDates)

    const transformArray = (testDates:Array<TestDate>): Array<Date> => {
        return testDates?.map(item => ({
            id:item.id,
            day:item.day,
            month:item.month,
            available:!(item.archived && item.full),
            active:false,
            inCart:0
        })) || [];
    }
    const propsForClient: TestDateProps = { testDates: transformArray(testDates)}
    return(
        <main>
            <MenuBar />
            <CheckoutContainer testDates={propsForClient} />
        </main>
    )
}