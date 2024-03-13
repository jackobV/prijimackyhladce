import Image from 'next/image'

import abstractBackgroundImage from '../(media-zarok)/ziskejmailem/abstract-background.png'
import discordImage from '../(media-zarok)/ziskejmailem/discord.svg'
import figmaImage from '../(media-zarok)/ziskejmailem/figma.svg'
import videoPlayerImage from '../(media-zarok)/ziskejmailem/video-player.svg'
import SectionHeading from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/SectionHeading";
import {Container} from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/Container";

const resources = [
    {
        title: 'Shrnutí učiva, které budeš muset umět.',
        description:
            'Pefectly structured templates for quickly designing new icons at dozens of common sizes.',
        image: function FigmaImage() {
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                    <Image src={figmaImage} alt="" unoptimized />
                </div>
            )
        },
    },
    {
        title: 'Přístup k předprodeji za zvýhodněnou cenu.',
        description:
            'Weekly videos where we dissect and recreate beautiful icons we find on the web.',
        image: function VideoPlayerImage() {
            return (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        className="absolute inset-0 h-full w-full object-cover"
                        src={abstractBackgroundImage}
                        alt=""
                        sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
                    />
                    <Image
                        className="relative"
                        src={videoPlayerImage}
                        alt=""
                        unoptimized
                    />
                </div>
            )
        },
    },
    {
        title: 'Přístup do komunity, která tě spojí s dalšími deváťáky.',
        description:
            "A private Discord server where you can get help and give feedback on each others' work.",
        image: function DiscordImage() {
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
                    <Image src={discordImage} alt="" unoptimized />
                </div>
            )
        },
    },
]

export default function ZiskejMailem() {
    return (
        <section
            id="newsbenefits"
            aria-labelledby="resources-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="3" id="resources-title">
                    Co získáš po přihlášení k odběru k novinkám
                </SectionHeading>
                <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                    Výhody, díky kterým získáš ještě větší náskok. Tenhle text může být delší.
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                    Design assets, icon teardowns, and a community of fellow icon
                    designers where you can ask questions, get feedback, and accelerate
                    your learning.
                </p>
            </Container>
            <Container size="lg" className="mt-16">
                <ol
                    role="list"
                    className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
                >
                    {resources.map((resource) => (
                        <li
                            key={resource.title}
                            className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
                        >
                            <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                                <resource.image />
                            </div>
                            <div>
                                <h3 className="text-base font-medium tracking-tight text-slate-900">
                                    {resource.title}
                                </h3>
                                <p className="mt-2 text-sm text-slate-600">
                                    {resource.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
    )
}
