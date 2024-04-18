import TopNavBarCheckout from "@/app/(newcheckout)/newcheckout/(components)/(navigation)/topNavBar";
import FilterBox from "@/app/(newcheckout)/newcheckout/(components)/(navigation)/filterBox";
import TermPickHeader from "@/app/(newcheckout)/newcheckout/(components)/(headers)/termPickHeader";

export default function TermPickWrapper(){
    return(
        <div>
            <section className="pt-10">
                <TermPickHeader />
            </section>
            <section className="pt-8">
                <FilterBox />
            </section>
        </div>
    )
}