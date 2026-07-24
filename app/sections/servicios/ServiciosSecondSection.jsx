"use client"

import { SplitH2, SplitH3, SplitP } from "@/app/components"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useLayoutEffect, useRef } from "react"

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

    useEffect(() => {
        const items = document.querySelectorAll("#serviciosSecondSection > article > div > p")

        const handleItemClick = (event) => {
            const currentItem = event.currentTarget
            const currentAnswer = currentItem.querySelector("span")
            const isOpen = currentItem.classList.contains("is-open")

            items.forEach((item) => {
                item.classList.remove("is-open")
                item.setAttribute("aria-expanded", "false")
            })

            if (!isOpen) {
                currentItem.style.setProperty("--answer-height", `${currentAnswer.scrollHeight}px`)
                currentItem.classList.add("is-open")
                currentItem.setAttribute("aria-expanded", "true")
            }
        }

        const handleItemKeyDown = (event) => {
            if (event.key !== "Enter" && event.key !== " ") {
                return
            }

            event.preventDefault()
            event.currentTarget.click()
        }

        items.forEach((item) => {
            item.setAttribute("role", "button")
            item.setAttribute("tabIndex", "0")
            item.setAttribute("aria-expanded", "false")
            item.addEventListener("click", handleItemClick)
            item.addEventListener("keydown", handleItemKeyDown)
        })

        return () => {
            items.forEach((item) => {
                item.removeEventListener("click", handleItemClick)
                item.removeEventListener("keydown", handleItemKeyDown)
            })
        }
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
                    <span>Sí, ofrecemos soluciones gastronómicas para todo tipo de empresas, desde multinacionales hasta oficinas. El pedido mínimo es a partir de 25 viandas por día. Recordá que NO vendemos a consumidores finales.</span>    
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
