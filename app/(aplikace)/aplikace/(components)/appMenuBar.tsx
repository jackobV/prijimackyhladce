"use client"
import Image from "next/image";
import logo from "../../../favicon.ico"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
const solutions = [


    { name: 'Rezervovat termíny', href: '/kosik' },
    { name: 'Osobní údaje', href: '/aplikace/uzivatel' },
    { name: 'Podpora', href: '/kontakt' },
]
export default function AppMenuBar(){
    return(
        <div className="flex flex-row justify-between max-w-7xl mx-auto px-6">
            <Image src={logo} alt={"Na zkoušku logo"} className="h-8 w-auto" />
            <Popover className="relative">
                <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    <span>Menu</span>
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                </Popover.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
                        <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                            {solutions.map((item) => (
                                <a key={item.name} href={item.href} className="block p-2 hover:text-indigo-600">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}