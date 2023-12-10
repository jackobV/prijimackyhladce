import PickADateAndReview from "@/app/(kosik)/kosik/(components)/pickADateAndReview";
import MenuBar from "@/app/(general)/(components)/menuBar";
import CheckoutContainer from "@/app/(kosik)/kosik/(components)/checkoutContainer";
import PocketBase from 'pocketbase';
import Footer from "@/app/(general)/(components)/footer";
import MenuPribram from "@/app/(general)/pribram/(components)/menuPribram";
import KosikMenu from "@/app/(kosik)/kosik/(components)/KosikMenu";
export const revalidate = 0
export const dynamic = 'force-dynamic'
interface TestDate{
    id:string;
    day:string;
    month:string;
    year:string;
    stripe_price_id:string;
    stripe_test_price_id:string;
    archived:boolean;
    full:boolean;
    price:string;
    location:string;
    fullnessLevel:number;
}

export interface Date{
    id:string;
    day:string;
    month:string;
    year:string;
    available:boolean;
    active:boolean;
    inCart:number;
    stripe_price_id:string;
    stripe_test_price_id:string;
    location:string;
    fullnessLevel:number;
}
export interface TestDateProps{
    testDates:Array<Date>;
    location:string;
}
export const metadata = {
    title: 'Košík | na-zkousku.cz',
    description: 'Pořádáme simulace testů, které Vás potkají u přijímaček na střední školu/gymnázium. Přijímačky nanečisto s Vámi v ten samý den rozebereme a vysvětlíme jednotlivé úlohy.',
}

export default async function Kosik({searchParams}:{searchParams:any}){
    const location:string = searchParams.pobocka;
    const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');
    const records = await pb.collection('testy').getFullList({
        sort: 'date',
        filter: 'archived = false'
    });
    function extractDayMonthYear(utcDateString: string): { day: string, month: string, year: string } {
        const date = new Date(utcDateString);
        // Get day, month, and year. Note that getMonth() returns months from 0-11.
        const day = date.getUTCDate().toString();
        const month = (date.getUTCMonth() + 1).toString(); // Adding 1 to get months from 1-12.
        const year = date.getUTCFullYear().toString();

        return { day, month, year };
    }
    const testDates:Array<TestDate> = records.map((item:any)=>({
        id:item.id,
        day:extractDayMonthYear(item.date).day,
        month:extractDayMonthYear(item.date).month,
        year:extractDayMonthYear(item.date).year,
        stripe_price_id:item.stripe_price_id,
        stripe_test_price_id:item.stripe_test_price_id,
        archived:item.archived,
        full:item.full,
        price:item.price,
        location:item.location,
        fullnessLevel:item.fullnessLevel
    }))
    console.log(testDates)

    const transformArray = (testDates:Array<TestDate>): Array<Date> => {
        return testDates?.map(item => ({
            id:item.id,
            day:item.day,
            month:item.month,
            year:item.year,
            available:!(item.archived && item.full),
            active:false,
            inCart:0,
            stripe_test_price_id:item.stripe_test_price_id,
            stripe_price_id:item.stripe_price_id,
            location:item.location,
            fullnessLevel:item.fullnessLevel
        })) || [];
    }
    const propsForClient: TestDateProps = { testDates: transformArray(testDates), location: location}
    return(
        <main>
                    <KosikMenu />
            <section className="pb-20">
                <CheckoutContainer testDates={propsForClient} />
            </section>
            <section className="border-t">
                <Footer />
            </section>
        </main>
    )
}