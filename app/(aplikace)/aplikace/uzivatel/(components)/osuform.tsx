import {useEffect, useRef, useState} from "react";
import PocketBase from "pocketbase";

export default function Osuform(){
    const [email, setEmail] = useState<string|undefined>(undefined)
    const [name, setName] = useState<string|undefined>(undefined)
    const [surname, setSurname] = useState<string|undefined>(undefined)
    const emailRef = useRef<HTMLInputElement | null>(null);
    const nameRef = useRef<HTMLInputElement | null>(null);
    const surnameRef = useRef<HTMLInputElement | null>(null);
    const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');
    useEffect(()=>{
        if(pb.authStore.model){
            // @ts-ignore
            setName(pb.authStore.model.name)
            // @ts-ignore
            setSurname(pb.authStore.model.surname)
            // @ts-ignore
            setEmail(pb.authStore.model.email)
        }
    },[])
    const handleSubmitChanges = async (e: { preventDefault: () => void; }) =>{
        e.preventDefault()
        try {
            if(pb.authStore.model){
                await pb.collection("users").update(pb.authStore.model.id,{
                    "name":name,
                    "surname":surname,
                    "email":email,
                })
            }

        } catch (e){

        }
    }
    return(
        <div className="max-w-6xl mx-auto dark:text-gray-200">
            <div className="flex flex-col md:flex-row gap-x-10 w-full gap-y-5">
                <div className="md:w-1/4">
                    <h2 className="font-semibold text-lg">Obecné nastavení</h2>
                </div>
                <form className="md:w-full" onSubmit={handleSubmitChanges}>
                    <div className="flex flex-col gap-y-2 md:gap-y-4">
                        <div className="flex flex-col md:flex-row gap-x-10 gap-y-2">
                            <div className="flex flex-col gap-y-1">
                                <p>Jméno</p>
                                <input type="text" className="md:w-72 rounded-md border border-gray-300 text-gray-800" value={name} ref={nameRef} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="flex flex-col">
                                <p>Přijímení</p>
                                <input type="text" className="md:w-72 rounded-md border border-gray-300 text-gray-800" value={surname} ref={surnameRef} onChange={e => setSurname(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row w-full gap-y-1">
                            <div className="flex flex-col w-full">
                                <p>Email</p>
                                <input type="text" className="md:w-72 rounded-md border border-gray-300 text-gray-800" value={email} onChange={e => setEmail(e.target.value)} ref={emailRef} />
                            </div>
                        </div>
                        <button className="md:w-72 rounded-md text-center py-2 bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700" type="submit">Uložit změny</button>
                    </div>
                </form>
            </div>
        </div>
    )
}