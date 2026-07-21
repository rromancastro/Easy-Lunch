"use client"
import { ImagenParallaxComponent, SplitH2, SplitP } from "@/app/components"
import { useInView } from "react-intersection-observer"

export const HomeSixthSection = () => {

    const {inView, ref} = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return <section ref={ref} id="homeSixthSection">
        <article style={{transform: inView ? 'translateX(0%)' : 'translateX(100%)'}}>
            <div id="homeSixthSectionContent">
                <SplitH2 id="homeSixthSectionTitle">
                    Nuestra propuesta
                </SplitH2>
                <SplitP id="homeSixthSectionDescription">
                    En Easy Lunch nos especializamos en la elaboración de comidas caseras, saludables y variadas para empresas. Nuestro objetivo es recuperar los sabores auténticos de la cocina de todos los días, utilizando materias primas de calidad y procesos cuidadosamente diseñados para garantizar la seguridad alimentaria y la excelencia en cada preparación.
                </SplitP>
                <SplitP id="homeSixthSectionDescription2">
                    Trabajamos junto a profesionales de la nutrición para desarrollar menús equilibrados, combinando adecuadamente proteínas, hidratos de carbono y nutrientes esenciales. De esta manera, logramos el balance ideal entre sabor y bienestar, ofreciendo una alimentación rica, práctica y nutritiva para el día a día.
                </SplitP>
            </div>
            <div id="homeSixthSectionImageBg">
                <ImagenParallaxComponent intensidad={2} rutaImagen={'/home/sixthSection.png'}/>
            </div>
        </article>
    </section>
}
