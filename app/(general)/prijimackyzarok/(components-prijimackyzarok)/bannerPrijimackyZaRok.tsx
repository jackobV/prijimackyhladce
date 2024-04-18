import { XMarkIcon } from '@heroicons/react/20/solid'

export default function BannerPrijimackyZaRok() {
    return (
        <div className="flex items-center gap-x-6 bg-gray-900 px-6 py-8 sm:px-3.5 sm:before:flex-1">
            <p className="text-sm leading-6 text-white">
                <a href="/prijimackyzarok">
                    <strong className="font-semibold">Přijímačky 2025?</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                   Udělej první krok a zajisti si místo na přípravě<span aria-hidden="true">&rarr;</span>
                </a>
            </p>
            <div className="flex flex-1 justify-end">

            </div>
        </div>
    )
}
