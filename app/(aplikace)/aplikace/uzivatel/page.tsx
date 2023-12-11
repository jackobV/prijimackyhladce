"use client"
import {useEffect, useState} from "react";
import Osuform from "@/app/(aplikace)/aplikace/uzivatel/(components)/osuform";
import AppMenuBar from "@/app/(aplikace)/aplikace/(components)/appMenuBar";
import PocketBase from "pocketbase";
import {redirect} from "next/navigation";

export default function Page(){
    const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        if (!pb.authStore.isValid) {
            console.log("user is not logged in ")
            redirect("/neautorizovan")
        }
    },[])
    return(
        <div className="max-w-7xl pt-12 mx-auto px-6">
            <Osuform />
        </div>
    )
}