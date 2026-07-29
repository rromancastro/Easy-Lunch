import { ImagenParallaxComponent, SplitH2, SplitP } from "@/app/components"

export const TrabajaConNosotrosSecondSection = () => {
    return <section id="trabajaConNosotrosSecondSection">
        <article>
            <div>
                <SplitH2 id="trabajaConNosotrosSecondSectionTitle">
                    Sumate a Easy Lunch
                </SplitH2>
                <SplitP id="trabajaConNosotrosSecondSectionDescription">
                    Siempre estamos en la búsqueda de personas con ganas de crecer y aportar nuevas ideas. Dejanos tus datos y contanos sobre tu experiencia. Cuando surja una oportunidad acorde a tu perfil, nos pondremos en contacto con vos.
                </SplitP>

                <form>
                    <input type="text" placeholder="Nombre y Apellido" />
                    <input type="text" placeholder="DNI" />
                    <input type="text" placeholder="Fecha de Nacimiento" />
                    <input type="text" placeholder="Lugar de Nacimiento" />
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Teléfono" />
                    <input type="text" placeholder="Años de experiencia" />
                    <label className="trabajaConNosotrosFileInput" htmlFor="trabajaConNosotrosCv">
                        Adjuntar CV
                    </label>
                    <input id="trabajaConNosotrosCv" type="file" />
                    <button className="verMasButton">Enviar</button>
                </form>
            </div>

            <div>
                <ImagenParallaxComponent
                    rutaImagen={'/trabaja-con-nosotros/secondSection.avif'}
                    alt="EasyLunch banner"
                    intensidad={1.5}
                />
            </div>
        </article>
    </section>
}
