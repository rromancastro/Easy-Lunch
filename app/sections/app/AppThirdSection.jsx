"use client"

import { SplitH2, SplitH3, SplitP } from "@/app/components"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { RiArrowDownSLine } from "react-icons/ri"

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

const useAppThirdSectionCardMotion = (scrollYProgress, index) => {
    const y = useTransform(scrollYProgress, (latest) => getCardY(latest, index))
    const scale = useTransform(scrollYProgress, (latest) => getCardScale(latest, index))

    return {
        y,
        scale,
        zIndex: index + 1,
    }
}

export const AppThirdSection = () => {
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    })

    const card1Style = useAppThirdSectionCardMotion(scrollYProgress, 0)
    const card2Style = useAppThirdSectionCardMotion(scrollYProgress, 1)
    const card3Style = useAppThirdSectionCardMotion(scrollYProgress, 2)
    const card4Style = useAppThirdSectionCardMotion(scrollYProgress, 3)

    return <section id="appThirdSection" ref={sectionRef}>
        <div id="appThirdSectionSticky">
            <div className="sectionTitleContainer">
                <SplitH2 id="homeFourthSectionTitle">
                    Así de fácil
                </SplitH2>
            </div>
            <div id="appThirdSectionCardsContainer">
                <motion.article className="appThirdSectionCard" style={card1Style}>
                    <div>
                        <SplitH3 id="appThirdSectionCard1Title">
                            1.
                        </SplitH3>
                        <SplitH3 id="appThirdSectionCard1Subtitle">
                            Ingresá a la app
                        </SplitH3>
                        <SplitP id='appThirdSectionCard1Description'>
                            Podés ingresar desde tu teléfono o tu computadora, sin descargas desde tu navegador.
                        </SplitP>
                    </div>
                    <RiArrowDownSLine />
                    <div className="appThirdSectionCardImageContainer">
                        <Image src="/app/thirdSectionCard1.avif" alt="appThirdSectionCard1" width={400} height={400} />
                    </div>
                </motion.article>

                <motion.article className="appThirdSectionCard inverted" style={card2Style}>
                    <div>
                        <SplitH3 id="appThirdSectionCard2Title">
                            2.
                        </SplitH3>
                        <SplitH3 id="appThirdSectionCard2Subtitle">
                            Elegí tu menú
                        </SplitH3>
                        <SplitP id='appThirdSectionCard2Description'>
                            Podés ingresar desde tu teléfono o tu computadora, sin descargas desde tu navegador.
                        </SplitP>
                    </div>
                    <RiArrowDownSLine />
                    <div className="appThirdSectionCardImageContainer">
                        <Image src="/app/thirdSectionCard2.avif" alt="appThirdSectionCard2" width={400} height={400} />
                    </div>
                </motion.article>

                <motion.article className="appThirdSectionCard" style={card3Style}>
                    <div>
                        <SplitH3 id="appThirdSectionCard3Title">
                            3.
                        </SplitH3>
                        <SplitH3 id="appThirdSectionCard3Subtitle">
                            Organizá tu mes
                        </SplitH3>
                        <SplitP id='appThirdSectionCard3Description'>
                            Podes organizar los pedidos del mes y sumarlos al pedido.
                        </SplitP>
                    </div>
                    <RiArrowDownSLine />
                    <div className="appThirdSectionCardImageContainer">
                        <Image src="/app/thirdSectionCard3.avif" alt="appThirdSectionCard3" width={400} height={400} />
                    </div>
                </motion.article>

                <motion.article className="appThirdSectionCard inverted" style={card4Style}>
                    <div>
                        <SplitH3 id="appThirdSectionCard4Title">
                            4.
                        </SplitH3>
                        <SplitH3 id="appThirdSectionCard4Subtitle">
                            ¡Ya está!
                        </SplitH3>
                        <SplitP id='appThirdSectionCard4Description'>
                            Confirmá el pedio, elegí como pagar y esperálo en tu trabajo.
                        </SplitP>
                        <Link className='verMasButton' href={'https://app.easylunch.com.ar/'} target="_blank">Ver App</Link>
                    </div>
                    <RiArrowDownSLine />
                    <div className="appThirdSectionCardImageContainer">
                        <Image src="/app/thirdSectionCard4.avif" alt="appThirdSectionCard4" width={400} height={400} />
                    </div>
                </motion.article>
            </div>
        </div>
    </section>
}
