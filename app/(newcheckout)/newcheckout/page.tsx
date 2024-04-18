import ProgressBar from "@/app/(newcheckout)/newcheckout/(components)/(navigation)/progressBar";
import FilterBox from "@/app/(newcheckout)/newcheckout/(components)/(navigation)/filterBox";
import TermPickWrapper from "@/app/(newcheckout)/newcheckout/(components)/(wrappers)/termPickWrapper";

export default function Page(){
    return(
        <div>
            <section>
                <ProgressBar step={1} />
            </section>
            <section>
                <TermPickWrapper />
            </section>
        </div>
    )
}