import edisonaPhoto from "../(media)/edisona.webp"
import Image from "next/image";
export default function LocationSection(){
    return(
        <div className="px-4 pt-16">
            <h2 className="font-bold text-xl">Kde testy probíhají?</h2>
            <p className="text-sm pt-1">Testy probíhají v budově základní školy Edisona.</p>
            <div className="flex flex-col gap-y-5 pt-10 ">
                <div className="w-full border-0 rounded-xl overflow-hidden shadow-lg h-48">
                    <Image src={edisonaPhoto} alt="edisona škola"></Image>
                </div>

            <div className="w-full border-0 rounded-xl overflow-hidden shadow-lg h-48">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d286.15191293246585!2d14.453917866469183!3d50.04607985442279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9392b96b0c2b%3A0x29f60eb76551773f!2sB%C3%ADtovsk%C3%A1%201122%2F5%2C%20140%2000%20Praha%204-Michle!5e0!3m2!1sen!2scz!4v1675337575958!5m2!1sen!2scz"
                    width="100%" height="100%" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </div>
    )
}