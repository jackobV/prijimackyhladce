import {CheckIcon, XMarkIcon} from "@heroicons/react/24/outline";

export default function OrderStatusIndicator({status}:{status:number}){
    return(
        <div>
            {status === 0 ?
                <div className="flex flex-col items-center">
                    <div className="border-green-500 rounded-full border-2 text-green-500 p-2 h-16 w-16"><CheckIcon /></div>
                    <p className="pt-2">Platba se zpracovává</p>
                </div>
                    : status === 1 ?
                <div className="flex flex-col items-center">
                    <div className="border-green-500 rounded-full border-2 text-green-500 p-2 h-16 w-16"><CheckIcon /></div>
                    <p className="pt-2">Platba proběhla v pořádku</p>
                </div>:
                        <div className="flex flex-col items-center">
                            <div className="border-red-500 rounded-full border-2 text-red-500 p-2 h-16 w-16"><XMarkIcon /></div>
                            <p  className="pt-2">Platba se nezdařila</p>
                        </div>
            }
        </div>
    )
}