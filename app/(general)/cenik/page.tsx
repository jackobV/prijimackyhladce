import PricingDetailed from "@/app/(general)/cenik/(components)/pricingDetailed";
import Calendar from "@/app/(general)/(components)/calendar";
import Qna from "@/app/(general)/(components)/qna";

export default function Page(){
    return(
        <div>
            <section className="pt-20">
                <PricingDetailed />
            </section>
            <section className="pt-20">
                <Calendar />
            </section>
            <section className="pt-20">
                <Qna />
            </section>
        </div>
    )
}