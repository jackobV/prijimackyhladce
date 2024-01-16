import heroPic from "../../../(media)/na-zkousku-banner-w-testy.jpg"
import Image from "next/image";
import {
    BoltIcon,
    ChartBarIcon,
    ClockIcon,
    ExclamationTriangleIcon,
    KeyIcon,
    PuzzlePieceIcon
} from "@heroicons/react/24/solid";

const features = [
    {
        name: 'Naučíš se pracovat s časem',
        description:
            'Zjistíš jak dlouho ti trvají jednotlivé části testu. Díky tomu se nedostaneš do situace, kdy z pocitu, že test nestíháš, vše zapomeneš.',
        icon: ClockIcon,
    },
    {
        name: 'Budeš znát klíč ke všem úlohám',
        description:
            'Úlohy u přijímaček se dají rozdělit do několika kategorií. Ty si je u nás všechny vyzkoušíš a my ti vysvětlíme jak je nejlépe uchopit. ',
        icon: KeyIcon,
    },
    {
        name: 'Zjistíš, co nezvládáš na 100%',
        description:
            'Jedna z nejtěžších oblastí přípravy je vědět, co se učit. Je důležité přesně znát své silné a slabé stránky. U nás zjistíš, na kterou látku se zaměřit.',
        icon: ChartBarIcon,
    },
    {
        name: 'K přijímačkám nepůjdeš ve stresu',
        description:
            'K přijímačkám nepůjdeš na cizí půdu. Budeš vědět přesně jak na tom jsi a co očekávat. S čistou hlavou a bez stresu podáš svůj nejlepší výkon.',
        icon: BoltIcon,
    },
    {
        name: 'Poradíš si i s tím, co neumíš',
        description:
            'Když u přijímaček narazíš na látku, která ti nejde, nerozhodí tě to na celý zbytek testu. Naučíš se, jak si nejlépe tipnout, nebo zhodnotíš, že je lepší úlohu přeskočit.  ',
        icon: ExclamationTriangleIcon,
    },
    {
        name: 'Úlohy vyřešíš intuitivně',
        description:
            'Ke správné odpovědi se nebudeš muset dobírat dlouho. Poznáš druh úlohy a řešení ti naskočí intuitivně. Ušetřený čas tak využiješ u náročnějších cvičení.',
        icon: PuzzlePieceIcon,
    },
]

export default function FeaturesViceleta() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Efektivní příprava</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Co můžeš od přijímaček na-zkoušku očekávat?</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Naučíš se pracovat s časem, stresem a objevíš mezery ve svých znalostech. Budeš mít přehled o nejlepších postupech řešení úloh a tím získáš náskok před ostatními
                    </p>
                </div>
            </div>
            <div className="relative overflow-hidden pt-16">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <Image
                        src={heroPic}
                        alt="App screenshot"
                        className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                        width={2432}
                        height={1442}
                    />
                    <div className="relative" aria-hidden="true">
                        <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
                    </div>
                </div>
            </div>
            <div className=" mt-16  sm:mt-20 md:mt-24 mx-auto max-w-6xl px-6 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                {feature.name}
                            </dt>{' '}
                            <dd className="inline">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
