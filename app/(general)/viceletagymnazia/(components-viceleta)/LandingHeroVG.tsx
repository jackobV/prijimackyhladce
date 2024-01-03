import Image from "next/image";
import logo from "../../../logo.png"
import classPhoto from "../../../(media)/heroimagelanding.jpg"
import Link from "next/link";
import pictureStudent from "@/app/(media)/heroimagelanding.jpg";
export default function LandingHeroVG(){
    return <div>

        <div className="bg-white">

            <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 ">
                <div
                    className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:-mr-80 lg:-mr-96"
                    aria-hidden="true"
                />
                <div className="flex flex-col items-center pb-28">
                    <Image src={logo} alt={"Logo na zkousku"} className="h-16 object-cover w-fit" />
                </div>
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-x-24 items-center justify-center">
                        <div className="flex flex-col max-w-3xl w-full">
                            <h1 className=" text-4xl font-semibold  text-gray-900 sm:text-5xl sm:leading-tight leading-tight text-center pb-8">
                                Jsi v páté třídě a chceš si vyzkoušet přijímačky na gymnázium?
                            </h1>
                            <p className=" leading-8 text-gray-700 text-center pb-8">
                                Připravujeme pro tebe <strong>přijímačky na-zkoušku</strong>, na kterých si vyzkoušíš test z matematiky i češtiny. Ten s tebou důkladně <strong>rozebereme</strong>. Naučíš se také pracovat se záznamovým archem a <strong>pracovat s časem.</strong>
                            </p>


                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </div>
    </div>
}