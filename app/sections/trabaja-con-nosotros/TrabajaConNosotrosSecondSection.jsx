"use client"

import { ImagenParallaxComponent, SplitH2, SplitP } from "@/app/components"
import { formPatterns } from "@/app/utils/contactForms"
import { useContactFormSubmit } from "@/app/utils/useContactFormSubmit"

export const TrabajaConNosotrosSecondSection = () => {
    const { isSending, status, message, handleSubmit } = useContactFormSubmit()

    return <section id="trabajaConNosotrosSecondSection">
        <article>
            <div>
                <SplitH2 id="trabajaConNosotrosSecondSectionTitle">
                    Sumate a Easy Lunch
                </SplitH2>
                <SplitP id="trabajaConNosotrosSecondSectionDescription">
                    Siempre estamos en la búsqueda de personas con ganas de crecer y aportar nuevas ideas. Dejanos tus datos y contanos sobre tu experiencia. Cuando surja una oportunidad acorde a tu perfil, nos pondremos en contacto con vos.
                </SplitP>

                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="formType" value="work" />
                    <input type="text" name="fullName" placeholder="Nombre y Apellido" pattern={formPatterns.fullName} title="Usá solo letras, espacios, apóstrofes o guiones." required />
                    <input type="text" name="birthDate" placeholder="Fecha de Nacimiento" pattern={formPatterns.birthDate} title="Usá el formato DD/MM/AAAA." required />
                    <input type="email" name="email" placeholder="E-mail" pattern={formPatterns.email} title="Ingresá un email válido." required />
                    <input type="text" name="phone" placeholder="Teléfono" pattern={formPatterns.phone} title="Usá entre 7 y 25 caracteres: números, espacios, +, -, puntos o paréntesis." required />
                    <input type="text" name="neighborhood" placeholder="Barrio o localidad" pattern={formPatterns.location} title="Usá entre 2 y 100 caracteres válidos." required />
                    <input type="text" name="experienceYears" inputMode="numeric" placeholder="Años de experiencia" pattern={formPatterns.experienceYears} title="Ingresá hasta 2 dígitos." required />
                    <input type="text" name="employeeCount" inputMode="numeric" placeholder="Cantidad de empleados" pattern={formPatterns.positiveInteger} title="Ingresá solo números." required />
                    <input type="text" name="deliveryZone" placeholder="Zona de entrega" pattern={formPatterns.deliveryZone} title="Usá entre 2 y 120 caracteres válidos." required />

                    <label className="trabajaConNosotrosFileInput" htmlFor="trabajaConNosotrosCv">
                        Adjuntar CV
                    </label>
                    <input id="trabajaConNosotrosCv" name="cv" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
                    {message && <p className="formStatusMessage" role={status === "error" ? "alert" : "status"}>{message}</p>}
                    <button className="verMasButton" disabled={isSending}>{isSending ? "Enviando..." : "Enviar"}</button>
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