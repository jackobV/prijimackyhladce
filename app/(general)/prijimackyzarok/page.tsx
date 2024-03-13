import GetNotified from "@/app/(general)/viceletagymnazia/(components-viceleta)/get-notified";
import LandingHeroZaRok from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/landingHeroZaRok";
import PrihlasitSe from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/PrihlasitSe";
import Incentivesforsigneup from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/incentivesforsigneup";
import {Introduction} from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/Introduction";
import NavBarZaRok from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/NavBar";
import WhatWillYouLearn from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/WhatWillYouLearn";
import Testimonial from "./(components-prijimackyzarok)/Testimonial";
import image from "../../(media)/heroimagelanding.jpg"
import OnlinePrijimacky from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/onlinePrijimacky";
import ZiskejMailem from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/ziskejmailem";
export default function Page(){
    return(
        <div className="">
            <section className="">
                <LandingHeroZaRok />
            </section>
            <section>
                <Introduction />
            </section>
                <NavBarZaRok />
            <section>
                <WhatWillYouLearn />
            </section>
            <section>
                <Testimonial
                    id="testimonial-from-tommy-stroman"
                    author={{
                        name: 'Jakub Záloha',
                        role: 'Zakladatel na-zkoušku',
                        image: image ,
                    }}
                >
                    <p>
                        “Snažíme se najít metodiku přípravy, která bude jednoznačně nejefektivnější, ale zároveň zanechá v žácích pozitivní přístup ke vzdělávání”
                    </p>
                </Testimonial>
            </section>
            <section>
                <OnlinePrijimacky />

            </section>
            <section>
                <Testimonial
                    id="testimonial-from-tommy-stroman"
                    author={{
                        name: 'Jakub Záloha',
                        role: 'Zakladatel na-zkoušku',
                        image: image ,
                    }}
                >
                    <p>
                        “Snažíme se najít metodiku přípravy, která bude jednoznačně nejefektivnější, ale zároveň zanechá v žácích pozitivní přístup ke vzdělávání”
                    </p>
                </Testimonial>
            </section>
            <section>
                <ZiskejMailem />
            </section>
        </div>
    )
}