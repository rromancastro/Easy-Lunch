"use client"

import { SplitH2, SplitH3, SplitP } from "@/app/components"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useLayoutEffect, useRef } from "react"

export const AppFourthSection = () => {
    const cardsContainerRef = useRef(null)

    useLayoutEffect(() => {
        if (!cardsContainerRef.current) {
            return
        }

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            const matchMedia = gsap.matchMedia()

            matchMedia.add("(min-width: 1025px)", () => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: cardsContainerRef.current,
                        start: "top 85%",
                        end: "bottom 85%",
                        scrub: 0.8,
                    },
                }).fromTo(
                    "article",
                    {
                        y: (index) => 72 + index * 24,
                        scale: 0.9,
                        autoAlpha: 0,
                    },
                    {
                        y: 0,
                        scale: 1,
                        autoAlpha: 1,
                        ease: "none",
                        stagger: {
                            each: 0.18,
                        },
                    }
                )
            })

            return () => matchMedia.revert()
        }, cardsContainerRef)

        return () => ctx.revert()
    }, [])

    return <section id="appFourthSection">
        <div className="sectionTitleContainer">
            <SplitH2 id="appFourthSectionTitle">
                Todo en una sola app. <br />
                Simple para vos, 
                simple para tu equipo.
            </SplitH2>
        </div>
        <div id="fourthSectionCardsContainer" ref={cardsContainerRef}>

            <article>
                <SplitH3 id="appFourthSectionCard1Title">
                    App
                </SplitH3>
                <SplitP id='appFourthSectionCard1Description'>
                     Diseñada para facilitar las cosas, fácil e intuitiva. Para que puedan realizar los pedidos desde donde quieran y cuándo quieran. 
                </SplitP>
                <Image src="/app/fourthSectionCard1.avif" alt="appFourthSectionCard1" width={400} height={400} />
            </article>

            <article>
                <SplitH3 id="appFourthSectionCard2Title">
                    Calendario
                </SplitH3>
                <SplitP id='appFourthSectionCard2Description'>
                     Tus colaboradores pueden organizar y realizar los pedidos de todo el mes sin esperar a último momento.
                </SplitP>
                <Image src="/app/fourthSectionCard2.avif" alt="appFourthSectionCard2" width={400} height={400} />
            </article>

            <article>
                <SplitH3 id="appFourthSectionCard3Title">
                    Pago online
                </SplitH3>
                <SplitP id='appFourthSectionCard3Description'>
                     Olvidate de la gestión manual! En los casos donde los colaboradores pagan una parte o el total de su almuerzo, pueden hacerlo directo desde la app, sin sumarle trabajo extra a RR.HH.
                </SplitP>
                <Image src="/app/fourthSectionCard3.avif" alt="appFourthSectionCard3" width={400} height={400} />
            </article>

        </div>
    </section>
}
