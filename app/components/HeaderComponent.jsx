import { CotizaComponent, ImagenParallaxComponent, SplitH1 } from "."

export const HeaderComponent = () => {
    return <header>
        <ImagenParallaxComponent 
            rutaImagen="/home/headerBg.jpg" 
            alt="EasyLunch banner" 
            intensidad={1.6}
        />
        <SplitH1 id="homeHeaderTitle">
            La forma más simple de resolver el almuerzo corporativo.
        </SplitH1>
        <CotizaComponent />
    </header>
}