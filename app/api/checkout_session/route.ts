import {NextRequest, NextResponse} from 'next/server';
import {redirect} from "next/navigation";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req:Request,res:Response) {
    const requestHeaders = new Headers(req.headers)
    const body = await req.json()
    try {
        const session = await stripe.checkout.sessions.create({
            customer_email: body.email,
            metadata: {
                user_id:body.userId,
                database_ids: body.dateIds.join(","),
            },
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: 'price_1NrI2qIIKWsIVcizliI1vX0M',
                    quantity: body.numberOfDates,
                },
            ],
            mode: 'payment',
            success_url: `${requestHeaders.get("origin")?.valueOf()}/?success=true`,
            cancel_url: `${requestHeaders.get("origin")?.valueOf()}/?canceled=true`,
        });
        let url = new URL(session.url)
        return new Response(JSON.stringify({
            url:url
        }));
    }catch (err) {
        console.log(err)
        return NextResponse.json({error:JSON.stringify(err)},)
    }
}