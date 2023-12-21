const perks = [
    {
        name: 'Záruka spokojenosti',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
        description:
            "Pokud nebudete s přijímačkami na-zkoušku spokojeni, vrátíme Vám peníze.",
    },
    {
        name: 'Snadná změna termínu',
        description: "Termíny jsou flexibilní, v případě že se nemůžete dostavit, stačí si vybrat nový.",
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
    },
    {
        name: 'Poradna pro rodiče',
        description: 'Rádi Vám poradíme s volbou školy, strategie učení, nebo s tím jak se vyznat v procesu přijímaček.',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
    },
]

export default function Incentive() {
    return (
        <div className="bg-gray-50">
            <h2 className="sr-only">Our perks</h2>
            <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 lg:max-w-none lg:grid-cols-3">
                    {perks.map((incentive) => (
                        <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                            <div className="sm:flex-shrink-0">
                                <div className="flow-root">
                                    <img className="mx-auto h-24 w-28" src={incentive.imageSrc} alt="" />
                                </div>
                            </div>
                            <div className="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
                                <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                                <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
