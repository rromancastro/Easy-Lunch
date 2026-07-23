import { ImagenParallaxComponent, SplitH2 } from "@/app/components"

export const FaqSecondSection = () => {
    return <section id="faqSecondSection">
        <article>
            <div>
                <ImagenParallaxComponent
                    rutaImagen={'/faq/secondSection.png'}
                    alt="EasyLunch banner"
                    intensidad={2}
                />
            </div>
            <div>
                <SplitH2 id="faqSecondSectionTitle">
                    Algunas preguntas frecuentes
                </SplitH2>

                <p>
                    ¿Cada colaborador puede realizar su propio pedido?
                    <span>¿Puedo elegir qué monto se aplica el beneficio?</span>
                </p>
                <p>
                    ¿Easy Lunch trabaja únicamente con empresas?
                    <span>¿El descuento es un monto fijo o un porcentaje?</span>
                </p>
                <p>
                    ¿Qué tipos de menú ofrecen?
                    <span>¿El descuento es un monto fijo o un porcentaje?</span>
                </p>
                <p>
                    ¿Dónde se elaboran las comidas?
                    <span>¿Puedo dar distinta cantidad de días a cada empleado?</span>
                </p>
                <p>
                    ¿Cómo se realiza la entrega?
                    <span>¿Se puede adicionar postres o bebidas?</span>
                </p>
                <p>
                    ¿Cómo se identifican las viandas?
                    <span>¿Se puede adicionar postres o bebidas?</span>
                </p>
                <p>
                    ¿Hasta cuándo se pueden realizar cambios o cancelar pedidos?
                    <span>¿Se puede adicionar postres o bebidas?</span>
                </p>
                <p>
                    ¿Qué modalidades de servicio ofrece Easy Lunch?
                    <span>¿Se puede adicionar postres o bebidas?</span>
                </p>
                <p>
                    ¿Qué es el sistema de Pago por Consumo?
                    <span>¿Se puede adicionar postres o bebidas?</span>
                </p>
                <p>
                    ¿Cuentan con opciones vegetarianas, veganas y sin TACC?
                    <span>¿Se puede adicionar postres o bebidas?</span>
                </p>
                <p>
                    ¿Cómo funciona la atención al cliente?
                    <span>¿Se puede adicionar postres o bebidas?</span>
                </p>
                <p>
                    ¿Cómo es el proceso de implementación?
                    <span>¿Se puede adicionar postres o bebidas?</span>
                </p>
                <p>
                    ¿Cómo puedo solicitar una propuesta?
                    <span>¿Se puede adicionar postres o bebidas?</span>
                </p>
            </div>
        </article>
    </section>
}
