import PocketBase from "pocketbase";
import {redirect} from "next/navigation";
import LoginFormApp from "@/app/(aplikace)/neautorizovan/(components)/LoginFormApp";

export default async function Page(){

    return(
        <div>
            <LoginFormApp />
        </div>
    )
}