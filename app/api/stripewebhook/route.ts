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
            const databaseIds:Array<string> = event.data.object.metadata.database_ids.split(",");
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
                    const testDateAlreadyHasTickets = await pb.collection("testy").getOne(databaseId)
                    const newTestTicketArray = [...testDateAlreadyHasTickets.tickets, ticket.id]
                    await pb.collection("testy").update(databaseId,{
                        "tickets":newTestTicketArray
                    })
                } catch (e) {
                    console.log(e)
                }
            }
            const sgMail = require('@sendgrid/mail')
            sgMail.setApiKey(process.env.SENDGRID_API_KEY)
            const msg = {
                to: 'info@na-zkousku.cz', // Change to your recipient
                from: 'info@na-zkousku.cz', // Change to your verified sender
                subject: 'Sending with SendGrid is Fun',
                text: 'and easy to do anywhere, even with Node.js',
                html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            }
            sgMail
                .send(msg)
                .then(() => {
                    console.log('Email sent')
                })
                .catch((error:any) => {
                    console.error(error)
                })


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