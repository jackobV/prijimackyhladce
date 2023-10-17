'use client'
import Image from "next/image";
import logo from "../../../logo.png"

export default function KosikMenu() {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-6xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">na-zkousku.cz</span>
                        <Image src={logo} alt={"logo na-zkousku.cz"} className="w-auto h-8" />
                    </a>
                </div>
            </nav>
        </header>
    )
}
