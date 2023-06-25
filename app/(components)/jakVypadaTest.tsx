let features:Array<string> = ["Dodržení formátu testů CERMAT","Důraz na mimiku prostředí", "Důkladný rozbor výsledků","Motivující přístup k vyučování"]
export default function JakVypadaTest(){
    return(
        <div className="px-4 mx-auto max-w-5xl">
            <h2 className="font-bold text-xl tracking-tight md:text-3xl">Celostní příprava na přijímačky</h2>
            <p className="pt-2 md:pt-5 md:text-lg max-w-md text-sm">Při testech hraje roli mnoho faktorů, které se snažíme s dětmi vypylovat. Jedná se například o nervozitu, či neschopnost si správně tipnout. Co ode dne testů můžete  <span className="font-bold text-blue-600">očekávat?</span> </p>
            <ul className="pt-2 px-4 flex flex-col gap-y-2 pt-5 md:gap-y-3 md:pt-10 font-medium">
                {features.map((item)=>(
                    <li className="list-disc text-gray-700">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}