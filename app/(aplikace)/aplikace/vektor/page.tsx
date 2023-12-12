"use client"

import ChatMessages from "@/app/(aplikace)/aplikace/vektor/(components)/chatMessages";
import ChatInput from "@/app/(aplikace)/aplikace/vektor/(components)/chatInput";
import PocketBase from "pocketbase";
import {useEffect, useState} from "react";
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
        <div className="relative w-full">
            <div className="fixed overflow-hidden w-full h-full">
                <div className="h-full max-w-7xl mx-auto  pb-24 pt-12 md:px-12 px-4 relative flex flex-col">
                    <div className="h-full flex flex-col gap-y-3">
                        <ChatMessages className="flex-1 overflow-y-scroll" />
                        <ChatInput />
                    </div>
                </div>
            </div>
        </div>
    )
}