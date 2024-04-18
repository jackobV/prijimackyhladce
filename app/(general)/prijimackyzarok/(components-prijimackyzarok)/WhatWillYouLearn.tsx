import {Container} from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/Container";
import SectionHeading from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/SectionHeading";
import ExpandableItems, {
    Expandable,
    ExpandableButton
} from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/Expandable";

const tableOfContents = {
    'Naučíš se pracovat s časem': {
        'Zjistíš, jak dlouho ti trvají jednotlivé části testu': 1,
        'Naučíš se přeskakovat úlohy': 2,
        'Poznáš, kde musíš zapracovat na rychlosti': 3,
    },
    "Dozvíš se klíč ke všem úlohám": {
        'Budeš umět zařadit úlohu do příslušné kategorie': 1,
        'Podle kategorie zjistíš přesný postup řešení': 2,
        'Pokud existuje k úloze nějaká vychytávka, ovládneš ji': 3,
    },
    'Zjistíš, co nezvládáš na 100%': {
        'Poznáš své nedostatky': 1,
        'Uvidíš, jak se v doplňování učiva posouváš': 2,
        'Nemusíš si látku složitě doplňovat, vše tě na rozborech doučíme': 3,
    },
    'K přijímačkám nepůjdeš ve stresu': {
        'Prostředí ti nebude cizí': 1,
        'Prozradíme ti konkrétní tipy, jak pracovat se stresem': 2,
        'S čistou hlavou a bez stresu podáš svůj nejlepší výkon': 3,
    },
}

export default function WhatWillYouLearn() {
    return (
        <section
            id="Co od na-zkoušku získáš"
            aria-labelledby="Co od na-zkoušku získáš-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="1" id="Co od na-zkoušku získáš">
                    Co od na-zkoušku získáš
                </SectionHeading>
                <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                    Zjisti, co díky naší přípravě získáš.
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                    Pravidelná příprava, tým těch nejlepších lektorů, záruka spokojenosti, příjemný kolektiv, důraz na smysluplnost výuky, prostor pro otázky, podpora pro rodiče, originální učební materiály podle specifikací CERMAT a další výhody!  </p>
                <Expandable>
                    <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                        <ExpandableItems>
                            {Object.entries(tableOfContents).map(([title, pages]) => (
                                <li key={title}>
                                    <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                                        {title}
                                    </h3>
                                    <ol
                                        role="list"
                                        className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                                    >
                                        {Object.entries(pages).map(([title, pageNumber]) => (
                                            <li
                                                key={title}
                                                className="flex justify-between py-3"
                                                aria-label={`${title} on page ${pageNumber}`}
                                            >
                        <span
                            className="font-medium text-slate-900"
                            aria-hidden="true"
                        >
                          {title}
                        </span>
                                                <span
                                                    className="font-mono text-slate-400"
                                                    aria-hidden="true"
                                                >
                          {pageNumber}
                        </span>
                                            </li>
                                        ))}
                                    </ol>
                                </li>
                            ))}
                        </ExpandableItems>
                    </ol>
                    <ExpandableButton>Zobrazit více</ExpandableButton>
                </Expandable>
            </Container>
        </section>
    )
}
