"use client"
import SectionHeading from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/SectionHeading";
import {Container} from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/Container";
import CheckIcon from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/CheckIcon";
import {useRef, useState} from "react";
import {redirect} from "next/navigation";
import PocketBase from "pocketbase";

export default function SignUpForNews(){
    const [email,setEmail] = useState<null|string>(null)
    const [name,setName] = useState<null|string>(null)
    const [number,setNumber] = useState<null|string>(null)
    const emailRef = useRef<HTMLInputElement | null>(null);
    const nameRef = useRef<HTMLInputElement | null>(null);
    const numberRef = useRef<HTMLInputElement | null>(null);
    const [submited,setSubmited] = useState(false)
    const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');

    const handleSubmit = async (e: { preventDefault: () => void; }) =>{
        e.preventDefault()
        try{
           await pb.collection("waiting_list_2025").create({
                email:email,
                name:name,
                number:number
            })
            setSubmited(true)
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <div className="flex flex-col" id={"form"}>
            <Container>
                <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                    Zajisti si místo na příští rok a získej přístup k exkluzivním slevám.
                </p>
                <ul role="list" className="mt-8 space-y-3">
                    {[
                        'Garance místa na příští rok',
                        'Sleva 10% v předprodeji',
                        'Přístup do komunity dalších deváťáků',
                        'Shrnutí učiva, které budeš muset umět.',
                    ].map((feature) => (
                        <li key={feature} className="flex">
                            <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
                            <span className="ml-4">{feature}</span>
                        </li>
                    ))}
                </ul>
            </Container>
            <div>
                <div className="bg-white py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="relative isolate flex flex-col gap-10 overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 ">
                            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl xl:max-w-none xl:flex-auto">
                                Zajisti si místo na příští rok a získej přístup k exkluzivním slevám.
                            </h2>
                            <ul role="list" className=" space-y-2 text-white">
                                {[
                                    'Garance místa na příští rok',
                                    'Sleva 10% v předprodeji',
                                    'Přístup do komunity dalších deváťáků',
                                    'Shrnutí učiva, které budeš muset umět.',
                                ].map((feature) => (
                                    <li key={feature} className="flex">
                                        <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
                                        <span className="ml-4">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <form className="w-full max-w-md" onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-y-4">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                        placeholder="Váš email"
                                        onChange={e => setEmail(e.target.value)}
                                        ref={emailRef}
                                        value={email?email:""}
                                    />
                                    <label htmlFor="name" className="sr-only">
                                        Name and surname
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                        placeholder="Jméno a přijímení rodiče"
                                        onChange={e => setName(e.target.value)}
                                        ref={nameRef}
                                        value={name?name:""}
                                    />
                                    <label htmlFor="phone" className="sr-only">
                                        Phone number
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        required
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                        placeholder="Vaše telefoní číslo"
                                        onChange={e => setNumber(e.target.value)}
                                        ref={numberRef}
                                        value={number?number:""}
                                    />
                                    {submited?
                                        <button
                                            type="button"
                                            disabled={true}
                                            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
                                        >
                                            Úspěšně rezervováno
                                        </button>
                                        :
                                        <button
                                            type="submit"
                                            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                        >
                                            Rezervovat
                                        </button>
                                    }
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-300">
                                   Odesláním formuláře souhlasíte s{' '}
                                    <a href="https://www.na-zkousku.cz/gdpr.pdf" className="font-semibold text-white">
                                        GDPR
                                    </a>
                                    .
                                </p>
                            </form>
                            <svg
                                viewBox="0 0 1024 1024"
                                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                                aria-hidden="true"
                            >
                                <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                                <defs>
                                    <radialGradient
                                        id="759c1415-0410-454c-8f7c-9a820de03641"
                                        cx={0}
                                        cy={0}
                                        r={1}
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(512 512) rotate(90) scale(512)"
                                    >
                                        <stop stopColor="#7775D6" />
                                        <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}