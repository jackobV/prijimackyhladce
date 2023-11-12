import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Link from "next/link";

const includedFeatures = [
    'Test z Českého jazyka a matematiky ',
    'Přesnou simulaci prostředí přijímaček',
    'Rozbor testů od profi učitelů na místě',
    'Přístup do systému Přijímačky Jinak',
]

export default function TestCardItemCTA() {
    return (
        <div className="mx-auto max-w-5xl px-4">
            <div className="">
                <div className="relative">
                    <div className="absolute inset-0 h-1/2" />
                    <div className="relative mx-auto max-w-7xl">
                        <div className="mx-auto max-w-lg overflow-hidden rounded-xl shadow-lg lg:flex lg:max-w-none">
                            <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                                <h3 className="text-2xl  font-bold text-gray-800 sm:text-3xl sm:tracking-tight">Test na zkoušku</h3>
                                <p className="mt-2 text-sm sm:text-lg text-gray-500">
                                    Vyzkoušej si test a zbav se stresu.
                                </p>
                                <div className="mt-8">
                                    <div className="flex items-center">
                                        <h4 className="flex-shrink-0  pr-4 text-base font-semibold text-gray-900">
                                            Co od nás dostaneš?
                                        </h4>
                                        <div className="flex-1 border-t-2 border-gray-200" />
                                    </div>
                                    <ul role="list" className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
                                        {includedFeatures.map((feature) => (
                                            <li key={feature} className="flex items-start lg:col-span-1">
                                                <div className="flex-shrink-0">
                                                    <CheckCircleIcon className="h-5 w-5 text-blue-500" aria-hidden="true" />
                                                </div>
                                                <p className="ml-3 text-sm text-gray-700">{feature}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12 bg-white">
                                <p className="text-lg font-medium leading-6 text-gray-900">Last minute rezervace termínu!</p>
                                <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
                                    <span>590,-</span>
                                    <span className="ml-3 text-xl font-medium tracking-normal text-gray-500">CZK</span>
                                </div>
                                <p className="mt-4 text-sm">
                                    <Link href="/testy" className="font-medium text-gray-500 underline">
                                        Zjisti více o tom co získáš.
                                    </Link>
                                </p>
                                <div className="mt-6">
                                    <div className="rounded-md shadow">
                                        <a href="/registrace"
                                           className="flex items-center justify-center rounded-md border border-transparent bg-blue-700 px-5 py-3 text-base font-medium text-white hover:scale-[101%] duration-100 hover:bg-blue-600"
                                        >
                                            Koupit test na zkoušku
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
