'use client'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "Mohu změnit termín účasti?",
        answer:
            "Bez problému! Pro změnu termínu nás kontaktujte emailem nejpozději do čtvrteční půlnoci před testem.",
    },
    {
        question: "Jak probíhá výběr a platba termínu?",
        answer:
            "Po registraci budete odkázáni na stránku s výběrem termínů. Následně stačí termín zaplatit přes platební bránu. Celý proces zabere méně než dvě minuty.",
    },
    {
        question: "Kolikrát bych na přijímačky na-zkoušku měl jít?",
        answer:
            "Počet účastí se u každého studenta liší. Doporučujeme si přijímačky vyzkoušet alespoň sedmkrát. Rozdíl však většinou uvidíte již po třech účastích. Mnoho žáků k nám dochází skoro každý týden.",
    },
    {
        question: "Kdy je dobré s přijímačkami na-zkoušku začít?",
        answer:
            "Čím dříve tím lépe. Začít s přípravou brzo se vždy vyplatí, protože to znamená méně stresu na jaře. Také je prokázáno, že průběžná příprava s pravidelným testováním je nejefektivnější metodou učení.",
    },
    {
        question: "Jak dlouho trvají přijímačky na-zkoušku?",
        answer:
            "Sobotní přijímačky na-zkoušku začínají v 8:45 a končí ve 14:00.",
    },
    {
        question: "Kde se přijímačky na-zkošku konají?",
        answer:
            "Můžete si vybrat ze dvou lokací. Praha 4 - v budově ZŠ Edisona, či v Příbrami v centru Eduarts.",
    },
    {
        question: "Lze platit jinak než kartou?",
        answer:
            "Pokud z nějakého důvodu nemůžete termíny uhradit platební kartou, kontaktujte nás emailem a najdeme vyhovující řešení.",
    },

    // More questions...
]

export default function Qna() {
    return (
        <div className="bg-white" id="qna">
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
