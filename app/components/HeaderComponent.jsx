import Link from "next/link"
import { CotizaComponent, ImagenParallaxComponent, SplitH1, SplitP } from "."

export const HeaderComponent = ({ imageUrl, title, description, link}) => {
    return <header>
        <ImagenParallaxComponent 
            rutaImagen={imageUrl}
            alt="EasyLunch banner" 
            intensidad={2}
        />
        <SplitH1 id="homeHeaderTitle">
            {title}
        </SplitH1>
        {
            description && <SplitP id={'homeHeaderDescription'}>{description}</SplitP>
        }
        {
            link && <Link target="_blank" href={link}>Ver App
            </Link>
        }
        {
            !link && <CotizaComponent />
        }
    </header>
}