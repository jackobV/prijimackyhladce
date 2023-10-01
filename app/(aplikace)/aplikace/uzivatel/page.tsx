"use client"
import {useState} from "react";
import Osuform from "@/app/(aplikace)/aplikace/uzivatel/(components)/osuform";
import AppMenuBar from "@/app/(aplikace)/aplikace/(components)/appMenuBar";

export default function Page(){

    return(
        <div className="max-w-7xl mx-auto px-6">
            <section className="pt-10 pb-24">
                <AppMenuBar />
            </section>
            <Osuform />

        </div>
    )
}