import Link from "next/link"
import { CotizaComponent } from "."

export const NavbarComponent = () => {
    return <div id="navbarComponent">
        <img src="/logoNav.png" alt="logo nav" />
        <div>
            <Link href="/">App</Link>
            <Link href="/">Servicios</Link>
            <Link href="/">FAQ</Link>
            <Link href="/">Trabaja con nosotros</Link>
            <CotizaComponent />
        </div>
    </div>
}
