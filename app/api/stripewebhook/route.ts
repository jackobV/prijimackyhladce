import {NextApiRequest, NextApiResponse} from "next";
import {NextRequest, NextResponse} from "next/server";
import Stripe from 'stripe'
import Cors from "micro-cors";
import { headers } from "next/headers";
import PocketBase from "pocketbase";
import {buffer} from "micro";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const cors = Cors({
    allowMethods: ["POST", "HEAD"],
});
const webhookSecret:string = process.env.STRIPE_WEBHOOK_SERCET_KEY || "";
const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');


export async function POST(req: Request){
    try {
        const body = await req.text();
        const signature = headers().get("stripe-signature");
        const event = stripe.webhooks.constructEvent(body,signature,webhookSecret);
        if (event.type === "checkout.session.completed"){
            console.log(event.data.object);
            const customerEmail: string = event.data.object.email
            const customerId: string = event.data.object.metadata.user_id
            const databaseIds:Array<string> = event.object.metadata.database_ids.split(",");
            console.log(databaseIds)
            for (const databaseId of databaseIds){
                try{
                    const ticket = await pb.collection("ticket").create({
                        "user":customerId,
                        "testy":databaseId
                    })
                    const userAlreadyHasTickets = await pb.collection("users").getOne(customerId)
                    const newTicketArray = [...userAlreadyHasTickets.tickets, ticket.id]
                    await pb.collection("users").update(customerId,{
                        "tickets":newTicketArray
                    })
                } catch (e) {
                    console.log(e)
                }
            }
        }
        return NextResponse.json({result:event,ok:true})
        }catch (error){
        console.log(error)
        return NextResponse.json({
            message:"something went wrong",
            ok:false,
        },)
    }
}