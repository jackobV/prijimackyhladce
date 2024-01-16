import CheckoutContainer from "@/app/(kosik)/kosik/(components)/checkoutContainer";
import PocketBase from 'pocketbase';
import Footer from "@/app/(general)/(components)/footer";
import KosikMenu from "@/app/(kosik)/kosik/(components)/KosikMenu";
import formateUTCDateString from "@/app/helperFunctions/formateUTCDateString";
import Qna from "@/app/(general)/(components)/qna";
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
    grade:string;

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
    grade:string;

}
export interface TestDateProps{
    testDates:Array<Date>;
    location:string;
    grade:string;
}
export const metadata = {
    title: 'Košík | na-zkousku.cz',
    description: 'Pořádáme simulace testů, které Vás potkají u přijímaček na střední školu/gymnázium. Přijímačky nanečisto s Vámi v ten samý den rozebereme a vysvětlíme jednotlivé úlohy.',
}

export default async function Kosik({searchParams}:{searchParams:any}){
    const location:string = searchParams.pobocka;
    const grade:string = searchParams.grade || "nine";

    const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');
    const records = await pb.collection('testy').getFullList({
        sort: 'date',
        filter: 'archived = false'
    });
    const testDates:Array<TestDate> = records.map((item:any)=>({
        id:item.id,
        day:formateUTCDateString(item.date).day,
        month:formateUTCDateString(item.date).month,
        year:formateUTCDateString(item.date).year,
        stripe_price_id:item.stripe_price_id,
        stripe_test_price_id:item.stripe_test_price_id,
        archived:item.archived,
        full:item.full,
        price:item.price,
        location:item.location,
        fullnessLevel:item.fullnessLevel,
        grade: item.is_fifth_grade ? "five" : "nine"
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
            fullnessLevel:item.fullnessLevel,
            grade:item.grade
        })) || [];
    }
    const propsForClient: TestDateProps = { testDates: transformArray(testDates), location: location,grade:grade}
    return(
        <main>
                    <KosikMenu />
            <section className="pb-20">
                <CheckoutContainer testDates={propsForClient} />
            </section>
            <section className="pb-10">
                <Qna />
            </section>
            <section className="border-t">
                <Footer />
            </section>
        </main>
    )
}