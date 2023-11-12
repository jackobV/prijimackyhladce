import Image from "next/image";
import pictureStudent from "../../(media)/student-.webp"
import Link from "next/link";

export default function LandingPageHero() {

    return (
        <div className="bg-white">

            <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 ">
                <div
                    className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:-mr-80 lg:-mr-96"
                    aria-hidden="true"
                />
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                        <h1 className="max-w-2xl text-4xl font-bold  text-gray-900 sm:text-6xl sm:leading-tight lg:col-span-2 xl:col-auto">
                            Přijímačky 2024?
                            Vyzkoušej si je!
                        </h1>
                        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                            <p className="text-lg leading-8 text-gray-700">
                                Vyzkoušej si <strong>CERMAT příjímačky nanečisto!</strong> Napíšeš si s námi test z češtiny a matematiky, který s tebou následně <strong>důkladně rozebereme. </strong>
                                Dozvíš se také mnoho rad, jak u přijímaček podat <strong>nejlepší výkon!</strong>
                            </p>
                            <div className="mt-10 flex items-center gap-x-6"
                            >
                                <Link
                                    id="vyberterminhero"
                                    href="/kosik?pobocka=praha"
                                    className="rounded-md bg-blue-600 px-5 py-3  font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    Vyber si termín.
                                </Link>
                            </div>
                        </div>
                        <Image
                            src={pictureStudent}
                            alt=""
                            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                        />
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </div>
    )
}
