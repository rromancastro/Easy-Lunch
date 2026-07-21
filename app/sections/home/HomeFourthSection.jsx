"use client"

import { CotizaComponent, SplitH2 } from "@/app/components"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const cardCount = 4

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const getScrollStep = (progress) => progress * (cardCount - 1)

const getDistanceFromCenter = (progress, index) => {
    const scrollStep = getScrollStep(progress)

    if (index === cardCount - 1 && scrollStep < 1) {
        return -1 - scrollStep
    }

    if (index === 0 && scrollStep > cardCount - 2) {
        return 1 + (cardCount - 1 - scrollStep)
    }

    return index - scrollStep
}

const useCardMotion = (scrollYProgress, index) => {
    const x = useTransform(scrollYProgress, (latest) => {
        const distance = clamp(getDistanceFromCenter(latest, index), -1.45, 1.45)
        return `${distance * 334}px`
    })

    const width = useTransform(scrollYProgress, (latest) => {
        const distance = Math.min(Math.abs(getDistanceFromCenter(latest, index)), 1)
        return 576 - distance * 204
    })

    const height = useTransform(scrollYProgress, (latest) => {
        const distance = Math.min(Math.abs(getDistanceFromCenter(latest, index)), 1)
        return 598 - distance * 142
    })

    const padding = useTransform(scrollYProgress, (latest) => {
        const distance = Math.min(Math.abs(getDistanceFromCenter(latest, index)), 1)
        return 72 - distance * 24
    })

    const opacity = useTransform(scrollYProgress, (latest) => {
        const distance = Math.abs(getDistanceFromCenter(latest, index))

        if (distance <= 1) {
            return 1
        }

        return 1 - clamp((distance - 1) / 0.45, 0, 1)
    })

    const overlayOpacity = useTransform(scrollYProgress, (latest) => {
        const rawDistance = getDistanceFromCenter(latest, index)
        const distance = clamp((Math.abs(rawDistance) - 0.28) / 0.72, 0, 1)
        const maxOpacity = rawDistance < 0 ? 0.95 : 0.6

        return distance * maxOpacity
    })

    const overlayBlur = useTransform(scrollYProgress, (latest) => {
        const rawDistance = getDistanceFromCenter(latest, index)
        const distance = clamp((Math.abs(rawDistance) - 0.28) / 0.72, 0, 1)
        const maxBlur = rawDistance < 0 ? 12 : 6

        return `${distance * maxBlur}px`
    })

    const zIndex = useTransform(scrollYProgress, (latest) => {
        const distance = Math.abs(getDistanceFromCenter(latest, index))
        return Math.round(10 - Math.min(distance, 2) * 4)
    })

    return {
        "--card-x": x,
        "--overlay-opacity": overlayOpacity,
        "--overlay-blur": overlayBlur,
        "--card-content-blur": overlayBlur,
        width,
        height,
        padding,
        opacity,
        zIndex,
    }
}

export const HomeFourthSection = () => {
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    })

    const card1Style = useCardMotion(scrollYProgress, 0)
    const card2Style = useCardMotion(scrollYProgress, 1)
    const card3Style = useCardMotion(scrollYProgress, 2)
    const card4Style = useCardMotion(scrollYProgress, 3)

    return <section id="homeFourthSection" ref={sectionRef}>
        <div id="homeFourthSectionSticky">
        <div className="sectionTitleContainer">
            <SplitH2 id="homeFourthSectionTitle">
                Así funciona nuestro servicio.
            </SplitH2>
        </div>

        <div id="homeFourthSectionCardsContainer">
            <motion.article className="homeFourthSectionCard homeFourthSectionCard1" style={card1Style}>
                <h3>1.</h3>
                <h4>Hacés tu pedido</h4>
                <p>Cada empleado accede a <br />
                    la plataforma desde computadora o celular y <br />
                    selecciona su comida entre <br />
                    múltiples opciones diarias.</p>
                <Image src="/home/fourthSectionCard1.png" alt="homeFourthSectionCard1" width={400} height={400} />
            </motion.article>

            <motion.article className="homeFourthSectionCard homeFourthSectionCard2" style={card2Style}>
                <h3>2.</h3>
                <h4>Lo preparamos</h4>
                <p>Nuestro equipo produce diariamente cada pedido, <br /> priorizando calidad, frescura y presentación.</p>
                <Image src="/home/fourthSectionCard2.png" alt="homeFourthSectionCard2" width={400} height={400} />
            </motion.article>

            <motion.article className="homeFourthSectionCard homeFourthSectionCard3" style={card3Style}>
                <h3>3.</h3>
                <h4>Te lo enviamos</h4>
                <p>Las viandas se distribuyen en vehículos refrigerados, y <br />
                    llegan termoselladas y <br />
                    etiquedas para una correcta distribución interna.</p>
                <Image src="/home/fourthSectionCard3.png" alt="homeFourthSectionCard3" width={400} height={400} />
            </motion.article>

            <motion.article className="homeFourthSectionCard homeFourthSectionCard4" style={card4Style}>
                <h3>4.</h3>
                <h4>¡A disfrutar!</h4>
                <p>Las viandas pueden ser regeneradas en hornos y microondas.</p>
                <Image src="/home/fourthSectionCard4.png" alt="homeFourthSectionCard4" width={400} height={400} />
            </motion.article>
        </div>

        <CotizaComponent />
        </div>
    </section>
}
