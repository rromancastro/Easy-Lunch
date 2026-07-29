import Link from "next/link"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const footerBackgroundItems = Array.from({ length: 8 })
const footerBackgroundRows = Array.from({ length: 4 })

export const FooterComponent = () => {
    return <footer id="footerComponent">
        <article>
            <div>
                <h3>Seguínos</h3>
                <p>
                    <Link href='/'><FaFacebook /></Link>
                    <Link href='/'><FaInstagram /></Link>
                    <Link href='/'><FaXTwitter /></Link>
                </p>

                <h3>Menu</h3>
                <p>
                    <Link href='/'>App</Link>
                    <Link href='/'>Servicios</Link>
                    <Link href='/'>FAQ</Link>
                    <Link href='/'>Trabajá con nosotros</Link>
                </p>
            </div>

            <div>
                <h3>Contactanos</h3>
                <form>
                    <input type="text" placeholder="Nombre y Apellido" />
                    <input type="text" placeholder="Teléfono" />
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Empresa" />
                    <button className="verMasButton">Contactanos</button>
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
