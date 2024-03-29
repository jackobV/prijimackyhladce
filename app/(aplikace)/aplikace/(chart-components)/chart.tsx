import { Card, LineChart, Title } from "@tremor/react";
import React from "react";
import PocketBase from "pocketbase";
import formateUTCDateString from "@/app/helperFunctions/formateUTCDateString";
interface TicketRaw {
    collectionId: string;
    collectionName: string;
    created: string;
    expand: object;
    id: string;
    is_marked: boolean;
    mat: number;
    testy: string;
    updated: string;
    user: string;
}
interface ticketForChart {
    date:string
    cj:number
    mat:number
    cjAvg:number
    matAvg:number
}


export const Chart = async () => {
    const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');
    const id = pb.authStore.model?.id ? pb.authStore.model?.id:"null"
    const record = await pb.collection('users').getOne(id, {
        expand: 'tickets.testy',
    });
    let filteredItems: Array<ticketForChart> = []; // Initialize as an empty array
    const ticketsRaw = record.expand.tickets;
    console.log(ticketsRaw)
    if (ticketsRaw && ticketsRaw.length > 0) {
        filteredItems = ticketsRaw.filter((item: { is_marked: any; }) => item.is_marked).map((item: { expand: any; created: any; mat: any; cj: any; cjAvg:any; matAvg:any; }) => ({
            Date: `${formateUTCDateString(item.expand.testy.date).day}.${formateUTCDateString(item.expand.testy.date).month}`,
            "MAT": item.mat,
            "ČJ": item.cj,
            "Průměr ČJ":item.expand.testy.avg_cj,
            "Průměr MAT":item.expand.testy.avg_mat,
        }));
    } else {
        // Handle the case when no data is found
        // For example, set filteredItems to a default value or leave it as an empty array
        // Example: setting a default value
        filteredItems = [];
    }
    console.log(filteredItems)

    return (
        <div className="max-w-7xl mx-auto px-6">
            <Card>
                <Title>Výsledky předešlých testů</Title>
                <LineChart
                    className="h-72 mt-4"
                    data={filteredItems}
                    index="Date"
                    categories={["ČJ", "MAT","Průměr ČJ","Průměr MAT"]}
                    colors={["red", "indigo","zinc","stone"]}
                    yAxisWidth={30}
                    connectNulls={true}
                    noDataText="Zatím nemáte k nahlédnutí žádné výsledky."
                />
            </Card>
        </div>
    );
};