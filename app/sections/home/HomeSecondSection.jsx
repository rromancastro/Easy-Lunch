import { ImagenParallaxComponent, SplitH2, SplitP } from "@/app/components"
export const HomeSecondSection = () => {
    return <section id="homeSecondSection">
        <article className="radius-24">            
            <ImagenParallaxComponent
                rutaImagen="/home/secondSectionBg.avif"
                alt="EasyLunch banner"
                intensidad={1.5}
            />

            <div id="homeSecondSectionContent">
                <SplitH2 id="homeSecondSectionTitle">
                    Más que comida.  <br />
                    Una mejor experiencia  <br />
                    para tu equipo.
                </SplitH2>
                <SplitP id="homeSecondSectionDescription">
                    En Easy Lunch simplificamos el almuerzo en el trabajo. Elaboramos y entregamos viandas corporativas de calidad, con una plataforma propia que permite a cada colaborador elegir entre más de 40 opciones diarias de forma rápida y sencilla.
                </SplitP>
            </div>
            <div id="homeSecondSectionBlur"></div>
        </article>
    </section>
}
