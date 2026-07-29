"use client"

import { SplitH2, SplitP } from "@/app/components"
import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

export const AppSecondSection = () => {
    const videoRef = useRef(null)
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })

    useEffect(() => {
        const video = videoRef.current

        if (!video) return

        if (inView) {
            video.play().catch(() => {})
        } else {
            video.pause()
        }
    }, [inView])

    return <section ref={ref} id="appSecondSection">
        <div id="appSecondSectionContent">
            <article>
                <SplitH2 id="appSecondSectionTitle">
                    Tecnología que simplifica, <br />
                    no que complica.
                </SplitH2>
                <SplitP id='appSecondSectionP'>Nuestra plataforma fue diseñada para que tanto empleados como administradores puedan gestionar el servicio de <br /> forma simple.</SplitP>
                <div>
                    <article>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1333 17.6L19.5333 8.2L17.6667 6.33333L10.1333 13.8667L6.33333 10.0667L4.46667 11.9333L10.1333 17.6ZM2.66667 24C1.93333 24 1.30578 23.7391 0.784 23.2173C0.262222 22.6956 0.000888889 22.0676 0 21.3333V2.66667C0 1.93333 0.261333 1.30578 0.784 0.784C1.30667 0.262222 1.93422 0.000888889 2.66667 0H21.3333C22.0667 0 22.6947 0.261333 23.2173 0.784C23.74 1.30667 24.0009 1.93422 24 2.66667V21.3333C24 22.0667 23.7391 22.6947 23.2173 23.2173C22.6956 23.74 22.0676 24.0009 21.3333 24H2.66667Z" fill="#138E03" />
                        </svg>
                        <h3>
                            Para empresa/
                            administradores
                        </h3>
                        <ul>
                            <li>Altas y bajas</li>
                            <li>Reportes</li>
                            <li>Administración centralizada</li>
                            <li>Configuración personalizada</li>
                        </ul>
                    </article>

                    <article>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1333 17.6L19.5333 8.2L17.6667 6.33333L10.1333 13.8667L6.33333 10.0667L4.46667 11.9333L10.1333 17.6ZM2.66667 24C1.93333 24 1.30578 23.7391 0.784 23.2173C0.262222 22.6956 0.000888889 22.0676 0 21.3333V2.66667C0 1.93333 0.261333 1.30578 0.784 0.784C1.30667 0.262222 1.93422 0.000888889 2.66667 0H21.3333C22.0667 0 22.6947 0.261333 23.2173 0.784C23.74 1.30667 24.0009 1.93422 24 2.66667V21.3333C24 22.0667 23.7391 22.6947 23.2173 23.2173C22.6956 23.74 22.0676 24.0009 21.3333 24H2.66667Z" fill="#138E03" />
                        </svg>
                        <h3>
                            Para colaboradores
                        </h3>
                        <ul>
                            <li>Pedido simple e intuitivo</li>
                            <li>Visualización de menú</li>
                            <li>Selección anticipada</li>
                            <li>Pago online</li>
                        </ul>
                    </article>
                </div>
            </article>
            <video src="/app/secondSectionVideo.mp4"
                ref={videoRef}
                muted
                playsInline
                loop
                id="appSecondSectionVideo"
            ></video>
        </div>
    </section>
}
