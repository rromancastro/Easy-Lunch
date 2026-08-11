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
                imageUrl={'/trabaja-con-nosotros/headerBg.avif'}
                title={'Trabaja con'}
                title2={'Nosotros'}
                content="Contactanos"
            />
            <TrabajaConNosotrosSecondSection />
        </main>
        <FooterComponent />
    </>
}
