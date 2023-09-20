"use client"
import {useState} from "react";
import PickADateAndReview from "@/app/(kosik)/kosik/(components)/pickADateAndReview";
import CheckoutForm from "@/app/(kosik)/kosik/(components)/checkoutForm";
import ProgressBar from "@/app/(kosik)/kosik/(components)/progressBar";
import {TestDateProps} from "@/app/(kosik)/kosik/page";
interface TestDate{
    id:string;
    day:string;
    month:string;
    stripe_price_id:string;
    stripe_test_price_id:string;
    archived:boolean;
    full:boolean;
    price:string;
}

export default function CheckoutContainer({ testDates, }:{testDates:TestDateProps}){
    console.log(testDates)
    const [step,setStep] = useState(0);
    const [datesInCart, setDatesInCart] = useState(Array<string>)
    const [items,setItems] = useState(testDates)
    const [numberOfDates, setNumberOfDates] = useState(0)
    return(
        <div>
            <ProgressBar step={step} />
            {step === 0?
                <div><PickADateAndReview step={step} setStep={setStep} setItems={setItems} items={items} numberOfDates={numberOfDates} setNumberOfDates={setNumberOfDates} /></div>
                :
                <div>
                    <CheckoutForm items={items} numberOfDates={numberOfDates} />
                </div>
            }
        </div>
    )
}