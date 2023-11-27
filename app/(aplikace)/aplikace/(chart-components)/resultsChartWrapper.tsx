"use client"
import ResultsChart from "@/app/(aplikace)/aplikace/(chart-components)/resultsChart";
import PocketBase from "pocketbase";
import {useEffect, useState} from "react";
import {testInstance} from "@/app/(aplikace)/aplikace/(components)/ticketGrid";
import {undefined} from "zod";
export interface dataPoint {
    x:number,
    y:number,
    sub: boolean,
    date: string
}
export interface dataPointsSet{
    math:Array<dataPoint>,
    cj:Array<dataPoint>
}
export default function ResultsChartWrapper(){
    const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');
    // @ts-ignore
    const [dataset,setDataset] = useState<dataPointsSet|undefined>(undefined)
    useEffect(()=>{
        handleDataFetch()
    },[])
    const handleDataFetch = async () => {
        try {
            if(pb.authStore.model?.id){
                const authData = await pb.collection('users').authRefresh();
                const userData = await pb.collection("users").getOne(pb.authStore.model.id,{
                    expand: "tickets.testy"
                })
                const dataSetCj: Array<dataPoint> = userData.expand.tickets
                    .filter((ticket:any) => ticket.is_marked==true)
                    .map((ticket:any,key:number) => ({
                        x:key+1,
                        y:ticket.cj,
                        sub:true,
                        date:ticket.expand.testy.date,
                    }))
                const dataSetMath:Array<dataPoint> = userData.expand.tickets
                    .filter((ticket:any) => ticket.is_marked==true)
                    .map((ticket:any,key:number) => ({
                        x:key+1,
                        y:ticket.mat,
                        sub:false,
                        date:ticket.expand.testy.date,
                    }))
                console.log(userData);
                const results: dataPointsSet = {
                    math:dataSetMath,
                    cj:dataSetCj
                }
                console.log(results)
                setDataset(results);
            }

        } catch (e){
            console.log(e)
        }
    }
    return(
        <div className="max-w-7xl mx-auto px-6">
            {dataset?
                <div className="">
                    <ResultsChart results={dataset} />
                </div>
                :
                <div></div>
            }
        </div>
    )
}