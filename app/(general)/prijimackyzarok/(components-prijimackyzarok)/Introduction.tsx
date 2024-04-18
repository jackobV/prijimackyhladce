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
                    “Přijímačky na-zkoušku” jsou simulace CERMAT testů, jejichž absolvováním postupně ovládneš všechny klíčové dovednosti.
                </p>
                <p className="mt-4">
                    Víme, jak to běžně s přípravou na přijímačky chodí. Na podzim si každý nakoupí hromadu učebních materiálů, s nadšením s nimi pár týdnů možná i pracuje, aby je vzápětí uložil do šuplíku a znovu otevřel až v únoru...

                </p>
                <p className="mt-4">
                    Asi každému je jasné, že tohle není ideální. Přitom přijímací zkoušky na střední školu představují často první vzrušující výzvu v dlouhodobé kariéře životních cílů, kdy se otevírají dveře k budoucím snům a ambicím. Právě v tuhle chvíli se učíme umění motivace, což je dovednost, která je základním kamenem pro osobní rozvoj, ale často se s ní potýká nejeden dospělý.
                </p>
                <p className="mt-4">
                    My jsme tu od toho, abychom fungovali nejen jako běžné doučování, ale i jako kontrolní bod, průvodce přípravou. Nahrazujeme proto běžné otázky typu: "Učíš se už?" tím, co tě namotivuje, ukáže ti konkrétně, jak na přípravu, a celkově ti zpřehlední cestu k přijetí na vybranou školu.

                </p>
                <ul role="list" className="mt-8 space-y-3">
                    {[
                        'Dozvíš se, co a jak se máš učit',
                        'Namotivuje tě jasný a viditelný posun',
                        'Úlohy se naučíš řešit intuitivně',
                        'Zvládneš pracovat s časem',
                        'Na zkoušky půjdeš bez stresu',
                    ].map((feature) => (
                        <li key={feature} className="flex">
                            <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
                            <span className="ml-4">{feature}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-8">
                    V březnu budeš rád, že ses na přijímačky na-zkoušku přihlásil, budeš mít klid v duši a vědět, že na vysněnou školu se dostaneš. To ti můžeme slíbit.

                </p>
                <p className="mt-10">
                    <Link
                        href="#form"
                        className="text-base font-medium text-blue-600 hover:text-blue-800"
                    >
                        Zajisti si místo na přijímačkách a získej přehled, co všechno musíš umět {' '}
                        <span aria-hidden="true">&rarr;</span>
                    </Link>
                </p>
            </Container>
        </section>
    )
}
