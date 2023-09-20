import {NextApiRequest, NextApiResponse} from "next";
import {NextRequest, NextResponse} from "next/server";
import Stripe from 'stripe'
import PocketBase from "pocketbase";
import {buffer} from "micro";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret:string = process.env.STRIPE_WEBHOOK_SERCET_KEY
export async function POST(req: NextRequest, res: NextResponse){
    const buf = await buffer(req)

    const sig = req.headers["stripe-signature"]
    let event: Stripe.Event
    try {
        event = stripe.webhooks.constructEvent(buf.toString(),sig,webhookSecret)
    }catch (err){
        console.log(err)
        return
    }
    if (event.type === "checkout.session.completed"){
        const session = event.data.object;
        console.log(session)
    }
}