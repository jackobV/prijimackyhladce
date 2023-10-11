"use client"
import PocketBase from "pocketbase";
import {redirect} from "next/navigation";
import {useEffect, useState} from "react";
import TicketGrid from "@/app/(aplikace)/aplikace/(components)/ticketGrid";
import AppMenuBar from "@/app/(aplikace)/aplikace/(components)/appMenuBar";


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
        <div>
            <section className="pt-10">
                <AppMenuBar />
            </section>
            <section className="pt-24">
                <TicketGrid />
            </section>
        </div>
    )
}