import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

export const WhatsappComponent = () => {
    return <Link target="_blank" href={'https://wa.me/5491139042215?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20viandas%20corporativas%20de%20Easy%20Lunch%20para%20mi%20empresa.'} id="whatsappComponent">
        <FaWhatsapp />
    </Link>
}