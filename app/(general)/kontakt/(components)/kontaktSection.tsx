export default function KontaktSection() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Spojte se s námi </h2>
                            <p className="mt-4 leading-7 text-gray-600">
                                Ke spojení prosíme využijte jednu z následujících možností.
                            </p>
                            <div className="">
                                <p className="mt-4 leading-7 text-gray-600">
                                    IČO: 19805403
                                </p>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Podpora</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a className="font-semibold text-indigo-600" href="mailto:podpora@na-zkousku.cz">
                                                podpora@na-zkousku.cz
                                            </a>
                                        </dd>
                                        <dt className="sr-only">Telefon</dt>
                                        <dd>
                                            <a className=" text-indigo-600" href="mailto:podpora@na-zkousku.cz">
                                                +420 734 110 818
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Obecné informace</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a className="font-semibold text-indigo-600" href="mailto:info@na-zkousku.cz">
                                                info@na-zkousku.cz
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Pracovní nabídky</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a className="font-semibold text-indigo-600" href="mailto:kariera@na-zkousku.cz">
                                                kariera@na-zkousku.cz
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Média</h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a className="font-semibold text-indigo-600" href="mailto:media@na-zkousku.cz">
                                                media@na-zkousku.cz
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Lokace</h2>
                            <p className="mt-4 leading-7 text-gray-600">
                                Naše testy pro Vás pořádáme v následujících vybraných lokacích.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Praha</h3>
                                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                                    <p>Bítovská 1122/5</p>
                                    <p>Praha 4, 140 00</p>
                                </address>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Příbram</h3>
                                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                                    <p>Nám. T. G. Masaryka čp. 152, budova A</p>
                                    <p>Příbram, 261 01</p>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
