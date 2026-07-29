import { FooterComponent, HeaderComponent, NavbarComponent } from "../components";
import { TrabajaConNosotrosSecondSection } from "../sections";

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
