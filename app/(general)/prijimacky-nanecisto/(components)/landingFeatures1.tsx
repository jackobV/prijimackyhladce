import {

    ArrowsPointingInIcon, BuildingLibraryIcon, DocumentCheckIcon, UserGroupIcon
} from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Nauč se rozvrhnout čas',
        description:
            'Naučit se pracovat pod časovým nátlakem je jednou z nejdůležitostí nejen pro přijímací řízení, ale i pro budoucí studium.',
        icon: ArrowsPointingInIcon,
    },
    {
        name: 'Mladý zkušený kolektiv lektorů',
        description:
            'Naši učitelé se orientují v problémových oblastech učiva a umí předat metody a techniky, se kterými se dané učivo značně zjednoduší. ',
        icon: UserGroupIcon,
    },
    {
        name: 'Simulace průběhu',
        description:
            'Věříme, že pro úspěšné zvládnutí stresu a nervozity při přijímacím řízení je potřeba dětem poskytnout představu o jeho průběhu.',
        icon: DocumentCheckIcon,
    },
    {
        name: 'Testy v Praze',
        description:
            'Naše lekce probíhají v budově školy ZŠ Edisona u metra Budějovická na Praze 4.',
        icon: BuildingLibraryIcon,
    },
]

export default function LandingFeatures1() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h1 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Testy na zkoušku Jinak</h1>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                        Přijímací testy na zkoušku pro 5., 7. a 9. třídu ZŠ.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Jednotná zkouška z Českýho jazyka a matematiky nanečisto. Testy vytvořené podle přesných specifikací jednotných přijímacích zkoušek Cermat.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400 text-blue-800">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <h3>
                                        {feature.name}
                                    </h3>
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                    <div className="mt-32 flex flex-col items-center gap-y-4">
                        <a className="py-4 px-20 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg hover:scale-[101%] duration-100" href="/registrace">Koupit test na zkoušku</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
