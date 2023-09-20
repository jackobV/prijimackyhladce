
const features = [
    {
        name: 'Srovnatelné s testy CERMAT.',
        description:
            'Testy skládáme přesně podle specifikací přijímaček CERMAT. Vycházíme ze zkušenosti a hluboké analýzi předešlých přijímaček. ',
    },
    {
        name: 'Vědomosti v souvislostech.',
        description:
            'Pravidelným testováním vědomostí si děti dokáží umístit látku do širšího kontextu. Když děti rozumí souvislostem, stává se učení mnohem smysluplnějším a zapamatovatelnějším. ',
    },
    {
        name: 'Rozbor testu.',
        description:
            'Po dopsání testu ho s dětmi rozebereme. Naši lektoři umí dětem předat rady k řešení jednotlivých typů úloh. Děti také mají prostor na dotazy.',
    },
    {
        name: 'Simulace prostředí.',
        description:
            'Učení v klidu domácnosti dítě nepřipravý na reálné podmínky ostrého testu. U nás si děti vyzkouší jaké je psát přijímačky v kolektivu a v časovém pressu.',
    },
    {
        name: 'Dovednost tipování.',
        description:
            'Tipování je klíčovou dovedností pro situace, kdy si studenti nejsou jisti správnou odpovědí. Při našich testech je učíme rozpoznávat klíčové informace v otázkách a vybírat nejlepší možnou volbu, i když si nejsou zcela jisti. ',
    },
    {
        name: 'Zvyšování sebevědomí.',
        description:
            'Pravidelným testováním a získáváním zpětné vazby si děti budují sebevědomí. Vědí, co od nich bude vyžadováno, a cítí se lépe připraveny čelit skutečným přijímačkám.',
    },

]

export default function Example() {
    return (
        <div className="">
            <div className="max-w-6xl px-6 lg:px-8 mx-auto">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Celostní příprava na přijímačky</h2>
                    <p className="mt-6 text-lg leading-8 font-light">
                        Víme, které faktory dokáží ovlivnit výsledek dítěte. <br />Pravidelné docházení žáky připravý na ostré přijímačky lépe než jiné metody učení.
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {features.map((feature) => (
                        <div key={feature.name}>
                            <dt className="font-semibold text-gray-900">{feature.name}</dt>
                            <dd className="mt-1 text-gray-600">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
