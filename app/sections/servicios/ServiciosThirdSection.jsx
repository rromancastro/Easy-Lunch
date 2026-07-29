import { ImagenParallaxComponent, SplitH2, SplitP } from "@/app/components"

export const ServiciosThirdSection = () => {

    return <section id="serviciosThirdSection">
        <article>
            <div id="serviciosThirdSectionContent">
                <SplitH2 id="serviciosThirdSectionTitle">
                    +40 opciones disponibles todos los días.
                </SplitH2>
                <SplitP id="serviciosThirdSectionDescription">
                    El menú cambia diariamente para que comer bien nunca se vuelva rutina.
                </SplitP>
                <SplitP id="serviciosThirdSectionDescription2">
                    Preparación el mismo día, con ingredientes frescos, sin congelados ni conservantes.
                </SplitP>
            </div>
            <div id="serviciosThirdSectionImageBg">
                <ImagenParallaxComponent intensidad={1.5} rutaImagen={'/servicios/thirdSection.avif'}/>
            </div>
        </article>
    </section>
}
