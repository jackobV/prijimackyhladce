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
        console.log("trying to send email")
        const sgMail = require('@sendgrid/mail')
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
            to: `${emailData.email}`, // Change to your recipient
            from: 'info@na-zkousku.cz', // Change to your verified sender
            subject: `🎉 Potvrzení objednávky - na-zkousku.cz`,
            text: `Děkujeme za Vaši objednávku! Tento email slouží jako potvrzení Vaší objednávky ${emailData.purchaseId}.`,
            html: `<div><p>Dobrý den ${emailData.name} ${emailData.surname} <br><br> Děkujeme za Vaši objednávku! Tento email slouží jako potvrzení Vaší objednávky <strong>${emailData.purchaseId}.</strong></p>
                    <p><strong>📦 Detaily Objednávky:</strong></p>
                    <ul>
                        <li><strong>Produkt</strong> : Test na zkoušku</li>
                        <li><strong>Množství</strong> : ${emailData.ticketIds.length}</li>
                        <li><strong>Datum testu</strong> : ${emailData.itemDates.map((item:string,key)=>(<p>{item}, </p>))}</li>
                        <li><strong>Způsob platby</strong> : Online platba</li>
                    </ul>
                    <br>
                    <h2>Kontakt:</h2>
                    <p>
                    Pokud máte jakékoliv otázky nebo potřebujete asistenci, neváhejte nás kontaktovat na info@na-zkousku.cz.
                    <br>
                    Děkujeme za nákup u Na Zkoušku!
                    <br>
                    S pozdravem,
                    <br>
                    Tým Na Zkoušku
                    </p>
                    </div>`,
        }
        console.log(msg)
        try {
            console.log("sending email")
            await sgMail.send(msg)
            return true
        } catch (e){
            console.log("error")
            return false
        }
}