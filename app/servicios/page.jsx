import { FooterComponent, HeaderComponent, NavbarComponent } from "../components";
import { ServiciosFifthSection, ServiciosFourthSection, ServiciosSecondSection, ServiciosThirdSection } from "../sections";

export default function ServiciosPage() {
    return <>
        <NavbarComponent />
        <main>
            <HeaderComponent
                imageUrl={'/servicios/headerBg.png'}
                title={'Nuestros '}
                titleWidth="200px"
                title2={'Servicios'}
            />
            <ServiciosSecondSection />
            <ServiciosThirdSection />
            <ServiciosFourthSection />
            <ServiciosFifthSection />
        </main>
        <FooterComponent />
    </>
}