import Link from 'next/link'
import CheckIcon from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/CheckIcon";
import {Container} from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/Container";



export function Introduction() {
    return (
        <section
            id="introduction"
            aria-label="Introduction"
            className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
        >
            <Container className="text-lg tracking-tight text-slate-700">
                <p className="font-se text-3xl font-medium tracking-tight text-slate-900">
                    “Přijímačky na-zkoušku” jsou pořádané simulace CERMAT testů, jejichž absolvováním postupně ovládneš všechny klíčové dovednosti.
                </p>
                <p className="mt-4">
                    Víme, jak to běžně s přípravou chodí. Na podzim se nakoupí různé učební materiály, s nadšením se i pár týdnů řeší jen aby se uložily do šuplíku a znovu otevřely v únoru...
                </p>
                <p className="mt-4">
                    Vidíte v této metodě problém? Přijímačky jsou u dětí většinou jedním z prvních dlouhodobých cílů. Právě zde se učí motivaci, což není vůbec snadná záležitost ani u dospělého.
                </p>
                <p className="mt-4">
                    My jsme tu od toho, abychom fungovali nejen jako běžné doučování, ale i kontrolní bod, průvodce přípravou. Nahraďte tedy otázky typu "učíš se už?" něčím, co dítě namotivuje, ukáže mu konkrétně jak na přípravu a celkově mu zpřehlední cestu k přijetí na vybranou školu.
                </p>
                <ul role="list" className="mt-8 space-y-3">
                    {[
                        'Budeš vědět co a jak se máš učit',
                        'Namotivuje tě jasný a viditelný posun',
                        'Úlohy budeš umět řešit intuitivně',
                        'Naučíš se pracovat s časem',
                        'Na přijímačky půjdeš bez stresu',
                    ].map((feature) => (
                        <li key={feature} className="flex">
                            <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
                            <span className="ml-4">{feature}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-8">
                    V březnu budeš rád, že si se na přijímačky na-zkoušku přihlásil, budeš mít klid v duši a vědět, že na školu kam chceš se dostaneš. To ti můžeme slíbit.
                </p>
                <p className="mt-10">
                    <Link
                        href="#free-chapters"
                        className="text-base font-medium text-blue-600 hover:text-blue-800"
                    >
                        Zajisti si místo na přijímačkách a získej přehled toho, co budeš muset umět (PDF.) {' '}
                        <span aria-hidden="true">&rarr;</span>
                    </Link>
                </p>
            </Container>
        </section>
    )
}
