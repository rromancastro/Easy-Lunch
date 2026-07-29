"use client"

import { SplitH2 } from "@/app/components"
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const fifthSectionCards = [
    {
        src: "/home/fifthSectionCard1.avif",
        alt: "Opcion de comida 1",
        className: "homeFifthSectionCard1",
        x: "-32vw",
        delay: 0,
        duration: 8.2,
    },
    {
        src: "/home/fifthSectionCard2.avif",
        alt: "Opcion de comida 2",
        className: "homeFifthSectionCard2",
        x: "18vw",
        delay: 1.2,
        duration: 10,
    },
    {
        src: "/home/fifthSectionCard3.avif",
        alt: "Opcion de comida 3",
        className: "homeFifthSectionCard3",
        x: "-8vw",
        delay: 2.4,
        duration: 7.6,
    },
    {
        src: "/home/fifthSectionCard4.avif",
        alt: "Opcion de comida 4",
        className: "homeFifthSectionCard4",
        x: "34vw",
        delay: 3.6,
        duration: 9.4,
    },
    {
        src: "/home/fifthSectionCard5.avif",
        alt: "Opcion de comida 5",
        className: "homeFifthSectionCard5",
        x: "-22vw",
        delay: 4.8,
        duration: 8.8,
    },
    {
        src: "/home/fifthSectionCard6.avif",
        alt: "Opcion de comida 6",
        className: "homeFifthSectionCard6",
        x: "4vw",
        delay: 6,
        duration: 10.6,
    },
    {
        src: "/home/fifthSectionCard1.avif",
        alt: "Opcion de comida 7",
        className: "homeFifthSectionCard1",
        x: "-3vw",
        delay: 2,
        duration: 7.9,
    },
    {
        src: "/home/fifthSectionCard2.avif",
        alt: "Opcion de comida 8",
        className: "homeFifthSectionCard2",
        x: "2vw",
        delay: 3.5,
        duration: 9.8,
    },
    {
        src: "/home/fifthSectionCard3.avif",
        alt: "Opcion de comida 9",
        className: "homeFifthSectionCard3",
        x: "-7vw",
        delay: 8,
        duration: 8.4,
    },
    {
        src: "/home/fifthSectionCard4.avif",
        alt: "Opcion de comida 10",
        className: "homeFifthSectionCard4",
        x: "54vw",
        delay: 5.8,
        duration: 11,
    },
    {
        src: "/home/fifthSectionCard5.avif",
        alt: "Opcion de comida 11",
        className: "homeFifthSectionCard5",
        x: "-13vw",
        delay: 4.3,
        duration: 7.4,
    },
    {
        src: "/home/fifthSectionCard6.avif",
        alt: "Opcion de comida 12",
        className: "homeFifthSectionCard6",
        x: "6vw",
        delay: 8.9,
        duration: 9.2,
    },
    {
        src: "/home/fifthSectionCard6.avif",
        alt: "Opcion de comida 13",
        className: "homeFifthSectionCard6",
        x: "16vw",
        delay: 9.7,
        duration: 6,
    }
]

const FloatingFoodCard = ({ card, scrollDirection }) => {
    const directionRef = useRef(scrollDirection)
    const progress = useMotionValue((card.delay / card.duration) % 1)
    const y = useTransform(progress, [0, 1], ["68vh", "-58vh"])
    const scale = useTransform(progress, [0, 1], [1, 0.9])
    const opacity = useTransform(progress, [0, 0.08, 0.92, 1], [0, 1, 1, 0])

    useEffect(() => {
        directionRef.current = scrollDirection
    }, [scrollDirection])

    useAnimationFrame((_, delta) => {
        const direction = directionRef.current === "up" ? -1 : 1
        const nextProgress = progress.get() + direction * (delta / (card.duration * 1000))
        progress.set((nextProgress % 1 + 1) % 1)
    })

    return (
        <motion.article
            className={`homeFifthSectionCard ${card.className}`}
            style={{ x: card.x, y, scale, opacity }}
        >
            <Image src={card.src} alt={card.alt} width={128} height={148} />
        </motion.article>
    )
}

export const HomeFifthSection = () => {
    const lastScrollYRef = useRef(0)
    const [scrollDirection, setScrollDirection] = useState("down")

    useEffect(() => {
        lastScrollYRef.current = window.scrollY

        const setDirectionFromDelta = (delta) => {
            if (delta > 0) {
                setScrollDirection("down")
            }

            if (delta < 0) {
                setScrollDirection("up")
            }
        }

        const handleWheel = (event) => {
            setDirectionFromDelta(event.deltaY)
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setDirectionFromDelta(currentScrollY - lastScrollYRef.current)
            lastScrollYRef.current = currentScrollY
        }

        window.addEventListener("wheel", handleWheel, { passive: true })
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("wheel", handleWheel)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return <section id="homeFifthSection">
        <div id="homeFifthSectionContent">
            <div id="homeFifthSectionCardsLayer" aria-hidden="true">
                {fifthSectionCards.map((card) => (
                    <FloatingFoodCard card={card} scrollDirection={scrollDirection} key={card.alt} />
                ))}
            </div>

            <div id="homeFifthSectionTitleContainer">
                <SplitH2 id="homeFifthSectionTitle">
                    Variedad y calidad para todos los gustos.
                </SplitH2>
            </div>

            <div id="homeFifthSectionGradient"></div>
        </div>
    </section>
}
