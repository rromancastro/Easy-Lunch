import { SplitH2, SplitH3, SplitP } from "@/app/components"
import Image from "next/image"
import { RiArrowDownSLine } from "react-icons/ri"

export const AppThirdSection = () => {
    return <section id="appThirdSection">
            <div className="sectionTitleContainer">
                <SplitH2 id="homeFourthSectionTitle">
                    Así de fácil
                </SplitH2>
            </div>
            <div id="appThirdSectionCardsContainer">
                <article className="appThirdSectionCard inverted">
                    <div>
                        <SplitH3 id="appThirdSectionCard1Title">
                            1.
                        </SplitH3>
                        <SplitH3 id="appThirdSectionCard1Subtitle">
                            Ingresá a la app
                        </SplitH3>
                        <p>
                            Podés ingresar desde tu teléfono o tu computadora, sin descargas desde tu navegador.
                        </p>
                    </div>
                    <RiArrowDownSLine />
                    <div className="appThirdSectionCardImageContainer">
                        <Image src="/app/thirdSectionCard1.png" alt="appThirdSectionCard1" width={400} height={400} />
                    </div>
                </article>
            </div>
    </section>
}
