import {NextApiRequest, NextApiResponse} from "next";
import {NextRequest, NextResponse} from "next/server";
import Stripe from 'stripe'
import Cors from "micro-cors";
import { headers } from "next/headers";
import PocketBase from "pocketbase";
import {buffer} from "micro";
import sendgrid from "@sendgrid/mail";
import sgMail from "@sendgrid/mail";
import OrderConfirmationEmail, {
    EmailConfirmationData
} from "@/app/api/stripewebhook/(emailfunctions)/orderConfirmationEmail";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const cors = Cors({
    allowMethods: ["POST", "HEAD"],
});
const senggridApiKey:string = process.env.SENDGRID_API_KEY || "";
const webhookSecret:string = process.env.STRIPE_WEBHOOK_SERCET_KEY || "";
const pocketbaseApiKey:string = process.env.POCKETBASE_API_KEY || "";
const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');
export async function POST(req: Request){
    try {
        try{
            await pb.admins.authWithPassword("apipocketbase@na-zkousku.cz", pocketbaseApiKey)
        } catch (e){
            console.log(e)
        }
        const body = await req.text();
        const signature = headers().get("stripe-signature");
        const event = stripe.webhooks.constructEvent(body,signature,webhookSecret);
        if (event.type === "checkout.session.completed"){
            console.log(event.data.object);
            const customerEmail: string = event.data.object.email
            const customerId: string = event.data.object.metadata.user_id
            const databaseIds:Array<string> = event.data.object.metadata.database_ids.split(",");
            console.log(databaseIds)
            const user = await pb.collection("users").getOne(customerId)
            const ticketIdArray:Array<string> = [""]
            const ticketDateArray: Array<string> = [""]
            ticketIdArray.push(user.tickets)

            for (const databaseId of databaseIds){
                try{
                    const ticket = await pb.collection("ticket").create({
                        "user":customerId,
                        "testy":databaseId
                    })
                    ticketIdArray.push(ticket.id)
                    const testDate = await pb.collection("testy").getOne(databaseId)
                    ticketDateArray.push(testDate.date)
                    const newTestTicketArray = [...testDate.tickets, ticket.id]
                    await pb.collection("testy").update(databaseId,{
                        "tickets":newTestTicketArray
                    })
                } catch (e) {
                    console.log(e)
                }
            }
            const purchase = await pb.collection("purchase").create({
                "user":customerId,
                "tickets":ticketIdArray,
                "paymentIntent":event.data.object.payment_intent
            })
            const emailData:EmailConfirmationData = {
                email:customerEmail,
                name: user.name,
                surname: user.surname,
                purchaseId:purchase.id,
                itemDates:ticketDateArray,
                totalPrice:event.data.object.amount_total,
                ticketIds:ticketIdArray
            }
            await OrderConfirmationEmail({emailData:emailData})
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