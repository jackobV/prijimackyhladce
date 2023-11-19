import Image from "next/image";
import logo from "../../../logo.png"
import classPhoto from "../../../(media)/heroimagelanding.jpg"
import Link from "next/link";
import pictureStudent from "@/app/(media)/heroimagelanding.jpg";
export default function LandingHeroPP(){
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
                            <div className="flex flex-col max-w-xl w-full">
                                <h1 className="max-w-2xl text-5xl font-semibold  text-gray-900 sm:text-6xl sm:leading-tight leading-tight text-center pb-8">
                                    Zvládní přijímačky bez stresu!
                                </h1>
                                <p className=" leading-8 text-gray-700 text-center pb-8">
                                    Vyzkoušej si <strong>CERMAT příjímačky nanečisto!</strong> Napíšeš si s námi test z češtiny a matematiky, který s tebou následně <strong>důkladně rozebereme. </strong>
                                    Dozvíš se také mnoho rad, jak u přijímaček podat <strong>nejlepší výkon!</strong>
                                </p>
                                    <Link
                                        id="vyberterminhero"
                                        href="/kosik?pobocka=praha"
                                        className="rounded-xl bg-orange-600 w-full text-center text-lg py-3  font-semibold text-white shadow-sm hover:bg-orange-700 duration-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                    >
                                        Přihlaš se na termín!
                                    </Link>

                            </div>
                            <div className="w-full flex flex-col items-center pt-10 lg:pt-0">
                                <Image
                                    src={pictureStudent}
                                    alt=""
                                    className=" aspect-[6/4] w-full max-w-md rounded-2xl object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
                </div>
            </div>
    </div>
}