export default function CheckoutFeatures(){
    return(
        <div className="flex flex-col w-full h-full bg-gray-100 rounded-lg overflow-hidden">
            <div className="bg-blue-600 flex flex-col items-center justify-center py-20">
                <h3 className="text-white text-2xl tracking-wide text-center leading-relaxed">Garance spokojenosti a snadná <br /> změna termínu!</h3>
            </div>
            <div className="flex flex-col py-20 px-10 gap-y-4">
                    <div className="flex flex-row items-center gap-x-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <p className="text-gray-600 text-sm">Test z ČJ a MAT</p>
                    </div>
                    <div className="flex flex-row items-center gap-x-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <p className="text-gray-600 text-sm">2x hodina doučování látky <br />obsažené v testu</p>
                    </div>
                    <div className="flex flex-row items-center gap-x-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <p className="text-gray-600 text-sm">Prostor pro dotazy</p>
                    </div>
                    <div className="flex flex-row items-center gap-x-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <p className="text-gray-600 text-sm">Přístup do studentského portálu s historií výsledků.</p>
                    </div>

            </div>
        </div>
    )
}