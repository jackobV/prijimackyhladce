"use client"
import creditCardIcon from "../../../(media)/iconmonstr-credit-card-thin.svg"
import userSvg from "../../../(media)/user-128.svg"
import Image from "next/image";
import {useEffect, useState, useRef} from "react";
import PocketBase from "pocketbase";
import CheckoutFeatures from "@/app/(kosik)/kosik/(components)/checkoutFeatures";
import {TestDateProps} from "@/app/(kosik)/kosik/page";
interface Date{
    id:string;
    day:string;
    month:string;
    available:boolean;
    active:boolean;
    inCart:number;
}
export default function CheckoutForm({items,numberOfDates, location}:{items:TestDateProps,numberOfDates:number,location:string}){
    const pb = new PocketBase('https://pocketbase-production-2a51.up.railway.app');
    const [email,setEmail] = useState("")
    const [emailFail, setEmailFail] = useState("")
    const [name,setName] = useState("")
    const [nameFail,setNameFail] = useState("")
    const [surname, setSurname] = useState("")
    const [surnameFail,setSurnameFail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordFail, setPasswordFail] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")
    const [passwordAgainFail, setPasswordAgainFail] = useState("")
    const [paymentMethod, setPaymentMethod] = useState(false)
    const [paymentMethodFail, setPaymentMethodFail] = useState(false)
    const [newCustomer, setNewCustomer] = useState(true)
    const [userEmail, setUserEmail] = useState("")
    const userEmailRef = useRef<HTMLInputElement | null>(null);
    const [userPassword, setUserPassword] = useState("")
    const userPasswordRef = useRef(null)
    const [userEmailFail, setUserEmailFail] = useState("")
    const [userPasswordFail, setUserPasswordFail] = useState("")
    const [loginFail, setLoginFail] = useState(false)

    const handlePay = async () => {
        const inCartIds: Array<string> = items.testDates.flatMap(item =>
        Array(item.inCart).fill(item.id))
        try {
            const response = await fetch("/api/checkout_session", {
                method: "POST",
                body: JSON.stringify({
                    email: pb.authStore.model?.email,
                    userId: pb.authStore.model?.id,
                    dateIds: inCartIds,
                    numberOfDates: numberOfDates,
                    location: location,
                    priceId: items.testDates[0].stripe_price_id,
                })
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                const url = data.url;
                window.location = url
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || "An error occurred");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    function validatePassword(){
        if(passwordAgain === password){
            return(true)
        }else{
            return(false)
        }
    }
    function validateForm(){
        if(paymentMethod){
            if(email !== ""){
                setEmailFail("")
                if(name !== ""){
                    setNameFail("")
                    if(surname !== ""){
                        setSurnameFail("")
                        if(password !== ""){
                            setPasswordFail("")
                            if(validatePassword()){
                                return(true)
                            }else{
                                setPasswordAgainFail("Hesla se neshodují")
                                return(false)
                            }
                        }else{
                            setPasswordFail("Heslo je povinné pole")
                            return(false)

                        }
                    }else{
                        setSurnameFail("Přijímení je povinné pole")
                        return(false)

                    }
                }else{
                    setNameFail("Jméno je povinné pole")
                    return(false)

                }
            }else{
                setEmailFail("Email je povinné pole")
                return(false)
            }
        }else{
            setPaymentMethodFail(true)
        }

    }
    function validateLogin(){
        if(paymentMethod){
            if(userEmail !== ""){
                if(userPassword !== ""){
                    return true
                }else{
                    setUserPasswordFail("Prosím vyplňte své heslo")
                    return false
                }
            }else{
                setUserEmailFail("Prosím vyplňte svůj email")
                return false
            }
        }else{
            setPaymentMethodFail(true)
        }

    }
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if(pb.authStore.isValid){
            try {
                await handlePay()
            } catch (e) {
                console.log(e)
            }
        }else{
            if(newCustomer === true){
                if(validateForm() === true){
                    try {
                        const data = {
                            "email": email,
                            "emailVisibility": true,
                            "password": password,
                            "passwordConfirm": passwordAgain,
                            "name": name,
                            "surname":surname
                        };
                        await pb.collection('users').create(data);
                        await pb.collection("users").authWithPassword(email,password);
                        await handlePay();
                    } catch (error) {
                        console.log(error)
                        setEmailFail("K registraci použijte jinou emailovou adresu.")
                    }}else{
                    setPasswordAgain("")
                }
            }else{
                if (validateLogin() === true){
                    try{
                        await pb.collection('users').authWithPassword(
                            userEmail,
                            userPassword,
                        );
                        await handlePay()
                    }catch(error){
                        setUserEmailFail("")
                        setUserPasswordFail("")
                        setLoginFail(true)
                        console.log(error)
                    }
                }else{
                    setUserPassword("")
                }
            }
        }


    }

    useEffect(()=>{
        setUserEmailFail("")
        setPasswordFail("")
        setUserPasswordFail("")
        setSurnameFail("")
        setNameFail("")
        setEmailFail("")
        setPasswordAgainFail("")
    },[newCustomer])
    useEffect(()=>{
        if(userEmailRef.current && userEmailRef.current.value){
            setUserEmail(userEmailRef.current.value)
        }
    },[])
    useEffect(()=>{
        if(paymentMethod){
            setPaymentMethodFail(false)
        }
    },[paymentMethod])
    return(
        <div className="mx-auto max-w-6xl px-6 lg:px-8 overflow-hidden pt-16">
                <form className="flex flex-col md:flex-row gap-y-10 gap-x-20" onSubmit={handleSubmit}>
                    <div className="flex flex-col w-full gap-y-5">

                        {pb.authStore.isValid?
                        <div className="flex flex-col gap-y-2">
                            <p className="text-gray-500">Vítejte zpět!</p>
                            <div className="rounded-lg w-full py-3 px-3 border border-blue-500 bg-blue-50 rounded-lg text-gray-700 text-sm">
                                <p>{pb.authStore.model?.email}</p>
                            </div>
                        </div>
                        :
                            <div>
                                <div className="flex flex-col w-full gap-y-2 pb-5">
                                    <p className="text-gray-500">Účet</p>
                                    {newCustomer?
                                        <div className="flex flex-row gap-x-5">

                                            <button className="flex flex-col items-center py-5 px-2 w-full border border-blue-500 bg-blue-50 rounded-lg text-gray-700 font-medium text-sm " type="button"><div className="flex flex-row gap-x-4 items-center" ><p>Nový zákazník</p></div></button>
                                            <button className="flex flex-col items-center py-5 px-2 w-full border border-gray-400 rounded-lg text-gray-700 font-medium text-sm " type="button" onClick={()=>setNewCustomer(false)}><div className="flex flex-row gap-x-4 items-center"><p>Již mám účet</p></div></button>
                                        </div>
                                        :
                                        <div className="flex flex-row gap-x-5">
                                            <button className="flex flex-col items-center py-5 px-2 w-full border border-gray-400 rounded-lg text-gray-700 font-medium text-sm " type="button" onClick={()=>setNewCustomer(true)}><div className="flex flex-row gap-x-4 items-center"><p>Nový zákazník</p></div></button>
                                            <button className="flex flex-col items-center py-5 px-2 w-full border border-blue-500 bg-blue-50 rounded-lg text-gray-700 font-medium text-sm " type="button"><div className="flex flex-row gap-x-4 items-center"><p>Již mám účet</p></div></button>
                                        </div>
                                    }
                                </div>
                                {newCustomer?
                                    <div className="flex flex-col gap-y-5">
                                        <div className="flex flex-col w-full gap-y-2">
                                            <p className="text-gray-500">Emailová adresa</p>
                                            <input type="email" className="rounded-lg w-full py-3 px-2 focus:ring-blue-600 placeholder-gray-400 placeholder border-gray-400" placeholder="priklad@email.cz" onChange={e => setEmail(e.target.value)} />
                                            {emailFail === "" ? <p className="hidden"></p>:<p className="text-red-500">{emailFail}</p>}
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-y-5 gap-x-10">
                                            <div className="flex flex-col w-full gap-y-2">
                                                <p className="text-gray-500">Jméno</p>
                                                <input type="text" className="rounded-lg w-full py-3 px-2 focus:ring-blue-600 placeholder-gray-400 placeholder border-gray-400" placeholder="Jméno" onChange={e => setName(e.target.value)} />
                                                {nameFail === "" ? <p className="hidden"></p>:<p className="text-red-500">{nameFail}</p>}

                                            </div>
                                            <div className="flex flex-col w-full gap-y-2">
                                                <p className="text-gray-500 ">Přijímení</p>
                                                <input type="text" className="rounded-lg w-full py-3 px-2 focus:ring-blue-600 placeholder-gray-400 placeholder border-gray-400" placeholder="Přijímení" onChange={e => setSurname(e.target.value)} />
                                                {surnameFail === "" ? <p className="hidden"></p>:<p className="text-red-500">{surnameFail}</p>}

                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full gap-y-2">
                                            <p className="text-gray-500">Heslo</p>
                                            <input type="password" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}" className="rounded-lg w-full py-3 px-2 focus:ring-blue-600 placeholder-gray-400 placeholder border-gray-400" placeholder="Heslo" onChange={e => setPassword(e.target.value)} />
                                            {passwordFail === "" ? <p className="hidden"></p>:<p className="text-red-500">{passwordFail}</p>}

                                        </div>
                                        <div className="flex flex-col w-full gap-y-2">
                                            <p className="text-gray-500">Heslo znovu</p>
                                            <input type="password" className="rounded-lg w-full py-3 px-2 focus:ring-blue-600 placeholder-gray-400 placeholder border-gray-400" placeholder="Heslo znovu" onChange={e => setPasswordAgain(e.target.value)} />
                                            {passwordAgainFail === "" ? <p className="hidden"></p>:<p className="text-red-500">{passwordAgainFail}</p>}

                                        </div>
                                        <div className="flex flex-row w-full gap-x-2 items-center">
                                            <input type={"checkbox"} className="rounded-sm" required={true} />
                                            <label className="text-sm">Souhlasím se zpracováním osobních údajů (GDPR)</label>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex flex-col gap-y-5">
                                        <div className="flex flex-col w-full gap-y-2">
                                            <p className="text-gray-500">Emailová adresa</p>
                                            <input type="email" className="rounded-lg w-full py-3 px-2 focus:ring-blue-600 placeholder-gray-400 placeholder border-gray-400" placeholder="Váš email" onChange={e => setUserEmail(e.target.value)} ref={userEmailRef} value={userEmail} />
                                            {userEmailFail === "" ? <p className="hidden"></p>:<p className="text-red-500">{userEmailFail}</p>}
                                        </div>
                                        <div className="flex flex-col w-full gap-y-2">
                                            <p className="text-gray-500">Heslo</p>
                                            <input type="password" className="rounded-lg w-full py-3 px-2 focus:ring-blue-600 placeholder-gray-400 placeholder border-gray-400" placeholder="Vaše heslo" onChange={e => setUserPassword(e.target.value)} ref={userPasswordRef} value={userPassword} />
                                            {userPasswordFail === "" ? <p className="hidden"></p>:<p className="text-red-500">{userPasswordFail}</p>}
                                        </div>
                                        {loginFail ?
                                            <div className="flex flex-col  text-sm justify-center gap-y-2 py-2 w-full  rounded-2xl ">
                                                <p className="text-red-600">Přihlášení se nezdařilo. Zkontrolujte své údaje a zkuste to znovu.</p>
                                                <a className="underline">Zapomněli jste heslo?</a>
                                            </div>:
                                            <div></div>}
                                    </div>
                                }
                            </div>
                        }
                    <div className="flex flex-col w-full gap-y-2">
                        <p className="text-gray-500">Způsob platby</p>
                        {paymentMethod?
                            <button className="flex flex-col items-center py-5 px-2 w-full border border-blue-500 bg-blue-50 rounded-lg text-gray-700 font-medium text-sm " onClick={()=>setPaymentMethod(true)} type="button"><div className="flex flex-row gap-x-4 items-center"><Image src={creditCardIcon} alt={"kreditní karta"} /><p>Kreditní nebo debetní karta</p></div></button>
                            :
                            <button className="flex flex-col items-center py-5 px-2 w-full border border-gray-400 rounded-lg text-gray-700 font-medium text-sm " onClick={()=>setPaymentMethod(true)} type="button"><div className="flex flex-row gap-x-4 items-center"><Image src={creditCardIcon} alt={"kreditní karta"} /><p>Kreditní nebo debetní karta</p></div></button>
                        }
                        {paymentMethodFail ?
                            <p className="text-red-600">Nejdříve vyberte způsob platby</p>
                            :
                            <p className=""></p>
                        }
                    </div>


                    </div>

                    <div className="flex flex-col w-full md:w-3/4 place-content-between gap-y-10 md:gap-y-0 py-10 border rounded-xl px-6  ">
                        <div className="flex flex-col ">
                            <div className="flex flex-col gap-y-5">
                                <div className="flex flex-col gap-y-3 w-full ">
                                    <div className="text-gray-600">Vybrané termíny</div>
                                    <ul className="w-full flex flex-col gap-y-2">
                                        {items.testDates.map((item:Date)=>(
                                            item.inCart > 0 ?
                                            <li className="flex flex-row w-full justify-between"><p className="text-gray-400">1x</p><p className="text-gray-600">{item.day}.{item.month}</p></li>
                                            :
                                                <li className="hidden"></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="h-[2px] w-full bg-gray-200 rounded-full"></div>
                                <div className="flex flex-col gap-y-3 w-full">

                                    <div className="flex flex-row justify-between">
                                        <p className="text-gray-400">bez DPH</p>
                                        <p className="text-gray-600">CZK {numberOfDates*545}</p>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <p className="text-gray-400">DPH</p>
                                        <p className="text-gray-600">CZK {numberOfDates*145}</p>
                                    </div>
                                </div>
                                <div className="h-[2px] w-full bg-gray-200 rounded-full"></div>
                                <div className="flex flex-col gap-y-3 w-full">
                                    <div className="flex flex-row justify-between items-center">
                                        <p className="text-gray-400">Celkem</p>
                                        <p className="text-gray-600 text-lg">CZK {numberOfDates*690}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5 flex flex-col w-full">
                            <button className="bg-blue-600 py-3 rounded-xl text-white " type="submit">Přejít na platbu</button>

                        </div>
                    </div>
                </form>
        </div>
    )
}