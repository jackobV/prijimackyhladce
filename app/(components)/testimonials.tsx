import { StarIcon } from '@heroicons/react/20/solid'

export default function Testimonials() {
    return (
        <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
            <figure className="mx-auto max-w-2xl">
                <p className="sr-only">5 z 5 hvězd</p>
                <div className="flex gap-x-1 text-blue-600">
                    <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                </div>
                <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
                    <p>
                        “PH byly rozhodně tím nejlepším, co jsem navštívila. Krásná atmosféra, skvělá vedoucí i testy, které byly schválně těžší a více připravily. Určitě bych doporučila i všem ostatním, je to ta správná volba. Děkuji za všechno.”
                    </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                    <div className="w-12 h-12 bg-sky-500 rounded-full flex flex-col items-center justify-center font-bold text-white">M.</div>
                    <div className="text-sm leading-6">
                        <div className="font-semibold text-gray-900">Absolventka Přijímaček Hravě</div>
                        <div className="mt-0.5 text-gray-600">Rok 2022</div>
                    </div>
                </figcaption>
            </figure>
        </section>
    )
}
