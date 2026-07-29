"use client"

import { CotizaComponent, SplitH2 } from "@/app/components"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const cardCount = 4
const cardStackOffset = 24
const cardTravel = 686
const cardShrink = 0.045
const cardBlur = 2.4

const getCardY = (progress, index) => {
    const scrollStep = progress * (cardCount - 1)

    if (scrollStep >= index) {
        return index * cardStackOffset
    }

    return index * cardStackOffset + (index - scrollStep) * cardTravel
}

const getShownDistance = (progress, index) => {
    const scrollStep = progress * (cardCount - 1)
    return Math.max(0, scrollStep - index)
}

const getCardScale = (progress, index) => {
    return Math.max(0.86, 1 - getShownDistance(progress, index) * cardShrink)
}

const getCardBlur = (progress, index) => {
    return Math.min(getShownDistance(progress, index) * cardBlur, 7)
}

const getOverlayOpacity = (progress, index) => {
    return Math.min(getShownDistance(progress, index) * 0.16, 0.42)
}

const useCardMotion = (scrollYProgress, index) => {
    const y = useTransform(scrollYProgress, (latest) => getCardY(latest, index))
    const scale = useTransform(scrollYProgress, (latest) => getCardScale(latest, index))
    const contentBlur = useTransform(scrollYProgress, (latest) => `${getCardBlur(latest, index)}px`)
    const overlayOpacity = useTransform(scrollYProgress, (latest) => getOverlayOpacity(latest, index))

    const zIndex = index + 1

    return {
        "--card-content-blur": contentBlur,
        "--overlay-opacity": overlayOpacity,
        y,
        scale,
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
                <Image src="/home/fourthSectionCard1.avif" alt="homeFourthSectionCard1" width={400} height={400} />
            </motion.article>

            <motion.article className="homeFourthSectionCard homeFourthSectionCard2" style={card2Style}>
                <h3>2.</h3>
                <h4>Lo preparamos</h4>
                <p>Nuestro equipo produce diariamente cada pedido, <br /> priorizando calidad, frescura y presentación.</p>
                <Image src="/home/fourthSectionCard2.avif" alt="homeFourthSectionCard2" width={400} height={400} />
            </motion.article>

            <motion.article className="homeFourthSectionCard homeFourthSectionCard3" style={card3Style}>
                <h3>3.</h3>
                <h4>Te lo enviamos</h4>
                <p>Las viandas se distribuyen en vehículos refrigerados, y <br />
                    llegan termoselladas y <br />
                    etiquedas para una correcta distribución interna.</p>
                <Image src="/home/fourthSectionCard3.avif" alt="homeFourthSectionCard3" width={400} height={400} />
            </motion.article>

            <motion.article className="homeFourthSectionCard homeFourthSectionCard4" style={card4Style}>
                <h3>4.</h3>
                <h4>¡A disfrutar!</h4>
                <p>Las viandas pueden ser regeneradas en hornos y microondas.</p>
                <Image src="/home/fourthSectionCard4.avif" alt="homeFourthSectionCard4" width={400} height={400} />
            </motion.article>
        </div>

        <CotizaComponent />
        </div>
    </section>
}
