import { FooterComponent, HeaderComponent, NavbarComponent } from "../components";
import { FaqSecondSection } from "../sections";

export default function FAQPage() {
    return <>
        <NavbarComponent />
        <main>
            <HeaderComponent
                imageUrl={'/faq/headerBg.png'}
                title={'Preguntas'}
                title2={'Frecuentes'}
            />
            <FaqSecondSection />
        </main>
        <FooterComponent />
    </>
}