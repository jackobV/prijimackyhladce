import { ClockIcon, UsersIcon, CreditCardIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Snadná změna termínu',
        description:
            'Termín si můžete kdykoliv změnit.',
        icon: ClockIcon,
    },
    {
        name: 'Poradna pro rodiče',
        description:
            'Poradíme Vám s nákupem, nebo s čímkoliv okolo přijímaček.',
        icon: UsersIcon,
    },
    {
        name: 'Bezpečná platba',
        description:
            'Platbu zajišťuje mezinárodně největší poskytovatel platebních brán. ',
        icon: CreditCardIcon,
    },
]

export default function ObjectionHandle() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
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
