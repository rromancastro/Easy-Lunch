"use client"

import { ImagenParallaxComponent, SplitH2 } from "@/app/components"
import { useEffect } from "react"

const QuestionChevronIcon = () => (
    <svg className="questionChevronIcon" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M0.707031 0.707153L6.70703 6.70715L12.707 0.707153" stroke="#138E03" strokeWidth="2" />
    </svg>
)

export const FaqSecondSection = () => {
    useEffect(() => {
        const items = document.querySelectorAll("#faqSecondSection article > div:nth-child(2) > p, #faqSecondSection article > div:nth-child(2) > .faqItem")

        const handleItemClick = (event) => {
            const currentItem = event.currentTarget
            const currentAnswer = currentItem.querySelector(".answerText")
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

    return <section id="faqSecondSection">
        <article>
            <div>
                <ImagenParallaxComponent
                    rutaImagen={'/faq/secondSection.avif'}
                    alt="EasyLunch banner"
                    intensidad={1.5}
                />
            </div>
            <div>
                <SplitH2 id="faqSecondSectionTitle">
                    Algunas preguntas frecuentes
                </SplitH2>

                <p>
                    <span className="questionText">¿Cada colaborador puede realizar su propio pedido?{"\u00A0"}<QuestionChevronIcon /></span>
                    <span className="answerText">Sí. Cada usuario cuenta con acceso individual a nuestra plataforma web, desde donde puede elegir entre más de 40 opciones diarias, programar sus almuerzos y gestionar sus pedidos de forma simple, desde cualquier computadora o celular.</span>
                </p>
                <p>
                    <span className="questionText">¿Easy Lunch trabaja únicamente con empresas?{"\u00A0"}<QuestionChevronIcon /></span>
                    <span className="answerText">Sí. Nos especializamos en brindar soluciones gastronómicas para empresas, oficinas, colegios y proyectos corporativos. No comercializamos nuestros productos directamente al consumidor final.</span>
                </p>
                <p>
                    <span className="questionText">¿Qué tipos de menú ofrecen?{"\u00A0"}<QuestionChevronIcon /></span>
                    <span className="answerText">Contamos con una amplia variedad de opciones para adaptarnos a los distintos gustos y necesidades alimenticias. Todos los días ofrecemos platos calientes, ensaladas, wraps, sándwiches, tartas y alternativas especiales.
                        <br /><br />
                        Disponemos de opciones: Vegetarianas, Veganas, Proteicas, Sin TACC, Saludables.
                        <br /><br />
                        Además, podemos diseñar propuestas especiales según las características de cada empresa o institución.</span>
                </p>
                <p>
                    <span className="questionText">¿Dónde se elaboran las comidas?{"\u00A0"}<QuestionChevronIcon /></span>
                    <span className="answerText">Todas nuestras viandas se producen en nuestro centro de producción ubicado en la Ciudad de Buenos Aires. Trabajamos con equipamiento de última generación y estrictos controles bromatológicos para garantizar productos frescos, seguros y de calidad en cada entrega.</span>
                </p>
                <p>
                    <span className="questionText">¿Cómo se realiza la entrega?{"\u00A0"}<QuestionChevronIcon /></span>
                    <span className="answerText">Las entregas se realizan diariamente mediante logística refrigerada habilitada por SENASA, preservando la cadena de frío durante todo el proceso. <br /><br />
                        Las viandas llegan termoselladas, etiquetadas individualmente y en envases aptos para microondas, permitiendo disfrutar un almuerzo práctico y de excelente calidad en pocos minutos.</span>
                </p>
                <p>
                    <span className="questionText">¿Cómo se identifican las viandas?{"\u00A0"}<QuestionChevronIcon /></span>
                    <span className="answerText">Cada bandeja se entrega con una etiqueta individual que incluye el nombre del plato y la identificación correspondiente, facilitando la distribución y organización dentro de la empresa.</span>
                </p>
                <p>
                    <span className="questionText">¿Hasta cuándo se pueden realizar cambios o cancelar pedidos?{"\u00A0"}<QuestionChevronIcon /></span>
                    <span className="answerText">Los pedidos, modificaciones o cancelaciones pueden gestionarse hasta las 18 hs del día hábil anterior al consumo.
                        <br /><br />
                        Nuestra plataforma se encuentra disponible las 24 horas, los 7 días de la semana, permitiendo programar pedidos con anticipación y administrar el servicio de manera sencilla.</span>
                </p>
                <div className="faqItem">
                    <span className="questionText">¿Qué modalidades de servicio ofrece Easy Lunch?{"\u00A0"}<QuestionChevronIcon /></span>
                    <div className="answerText">Nos adaptamos a las necesidades de cada organización. Ofrecemos:
                        <ul>
                            <li>
                                Servicio de viandas corporativas con entrega diaria.
                            </li>
                            <li>
                                Sistema de pedido individual por colaborador.
                            </li>
                            <li>
                                Beneficio 100% a cargo de la empresa.
                            </li>
                            <li>
                                Esquemas mixtos o copago.
                            </li>
                            <li>
                                Consumo directo con pago individual mediante Mercado Pago.
                            </li>
                            <li>
                                Soluciones especiales para colegios, obras y grandes operaciones.
                            </li>
                        </ul>
                    </div>
                </div>
                <p>
                    <span className="questionText">¿Qué es el sistema de Pago por Consumo?{"\u00A0"}<QuestionChevronIcon /></span>
                    <span className="answerText">Es una modalidad que permite que cada colaborador abone directamente sus pedidos, evitando costos fijos e inversiones para la empresa.
                        <br /><br />
                        Nuestra plataforma integrada con Mercado Pago facilita los pagos con tarjetas, transferencias y dinero en cuenta, haciendo que la administración del beneficio sea simple y transparente.</span>
                </p>
                <p>
                    <span className="questionText">¿Cuentan con opciones vegetarianas, veganas y sin TACC?{"\u00A0"}<QuestionChevronIcon /></span>
                    <span className="answerText">Sí. Trabajamos para ofrecer alternativas variadas que contemplen diferentes preferencias y necesidades alimenticias. Además, contamos con opciones sin TACC elaboradas bajo estrictos estándares de calidad y seguridad.</span>
                </p>
                <p>
                    <span className="questionText">¿Cómo funciona la atención al cliente?{"\u00A0"}<QuestionChevronIcon /></span>
                    <span className="answerText">Nuestro equipo acompaña diariamente a clientes y usuarios para resolver consultas, realizar modificaciones y brindar soporte operativo.
                        <br /><br />
                        Además, contamos con atención vía WhatsApp para ofrecer respuestas ágiles y una experiencia cercana.</span>
                </p>
                <p>
                    <span className="questionText">¿Cómo es el proceso de implementación?{"\u00A0"}<QuestionChevronIcon /></span>
                    <span className="answerText">Una vez contratados, nuestro equipo comercial y operativo acompaña todo el proceso de puesta en marcha.
                        <br /><br />
                        Nos ocupamos de configurar la plataforma, definir horarios de entrega, adaptar el menú y brindar seguimiento continuo para asegurar una implementación simple y una excelente experiencia para todos los colaboradores.</span>
                </p>
                <p>
                    <span className="questionText">¿Cómo puedo solicitar una propuesta?{"\u00A0"}<QuestionChevronIcon /></span>
                    <span className="answerText">Es muy simple. Solo tenés que completar el formulario de contacto haciendo click en el botón Cotizar ahora o comunicarte con nosotros. <br /><br />
                        Nuestro equipo comercial analizará las necesidades de tu empresa y preparará una propuesta personalizada para brindarte la mejor solución en almuerzos corporativos.
                        <br /><br />
                        También podés escribirnos a:
                        📧 info@easylunch.com.ar
                        📱 WhatsApp +54 9 11 3904-2215</span>
                </p>
            </div>
        </article>
    </section>
}
