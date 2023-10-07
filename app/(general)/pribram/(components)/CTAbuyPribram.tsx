export default function CTAbuyPribram() {
    return (
        <div className="bg-blue-700 py-10">
            <div className="px-4">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Začni s přípravou.
                        <br />
                        Přihlaš se na termín dnes.
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
                        Čím dříve se začneš připravovat, tím lépe přijímačky budeš zvládat. Také se brzkou přípravou vyhneš stresu na jaře.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/kosik?pobocka=pribram"
                            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Koupit test Na Zkoušku
                        </a>
                        <a href="#qna" className="text-sm font-semibold leading-6 text-white">
                            Více o testech <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
