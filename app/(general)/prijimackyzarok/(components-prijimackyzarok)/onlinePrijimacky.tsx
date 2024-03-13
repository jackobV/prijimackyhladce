import Image from 'next/image'


import duotoneImage from "../(media-zarok)/onlinePrijimackyImgs/duotone.svg"
import setupImage from "../(media-zarok)/onlinePrijimackyImgs/setup.svg"
import gridsImage from "../(media-zarok)/onlinePrijimackyImgs/setup.svg"
import strokesImage from "../(media-zarok)/onlinePrijimackyImgs/strokes.svg"

import {Container} from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/Container";
import SectionHeading from "@/app/(general)/prijimackyzarok/(components-prijimackyzarok)/SectionHeading";

const videos = [
    {
        title: 'Přihlaš se',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        image: setupImage,
        runtime: { minutes: 16, seconds: 54 },
    },
    {
        title: 'Absolvuj test',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: gridsImage,
        runtime: { minutes: 9, seconds: 12 },
    },
    {
        title: 'Nahraj vyfocený záznamový arch',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: strokesImage,
        runtime: { minutes: 23, seconds: 25 },
    },
    {
        title: 'Podívej se na rozbor',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: duotoneImage,
        runtime: { minutes: 28, seconds: 44 },
    },
]

function PlayIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            aria-hidden="true"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            {...props}
        >
            <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
            <circle cx="8" cy="8" r="6.25" fill="none" />
        </svg>
    )
}

export default function OnlinePrijimacky() {
    return (
        <section
            id="online"
            aria-labelledby="screencasts-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="2" id="screencasts-title">
                    Screencasts
                </SectionHeading>
                <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                    Online přijímačky kdykoliv z domova.
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
            </Container>
            <Container size="lg" className="mt-16">
                <ol
                    role="list"
                    className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
                >
                    {videos.map((video) => (
                        <li key={video.title} className="[counter-increment:video]">
                            <div
                                className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
                                style={{
                                    backgroundImage:
                                        'conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)',
                                }}
                            >
                                <div className="flex overflow-hidden rounded shadow-sm">
                                    <Image src={video.image} alt="" unoptimized />
                                </div>
                                <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                                    <PlayIcon className="h-4 w-4 fill-current stroke-current" />
                                    <time
                                        dateTime={`${video.runtime.minutes}m ${video.runtime.seconds}s`}
                                        className="ml-2"
                                    >
                                        {`${video.runtime.minutes}:${video.runtime.seconds
                                            .toString()
                                            .padStart(2, '0')}`}
                                    </time>
                                </div>
                            </div>
                            <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                                {video.title}
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">{video.description}</p>
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
    )
}
