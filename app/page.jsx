import { FooterComponent, HeaderComponent, NavbarComponent } from "./components";
import { HomeFifthSection, HomeFourthSection, HomeSecondSection, HomeSeventhSection, HomeSixthSection, HomeThirdSection } from "./sections";
import { pageMetadata } from "./seo";

export const metadata = pageMetadata({
    title: "Almuerzos corporativos para empresas",
    description: "Easy Lunch simplifica el almuerzo corporativo con menus diarios, viandas listas para servir, gestion web y entregas refrigeradas para empresas.",
    path: "/",
});

export default function Home() {
    return <>
        <NavbarComponent />
        <main>
            <HeaderComponent 
                imageUrl="/home/headerBg.avif" 
                title="La forma más simple de resolver el almuerzo corporativo."
                shadow={2}
            />
            <HomeSecondSection />
            <HomeThirdSection />
            <HomeFourthSection />   
            <HomeFifthSection />
            <HomeSixthSection />
            <HomeSeventhSection />
        </main>
        <FooterComponent />
    </>;
}
