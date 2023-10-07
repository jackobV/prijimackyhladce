"use client"

import DateBrick from "@/app/(kosik)/kosik/(components)/dateBrick";
import { Disclosure } from '@headlessui/react'
import React, {useEffect, useState} from "react";
import {TestDateProps} from "@/app/(kosik)/kosik/page";

export default function PickADateAndReview({step, setStep, items, setItems,numberOfDates,setNumberOfDates} : {step:number,items:TestDateProps,numberOfDates:number,setItems: React.Dispatch<React.SetStateAction<TestDateProps>>,setStep: React.Dispatch<React.SetStateAction<number>>,setNumberOfDates: React.Dispatch<React.SetStateAction<number>>}){
    const [show, setShow] = useState(false)
    const [isEmpty, setIsEmpty] = useState(true)
    const handleShow = () => {
        setShow(!show)
    }
    const handleAddToCart = (itemId:string) => {
        const updatedItems = items.testDates.map(item => {
            if (item.id === itemId) {
                return{...item, inCart:1};
            }
            return item
        });

        setNumberOfDates(numberOfDates+1)
        setIsEmpty(false);
        setItems({location:items.location, testDates:updatedItems})

    }
    const handleAddMoreToCart = (itemId:string) => {
        const updatedItems = items.testDates.map(item => {
            if (item.id === itemId) {
                return{...item, inCart:item.inCart+1};
            }
            return item
        });

        setNumberOfDates(numberOfDates+1)
        setItems({location:items.location, testDates:updatedItems})

    }
    const handleAddLessToCart = (itemId:string) => {
        const updatedItems = items.testDates.map(item => {
            if (item.id === itemId) {
                return{...item, inCart:item.inCart-1};
            }
            return item
        });
        setNumberOfDates(numberOfDates-1)
        setItems({location:items.location, testDates:updatedItems})


    }
    return(
        <div className="mx-auto max-w-6xl px-6 lg:px-8 overflow-hidden pt-16">
            <h2 className=" font-bold pb-5">Volné termíny</h2>
            {show?
                <div className="py-2 bg-gray-100 flex flex-col items-center gap-y-2 rounded-md">
                    <div className="flex flex-row w-full overflow-x-auto sm:inline sm:grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4 sm:overflow-hidden px-4 gap-y-8 py-2">
                        {items.testDates.map((item)=>(
                            <div className="flex flex-col items-center justify-between bg-white px-4 h-56 w-36 shrink-0 rounded-md shadow-md">
                                <div className="flex flex-col items-center pt-7">
                                    <p className="font-semibold text-2xl ">{item.day}.{item.month}</p>
                                    <p className="text-xs text-center pt-2">přijímačky na zkoušku</p>
                                </div>
                                {item.inCart == 0?
                                    <div className="w-full pb-3 flex flex-col items-center">
                                        <p className="font-semibold text-blue-700 text-center pb-2 text-sm">690,- CZK</p>
                                        <button className="border border-black shadow-md rounded-lg text-center items-center flex flex-col w-3/4 py-1 text-sm font-semibold" onClick={()=>handleAddToCart(item.id)}>Do košíku</button>
                                    </div>:
                                    <div className="flex flex-col gap-y-2 w-3/4">
                                        <div className="bg-blue-400 rounded-md py-1 px-1">
                                            <p className="font-semibold tracking-tight text-xs text-center">
                                                {item.inCart}ks <span className="font-normal">za</span><br /> {item.inCart*690},- Kč

                                            </p>
                                        </div>
                                        <div className="flex flex-row justify-between items-center  w-full pb-4">
                                            <button className="flex flex-col items-center justify-center h-6 w-6 rounded-md border border-black font-bold" onClick={()=>{handleAddLessToCart(item.id)}}>–</button>
                                            <p className="font-bold text-xl">{item.inCart}</p>
                                            <button className="flex flex-col items-center justify-center h-6 w-6 rounded-md font-bold bg-blue-500 text-white" onClick={()=>{handleAddMoreToCart(item.id)}}>+</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        ))}

                    </div>
                    <button className="hidden sm:inline border drop-shadow-sm rounded-lg flex flex-col py-1 px-4 bg-blue-500 text-white" onClick={handleShow}>Zobrazit méně</button>
                </div>
                :
                <div className="py-2 bg-gray-100 flex flex-col items-center gap-y-10 rounded-md">
                <div className="flex flex-row w-full overflow-x-auto sm:inline sm:grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4 sm:overflow-hidden px-4 h-60 gap-y-10 py-2">
                    {items.testDates.map((item)=>(
                        <div className="flex flex-col items-center justify-between bg-white px-4 h-56 w-36 shrink-0 rounded-md shadow-md">
                            <div className="flex flex-col items-center pt-7">
                                <p className="font-semibold text-2xl ">{item.day}.{item.month}</p>
                                <p className="text-xs text-center pt-2">přijímačky na zkoušku</p>
                            </div>
                            {item.inCart == 0?
                                <div className="w-full pb-3 flex flex-col items-center">
                                    <p className="font-semibold text-blue-700 text-center pb-2 text-sm">690,- CZK</p>
                                    <button className="border border-black shadow-md rounded-lg flex flex-col w-3/4 py-1 text-sm text-center items-center font-semibold" onClick={()=>handleAddToCart(item.id)}>Do košíku</button>
                                </div>:
                                <div className="flex flex-col gap-y-2 w-3/4">
                                    <div className="bg-blue-400 rounded-md py-1 px-1">
                                        <p className="font-semibold tracking-tight text-xs text-center">
                                            {item.inCart}ks <span className="font-normal">za</span><br /> {item.inCart*690},- Kč
                                        </p>
                                    </div>
                                    <div className="flex flex-row justify-between items-center  w-full pb-4">
                                        <button className="flex flex-col items-center justify-center h-6 w-6 rounded-md border border-black font-bold" onClick={()=>{handleAddLessToCart(item.id)}}>–</button>
                                        <p className="font-bold text-xl">{item.inCart}</p>
                                        <button className="flex flex-col items-center justify-center h-6 w-6 rounded-md font-bold bg-blue-500 text-white" onClick={()=>{handleAddMoreToCart(item.id)}}>+</button>
                                    </div>
                                </div>
                            }
                        </div>
                    ))}

                </div>
                    <button className="hidden sm:inline border drop-shadow-sm rounded-lg flex flex-col py-1 px-4 bg-blue-500 text-white" onClick={handleShow}>Zobrazit další</button>
                </div>
            }
            {isEmpty ?
                <div></div> :
                <div>
                    <h2 className="pt-10 font-bold pb-5">Přehled objednávky</h2>
                    <div className="flex flex-col md:flex-row w-full gap-x-10 gap-y-5">
                        <div
                            className="bg-gray-100 w-full md:w-2/3 py-4 px-4 md:px-4 flex flex-col gap-y-4 rounded-md">
                            {items.testDates.map((item) => (
                                item.inCart > 0 ?
                                    <div
                                        className="flex flex-row items-center justify-between bg-white py-3 md:py-6 px-4 rounded-md">
                                        <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-4">
                                            <p className="md:text-xl text-lg font-semibold w-12 md:w-20">{item.day}.{item.month}</p>
                                            <p className="text-sm md:text-base md:w-48">přijímačky na zkoušku</p>
                                        </div>
                                        <div
                                            className="flex flex-col gap-y-2 md:flex-row w-full md:justify-end md:gap-x-4 items-end md:items-center">
                                            <div className="flex flex-row gap-x-2 items-center ">
                                                <button
                                                    className="flex flex-col items-center justify-center h-6 w-6 rounded-md border border-black font-bold"
                                                    onClick={() => {
                                                        handleAddLessToCart(item.id)
                                                    }}>–
                                                </button>
                                                <p className="font-bold md:text-xl md:w-8 text-center">{item.inCart}</p>
                                                <button
                                                    className="flex flex-col items-center justify-center h-6 w-6 rounded-md font-bold bg-blue-500 text-white"
                                                    onClick={() => {
                                                        handleAddMoreToCart(item.id)
                                                    }}>+
                                                </button>
                                            </div>
                                            <p className="font-medium md:w-20">{item.inCart * 690},- Kč</p>
                                        </div>

                                    </div> :
                                    <div className="hidden"></div>
                            ))}
                        </div>
                        <div className="bg-gray-100 w-full md:w-1/3 rounded-md flex flex-col gap-y-3 h-fit px-4 py-3">
                            <p className="font-medium text-sm">Posledních pár detailů</p>
                            <button className="bg-blue-500 py-3 w-full rounded-lg text-white" onClick={()=>setStep(step+1)}>
                                Přejít k souhrnu objednávky
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}