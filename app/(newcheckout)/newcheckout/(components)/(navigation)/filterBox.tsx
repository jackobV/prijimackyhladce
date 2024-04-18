import FilterLocation from "@/app/(newcheckout)/newcheckout/(components)/(navigation)/filterLocation";
import FilterVariant from "@/app/(newcheckout)/newcheckout/(components)/(navigation)/filterVariant";

export default function FilterBox(){
    return(
        <div className="flex flex-col items-center mx-auto light">
            <div className="flex flex-row justify-around w-full max-w-lg">
                <div className="flex flex-row items-center gap-x-2">
                    <p className="hidden md:inline font-semibold">Lokace:</p>
                    <FilterLocation location={"praha"} grade={"nine"} />
                </div>
                <div className="flex flex-row items-center gap-x-2">
                    <p className=" hidden md:inline font-semibold">Varianta:</p>
                    <FilterVariant location={"praha"} grade={"nine"} />
                </div>

            </div>
        </div>
    )
}