"use client"

import DateBrick from "@/app/(kosik)/kosik/(components)/dateBrick";
import { Disclosure } from '@headlessui/react'
import React, {useEffect, useState} from "react";
import {TestDateProps} from "@/app/(kosik)/kosik/page";
import ChangeLocation from "@/app/(kosik)/kosik/(components)/changeLocation";
import DateBrickTall from "@/app/(kosik)/kosik/(components)/DateBrickTall";

export default function PickADateAndReview({step, setStep, items, setItems,numberOfDates,setNumberOfDates,location,grade} : {step:number,items:TestDateProps,numberOfDates:number,setItems: React.Dispatch<React.SetStateAction<TestDateProps>>,setStep: React.Dispatch<React.SetStateAction<number>>,setNumberOfDates: React.Dispatch<React.SetStateAction<number>>,location:string,grade:string}){
    const [show, setShow] = useState(false)
    const [isEmpty, setIsEmpty] = useState(true)
    const itemsForLocation = items.testDates.filter(obj => obj.location === location && obj.grade == grade);
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
        setItems({location:items.location, testDates:updatedItems,grade:items.grade})

    }
    const handleAddMoreToCart = (itemId:string) => {
        const updatedItems = items.testDates.map(item => {
            if (item.id === itemId) {
                return{...item, inCart:item.inCart+1};
            }
            return item
        });

        setNumberOfDates(numberOfDates+1)
        setItems({location:items.location, testDates:updatedItems,grade:items.grade})

    }
    const handleAddLessToCart = (itemId:string) => {
        const updatedItems = items.testDates.map(item => {
            if (item.id === itemId) {
                return{...item, inCart:item.inCart-1};
            }
            return item
        });
        if(numberOfDates-1 == 0){
            setIsEmpty(true)
        }
        setNumberOfDates(numberOfDates-1)
        setItems({location:items.location, testDates:updatedItems,grade:items.grade})
    }
    return(
        <div className="mx-auto max-w-6xl px-6 lg:px-8 overflow-hidden">
            <h2 className=" font-bold pb-2">Volné termíny pro</h2>
            <div className="w-48 pb-10">
                <ChangeLocation location={location} grade={grade} />
            </div>
            {show?
                <div className="py-2 bg-gray-100 flex flex-col items-center gap-y-2 rounded-md">
                    <div className="flex flex-row w-full overflow-x-auto sm:inline sm:grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4 sm:overflow-hidden px-4 gap-y-8 py-2">
                        {itemsForLocation.map((item)=>(
                            <DateBrickTall item={item} handleAddLessToCart={handleAddLessToCart} handleAddToCart={handleAddToCart} handleAddMoreToCart={handleAddMoreToCart} />
                        ))}

                    </div>
                    <button className="hidden sm:inline border drop-shadow-sm rounded-lg flex flex-col py-1 px-4 bg-blue-500 text-white" onClick={handleShow}>Zobrazit méně</button>
                </div>
                :
                <div className="py-2 bg-gray-100 flex flex-col items-center gap-y-10 rounded-md">
                <div className="flex flex-row w-full overflow-x-auto sm:inline sm:grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4 sm:overflow-hidden px-4 h-60 gap-y-10 py-2">
                    {itemsForLocation.map((item)=>(
                        <DateBrickTall item={item} handleAddLessToCart={handleAddLessToCart} handleAddToCart={handleAddToCart} handleAddMoreToCart={handleAddMoreToCart} />
                    ))}

                </div>
                    <button className="hidden sm:inline border drop-shadow-sm rounded-lg flex flex-col py-1 px-4 bg-blue-500 text-white" onClick={handleShow}>Zobrazit další</button>
                </div>
            }
            {isEmpty ?
                <div>
                    <h2 className="pt-10 font-bold pb-5">Přehled objednávky</h2>
                    <div className="flex flex-col md:flex-row w-full gap-x-10 gap-y-5">
                        <div
                            className="bg-gray-100 w-full md:w-2/3 py-4 px-4 md:px-4 flex flex-col gap-y-4 rounded-md">
                                    <div
                                        className="flex flex-row items-center justify-between bg-white py-3 md:py-6 px-4 rounded-md">
                                        <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-4">
                                            <p className="text-sm">Přidejte si termín do košíku</p>
                                        </div>
                                    </div>
                        </div>
                        <div className="bg-gray-100 w-full md:w-1/3 rounded-md flex flex-col gap-y-3 h-fit px-4 py-3">
                            <p className="font-medium text-sm">Posledních pár detailů</p>
                            <button className="bg-blue-300 py-3 w-full rounded-lg text-white cursor-default" onClick={()=>setStep(step+1)}>
                                Přejít k souhrnu objednávky
                            </button>
                        </div>
                    </div>
                </div> :
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