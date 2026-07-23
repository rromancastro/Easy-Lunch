"use client"

import { SplitH2, SplitH3, SplitP } from "@/app/components"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"

export const ServiciosSecondSection = () => {
    const cardsContainerRef = useRef(null)

    useLayoutEffect(() => {
        if (!cardsContainerRef.current) {
            return
        }

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
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
        }, cardsContainerRef)

        return () => ctx.revert()
    }, [])

    return <section id="serviciosSecondSection">
        <div className="sectionTitleContainer">
            <SplitH2 id="serviciosSecondSectionTitle">
                Armá tu propio esquema de beneficios.
            </SplitH2>
            <SplitP id="serviciosSecondSectionDescription">
                Gracias a nuestra plataforma 100% configurable, diagramamos el beneficio que mejor se adapte a la dinámica y el presupuesto de tu empresa.
            </SplitP>
        </div>
        <SplitH3 id="serviciosSecondSectionSubtitle">
            Modalidad de pago
        </SplitH3>
        <div id="serviciosSecondSectionCardsContainer" ref={cardsContainerRef}>

            <article>
                <SplitH3 id="serviciosSecondSectionCard1Title">
                    100% Empresa
                </SplitH3>
                <SplitP id='serviciosSecondSectionCard1Description'>
                    La compañía cubre el total del beneficio.
                </SplitP>
            </article>
            
            <article>
                <SplitH3 id="serviciosSecondSectionCard2Title">
                    Modelo híbrido
                </SplitH3>
                <SplitP id='serviciosSecondSectionCard2Description'>
                     La empresa bonifica una parte y el colaborador abona la diferencia.
                </SplitP>
            </article>
            
            <article>
                <SplitH3 id="serviciosSecondSectionCard3Title">
                    100% Colaborador
                </SplitH3>
                <SplitP id='serviciosSecondSectionCard3Description'>
                    Cada empleado paga sus almuerzos, a un precio corporativo preferencial.
                </SplitP>
            </article>

        </div>

        <article>
            <SplitH3 id="serviciosSecondSectionCard4Title">
                Definí días, montos y porcentajes
            </SplitH3>
            <div>
                <p>
                    ¿Puedo elegir qué días se aplica el beneficio?
                    <span>¿Puedo elegir qué monto se aplica el beneficio?</span>    
                </p>
                <p>
                    ¿El descuento es un monto fijo o un porcentaje?
                    <span>¿El descuento es un monto fijo o un porcentaje?</span>
                </p>
                <p>
                    ¿Puedo dar distinta cantidad de días a cada empleado?
                    <span>¿Puedo dar distinta cantidad de días a cada empleado?</span>
                </p>
                <p>
                    ¿Se puede adicionar postres o bebidas?
                    <span>¿Se puede adicionar postres o bebidas?</span>
                </p>
            </div>
        </article>
    </section>
}
