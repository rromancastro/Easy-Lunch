"use client";
import Link from "next/link"
import { CotizaComponent, ImagenParallaxComponent, SplitH1, SplitP, VerAppComponent } from "."
import { useIsMobile } from "../hooks/useIsMobile";

export const HeaderComponent = ({ imageUrl, title, description, link, title2, shadow = 1, content = "Cotizá ahora" }) => {

    const isMobile = useIsMobile(768);

    return <header style={{
        background: shadow === 2 ? 'linear-gradient(171.32deg, rgba(0, 0, 0, 0) 27.3%, #000000 91.43%)' : 'linear-gradient(205.9deg, rgba(0, 0, 0, 0) 42.43%, #000000 90.87%)'
    }}>
        <ImagenParallaxComponent
            rutaImagen={`${imageUrl}.avif`}
            alt="EasyLunch banner"
            intensidad={1.5}
            priority
        />
        <SplitH1 id="homeHeaderTitle">
            {title}
            {
                title2 && <><br /> {title2}</>
            }
        </SplitH1>
        {
            description && <SplitP id={'homeHeaderDescription'}>{description}</SplitP>
        }
        {
            link === 'app' && <VerAppComponent />
        }
        {
            link && link !== 'app' && <Link target="_blank" href={link}>{content}
            </Link>
        }
        {
            !link && <CotizaComponent content={content} />
        }

    </header>
}
