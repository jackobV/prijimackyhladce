import {NextApiRequest, NextApiResponse} from "next";
import Cors from "micro-cors";
import PocketBase from "pocketbase";
import {NextResponse} from "next/server";
import OrderConfirmationEmail from "@/app/api/stripewebhook/(emailfunctions)/orderConfirmationEmail";
import EmailCaputerEmail from "@/app/api/emailcapturemarketing/(emailCaptureEmail)/emailCaputerEmail";

const cors = Cors({
    allowMethods: ["POST", "HEAD"],
});
const senggridApiKey:string = process.env.SENDGRID_API_KEY || "";
const webhookSecret:string = process.env.STRIPE_WEBHOOK_SERCET_KEY || "";
const pocketbaseApiKey:string = process.env.POCKETBASE_API_KEY || "";
const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');
export async function POST(req: Request){
    const requestHeaders = new Headers(req.headers)
    const body = await req.json()
    try {
        try{
            await pb.admins.authWithPassword("apipocketbase@na-zkousku.cz", pocketbaseApiKey)
        } catch (e){
            console.log(e)
        }
        console.log(body)
        const data = {
            "email": body.email
        };
        await pb.collection('leads_email').create(data);
        await EmailCaputerEmail({emailData:body.email})

        return NextResponse.json({result:"",ok:true})

    }catch (e){
        console.log(e)
        return NextResponse.json({result:"",ok:false})
    }
}