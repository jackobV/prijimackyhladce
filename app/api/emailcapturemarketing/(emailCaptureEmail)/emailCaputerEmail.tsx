import sgMail from "@sendgrid/mail";

export default async function EmailCaputerEmail({emailData}:{emailData:string}){
    console.log("trying to send email")
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: `${emailData}`, // Change to your recipient
        from: 'info@na-zkousku.cz', // Change to your verified sender
        subject: 'Děkujeme za registraci!',
        template_id: "d-97e94ad1c32e4b8095445c69bbb7e6a8"
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