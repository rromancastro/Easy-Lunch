import { FooterComponent, HeaderComponent, NavbarComponent } from "./components";
import { HomeFifthSection, HomeFourthSection, HomeSecondSection, HomeSeventhSection, HomeSixthSection, HomeThirdSection } from "./sections";


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
