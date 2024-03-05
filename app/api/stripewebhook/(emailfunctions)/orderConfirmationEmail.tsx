import sgMail from "@sendgrid/mail";

export interface EmailConfirmationData {
    email:string;
    name:string;
    surname:string;
    purchaseId:string;
    itemDates:Array<string>;
    ticketIds:Array<string>;
    orderSummaryView:string;

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
            to: `${emailData.email}`, // Change to your recipient
            from: 'info@na-zkousku.cz', // Change to your verified sender
            subject: `🎉 Potvrzení objednávky - na-zkousku.cz`,
            text: `Děkujeme za Vaši objednávku! Tento email slouží jako potvrzení Vaší objednávky ${emailData.purchaseId}.`,
            html: `<div>
                    <h2><span style="font-size:12px"><strong>V&aacute;žen&iacute; &uacute;častn&iacute;ci, rodiče,</strong></span></h2>

                    <p><span style="font-size:12px">Děkujeme za Va&scaron;i objedn&aacute;vku! Tento email slouž&iacute; jako potvrzen&iacute; Va&scaron;&iacute; objedn&aacute;vky <strong>${emailData.purchaseId}.</strong></span></p>
                    <p><span style="font-size:12px">Detail objednávky si můžete zobrazit také po kliknutí na <a href=${emailData.orderSummaryView}>${emailData.orderSummaryView}</a></span></p>
                    <p><strong>📦 Detaily Objednávky:</strong></p>
                    <ul>
                        <li><strong>Produkt</strong> : Test na zkoušku</li>
                        <li><strong>Množství</strong> : ${emailData.ticketIds.length}</li>
                        <li><strong>Datum testu</strong> : ${formatDateArray(emailData.itemDates)}</li>
                        <li><strong>Způsob platby</strong> : Online platba</li>
                    </ul>

<p>&nbsp;</p>

<p><span style="font-size:14px"><strong>Prok&aacute;z&aacute;n&iacute; zakoupen&iacute; &uacute;časti</strong></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Ž&aacute;ci se při př&iacute;chodu prokazuj&iacute; jm&eacute;nem použit&yacute;m při registraci. Doporučujeme tak&eacute; m&iacute;t u sebe tento email v elektronick&eacute;, či ti&scaron;těn&eacute; podobě.&nbsp;</span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:14px"><strong><span style="font-family:Arial,sans-serif">Informace k dopravě</span></strong></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Pros&iacute;me dostavte se na m&iacute;sto kon&aacute;n&iacute; v <strong>8:45</strong>.&nbsp;</span></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Doporučujeme využ&iacute;t spoje <strong>hromadn&eacute; dopravy</strong>.</span></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Budova Z&aacute;kladn&iacute; &scaron;koly Edisona se nach&aacute;z&iacute; <strong>8 minut pě&scaron;ky</strong> (500 metrů) od stanice <strong>metra Budějovick&aacute;</strong>.&nbsp;</span></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Pokud zvol&iacute;te cestu <strong>autem</strong>, lze zajet př&iacute;mo k budově ulic&iacute; B&iacute;tovsk&aacute;.&nbsp;</span></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Tak&eacute; se kousek od &scaron;koly nach&aacute;z&iacute; <strong>parkovi&scaron;tě</strong>, kter&eacute; je přes v&iacute;kend bezplatn&eacute;.&nbsp;</span></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Předpokl&aacute;dan&yacute;<strong> konec akce je 14:00</strong>.</span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:14px"><strong><span style="font-family:Arial,sans-serif">Psac&iacute; a r&yacute;sovac&iacute; potřeby&nbsp;</span></strong></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Do z&aacute;znamov&eacute;ho archu je povoleno ps&aacute;t pouze modře, či černě p&iacute;&scaron;&iacute;c&iacute; propiskou / perem.</span></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Při ostr&eacute;m testu nen&iacute; povoleno použ&iacute;vat gumovac&iacute; pera, či psac&iacute; potřeby, kter&eacute; pap&iacute;r mohou prop&iacute;t.&nbsp;</span></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">K testu matematiky budete potřebovat standardn&iacute; r&yacute;sovac&iacute; potřeby (trojuheln&iacute;k s ryskou, &uacute;hloměr a kruž&iacute;tko.)</span></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">K testu matematiky můžete využ&iacute;t obyčejnou tužku, ale je třeba fin&aacute;ln&iacute; ře&scaron;en&iacute; obt&aacute;hnout propiskou.&nbsp;</span></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif"><u>Shrnut&iacute;</u>&nbsp;</span></span></p>

<ul>
\t<li style="list-style-type:disc"><strong><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Propiska/pero (modr&aacute;/čern&aacute;, negumovac&iacute;)</span></span></strong></li>
\t<li style="list-style-type:disc"><strong><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Trojuheln&iacute;k s ryskou</span></span></strong></li>
\t<li style="list-style-type:disc"><strong><span style="font-size:12px"><span style="font-family:Arial,sans-serif">&Uacute;hloměr&nbsp;</span></span></strong></li>
\t<li style="list-style-type:disc"><strong><span style="font-size:12px"><span style="font-family:Arial,sans-serif">kruž&iacute;tko&nbsp;</span></span></strong></li>
</ul>

<p>&nbsp;</p>

<p><span style="font-size:14px"><strong><span style="font-family:Arial,sans-serif">Před testem</span></strong></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Před testem dbejte na dostatek <strong>stravy</strong> a <strong>sp&aacute;nku</strong>, protože tyto faktory tak&eacute; mohou ovlivnit v&yacute;sledek.&nbsp;</span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:14px"><strong><span style="font-family:Arial,sans-serif">Svačina</span></strong></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Mezi jednotliv&yacute;mi testy budou m&iacute;t děti pauzu na svačinu. V are&aacute;lu nen&iacute; možnost koupě stravy.&nbsp;</span></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Ž&aacute;ci budou m&iacute;t možnost doplnit si l&aacute;hev na vodu.</span></span></p>

<p>&nbsp;</p>

<p><strong><span style="font-size:14px"><span style="font-family:Arial,sans-serif">Zach&aacute;zen&iacute; se zad&aacute;n&iacute;m testu</span></span></strong></p>

<p><u><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Pořizov&aacute;n&iacute; obrazov&eacute;ho z&aacute;znamu zad&aacute;n&iacute; testu je př&iacute;sně zak&aacute;z&aacute;no.</span></span></u></p>

<p>Distribuce testov&eacute;ho zad&aacute;n&iacute; je trestn&yacute;m činem poru&scaron;en&iacute; autorsk&eacute;ho pr&aacute;va podle &sect; 152 trestn&iacute;ho z&aacute;kona.</p>

<p>&nbsp;</p>

<p><span style="font-size:14px"><strong><span style="font-family:Arial,sans-serif">Speci&aacute;ln&iacute; potřeby</span></strong></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Pokud ž&aacute;k vyžaduje speci&aacute;ln&iacute; potřeby, pros&iacute;me kontaktujte n&aacute;s emailem.&nbsp;</span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:14px"><strong><span style="font-family:Arial,sans-serif">Přesunut&iacute; term&iacute;nu&nbsp;</span></strong></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Pro změnu term&iacute;nu n&aacute;s kontaktujte emailem <strong>nejpozději do čtvrtečn&iacute; půlnoci před testem.</strong></span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:14px"><strong><span style="font-family:Arial,sans-serif">Kontaktn&iacute; informace</span></strong></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Pros&iacute;me použijte prim&aacute;rn&iacute; email </span><a href="mailto:info@na-zkousku.cz" style="text-decoration:none"><span style="font-family:Arial,sans-serif"><u>info@na-zkousku.cz</u></span></a><span style="font-family:Arial,sans-serif">.</span></span></p>

<p><span style="font-size:12px"><span style="font-family:Arial,sans-serif">Pro př&iacute;pad, že email nestač&iacute;, můžete zavolat na č&iacute;slo organiz&aacute;tora 734110818</span>.</span></p>

<p>&nbsp;</p>

<p><strong><span style="font-size:14px">Přejeme V&aacute;m a Va&scaron;im dětem &uacute;spě&scaron;n&yacute; testovac&iacute; den!</span></strong></p>

<p><span style="font-size:12px">S pozdravem,<br />
T&yacute;m Na zkou&scaron;ku</span></p>

<p><span style="font-size:12px"><a href="mailto:info@na-zkousku.cz" style="text-decoration:none"><span style="font-family:Arial,sans-serif"><u>info@na-zkousku.cz</u></span></a></span></p>

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