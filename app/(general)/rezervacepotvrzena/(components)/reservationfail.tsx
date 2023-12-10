import Image from "next/image";
import logo from "../../../logo.png"
export default function Reservationfail(){
    return(
        <main>
            <section className="pt-10">
                <div className="max-w-2xl mx-auto bg-slate-100 rounded-xl p-10">
                    <div className="pb-10 flex flex-row justify-between">
                        <Image src={logo} alt={"Logo na zkoušku"} className="h-8 object-cover w-auto" />
                        <a className="text-sm" href="/"> {"<– "}Zpět na domovskou stránku</a>
                    </div>
                    <h1 className="text-center font-medium text-xl pb-20">Objednávka se nezdařila</h1>
                    <p>Platba objednávky se bohužel nezdařila.</p>
                    <p className="pt-5">Můžete zkusit objednávku zadat znovu, nebo nám napište na <br/>email info@na-zkousku.cz</p>
                    <div className="flex flex-col items-center gap-y-5 pt-10">
                        <a href="/kosik?pobocka=praha" className="bg-slate-400 text-white rounded-lg  py-2 w-full text-center">Košík</a>
                    </div>
                </div>
            </section>

        </main>
    )
}