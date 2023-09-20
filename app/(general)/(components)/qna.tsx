'use client'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "Mohu změnit termín účasti?",
        answer:
            "Bez problému! Pro změnu termínu nás kontaktujte emailem nejpozdějí do čtvrteční půlnoci před testy Na Zkoušku.",
    },
    {
        question: "Jak probíhá výběr a platba termínu?",
        answer:
            "Po registraci budete odkázáni na stránku s výběrem termínů. Následně stačí termín zaplatit přes platební bránu. Celý proces zabere méně než dvě minuty.",
    },
    {
        question: "Kolikrát bych na přijímačky Na Zkoušku měl jít?",
        answer:
            "Počet účastí se u každého studenta liší. Doporučujeme si přijímačky vyzkoušet alespoň sedmkrát. Rozdíl však většinou uvidíte již po třech účastích. Mnoho žáků k nám dochází skoro každý týden.",
    },
    {
        question: "Kdy je dobré s přijímačkamy Na Zkoušku začít?",
        answer:
            "Čím dříve tím lépe. Začít s přípravou brzo se vždy vyplatí, protože to znamená méně stresu na jaře. Také je prokázáno, že průběžná příprava s pravidelným testováním je nejefektivnější metodou učení.",
    },
    {
        question: "Kdy je dobré s přijímačkamy Na Zkoušku začít?",
        answer:
            "Čím dříve tím lépe. Začít s přípravou brzo se vždy vyplatí, protože to znamená méně stresu na jaře. Také je prokázáno, že průběžná příprava s pravidelným testováním je nejefektivnější metodou učení.",
    },
    // More questions...
]

export default function Qna() {
    return (
        <div className="bg-white">
            <div className="max-w-6xl px-6 lg:px-8 mx-auto">
                <div className="mx-auto divide-y divide-gray-900/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Často kladené otázky</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                          {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
