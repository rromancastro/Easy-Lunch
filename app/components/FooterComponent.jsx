"use client"

import Link from "next/link"
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { formPatterns } from "@/app/utils/contactForms"
import { useContactFormSubmit } from "@/app/utils/useContactFormSubmit"
import { MdOutlineEmail } from "react-icons/md"

const footerBackgroundItems = Array.from({ length: 8 })
const footerBackgroundRows = Array.from({ length: 4 })

export const FooterComponent = () => {
    const { isSending, status, message, handleSubmit } = useContactFormSubmit()

    return <footer id="footerComponent">
        <article>
            <div>
                <h3>Seguínos</h3>
                <p>
                    <Link target="_blank" href='https://www.instagram.com/easylunch.ok'><FaInstagram /></Link>
                    <Link target="_blank" href='https://www.linkedin.com/company/easylunchok/'><FaLinkedin /></Link>
                </p>
                <h3>Contactanos</h3>
                <p>
                    <Link target="_blank" href='mailto:info@easylunch.com.ar'><MdOutlineEmail /> info@easylunch.com.ar</Link>
                    <Link target="_blank" href='https://wa.me/5491139042215?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20viandas%20corporativas%20de%20Easy%20Lunch%20para%20mi%20empresa.'><FaWhatsapp /> +54 9 11 3904-2215</Link>
                </p>

                <h3>Menu</h3>
                <p>
                    <Link href='/app'>App</Link>
                    <Link href='/servicios'>Servicios</Link>
                    <Link href='/faq'>FAQ</Link>
                    <Link href='/trabaja-con-nosotros'>Trabajá con nosotros</Link>
                </p>
                <p>
                    <Link target="_blank" href='/politicas-de-privacidad'>Políticas de privacidad</Link>
                    <Link target="_blank" href='/politicas-de-cookies'>Cookies</Link>
                </p>
            </div>

            <div>
                <h3>Contactanos</h3>
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="formType" value="footer" />
                    <input type="text" name="fullName" placeholder="Nombre y Apellido" pattern={formPatterns.fullName} title="Usá solo letras, espacios, apóstrofes o guiones." required />
                    <input type="text" name="phone" placeholder="Teléfono" pattern={formPatterns.phone} title="Usá entre 7 y 25 caracteres: números, espacios, +, -, puntos o paréntesis." required />
                    <input type="email" name="email" placeholder="E-mail" pattern={formPatterns.email} title="Ingresá un email válido." required />
                    <input type="text" name="company" placeholder="Empresa" pattern={formPatterns.company} title="Usá entre 2 y 100 caracteres válidos." required />
                    {message && <p className="formStatusMessage" role={status === "error" ? "alert" : "status"}>{message}</p>}
                    <button className="verMasButton" disabled={isSending}>{isSending ? "Enviando..." : "Contactanos"}</button>
                </form>
            </div>
        </article>

        <p>
            Diseño por Francisco Castagnola <br />
            Desarrollo Roman Castro
        </p>

        <div id="footerBackground" aria-hidden="true">
            {footerBackgroundRows.map((_, row) => (
                <div className="footerBackgroundRow" key={row}>
                    <div className="footerBackgroundTrack">
                        {[0, 1].map((sequence) => (
                            <div className="footerBackgroundSequence" key={sequence}>
                                {footerBackgroundItems.map((_, item) => (
                                    <img src="/footer.png" alt="" key={item} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </footer>
}