import { FooterComponent, HeaderComponent, NavbarComponent } from "../components";
import { AppFourthSection, AppSecondSection, AppThirdSection } from "../sections";

export default function AppPage() {
    return <>
        <NavbarComponent />
        <main>
            <HeaderComponent
                imageUrl={'/app/headerBg.avif'}
                title={'Nuestra App'}
                description={'Fácil de usar, intuitiva y sin necesidad de descargar, accede desde la web y hace tu pedido.'}
                link={'https://app.easylunch.com.ar/'}
            />
            <AppSecondSection />
            <AppThirdSection />
            <AppFourthSection />
        </main>
        <FooterComponent />
    </>
}