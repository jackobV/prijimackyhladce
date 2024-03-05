import {NextRequest, NextResponse} from 'next/server';
import {redirect} from "next/navigation";
import PocketBase from "pocketbase";

export async function POST(req:Request,res:Response) {
    const requestHeaders = new Headers(req.headers)
    const body = await req.json()
    const location:string = body.location.toUpperCase()
    const locationSecretKeyNameOfVar:string = `${location}_STRIPE_SECRET_KEY`
    const stripe = require('stripe')(process.env[locationSecretKeyNameOfVar]);
    const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');

    try {
        const checkou_session_database = await pb.collection("checkout_session").create({
            user:body.email,
            test_ids:body.dateIds
        })
        const session = await stripe.checkout.sessions.create({
            customer_email: body.email,
            metadata: {
                user_id:body.userId,
                database_ids: body.dateIds.join(","),
                grade:body.grade,
                checkoutSessionId:checkou_session_database.id
            },
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: body.priceId,
                    quantity: body.numberOfDates,
                },
            ],
            mode: 'payment',
            allow_promotion_codes:true,
            locale:"auto",
            success_url: `${requestHeaders.get("origin")?.valueOf()}/rezervacepotvrzena?success=true&csid=${checkou_session_database.id}`,
            cancel_url: `${requestHeaders.get("origin")?.valueOf()}/rezervacepotvrzena?canceled=true&csid=${checkou_session_database.id}`,
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