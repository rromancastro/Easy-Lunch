import { FooterComponent, HeaderComponent, NavbarComponent } from "../components";
import { AppFourthSection, AppSecondSection, AppThirdSection } from "../sections";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
    title: "App de pedidos corporativos",
    description: "Conoce la app web de Easy Lunch: pedidos individuales, gestion simple y acceso sin descargas para colaboradores y empresas.",
    path: "/app",
});

export default function AppPage() {
    return <>
        <NavbarComponent />
        <main>
            <HeaderComponent
                imageUrl={'/app/headerBg'}
                title={'Nuestra App'}
                description={'Fácil de usar, intuitiva y sin necesidad de descargar, accede desde la web y hacé tu pedido.'}
                link={'app'}
            />
            <AppSecondSection />
            <AppThirdSection />
            <AppFourthSection />
        </main>
        <FooterComponent />
    </>
}
