import { FooterComponent, HeaderComponent, NavbarComponent } from "../components";
import { ServiciosFifthSection, ServiciosFourthSection, ServiciosSecondSection, ServiciosThirdSection } from "../sections";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
    title: "Servicios de viandas y catering corporativo",
    description: "Servicios de almuerzos para empresas: viandas corporativas, menus variados, entregas refrigeradas, beneficios para colaboradores y soluciones a medida.",
    path: "/servicios",
});

export default function ServiciosPage() {
    return <>
        <NavbarComponent />
        <main>
            <HeaderComponent
                imageUrl={'/servicios/headerBg.avif'}
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
