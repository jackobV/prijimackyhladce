import React from "react";

interface Date{
    id:string;
    day:string;
    month:string;
    year:string;
    available:boolean;
    active:boolean;
}
interface DataBrickProps{
    item:Date;
    onClick: () => void;
}
const DateBrick:React.FC<DataBrickProps> = ({ item, onClick }) => {
    return(
        <div className="flex flex-col items-center justify-between bg-white px-4 h-48">
            <div className="flex flex-col items-center pt-7">
                <p className="font-semibold text-2xl ">{item.day}.{item.month}</p>
                <p className="text-xs text-center pt-2">přijímačky na zkoušku</p>
            </div>
            <div className="w-full pb-3">
                <p className="font-light text-red-600 text-center pb-2">690,- CZK</p>
                <button className="border border-black drop-shadow-sm rounded-lg flex flex-col w-full py-1" onClick={onClick} id="addtocart">Do košíku</button>
            </div>
        </div>
    )

}
export default DateBrick;