import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
    'Test z ČJ a MAT',
    'Prostor pro dotazy ',
    '120 minut vyhrazených na doučování látky obsažené v testu',
    'Přístup do studentského portálu s historií výsledků.',
]

export default function PricingPribram() {
    return (
        <div className="bg-white" id="cenik">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="lg:mx-0 mx-auto max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight ">Garance spokojenosti a snadná změna termínu!</h2>
                    <p className="pt-4 text-lg leading-8 text-gray-600">
                        Pokud u nás nebudete spokojeni, vrátíme Vám peníze. Termín lze změnit do dvou dnů před přijímačkami na zkoušku.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl rounded-3xl ring-1 ring-gray-200  lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-xl font-bold tracking-tight ">Přijímačky na zkoušku.</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Sobotní termín přijímaček na zkoušku v Příbrami.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">Co obsahuje?</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">Finální cena včetně DPH.</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">690,-</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CZK</span>
                                </p>
                                <a
                                    href="/kosik?pobocka=pribram"
                                    className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    Rezervovat
                                </a>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    Platba online po registraci a výběru termínů.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
