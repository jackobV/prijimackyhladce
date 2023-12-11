"use client"
import PocketBase from "pocketbase";
import {redirect} from "next/navigation";
import {useEffect, useState} from "react";
import AppMenuBar from "@/app/(aplikace)/aplikace/(components)/appMenuBar";
import 'katex/dist/katex.min.css';
import ResultsChartWrapper from "@/app/(aplikace)/aplikace/(chart-components)/resultsChartWrapper";

import dynamic from 'next/dynamic';

const TicketGrid = dynamic(() => import('@/app/(aplikace)/aplikace/(components)/ticketGrid'), {
    ssr: false, // This will disable server-side rendering for this component
});
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
        <div className="pt-12">
                <TicketGrid />
        </div>
    )
}