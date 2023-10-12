"use client"
import {Fragment, useEffect, useRef, useState} from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Link from "next/link";

const locationssanitized = ["praha","pribram"]
const locationsUnsanitized = [
    "Praha - Edisona",
    "Příbram - Eduarts"
]
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
export default function ChangeLocation({location}:{location:string}) {
    const initialRender = useRef(true);
    const [selected, setSelected] = useState(locationsUnsanitized[locationssanitized.indexOf(location)])
    useEffect(()=>{
        if (initialRender.current) {
            // If it's the initial render, skip the side effect and mark it as done
            initialRender.current = false;
            return;
        }
        console.log(locationsUnsanitized.indexOf(selected))
    },[selected])


    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    <div className="relative">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6">
                            <span className="block truncate">{selected}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {locationssanitized.map((person, key) => (
                                    <Link href={`?${new URLSearchParams({
                                        pobocka:locationssanitized[key]
                                    })}`}>
                                    <Listbox.Option
                                        key={key}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'bg-blue-600 text-white' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={locationsUnsanitized[key]}
                                    >
                                        {({ selected, active }) => (
                                            <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {locationsUnsanitized[key]}
                        </span>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-blue-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                    </Link>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}
