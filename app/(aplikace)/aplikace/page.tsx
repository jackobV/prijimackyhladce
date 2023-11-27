"use client"
import PocketBase from "pocketbase";
import {redirect} from "next/navigation";
import {useEffect, useState} from "react";
import TicketGrid from "@/app/(aplikace)/aplikace/(components)/ticketGrid";
import AppMenuBar from "@/app/(aplikace)/aplikace/(components)/appMenuBar";
import ResultsChartWrapper from "@/app/(aplikace)/aplikace/(chart-components)/resultsChartWrapper";


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
            <section className="py-12">
                <AppMenuBar />
            </section>
            <section className="py-12">
                <ResultsChartWrapper />
            </section>
            <section className="pt-12">
                <TicketGrid />
            </section>
        </div>
    )
}