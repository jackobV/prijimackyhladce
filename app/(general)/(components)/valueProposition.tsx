import { ClockIcon, KeyIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import {ForwardRefExoticComponent, RefAttributes, SVGProps} from "react";
interface features {
    description: string;
    icon : ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & {     title?: string | undefined;     titleId?: string | undefined; } & RefAttributes<SVGSVGElement>>;
    name: string;
}

const features:Array<features> = [
    {
        name: 'Naučíš se pracovat s časem',
        description:
            'Zjistíš jak dlouho ti trvají jednotlivé druhy úloh. Díky tomu se nedostaneš do situace, kdy nad cvičením strávíš deset minut a ze stresu, že test nestíháš, vše zapomeneš.',
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
            'Jedna z nejtěžších oblastí přípravy je vědět, co se učit. Je důležité přesně znát své silné a slabé stránky. U nás zjistíš, na jakou látku se zaměřit.',
        icon: ChartBarIcon,
    },
]

export default function ValueProposition() {
    return (
        <div className="">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                        Co můžeš od přijímaček na zkoušku
                        očekávat?
                    </h2>
                    <p className="pt-4 leading-8 text-gray-700">
                        Příprava na přijímačky by neměla být pouze o biflování učebnic a počítání příkladů. Pro podání nejlepšího výkonu je důležité mít jasnou představu o tom co tě čeká.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature:features) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
