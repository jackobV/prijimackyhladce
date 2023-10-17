"use client"
export default function ProgressBar({step}:{step:number}){
    return(
        <div className="mx-auto max-w-6xl px-6 lg:px-8 overflow-hidden pt-10">
            <div className="flex flex-row justify-between text-sm text-gray-600 pb-2">
                <p className="">Výběr termínů</p>
                <p className="">Osobní údaje</p>
                <p className="">Dokončení platby</p>
            </div>
            <div className="w-full h-1 rounded-full bg-gray-300">
                {
                    step === 0?
                        <div className="w-1/3 h-full rounded-full bg-blue-700"></div>
                    : step === 1?
                        <div className="w-1/2 h-full rounded-full bg-blue-700"></div>
                    :
                        <div></div>

                }
            </div>
        </div>
    )
}