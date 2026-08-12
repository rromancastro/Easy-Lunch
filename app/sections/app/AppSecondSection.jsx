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
                    no que complica
                </SplitH2>
                <SplitP id='appSecondSectionP'>Nuestra plataforma fue diseñada para que tanto empleados como administradores puedan gestionar el servicio de <br /> forma simple.</SplitP>
                <div>
                    <article>
                        <h3>
                            Para empresas /
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
                        <h3>
                            Para colaboradores
                        </h3>
                        <ul>
                            <li>Pedido simple e intuitivo</li>
                            <li>Visualización de menú</li>
                            <li>Selección anticipada</li>
                            <li>Pago online: según modalidad de contratación </li>
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
