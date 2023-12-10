import Image from "next/image";
import logo from "../../../logo.png"
export default function Reservationok(){
    return(
        <main>
            <section className="pt-10">
                <div className="max-w-2xl mx-auto bg-slate-100 rounded-xl p-10">
                    <div className="pb-10 flex flex-row justify-between">
                        <Image src={logo} alt={"Logo na zkoušku"} className="h-8 object-cover w-auto" />
                        <a className="text-sm" href="/"> {"<– "}Zpět na domovskou stránku</a>
                    </div>
                    <h1 className="text-center font-medium text-xl pb-20">Děkujeme za Vaší objednávku</h1>
                    <p>Po obdržení platby Vám přijde email s bližšími informacemi o nadcházející akci.</p>
                    <p className="pt-5">Mezitím se můžete registrovat na více termínů, či přejít do osobní zóny.</p>
                    <div className="flex flex-col items-center gap-y-5 pt-10">
                        <a href="/kosik?pobocka=praha" className="bg-slate-400 text-white rounded-lg  py-2 w-full text-center">Košík</a>
                        <a href="/aplikace" className="bg-slate-400 text-white rounded-lg  py-2 w-full text-center">Osobní zóna</a>
                    </div>
                </div>
            </section>

        </main>
    )
}