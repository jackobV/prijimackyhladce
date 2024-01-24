"use client"
import React from "react";
import {Date, TestDateProps} from "@/app/(kosik)/kosik/page";
import {FaceSmileIcon, FaceFrownIcon} from "@heroicons/react/24/outline";

export default function DateBrickTall({item, handleAddLessToCart, handleAddToCart,handleAddMoreToCart}:{item:Date,handleAddLessToCart:(itemId: string) => void,handleAddToCart: (itemId: string) => void,handleAddMoreToCart:(itemId: string) => void}){
    return(
        <div>
            <div className="flex flex-col items-center justify-between bg-white px-4 h-56 w-36 shrink-0 rounded-md shadow-md">
                <div className="flex flex-col items-center pt-7">
                    <p className="font-semibold text-2xl ">{item.day}.{item.month}</p>
                    <p className="text-sm text-gray-600">{item.year}</p>
                    {item.full?
                        <div className="text-red-700 text-xs pt-2 flex flex-col justify-between items-center gap-y-2 font-medium text-center"><div><FaceFrownIcon className="w-4 h-4 font-bold" /></div><p>Termín je plný</p></div>
                        :
                        item.fullnessLevel == 0?
                                <div className="text-green-600 text-xs pt-2 flex flex-col justify-between items-center gap-y-2 font-medium"><div><FaceSmileIcon className="w-4 h-4 font-bold" /></div><p>Volno</p></div>:
                                <div className="text-orange-500 text-xs pt-2 flex flex-col justify-between items-center gap-y-2 font-medium text-center"><div><FaceFrownIcon className="w-4 h-4 font-bold" /></div><p>Posledních pár volných míst</p></div>

                    }
                </div>
                {item.inCart == 0?
                    <div className="w-full pb-3 flex flex-col items-center">
                        <p className="text-gray-700 text-center pb-2 text-sm">690,- CZK</p>
                        {item.full?
                            <button className="border border-black shadow-md rounded-lg flex flex-col w-3/4 py-1 text-sm text-center items-center font-semibold hover:bg-gray-100 duration-75 cursor-not-allowed">Zvolit</button>
                            :
                            <button className="border border-black shadow-md rounded-lg flex flex-col w-3/4 py-1 text-sm text-center items-center font-semibold hover:bg-gray-100 duration-75" onClick={()=>handleAddToCart(item.id)}>Zvolit</button>
                        }
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
        </div>
    )

}