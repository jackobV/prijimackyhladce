"use client"
import PocketBase from "pocketbase";
import {useEffect, useState} from "react";
import TicketBrick from "@/app/(aplikace)/aplikace/(components)/ticketBrick";
export interface testInstance {
    qty: number;
    date: string;
    paid: boolean;
    created: string;
    location:string;
    marked:boolean;
    cjMark:number;
    matMark:number;
}
export default function TicketGrid(){
    const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');
    const [tickets, setTickets] = useState<Array<testInstance>|undefined>(undefined)
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
                const resultArray: Array<testInstance> = [];
                if(Array.isArray(userData.expand?.tickets)){
                    userData.expand.tickets.forEach((ticket:any)=>{
                        const testyObject:any = ticket.expand.testy;
                        const existingObject = resultArray.find((obj) => obj.date === testyObject.date);
                        if(existingObject){
                            existingObject.qty +=1;
                        }else{
                            resultArray.push({
                                date: testyObject.date,
                                paid:true,
                                created:ticket.created,
                                qty:1,
                                location:testyObject.location,
                                marked:ticket.is_marked,
                                cjMark:ticket.cj,
                                matMark:ticket.mat
                            })
                        }
                    })
                }
                setTickets(resultArray);
            }
        } catch (e){
            console.log(e)
        }
    }
    return(
        <div className="max-w-7xl mx-auto px-6">
            {tickets?
                <ul className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                    {tickets.map((ticket:testInstance,key)=>(
                        <div key={key}>
                            <TicketBrick test={ticket} />
                        </div>
                    ))}
                </ul>
                :
                <div>
                    Termín testů si můžete zakoupit <a href="/kosik?pobocka=praha" className="underline">zde</a>
                </div>
            }
        </div>
    )
}