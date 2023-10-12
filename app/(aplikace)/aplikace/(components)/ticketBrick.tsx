import {testInstance} from "@/app/(aplikace)/aplikace/(components)/ticketGrid";

export default function TicketBrick({test}:{test:testInstance}){
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
        <div className="overflow-hidden flex flex-col rounded-xl  bg-gray-50 max-w-md">
            <div className="py-6 px-6">
                Test dne <span className="font-medium">{formatDate(test.date)}</span>
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
    )
}