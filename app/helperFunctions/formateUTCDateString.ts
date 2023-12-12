
export default function formateUTCDateString(utcDateString: string): { day: string, month: string, year: string } {
    const timesTampSanitized = utcDateString.replace(" ", "T")
    const date = new Date(timesTampSanitized);
    const day = date.getUTCDate().toString();
    const month = (date.getUTCMonth() + 1).toString();
    const year = date.getUTCFullYear().toString();
    return { day, month, year };
}