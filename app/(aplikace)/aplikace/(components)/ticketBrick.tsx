import {testInstance} from "@/app/(aplikace)/aplikace/(components)/ticketGrid";
import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useRef, useState} from "react";
import {CheckIcon} from "@heroicons/react/20/solid";

export default function TicketBrick({test}:{test:testInstance}){
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)
    function formatDate(datetime: string): string {
        datetime.replace(" ","")
        try {
            const date = new Date(datetime);
            const day = date.getDate();
            const month = date.getMonth() + 1; // Months are zero-based
            const year = date.getFullYear();

            return `${day}. ${month}. ${year}`;
        } catch (error) {
            console.error("Invalid datetime string", error);
            return "";
        }
    }
    return(
        <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                    <div>

                                        <div className="mt-3 text-center sm:mt-5">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Výsledku testu
                                            </Dialog.Title>
                                            <div className="mt-5">
                                                <div className="flex flex-col gap-y-3">
                                                    <div className="flex flex-row gap-x-5">
                                                        <p>český jazyk</p>
                                                        <p>{test.cjMark} / 50</p>
                                                    </div>

                                                    <div className="flex flex-row gap-x-5">
                                                        <p>matematika</p>
                                                        <p>{test.matMark} / 50</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:gap-3">
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Zavřít
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
                    <div className="overflow-hidden flex flex-col rounded-xl  bg-gray-50 max-w-md">
                        <div className="py-6 px-6">
                            <div className="flex flex-row justify-between">
                                <div>
                                    Test dne <span className="font-medium">{formatDate(test.date)}</span>
                                </div>
                                <div className="">
                                    {test.marked ?
                                        <button className="text-sm text-sky-700 underline underline-offset-2" onClick={()=>setOpen(true)}>Zobrazit výsledky</button>
                                        :
                                        <div className="hidden"></div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between px-6 pb-4">
                            <p className="text-gray-500">Zakoupeno</p>
                            <p>{formatDate(test.created)}</p>
                        </div>
                        <div className="flex flex-row justify-between px-6 pb-3">
                            <p className="text-gray-500">Množství</p>
                            <p className="">{test.qty}</p>
                        </div>
                        <div className="flex flex-row justify-between px-6 pb-3">
                            <p className="text-gray-500">Status</p>
                            <div className="text-green-700 bg-green-50 ring-green-600/20 rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset">Zaplaceno</div>
                        </div>
                        <div className="flex flex-row justify-between px-6 pb-3">
                            <p className="text-gray-500">Místo</p>
                            <div className="text-yellow-700 bg-yellow-50 ring-yellow-600/20 rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset">{test.location}</div>
                        </div>
                    </div>
                </div>

    )
}