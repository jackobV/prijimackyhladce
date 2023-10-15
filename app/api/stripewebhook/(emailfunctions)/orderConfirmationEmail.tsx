import sgMail from "@sendgrid/mail";

export interface EmailConfirmationData {
    email:string;
    name:string;
    surname:string;
    purchaseId:string;
    itemDates:Array<string>;
    ticketIds:Array<string>;

    totalPrice:number;
}

export default async function OrderConfirmationEmail({ emailData } : {emailData:EmailConfirmationData}){
    function formatDateArray(dates: string[]): string {
        return dates.map(date => {
            const d = new Date(date);
            const day = d.getDate().toString().padStart(2, '0');
            const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
            const year = d.getFullYear();
            return `${day}.${month}.${year}`;
        }).join(', ');
    }
        console.log("trying to send email")
        const sgMail = require('@sendgrid/mail')
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
            to: emailData.email,
            from: "info@na-zkousku.cz",
            templateId: "d-76b782bfda1e449c9592a5551421bd08 ",
            subject: 'Děkujeme za objednávku!',
            dynamicTemplateData: {
                orderid:emailData.purchaseId,
                qty:emailData.ticketIds.length.toString(),
                dates:formatDateArray(emailData.itemDates)
            }
        }
        try {
            await sgMail.send(msg);
            console.log("sending email")
            return true
        } catch (e){
            // @ts-ignore
            console.log(e)
            return false
        }
}