"use client"

import { SplitH2, SplitH3, SplitP } from "@/app/components"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const cardCount = 4
const cardStackOffset = 24
const cardTravel = 686
const cardShrink = 0.045

const getCardY = (progress, index) => {
    const scrollStep = progress * (cardCount - 1)

    if (scrollStep >= index) {
        return index * cardStackOffset
    }

    return index * cardStackOffset + (index - scrollStep) * cardTravel
}

const getCardScale = (progress, index) => {
    const scrollStep = progress * (cardCount - 1)
    const shownDistance = Math.max(0, scrollStep - index)

    return Math.max(0.86, 1 - shownDistance * cardShrink)
}

const useHomeFourthSectionCardMotion = (scrollYProgress, index) => {
    const y = useTransform(scrollYProgress, (latest) => getCardY(latest, index))
    const scale = useTransform(scrollYProgress, (latest) => getCardScale(latest, index))

    return {
        y,
        scale,
        zIndex: index + 1,
    }
}

export const HomeFourthSection = () => {
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    })

    const card1Style = useHomeFourthSectionCardMotion(scrollYProgress, 0)
    const card2Style = useHomeFourthSectionCardMotion(scrollYProgress, 1)
    const card3Style = useHomeFourthSectionCardMotion(scrollYProgress, 2)
    const card4Style = useHomeFourthSectionCardMotion(scrollYProgress, 3)

    return <section id="homeFourthSection" ref={sectionRef}>
        <div id="homeFourthSectionSticky">
        <div className="sectionTitleContainer">
            <SplitH2 id="homeFourthSectionTitle">
                Así funciona nuestro servicio
            </SplitH2>
        </div>

        <div id="homeFourthSectionCardsContainer">
            <motion.article className="homeFourthSectionCard homeFourthSectionCard1" style={card1Style}>
                <div>
                <SplitH3 id="homeFourthSectionCard1Title">1.</SplitH3>
                <SplitH3 id="homeFourthSectionCard1Subtitle">Hacés tu pedido</SplitH3>
                <SplitP id="homeFourthSectionCard1Description">Cada empleado accede a 
                    la plataforma desde computadora o celular y 
                    selecciona su comida entre 
                    múltiples opciones diarias.</SplitP>
                </div>
                <div className="homeFourthSectionCardImageContainer">
                    <img src="/home/fourthSectionCard1.avif" alt="homeFourthSectionCard1" width={400} height={400} />
                </div>
            </motion.article>

            <motion.article className="homeFourthSectionCard homeFourthSectionCard2 inverted" style={card2Style}>
                <div>
                <SplitH3 id="homeFourthSectionCard2Title">2.</SplitH3>
                <SplitH3 id="homeFourthSectionCard2Subtitle">Lo preparamos</SplitH3>
                <SplitP id="homeFourthSectionCard2Description">Nuestro equipo produce diariamente cada pedido,  priorizando calidad, frescura y presentación.</SplitP>
                </div>
                <div className="homeFourthSectionCardImageContainer">
                    <img src="/home/fourthSectionCard2.avif" alt="homeFourthSectionCard2" width={400} height={400} />
                </div>
            </motion.article>

            <motion.article className="homeFourthSectionCard homeFourthSectionCard3" style={card3Style}>
                <div>
                <SplitH3 id="homeFourthSectionCard3Title">3.</SplitH3>
                <SplitH3 id="homeFourthSectionCard3Subtitle">Te lo enviamos</SplitH3>
                <SplitP id="homeFourthSectionCard3Description">Las viandas se distribuyen en vehículos refrigerados, y 
                    llegan termoselladas y 
                    etiquedas para una correcta distribución interna.</SplitP>
                </div>
                <div className="homeFourthSectionCardImageContainer">
                    <img src="/home/fourthSectionCard3.avif" alt="homeFourthSectionCard3" width={400} height={400} />
                </div>
            </motion.article>

            <motion.article className="homeFourthSectionCard homeFourthSectionCard4 inverted" style={card4Style}>
                <div>
                <SplitH3 id="homeFourthSectionCard4Title">4.</SplitH3>
                <SplitH3 id="homeFourthSectionCard4Subtitle">¡A disfrutar!</SplitH3>
                <SplitP id="homeFourthSectionCard4Description">Las viandas pueden ser regeneradas en hornos y microondas.</SplitP>
                </div>
                <div className="homeFourthSectionCardImageContainer">
                    <img src="/home/fourthSectionCard4.avif" alt="homeFourthSectionCard4" width={400} height={400} />
                </div>
            </motion.article>
        </div>

        </div>
    </section>
}
