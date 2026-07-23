import { FooterComponent, HeaderComponent, NavbarComponent } from "../components";
import { AppSecondSection, AppThirdSection } from "../sections";

export default function AppPage() {
    return <>
        <NavbarComponent />
        <main>
            <HeaderComponent
                imageUrl={'/app/headerBg.png'}
                title={'Nuestra App'}
                description={'Fácil de usar, intuitiva y sin necesidad de descargar, accede desde la web y hace tu pedido.'}
                link={'https://app.easylunch.com.ar/'}
            />
            <AppSecondSection />
            <AppThirdSection />
        </main>
        <FooterComponent />
    </>
}