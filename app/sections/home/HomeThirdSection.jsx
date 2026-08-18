"use client"
import { CotizaComponent, SplitH2, SplitH3, SplitP } from "@/app/components"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { useLayoutEffect, useRef, useState } from "react"
import ReactCardFlip from "react-card-flip"

export const HomeThirdSection = () => {

    const contentRef = useRef(null)
    const [isFlipped1, setIsFlipped1] = useState(false)
    const [isFlipped2, setIsFlipped2] = useState(false)
    const [isFlipped3, setIsFlipped3] = useState(false)
    const [isFlipped4, setIsFlipped4] = useState(false)

    useLayoutEffect(() => {
        if (!contentRef.current) {
            return
        }

        const mediaQuery = window.matchMedia("(max-width: 768px)")
        const flipSetters = [setIsFlipped1, setIsFlipped2, setIsFlipped3, setIsFlipped4]
        const timeoutIds = new Map()
        let observer = null

        const clearPendingFlips = () => {
            timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId))
            timeoutIds.clear()
        }

        const disconnectObserver = () => {
            if (observer) {
                observer.disconnect()
                observer = null
            }
            clearPendingFlips()
        }

        const setupMobileAutoFlip = () => {
            disconnectObserver()

            if (!mediaQuery.matches) {
                flipSetters.forEach((setIsFlipped) => setIsFlipped(false))
                return
            }

            const cards = Array.from(contentRef.current.querySelectorAll(".flipCard"))

            observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const cardIndex = cards.indexOf(entry.target)

                    if (cardIndex === -1) {
                        return
                    }

                    if (entry.isIntersecting) {
                        if (timeoutIds.has(cardIndex)) {
                            return
                        }

                        const timeoutId = setTimeout(() => {
                            flipSetters[cardIndex](true)
                            timeoutIds.delete(cardIndex)
                        }, 800)

                        timeoutIds.set(cardIndex, timeoutId)
                        return
                    }

                    const timeoutId = timeoutIds.get(cardIndex)

                    if (timeoutId) {
                        clearTimeout(timeoutId)
                        timeoutIds.delete(cardIndex)
                    }

                    flipSetters[cardIndex](false)
                })
            }, {
                threshold: 1,
                triggerOnce: false,
            })

            cards.forEach((card) => observer.observe(card))
        }

        setupMobileAutoFlip()
        mediaQuery.addEventListener("change", setupMobileAutoFlip)

        return () => {
            mediaQuery.removeEventListener("change", setupMobileAutoFlip)
            disconnectObserver()
        }
    }, [])

    useLayoutEffect(() => {
        if (!contentRef.current) {
            return
        }

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 85%",
                    end: "bottom 85%",
                    scrub: 0.8,
                },
            }).fromTo(
                ".flipCard",
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
        }, contentRef)

        return () => ctx.revert()
    }, [])

    return <section id="homeThirdSection">
        <div id="homeThirdSectionTitleContainer"  className="sectionTitleContainer">
            <SplitH2 id="homeThirdSectionTitle">
                ¿Por qué nos eligen?
            </SplitH2>
            <SplitP id="homeThirdSectionDescription">
                Ayudamos a  empresas y oficinas a potenciar el rendimiento de sus colaboradores con comidas sanas y variadas.
            </SplitP>
        </div>
        <div id="homeThirdSectionContent" ref={contentRef}>  
            <div
                className="flipCard"
                onMouseEnter={() => setIsFlipped2(true)}
                onMouseLeave={() => setIsFlipped2(false)}
                onFocus={() => setIsFlipped2(true)}
                onBlur={() => setIsFlipped2(false)}
                tabIndex={0}
            >
                <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
                    <div className="flipCardFront">
                        <Image src={'/home/thirdSectionCard2.avif'} alt="EasyLunch banner" width={500} height={500} />
                        <SplitH3 id="homeThirdSectionCard2Title">
                            Modalidades de contratación
                        </SplitH3>
                    </div>
                    <div className="flipCardBack">
                        <h3 className="color-negro">Modalidades de contratación</h3>
                        <p className="color-negro">Diferentes modalidades de contratación que <br /> se adaptan a la política de cada empresa.</p>
                        <Link className="verMasButton" href={'/servicios#serviciosSecondSection'}>Ver más</Link>
                    </div>
                </ReactCardFlip>
            </div>

            <div
                className="flipCard"
                onMouseEnter={() => setIsFlipped1(true)}
                onMouseLeave={() => setIsFlipped1(false)}
                onFocus={() => setIsFlipped1(true)}
                onBlur={() => setIsFlipped1(false)}
                tabIndex={0}
            >
                <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
                    <div className="flipCardFront">
                        <Image src={'/home/thirdSectionCard1.avif'} alt="EasyLunch banner" width={500} height={500} />
                        <SplitH3 id="homeThirdSectionCard1Title">
                            Plataforma de pedidos
                        </SplitH3>
                    </div>
                    <div className="flipCardBack">
                        <h3 className="color-negro">Plataforma de pedidos</h3>
                        <p className="color-negro">Plataforma web propia dinámica e intuitiva para poder cargar los pedidos desde la computadora, tablet o celular.</p>
                        <Link className="verMasButton" href={'/app'}>Ver más</Link>
                    </div>
                </ReactCardFlip>
            </div>

            <div
                className="flipCard"
                onMouseEnter={() => setIsFlipped3(true)}
                onMouseLeave={() => setIsFlipped3(false)}
                onFocus={() => setIsFlipped3(true)}
                onBlur={() => setIsFlipped3(false)}
                tabIndex={0}
            >
                <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
                    <div className="flipCardFront">
                        <Image src={'/home/thirdSectionCard3.avif'} alt="EasyLunch banner" width={500} height={500} />
                        <SplitH3 id="homeThirdSectionCard3Title">
                            Variedad y calidad de los productos
                        </SplitH3>
                    </div>
                    <div className="flipCardBack">
                        <h3 className="color-negro">Variedad y calidad de los productos</h3>
                        <p className="color-negro">Más de 40 opciones diarias entregadas termoselladas y etiquetadas.</p>
                        <Link className="verMasButton" href={'/servicios#serviciosThirdSection'}>Ver más</Link>
                    </div>
                </ReactCardFlip>
            </div>

            <div
                className="flipCard"
                onMouseEnter={() => setIsFlipped4(true)}
                onMouseLeave={() => setIsFlipped4(false)}
                onFocus={() => setIsFlipped4(true)}
                onBlur={() => setIsFlipped4(false)}
                tabIndex={0}
            >
                <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
                    <div className="flipCardFront">
                        <Image src={'/home/thirdSectionCard4.avif'} alt="EasyLunch banner" width={500} height={500} />
                        <SplitH3 id="homeThirdSectionCard4Title">
                            Atención y seguimiento personalizado
                        </SplitH3>
                    </div>
                    <div className="flipCardBack">
                        <h3 className="color-negro">Atención y seguimiento personalizado</h3>
                        <p className="color-negro">Canal exclusivo de whatsapp para clientes.</p>
                        <CotizaComponent content="Contactanos" />
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    </section>
}
