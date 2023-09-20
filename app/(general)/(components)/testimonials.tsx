import { StarIcon } from '@heroicons/react/20/solid'

export default function Testimonials() {
    return (
        <section className="">
            <div className="px-4 bg-blue-600 py-10 rounded-tr-3xl rounded-br-3xl">
            <figure className="max-w-6xl px-6 lg:px-8 mx-auto">

                <p className="sr-only">5 z 5 hvězd</p>
                <div className="flex gap-x-1 text-white">
                    <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                </div>
                <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-blue-50 sm:text-2xl sm:leading-9 max-w-2xl">
                    <p>
                        “Přijímačky na zkoušku byly rozhodně tím nejlepším, co jsem navštívila. Krásná atmosféra, skvělá vedoucí i testy, které byly schválně těžší a více připravily. Určitě bych doporučila i všem ostatním, je to ta správná volba. Děkuji za všechno.”
                    </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex flex-col items-center justify-center font-bold text-white">M.</div>
                    <div className="text-sm leading-6">
                        <div className="font-semibold text-blue-100">Absolventka Přijímaček Na Zkoušku</div>
                        <div className="mt-0.5 text-blue-200">Rok 2022</div>
                    </div>
                </figcaption>
            </figure>
            </div>
        </section>
    )
}
