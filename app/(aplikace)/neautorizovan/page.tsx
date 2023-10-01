"use client"
import PocketBase from "pocketbase";
import {redirect} from "next/navigation";
import LoginFormApp from "@/app/(aplikace)/neautorizovan/(components)/LoginFormApp";
import {useEffect} from "react";

export default async function Page(){
    const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');

    return(
        <div>
            <LoginFormApp />
        </div>
    )
}