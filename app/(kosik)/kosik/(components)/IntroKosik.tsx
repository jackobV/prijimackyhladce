import {ChevronRightIcon} from "@heroicons/react/20/solid";

export default function IntroKosik({grade}:{grade:string}){
    const href: string = grade === "nine" ? "/kosik?pobocka=praha&grade=five" : "/kosik?pobocka=praha&grade=nine";
    return(
        <>
            <div className="pb-5 flex flex-col w-full items-center">
                <a href={href} className="space-x-6">
                  <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                    Jsi v {grade == "nine" ?<span>páté</span>:<span>deváté</span>} třídě?
                  </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                    <span>Vyber si termín zde</span>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </a>
            </div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col items-center gap-y-5">

                <h1 className="text-5xl font-semibold text-center text-gray-700 ">Výběr termínu pro {grade == "nine" ?<span>deváťáky</span>:<span>páťáky</span>}</h1>
                <p className="max-w-lg text-center">Každý termín obsahuje přesnou simulaci průběhu ostré zkoušky, včetně podrobného rozboru testů.</p>
                <a className="text-sm underline text-gray-600 hover:text-gray-900" href="https://www.na-zkousku.cz/LP">Více informací {"->"}</a>

            </div>

        </>
        )
}