'use client'
import {useState} from "react";
import {BookOpenIcon, UserIcon, UsersIcon} from "@heroicons/react/24/outline";
import PocketBase from "pocketbase";

export default function RegisterForm2(){
    /*
    * Variables k dotazníku
    * */
    const [step, setStep] = useState(0);
    const [question, setQuestion] = useState("Co se na tebe nejvíce hodí?")
    const [questionDescription, setQuestionDescription] = useState("Vyber si jednu z následujících možností...")
    const [year, setYear] = useState(0);
    const [difficultie, setDifficultie] = useState("");
    const [perosnalRole, setPersonalRole] = useState("");
    const [loadingRegister, setLoadingRegister] = useState(false);
    /*
    * Variables k formuláři
    * */
    const [jmeno,setJmeno] = useState("")
    const [prijimeni,setPrijimeni] = useState("")
    const [email,setEmail] = useState("")
    const [heslo, setHeslo] = useState("")
    const [hesloZnovu, setHesloznovu] = useState("")
    const [passwordProblemMessage, setPasswordProblemMessage] = useState("")
    const [emailProblemMessage,setEmailProblemMessage] = useState(false)
    function validatePassword(){
        if(heslo === hesloZnovu){
            return(true)
        }else{
            return(false)
        }
    }


    const handleNext = (()=>{
        if(step === 0 && perosnalRole != ""){
            setQuestion("Která třída se tě týká?")
            setQuestionDescription("Momentálně poskytujeme přijímačky nenečisto pouze pro devátou třídu...")
            setStep(1)
        }
        if(step === 1 && year != 0) {
            setQuestion("Který předmět ti dělá větší problém?")
            setQuestionDescription("Odpověď poslouží k vylepšení tvého zážitku...")
            setStep(2)
        }
        if(step === 2 && difficultie != "") {
            setQuestion("Posledních pár detailů!")
            setQuestionDescription("Tímto účtem se později přihlásíš do aplikace!")
            setStep(3)
        }
    })

    const pb = new PocketBase('https://server.na-zkousku.cz');
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if(validatePassword() === true){
            try {
                setLoadingRegister(true);
                await pb.collection('users').create({"email":email,"emailVisibility":true,"password":heslo,"passwordConfirm":hesloZnovu,"jmeno":jmeno,"prijimeni":prijimeni,"trida":year,"role":perosnalRole,"difficultie":difficultie});
                await pb.collection('users').authWithPassword(email,heslo);
                fetch("/api/registerok",{
                    method: "POST",
                    body: (email)
                }).then(res => {
                    if(res.ok) return res.json()
                    return res.json().then(json => Promise.reject(json))
                })
                // @ts-ignore
                window.location = "https://www.prijimackyjinak.cz/login"
            } catch (error) {
                console.log(error)
                setEmailProblemMessage(true)
                setLoadingRegister(false)
            }}else{
            setHesloznovu("")
            setPasswordProblemMessage("Hesla se neshodují")
        }
    }



    return(
        <div className="w-screen h-screen flex flex-col items-center px-4 max-w-5xl mx-auto">
            <div className="flex flex-col w-full pt-10">
                <div className="flex flex-row justify-between pb-1">
                    <p className="text-gray-600">Registrace</p>
                    <p className="text-gray-600">Rezervace termínu</p>
                </div>
                <div className="w-full h-1 bg-gray-100 rounded-full">
                    {step === 0 ?
                        <div className="h-1 w-1/4 bg-blue-600 rounded-full"></div>
                        :
                        <div></div>
                    }
                    {step === 1 ?
                        <div className="h-1 w-1/2 bg-blue-600 rounded-full"></div>
                        :
                        <div></div>
                    }
                    {step === 2 ?
                        <div className="h-1 w-3/4 bg-blue-600 rounded-full"></div>
                        :
                        <div></div>
                    }
                    {step === 3 ?
                        <div className="h-1 w-11/12 bg-blue-600 rounded-full"></div>
                        :
                        <div></div>
                    }
                </div>
            </div>
            <div className="flex flex-col self-center w-full items-center h-full pt-20">
                <div className="text-3xl font-semibold pb-5 text-center">{question}</div>
                <div className="text-gray-600 pb-10">{questionDescription}</div>
                {step === 0 ?
                    <div className="flex flex-col w-full md:w-3/5 gap-y-2">
                        {perosnalRole === "R" ?
                            <div className="flex flex-row w-full gap-x-4 rounded-lg border-2 h-20 items-center pl-4 border-blue-700 shadow-lg cursor-pointer" onClick={(()=>(setPersonalRole("")))}>
                                <div className="w-8 bg-blue-500 rounded-full p-1 text-blue-800 border-blue-800 border"><UsersIcon /></div>
                                <div className=""><p className="inline font-medium">Rodič</p><p className=" pl-2 inline text-sm text-gray-500">nebo prarodič, zákonný zástupce...</p> </div>
                            </div>
                            :
                            <div className="flex flex-row w-full gap-x-4 rounded-lg border h-20 items-center pl-4 hover:scale-[101%] duration-100 cursor-pointer hover:border-blue-700" onClick={(()=>(setPersonalRole("R")))}>
                                <div className="w-8 bg-blue-500 rounded-full p-1 text-blue-800 border-blue-800 border"><UsersIcon /></div>
                                <div className=""><p className="inline font-medium">Rodič</p><p className=" pl-2 inline text-sm text-gray-500">nebo prarodič, zákonný zástupce...</p> </div>
                            </div>
                        }
                        {perosnalRole === "S" ?
                            <div className="flex flex-row w-full gap-x-4 rounded-lg border-2 h-20 items-center pl-4 border-blue-700 shadow-lg cursor-pointer" onClick={(()=>(setPersonalRole("")))}>
                                <div className="w-8 bg-blue-500 rounded-full p-1 text-blue-800 border-blue-800 border"><UserIcon /></div>
                                <div className=""><p className="inline font-medium">Student</p> </div>
                            </div>
                            :
                            <div className="flex flex-row w-full gap-x-4 rounded-lg border h-20 items-center pl-4 hover:scale-[101%] duration-100 cursor-pointer hover:border-blue-700" onClick={(()=>(setPersonalRole("S")))}>
                                <div className="w-8 bg-blue-500 rounded-full p-1 text-blue-800 border-blue-800 border"><UserIcon /></div>
                                <div className=""><p className="inline font-medium">Student</p> </div>
                            </div>
                        }
                        {perosnalRole === "U" ?
                            <div className="flex flex-row w-full gap-x-4 rounded-lg border-2 h-20 items-center pl-4 border-blue-700 shadow-lg cursor-pointer" onClick={(()=>(setPersonalRole("")))}>
                                <div className="w-8 bg-blue-500 rounded-full p-1 text-blue-800 border-blue-800 border"><BookOpenIcon /></div>
                                <div className=""><p className="inline font-medium">Učitel</p></div>
                            </div>
                            :
                            <div className="flex flex-row w-full gap-x-4 rounded-lg border h-20 items-center pl-4 hover:scale-[101%] duration-100 cursor-pointer hover:border-blue-700" onClick={(()=>(setPersonalRole("U")))}>
                                <div className="w-8 bg-blue-500 rounded-full p-1 text-blue-800 border-blue-800 border"><BookOpenIcon /></div>
                                <div className=""><p className="inline font-medium">Učitel</p></div>
                            </div>
                        }
                    </div>
                    :
                    <div></div>
                }


                {step === 1 ?
                    <div className="flex flex-col w-full md:w-3/5 gap-y-2">
                        {year === 9 ?
                            <div className="flex flex-row w-full gap-x-4 rounded-lg border-2 h-20 items-center pl-4 border-blue-700 shadow-lg cursor-pointer" onClick={(()=>(setYear(0)))}>
                                <div className="w-8 h-8 bg-blue-500 rounded-full p-1 text-blue-800 border-blue-800 border flex flex-col items-center justify-center font-medium">9</div>
                                <div className=""><p className="inline font-medium">Devátá třída</p> </div>
                            </div>
                            :
                            <div className="flex flex-row w-full gap-x-4 rounded-lg border h-20 items-center pl-4 hover:scale-[101%] duration-100 cursor-pointer hover:border-blue-700" onClick={(()=>(setYear(9)))}>
                                <div className="w-8 h-8 bg-blue-500 rounded-full p-1 text-blue-800 border-blue-800 border flex flex-col items-center justify-center font-medium">9</div>
                                <div className=""><p className="inline font-medium">Devátá třída</p> </div>
                            </div>
                        }
                    </div>
                    :
                    <div></div>
                }



                {step === 2 ?
                    <div className="flex flex-col w-full md:w-3/5 gap-y-2">
                        {difficultie === "M" ?
                            <div className="flex flex-row w-full gap-x-4 rounded-lg border-2 h-20 items-center pl-4 border-blue-700 shadow-lg cursor-pointer" onClick={(()=>(setDifficultie("")))}>
                                <div className="w-8 h-8 bg-blue-500 rounded-full p-1 text-blue-800 border-blue-800 border flex flex-col items-center justify-center font-medium">M</div>
                                <div className=""><p className="inline font-medium">Matematika</p></div>
                            </div>
                            :
                            <div className="flex flex-row w-full gap-x-4 rounded-lg border h-20 items-center pl-4 hover:scale-[101%] duration-100 cursor-pointer hover:border-blue-700" onClick={(()=>(setDifficultie("M")))}>
                                <div className="w-8 h-8 bg-blue-500 rounded-full p-1 text-blue-800 border-blue-800 border flex flex-col items-center justify-center font-medium">M</div>
                                <div className=""><p className="inline font-medium">Matematika</p></div>
                            </div>
                        }
                        {difficultie === "C" ?
                            <div className="flex flex-row w-full gap-x-4 rounded-lg border-2 h-20 items-center pl-4 border-blue-700 shadow-lg cursor-pointer" onClick={(()=>(setDifficultie("")))}>
                                <div className="w-8 h-8 bg-blue-500 rounded-full p-1 text-blue-800 border-blue-800 border flex flex-col items-center justify-center font-medium">Č</div>
                                <div className=""><p className="inline font-medium">Český jazyk</p> </div>
                            </div>
                            :
                            <div className="flex flex-row w-full gap-x-4 rounded-lg border h-20 items-center pl-4 hover:scale-[101%] duration-100 cursor-pointer hover:border-blue-700" onClick={(()=>(setDifficultie("C")))}>
                                <div className="w-8 h-8 bg-blue-500 rounded-full p-1 text-blue-800 border-blue-800 border flex flex-col items-center justify-center font-medium">Č</div>
                                <div className=""><p className="inline font-medium">Český jazyk</p> </div>
                            </div>
                        }
                        {difficultie === "N" ?
                            <div className="flex flex-row w-full gap-x-4 rounded-lg border-2 h-20 items-center pl-4 border-blue-700 shadow-lg cursor-pointer" onClick={(()=>(setDifficultie("")))}>
                                <div className="w-8 h-8 bg-blue-500 rounded-full p-1 text-blue-800 border-blue-800 border flex flex-col items-center justify-center font-medium">N</div>
                                <div className=""><p className="inline font-medium">Nerozhoduje</p></div>
                            </div>
                            :
                            <div className="flex flex-row w-full gap-x-4 rounded-lg border h-20 items-center pl-4 hover:scale-[101%] duration-100 cursor-pointer hover:border-blue-700" onClick={(()=>(setDifficultie("N")))}>
                                <div className="w-8 h-8 bg-blue-500 rounded-full p-1 text-blue-800 border-blue-800 border flex flex-col items-center justify-center font-medium">N</div>
                                <div className=""><p className="inline font-medium">Nerozhoduje</p></div>
                            </div>
                        }
                    </div>
                    :
                    <div></div>
                }
                {step === 3 ?
                    <div className="flex flex-col justify-self-center ">
                        <div className="hidden">social login</div>
                        <div className="">
                            <form onSubmit={handleSubmit}>
                                {emailProblemMessage === false ? <div></div>:<div className="text-red-600 text-center pb-2">Tento email již někdo používá, zkuste se prosím <a href="/login">přihlásit.</a></div>}
                                <div className="flex flex-col gap-y-4">
                                    <div className="flex flex-row w-full gap-x-2">
                                        <input className="rounded-xl w-full border-gray-400 " type="text" id="name" name="name" placeholder="Jméno" required={true} onChange={e => setJmeno(e.target.value)} />
                                        <input className="rounded-xl w-full border-gray-400 " type="text" id="surname" name="surname" placeholder="Přijímení" required={true} onChange={e => setPrijimeni(e.target.value)}  />
                                    </div>
                                    <input className="rounded-xl w-full border-gray-400 " type="email" id="email" name="email" placeholder="Email" required={true} onChange={e => setEmail(e.target.value)} />
                                    <input className="rounded-xl w-full border-gray-400 " type="password" id="heslo" name="heslo" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}" placeholder="Heslo" required={true} onChange={e => setHeslo(e.target.value)} />
                                    {passwordProblemMessage === "" ?
                                        <input className="rounded-xl w-full border-gray-400 " type="password" id="heslo"
                                               name="heslo" placeholder="Heslo znovu" required={true}
                                               onChange={e => setHesloznovu(e.target.value)}/>
                                        :
                                        <div>
                                            <input className="rounded-xl w-full border-red-400 " type="password" id="heslo"
                                                   name="heslo" placeholder="Heslo znovu" required={true}
                                                   onChange={e => setHesloznovu(e.target.value)}/>
                                            <p className="pt-1 text-red-500">{passwordProblemMessage}</p>
                                        </div>
                                    }
                                    <label className="flex flex-row items-center gap-x-2 text-sm text-gray-500">
                                        <input type="checkbox" name="zasady" id="zasady" required={true} /> Přijímám zásady ochrany osobních údajů
                                    </label>
                                    <label className="flex flex-row items-center gap-x-2 text-sm text-gray-500">
                                        <input type="checkbox" name="zasady" id="zasady" required={true} /> Přijímám obchodní podmínky
                                    </label>
                                    {loadingRegister === false ?
                                        <button
                                            className="rounded-xl w-full bg-blue-600 text-white py-3 mt-2 hover:bg-blue-700 duration-100"
                                            type="submit">Registrovat se</button>
                                        :
                                        <button
                                            className="rounded-xl w-full bg-gray-500 text-white py-3 mt-2 hover:bg-gray-500">
                                            Prosím čekejte
                                        </button>
                                    }</div>
                            </form>
                        </div>
                    </div>
                    :
                    <div></div>
                }
                {step === 3 ? <div></div> :
                    <div className="mt-10 md:mt-28 flex flex-col items-center">
                        <div className="text-gray-500">Máte již účet? <a href="/login" className="underline text-gray-500 hover:text-gray-800">Přihlásit se</a></div>
                        <div className="w-fit py-3 px-10 bg-black text-white rounded-xl cursor-pointer mt-4" onClick={handleNext}>Pokračovat</div>
                    </div>
                }
            </div>
        </div>
    )
}