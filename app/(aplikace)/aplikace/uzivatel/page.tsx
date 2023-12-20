import Osuform from "@/app/(aplikace)/aplikace/uzivatel/(components)/osuform";
import AppMenuBar from "@/app/(aplikace)/aplikace/(components)/appMenuBar";
import PocketBase from "pocketbase";
import {redirect} from "next/navigation";

export default function Page(){
    return(
        <div className="max-w-7xl pt-12 mx-auto px-6">
            <Osuform />
        </div>
    )
}