const stats = [
    { id: 1, name: 'Spokojených žáků', value: '200+' },
    { id: 2, name: 'Se dostalo na vybranou školu', value: '98%' },
    { id: 3, name: 'Pobočky', value: '2' },
    { id: 4, name: 'Garance spokojenosti', value: '100%' },
]

export default function SocialProof() {
    return (
        <div className="bg-white ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">

                    <dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col bg-blue-400/5 p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
