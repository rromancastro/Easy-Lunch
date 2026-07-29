"use client"

import { ReviewCardComponent } from "@/app/components"
import { animate, motion, useInView, useMotionValue, useMotionValueEvent } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const reviews = [
    {
        opinion: "Excelente servicio para la oficina. Siempre llegan a horario y las opciones son variadas, frescas y muy bien presentadas.",
        reviewTime: "2 semanas atras",
        reviewStatus: "NUEVA",
        userDesc: "8 opiniones",
        name: "Laura Fernandez",
        imageletra: "L",
    },
    {
        opinion: "Nos resolvieron el almuerzo diario del equipo. La plataforma es simple y cada persona puede elegir lo que quiere comer.",
        reviewTime: "1 mes atras",
        reviewStatus: "NUEVA",
        userDesc: "5 opiniones",
        name: "Martin Silva",
        imageletra: "M",
    },
    {
        opinion: "Muy buena calidad y porciones justas. Se nota el cuidado en el empaquetado y en la variedad de comidas saludables.",
        reviewTime: "3 semanas atras",
        reviewStatus: "NUEVA",
        userDesc: "12 opiniones",
        name: "Camila Rios",
        imageletra: "C",
    },
    {
        opinion: "Contratamos Easy Lunch para una obra y funciono perfecto. Coordinacion clara, entregas ordenadas y buen seguimiento.",
        reviewTime: "2 meses atras",
        reviewStatus: "VERIFICADA",
        userDesc: "4 opiniones",
        name: "Diego Peralta",
        imageletra: "D",
    },
    {
        opinion: "La atencion por WhatsApp es muy rapida. Cuando necesitamos ajustar cantidades o horarios, siempre responden bien.",
        reviewTime: "1 semana atras",
        reviewStatus: "NUEVA",
        userDesc: "6 opiniones",
        name: "Sofia Molina",
        imageletra: "S",
    },
    {
        opinion: "El equipo esta contento porque hay opciones para todos. Buen balance entre comida casera, saludable y practica.",
        reviewTime: "4 semanas atras",
        reviewStatus: "VERIFICADA",
        userDesc: "9 opiniones",
        name: "Nicolas Arce",
        imageletra: "N",
    },
]

const AnimatedCounter = ({ from = 0, to, prefix = "", duration = 2.2 }) => {
    const ref = useRef(null)
    const count = useMotionValue(from)
    const [formatted, setFormatted] = useState(`${prefix}${from.toLocaleString("en-US")}`)
    const isInView = useInView(ref, {
        once: true,
        amount: 0.2,
        margin: "0px 0px -10% 0px",
    })

    useMotionValueEvent(count, "change", (latest) => {
        setFormatted(`${prefix}${Math.round(latest).toLocaleString("en-US")}`)
    })

    useEffect(() => {
        if (!isInView) {
            return
        }

        const controls = animate(count, to, {
            duration,
            ease: "easeOut",
        })

        return () => controls.stop()
    }, [count, duration, isInView, to])

    return <span ref={ref} style={{ display: "inline-block" }}>{formatted}</span>
}

export const HomeSeventhSection = () => {

    const carouselRef = useRef(null)
    const intervalRef = useRef(null)
    const [viewCard, setViewCard] = useState(0)
    const [carouselWidth, setCarouselWidth] = useState(0)

    useEffect(() => {
        const carousel = carouselRef.current

        if (!carousel) {
            return
        }

        const updateCarouselWidth = () => {
            setCarouselWidth(carousel.offsetWidth)
        }

        updateCarouselWidth()

        const resizeObserver = new ResizeObserver(updateCarouselWidth)
        resizeObserver.observe(carousel)

        return () => resizeObserver.disconnect()
    }, [])

    const startAutoplay = () => {
        window.clearInterval(intervalRef.current)

        intervalRef.current = window.setInterval(() => {
            setViewCard((currentCard) => (currentCard + 1) % reviews.length)
        }, 4000)
    }

    useEffect(() => {
        startAutoplay()

        return () => window.clearInterval(intervalRef.current)
    }, [])

    const handleReviewClick = (index) => {
        setViewCard(index)
        startAutoplay()
    }

    return <section id="homeSeventhSection">
        <article id="homeSeventhSectionContent">
            <div>
                <p>
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.06 15L4.36 9.45395L0 5.72368L5.76 5.23026L8 0L10.24 5.23026L16 5.72368L11.64 9.45395L12.94 15L8 12.0592L3.06 15Z" fill="#79DB6C" />
                    </svg>
                    4.8 (+3.200 google reviews)
                </p>
                <p>Easy Lunch hoy.</p>
                <p>Desde hace más de 10 años entregando los almuerzos a grandes empresas, Pymes, start ups, obras, colegios, instituciones gubernamentales y entidades de salud.</p>
            </div>

            <div>
                <p>
                    Empresas que nos eligen
                </p>
                <p>
                    <AnimatedCounter to={50} prefix="+" />
                </p>
            </div>

            <div>
                <p>
                    Platos servidos
                </p>
                <p>
                    <AnimatedCounter to={300000} />
                </p>
            </div>
        </article>

        <article id="homeSeventhSectionCarousel" ref={carouselRef}>
            <motion.div
                id="homeSeventhSectionCarouselTrack"
                animate={{ x: carouselWidth / 2 - 180 - viewCard * 384 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
                {reviews.map((review, index) => (
                    <ReviewCardComponent
                        key={review.name}
                        opacity={viewCard === index ? 1 : .4}
                        onClick={() => handleReviewClick(index)}
                        opinion={review.opinion}
                        reviewTime={review.reviewTime}
                        reviewStatus={review.reviewStatus}
                        userDesc={review.userDesc}
                        name={review.name}
                        imageletra={review.imageletra}
                    />
                ))}
            </motion.div>
            <ReviewCardComponent 
                opacity={viewCard == 1 ? 1 : .4}
                onClick={() => setViewCard(1)}
                opinion={'Excelente los temas y toda la presentacion! Todo está excelentemente mantenido, el personal tiene mucha onda y muy buena disposición!!!! Sin duda 100% recomendable.'}
                reviewTime={'3 semanas atras'}
                reviewStatus={'NUEVA'}
                userDesc={'3 opiniones'}
                name={'Maria Luisa Bo'}
                imageletra={'M'}
            />
            <ReviewCardComponent 
                opacity={viewCard == 2 ? 1 : .4}
                onClick={() => setViewCard(2)}
                opinion={'Excelente los temas y toda la presentacion! Todo está excelentemente mantenido, el personal tiene mucha onda y muy buena disposición!!!! Sin duda 100% recomendable.'}
                reviewTime={'3 semanas atras'}
                reviewStatus={'NUEVA'}
                userDesc={'3 opiniones'}
                name={'Maria Luisa Bo'}
                imageletra={'M'}
            />
        </article>
    </section>
}
