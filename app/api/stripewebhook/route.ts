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
            const grade: string = event.data.object.metadata.grade
            const csid: string = event.data.object.metadata.checkoutSessionId
            console.log("grade" + grade)
            const databaseIds:Array<string> = event.data.object.metadata.database_ids.split(",");
            const paymentIntent: string = event.data.object.payment_intent
            console.log(databaseIds)
            const user = await pb.collection("users").getOne(customerId)
            const userNewTickets:Array<string> = []
            const ticketDateArray: Array<string> = []
            for (const databaseId of databaseIds){
                try{
                    const ticket = await pb.collection("ticket").create({
                        "user":customerId,
                        "testy":databaseId,
                        "is_fifthgrade":grade == "five" || false,
                    })
                    userNewTickets.push(ticket.id)
                    const testDate = await pb.collection("testy").getOne(databaseId)
                    ticketDateArray.push(testDate.date)
                    console.log(testDate.date)
                    const newTestTicketArray = [...testDate.tickets, ticket.id]
                    await pb.collection("testy").update(databaseId,{
                        "tickets":newTestTicketArray
                    })
                } catch (e) {
                    console.log(e)
                }
            }
            console.log("user tickets" + user.tickets)
            console.log("user tickets" + userNewTickets)

            const userCombinedTickets = [...user.tickets,...userNewTickets]
            console.log("user tickets new to push  " + userCombinedTickets)

            await pb.collection("users").update(customerId,{
                "tickets":userCombinedTickets
            })
            await pb.collection("checkout_session").update(csid,{status:1})
            const purchase = await pb.collection("purchase").create({
                "user":customerId,
                "tickets":userNewTickets,
                "payment_intent":paymentIntent,
                "total_price":event.data.object.amount_total
            })
            const orderSummaryLink:string = "https://www.na-zkousku.cz/rezervacepotvrzena?success=true&cid="+event.data.object.metadata.checkoutSessionId
            const emailData:EmailConfirmationData = {
                email:user.email,
                name: user.name,
                surname: user.surname,
                purchaseId:purchase.id,
                itemDates:ticketDateArray,
                totalPrice:event.data.object.amount_total,
                ticketIds:userNewTickets,
                orderSummaryView:orderSummaryLink
            }
            await OrderConfirmationEmail({emailData:emailData})
        }else if(event.type === "checkout.session.expired"){
            const csid: string = event.data.object.metadata.checkoutSessionId
            await pb.collection("checkout_session").update(csid,{status:2})
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