import { FooterComponent, HeaderComponent, NavbarComponent } from "./components";
import { HomeFifthSection, HomeFourthSection, HomeSecondSection, HomeSeventhSection, HomeSixthSection, HomeThirdSection } from "./sections";


export default function Home() {
    return <>
        <NavbarComponent />
        <main>
            <HeaderComponent />
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
