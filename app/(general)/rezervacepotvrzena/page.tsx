'use client'

import { useSearchParams } from 'next/navigation'
import Reservationok from "@/app/(general)/rezervacepotvrzena/(components)/reservationok";
import Reservationfail from "@/app/(general)/rezervacepotvrzena/(components)/reservationfail";
export default function Page({searchParams}:{searchParams:any}){
    console.log(searchParams.canceled)
    return(
        <main>
            {
                searchParams.canceled == "true"?
                    <Reservationfail />
                    :
                    <Reservationok />
            }
        </main>
    )
}