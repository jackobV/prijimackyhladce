"use client"
import {useState} from "react";
import PickADateAndReview from "@/app/(kosik)/kosik/(components)/pickADateAndReview";
import CheckoutForm from "@/app/(kosik)/kosik/(components)/checkoutForm";
import ProgressBar from "@/app/(kosik)/kosik/(components)/progressBar";
import {TestDateProps} from "@/app/(kosik)/kosik/page";
import ObjectionHandle from "@/app/(kosik)/kosik/(components)/ObjectionHandle";
import ObjectionHandleTop from "@/app/(kosik)/kosik/(components)/ObjectionHandleTop";
interface TestDate{
    id:string;
    day:string;
    month:string;
    stripe_price_id:string;
    stripe_test_price_id:string;
    archived:boolean;
    full:boolean;
    price:string;
    location:string;
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
            <section className="py-10">
                <ObjectionHandleTop />
            </section>
            {step === 0?
                <div><PickADateAndReview step={step} setStep={setStep} setItems={setItems} items={items} numberOfDates={numberOfDates} setNumberOfDates={setNumberOfDates} location={testDates.location} /></div>
                :
                <div>
                    <CheckoutForm items={items} numberOfDates={numberOfDates} location={testDates.location} />
                </div>
            }
            <section className="py-10">
                <ObjectionHandle />
            </section>
        </div>
    )
}