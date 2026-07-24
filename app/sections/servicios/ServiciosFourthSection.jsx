"use client"

import { SplitH2, SplitH3, SplitP } from "@/app/components"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useLayoutEffect, useRef } from "react"

export const ServiciosFourthSection = () => {
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

    return <section id="serviciosFourthSection">
        <div className="sectionTitleContainer">
            <SplitH2 id="serviciosFourthSectionTitle">
                Opciones Variadas
            </SplitH2>
        </div>
        <div id="serviciosFourthSectionCardsContainer" ref={cardsContainerRef}>

            <article>
                <Image src="/servicios/fourthSectionCard1.png" alt="serviciosFourthSectionCard1" width={400} height={400} />
                <SplitH3 id="serviciosFourthSectionCard1Title">
                    Platos calientes
                </SplitH3>
                <SplitP id='serviciosFourthSectionCard1Description'>
                    Opciones que cambian cada día, siempre con alternativas veggies, protéicas y veganas.
                </SplitP>
            </article>

            <article>
                <Image src="/servicios/fourthSectionCard2.png" alt="serviciosFourthSectionCard2" width={400} height={400} />
                <SplitH3 id="serviciosFourthSectionCard2Title">
                    Ensaladas
                </SplitH3>
                <SplitP id='serviciosFourthSectionCard2Description'>
                    Gran variedad de ensaladas, innovadoras y equilibradas.
                </SplitP>
            </article>

            <article>
                <Image src="/servicios/fourthSectionCard3.png" alt="serviciosFourthSectionCard3" width={400} height={400} />
                <SplitH3 id="serviciosFourthSectionCard3Title">
                    Tartas
                </SplitH3>
                <SplitP id='serviciosFourthSectionCard3Description'>
                    Elaboradas con masa y rellenos artesanales. Siempre acompañadas con una ensalada del día.
                </SplitP>
            </article>

            <article>
                <Image src="/servicios/fourthSectionCard4.png" alt="serviciosFourthSectionCard4" width={400} height={400} />
                <SplitH3 id="serviciosFourthSectionCard4Title">
                    Sándwiches y wraps
                </SplitH3>
                <SplitP id='serviciosFourthSectionCard4Description'>
                    Ingredientes frescos y combinaciones renovadas. También vienen acompañados de una ensalada del día.
                </SplitP>
            </article>

        </div>
    </section>
}
