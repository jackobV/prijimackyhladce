'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import logo from "../../../logo.png"
import logoEduarts from "../(media)/EDUARTS_logonasirku.png"
import PocketBase from "pocketbase";
const navigation = [
    { name: 'Ceník', href: '/pribram#cenik' },
    { name: 'Termíny 2023/24', href: '/kosik?pobocka=pribram' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Často kladené otázky', href: '/pribram#qna' },

]

export default function MenuPribram() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">na-zkousku.cz</span>
                        <div className="flex flex-col xl:flex-row gap-x-4 lg:items-center h-full gap-y-2">
                            <Image src={logo} alt={"logo na-zkousku.cz"} className="w-auto h-10 object-cover" />
                            <Image src={logoEduarts} alt={"logo eduarts"} className="w-auto h-8 object-scale-down" />

                        </div>
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="flex flex-1 items-center justify-end gap-x-6">
                    {
                        pb.authStore.isValid ?
                            <a href="/aplikace" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
                                Osobní zóna
                            </a>
                            :
                            <a href="/aplikace" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
                                Přihlásit se
                            </a>
                    }
                    <a
                        href="/kosik?pobocka=pribram"
                        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Rezervovat
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Otevřít hlavní menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center gap-x-6">
                        <a href="/pribram" className="-m-1.5 p-1.5">
                            <span className="sr-only">na-zkousku.cz</span>
                            <Image src={logo} alt={"logo na-zkousku.cz"} className="w-auto h-6" />
                            <Image src={logo} alt={"logo na-zkousku.cz"} className="w-auto h-6" />

                        </a>
                        <a
                            href="/kosik?pobocka=pribram"
                            className="ml-auto rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Rezervovat
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Zavřít menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                {pb.authStore.isValid?
                                    <a
                                        href="/aplikace"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Osobní zóna
                                    </a>:
                                    <a
                                        href="/aplikace"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Přihlásit se
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>

            </Dialog>

        </header>
    )
}
