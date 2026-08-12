import { FooterComponent, HeaderComponent, NavbarComponent } from "../components";
import { TrabajaConNosotrosSecondSection } from "../sections";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
    title: "Trabaja con nosotros",
    description: "Postulate para trabajar con Easy Lunch. Envia tus datos y CV para sumarte a nuestro equipo de produccion, logistica o atencion.",
    path: "/trabaja-con-nosotros",
});

export default function TrabajaConNosotrosPage() {
    return <>
        <NavbarComponent />
        <main>
            <HeaderComponent
                imageUrl={'/trabaja-con-nosotros/headerBg'}
                title={'Trabaja con'}
                title2={'Nosotros'}
                link={'https://wa.me/5491139042215?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20las%20oportunidades%20laborales%20en%20Easy%20Lunch.'}
                content="Contactanos"
                
            />
            <TrabajaConNosotrosSecondSection />
        </main>
        <FooterComponent />
    </>
}
