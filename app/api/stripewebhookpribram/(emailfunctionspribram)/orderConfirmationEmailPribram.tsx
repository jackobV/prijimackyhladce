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

export default async function OrderConfirmationEmailPribram({ emailData } : {emailData:EmailConfirmationData}){
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
        html: `<h2><span style="font-size:12px"><strong>V&aacute;žen&iacute; &uacute;častn&iacute;ci, rodiče,</strong></span></h2>

<p><span style="font-size:12px">Děkujeme za Va&scaron;i objedn&aacute;vku! Tento email slouž&iacute; jako potvrzen&iacute; Va&scaron;&iacute; objedn&aacute;vky <strong>${emailData.purchaseId}.</strong></span></p>

<p><strong>📦 Detaily Objedn&aacute;vky:</strong></p>

<ul>
	<li><strong>Produkt</strong> : Test na zkou&scaron;ku</li>
	<li><strong>Množstv&iacute;</strong> : ${emailData.ticketIds.length-1}</li>
	<li><strong>Datum testu</strong> : ${formatDateArray(emailData.itemDates)}</li>
	<li><strong>Způsob platby</strong> : Online platba</li>
</ul>

<p>&nbsp;</p>

<p><span style="font-size:10.5pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>Prok&aacute;z&aacute;n&iacute; zakoupen&iacute; &uacute;časti</strong></span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">Ž&aacute;ci se při př&iacute;chodu prokazuj&iacute; jm&eacute;nem použit&yacute;m při registraci. Doporučujeme tak&eacute; m&iacute;t u sebe tento email v elektronick&eacute; či ti&scaron;těn&eacute; podobě.&nbsp;</span></span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">&nbsp;</span></span></span></p>

<p><span style="font-size:10.5pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>Informace k dopravě</strong></span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">Pros&iacute;me dostavte se na m&iacute;sto kon&aacute;n&iacute; v </span></span></span><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>8:45</strong></span></span></span><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">.&nbsp;</span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">Vzděl&aacute;vac&iacute; centrum Eduarts s&iacute;dl&iacute; na n&aacute;m. T. G. Masaryka, čp. 152. Př&iacute;bram I.&nbsp;</span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">Vchod do centra je&nbsp; ve dvoře, hned pod kav&aacute;rnou Rynk.</span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">Doporučujeme parkov&aacute;n&iacute; na n&aacute;měst&iacute;.</span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">Předpokl&aacute;dan&yacute;</span></span></span><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong> konec akce je 14:00</strong></span></span></span><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">.</span></span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">&nbsp;</span></span></span></p>

<p><span style="font-size:10.5pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>Psac&iacute; a r&yacute;sovac&iacute; potřeby&nbsp;</strong></span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">Do z&aacute;znamov&eacute;ho archu je povoleno ps&aacute;t pouze modře nebo černě p&iacute;&scaron;&iacute;c&iacute; propiskou / perem.</span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">Při ostr&eacute;m testu nen&iacute; povoleno použ&iacute;vat gumovac&iacute; pera, psac&iacute; potřeby, kter&eacute; pap&iacute;r mohou prop&iacute;t.&nbsp;</span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">K testu matematiky budete potřebovat standardn&iacute; r&yacute;sovac&iacute; potřeby (troj&uacute;heln&iacute;k s ryskou, &uacute;hloměr a kruž&iacute;tko).</span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">K testu matematiky můžete využ&iacute;t obyčejnou tužku, ale fin&aacute;ln&iacute; ře&scaron;en&iacute; je třeba obt&aacute;hnout propiskou.&nbsp;</span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><u>Shrnut&iacute;</u></span></span></span><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">&nbsp;</span></span></span></p>

<ul>
\t<li style="list-style-type:disc"><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>Propiska/pero (modr&aacute;/čern&aacute;, negumovac&iacute;)</strong></span></span></span></li>
\t<li style="list-style-type:disc"><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>Troj&uacute;heln&iacute;k s ryskou</strong></span></span></span></li>
\t<li style="list-style-type:disc"><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>&Uacute;hloměr&nbsp;</strong></span></span></span></li>
\t<li style="list-style-type:disc"><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>Kruž&iacute;tko&nbsp;</strong></span></span></span></li>
</ul>

<p><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">&nbsp;</span></span></span></p>

<p><span style="font-size:10.5pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>Před testem</strong></span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">Před testem dbejte na dostatek </span></span></span><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>stravy</strong></span></span></span><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"> a </span></span></span><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>sp&aacute;nku</strong></span></span></span><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">, protože tyto faktory tak&eacute; mohou ovlivnit v&yacute;sledek.&nbsp;</span></span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">&nbsp;</span></span></span></p>

<p><span style="font-size:10.5pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>Svačina</strong></span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">Mezi jednotliv&yacute;mi testy budou m&iacute;t děti pauzu na svačinu. V are&aacute;lu je možn&eacute; zakoupit pit&iacute; a lehk&eacute; občerstven&iacute;.&nbsp;</span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">Ž&aacute;ci budou m&iacute;t možnost doplnit si l&aacute;hev na vodu.</span></span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">&nbsp;</span></span></span></p>

<p><span style="font-size:10.5pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>Zach&aacute;zen&iacute; se zad&aacute;n&iacute;m testu</strong></span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><u>Pořizov&aacute;n&iacute; obrazov&eacute;ho z&aacute;znamu zad&aacute;n&iacute; testu je př&iacute;sně zak&aacute;z&aacute;no.</u></span></span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">Distribuce testov&eacute;ho zad&aacute;n&iacute; je trestn&yacute;m činem poru&scaron;en&iacute; autorsk&eacute;ho pr&aacute;va podle &sect; 152 trestn&iacute;ho z&aacute;kona.</span></span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">&nbsp;</span></span></span></p>

<p><span style="font-size:10.5pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>Speci&aacute;ln&iacute; potřeby</strong></span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">Pokud ž&aacute;k vyžaduje speci&aacute;ln&iacute; potřeby, pros&iacute;me kontaktujte n&aacute;s emailem.&nbsp;</span></span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">&nbsp;</span></span></span></p>

<p><span style="font-size:10.5pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>Přesunut&iacute; term&iacute;nu&nbsp;</strong></span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">Pro změnu term&iacute;nu n&aacute;s kontaktujte emailem </span></span></span><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>nejpozději do čtvrtečn&iacute; půlnoci před testem.</strong></span></span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">&nbsp;</span></span></span></p>

<p><span style="font-size:10.5pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>Kontaktn&iacute; informace</strong></span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">Pros&iacute;me použijte prim&aacute;rně email: nazkousku@eduarts.cz</span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">Pro př&iacute;pad, že email nestač&iacute;, můžete zavolat na č&iacute;slo organiz&aacute;tora: 775 041 929, 775 610 273.</span></span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">&nbsp;</span></span></span></p>

<p><span style="font-size:10.5pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><strong>Přejeme V&aacute;m a Va&scaron;im dětem &uacute;spě&scaron;n&yacute; testovac&iacute; den!</strong></span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">S pozdravem,</span></span></span><br />
<span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000">T&yacute;m Na zkou&scaron;ku Eduarts, Př&iacute;bram</span></span></span></p>

<p><span style="font-size:9pt"><span style="font-family:Arial,sans-serif"><span style="color:#000000"><u>nazkousku@eduarts.cz</u></span></span></span></p>

<p>&nbsp;</p>
`,
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