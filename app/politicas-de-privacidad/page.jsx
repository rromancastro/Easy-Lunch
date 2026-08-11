import Link from "next/link"
import { pageMetadata } from "../seo"

export const metadata = pageMetadata({
    title: "Politica de privacidad",
    description: "Politica de privacidad de Easy Lunch y BAD KITCHEN S.R.L. sobre tratamiento de datos personales.",
    path: "/politicas-de-privacidad",
    noIndex: true,
})

const sections = [
    {
        title: "1. Responsable del tratamiento de datos",
        content: [
            "El presente sitio web y la tienda en linea son operados por:",
            "En adelante, la Empresa, nosotros o el responsable. La Empresa es responsable de la base de datos donde se almacena la informacion personal recolectada a traves del Sitio y su plataforma de pedidos.",
        ],
        list: [
            "Titular / Razon social: BAD KITCHEN S.R.L.",
            "CUIT/CUIL: 30-71923093-4",
            "Domicilio: Av. Del Libertador 5662 6to piso",
            "Correo electronico de contacto: info@easylunch.com.ar",
            "Sitio web: www.easylunch.com.ar",
        ],
    },
    {
        title: "2. Marco normativo",
        content: [
            "El tratamiento de datos personales se realiza en cumplimiento de la Ley N. 25.326 de Proteccion de los Datos Personales, su Decreto Reglamentario N. 1558/2001 y las disposiciones complementarias dictadas por la Agencia de Acceso a la Informacion Publica (AAIP), autoridad de control en la materia. Tambien resultan aplicables las normas de defensa del consumidor (Ley N. 24.240) y de comercio electronico vigentes en la Republica Argentina.",
        ],
    },
    {
        title: "3. Datos personales que recolectamos",
        content: [
            "Segun su interaccion con el Sitio, podemos recolectar las siguientes categorias de datos:",
        ],
        subsections: [
            {
                title: "3.1. Navegacion en el sitio informativo / blog",
                list: [
                    "Datos de identificacion y contacto que usted proporcione voluntariamente en formularios de contacto o suscripcion (nombre, apellido, correo electronico, telefono).",
                    "Datos tecnicos de navegacion: direccion IP, tipo de dispositivo y navegador, paginas visitadas, fecha y hora de acceso, obtenidos mediante cookies y tecnologias similares (ver Politica de Cookies).",
                ],
            },
            {
                title: "3.2. Compras en la tienda en linea",
                list: [
                    "Datos de identificacion: nombre, apellido y, cuando corresponda, tipo y numero de documento.",
                    "Datos de contacto: correo electronico, telefono y domicilio de facturacion y de envio.",
                    "Datos de la operacion: productos adquiridos, historial de pedidos, importes y medio de pago seleccionado.",
                    "Datos de pago: los datos de tarjetas u otros medios de pago son procesados directamente por las plataformas de pago habilitadas por MERCADO PAGO. La Empresa no almacena numeros completos de tarjetas ni codigos de seguridad.",
                ],
            },
            {
                title: "3.3. Cuenta de usuario",
                content: [
                    "Si crea una cuenta, almacenamos sus credenciales de acceso (usuario y contrasena cifrada) y las preferencias asociadas a su perfil.",
                ],
            },
        ],
    },
    {
        title: "4. Finalidades del tratamiento",
        content: [
            "Utilizamos sus datos personales para las siguientes finalidades:",
        ],
        list: [
            "Gestionar y responder consultas, solicitudes y reclamos realizados a traves del Sitio.",
            "Procesar, gestionar y entregar los pedidos realizados en la tienda en linea, incluyendo facturacion, cobro, envio y postventa.",
            "Administrar su cuenta de usuario y permitir el acceso a las funcionalidades del Sitio.",
            "Enviar comunicaciones sobre el estado de sus pedidos y notificaciones operativas.",
            "Enviar comunicaciones comerciales, novedades y promociones, unicamente cuando usted haya prestado su consentimiento y con opcion de baja en cada envio.",
            "Elaborar estadisticas y mejorar la experiencia de navegacion y la seguridad del Sitio.",
            "Cumplir con obligaciones legales, fiscales y contables aplicables.",
        ],
    },
    {
        title: "5. Base legal y consentimiento",
        content: [
            "El tratamiento de sus datos se sustenta en el consentimiento libre, expreso e informado que usted presta al proporcionar sus datos y aceptar la presente Politica, asi como en la ejecucion de la relacion contractual (compra) y el cumplimiento de obligaciones legales. Conforme al articulo 5 de la Ley N. 25.326, el consentimiento no sera exigido en los supuestos legalmente previstos, por ejemplo, cuando los datos deriven de una relacion contractual y sean necesarios para su desarrollo o cumplimiento.",
        ],
    },
    {
        title: "6. Cesion y transferencia de datos",
        content: [
            "Sus datos podran ser compartidos, unicamente en la medida necesaria para las finalidades descriptas, con:",
        ],
        list: [
            "Proveedores de servicios de pago para procesar las transacciones.",
            "Empresas de logistica y correo para la entrega de los pedidos.",
            "Proveedores de servicios tecnologicos (hosting, correo, analitica) que actuan como encargados de tratamiento bajo obligaciones de confidencialidad.",
            "Autoridades publicas cuando exista un requerimiento legal o judicial.",
        ],
        after: [
            "En caso de transferencia internacional de datos, la Empresa adoptara los recaudos exigidos por la Ley N. 25.326 y las disposiciones de la AAIP, asegurando niveles adecuados de proteccion.",
        ],
    },
    {
        title: "7. Plazo de conservacion",
        content: [
            "Conservamos los datos personales durante el tiempo necesario para cumplir las finalidades para las que fueron recolectados y, posteriormente, durante los plazos exigidos por la normativa fiscal, contable y de defensa del consumidor. Una vez cumplidos dichos plazos, los datos seran suprimidos o anonimizados.",
        ],
    },
    {
        title: "8. Derechos del titular de los datos",
        content: [
            "Usted tiene derecho a ejercer el acceso, rectificacion, actualizacion y supresion de sus datos personales, de conformidad con los articulos 14 y 16 de la Ley N. 25.326. El titular tiene derecho a solicitar y obtener informacion de sus datos personales incluidos en bancos de datos, en forma gratuita, a intervalos no inferiores a seis meses, salvo interes legitimo acreditado.",
            "Para ejercer estos derechos puede escribirnos a info@easylunch.com.ar, acreditando su identidad. Responderemos su solicitud dentro de los plazos legales (diez dias corridos para el acceso).",
            "Autoridad de control: La AGENCIA DE ACCESO A LA INFORMACION PUBLICA (AAIP), Organo de Control de la Ley N. 25.326, tiene la atribucion de atender las denuncias y reclamos que se interpongan con relacion al incumplimiento de las normas sobre proteccion de datos personales. Puede realizar reclamos ante la AAIP (www.argentina.gob.ar/aaip).",
        ],
    },
    {
        title: "9. Seguridad de la informacion",
        content: [
            "La Empresa adopta las medidas tecnicas y organizativas necesarias para garantizar la seguridad y confidencialidad de los datos personales, evitando su adulteracion, perdida, consulta o tratamiento no autorizado, conforme a las medidas de seguridad establecidas por la AAIP. No obstante, ninguna transmision por Internet es completamente segura, por lo que no podemos garantizar seguridad absoluta.",
        ],
    },
    {
        title: "10. Menores de edad",
        content: [
            "El Sitio no esta dirigido a menores de 18 anos. No recolectamos intencionalmente datos de menores sin el consentimiento de sus padres, tutores o representantes legales. Si detectamos datos de un menor sin dicha autorizacion, procederemos a su supresion.",
        ],
    },
    {
        title: "11. Cookies",
        content: [
            "El Sitio utiliza cookies y tecnologias similares. Para conocer que cookies utilizamos, con que finalidad y como gestionarlas, consulte nuestra Politica de Cookies, que forma parte integrante de la presente Politica de Privacidad.",
        ],
    },
    {
        title: "12. Cambios en la politica",
        content: [
            "La Empresa podra modificar la presente Politica de Privacidad en cualquier momento para adaptarla a cambios normativos o a nuevas practicas. Las modificaciones se publicaran en el Sitio con indicacion de la fecha de ultima actualizacion. Le recomendamos revisarla periodicamente.",
        ],
    },
    {
        title: "13. Contacto",
        content: [
            "Ante cualquier consulta sobre esta Politica o sobre el tratamiento de sus datos personales, puede contactarnos en: info@easylunch.com.ar o en el domicilio indicado en el punto 1.",
        ],
    },
]

const renderParagraphs = (paragraphs) => paragraphs?.map((paragraph) => (
    <p key={paragraph}>{paragraph}</p>
))

const renderList = (items) => items && (
    <ul>
        {items.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
)

export default function PrivacyPolicy() {
    return <main className="privacyPolicyPage">
        <section className="privacyPolicySection">
            <div className="privacyPolicyHeader">
                <Link className="policyBackLink" href="/">Volver al sitio</Link>
                <h1>Politica de Privacidad</h1>
                <p>BAD KITCHEN S.R.L. - www.easylunch.com.ar</p>
                <p>Ultima actualizacion: 21 de julio de 2026</p>
            </div>

            <div className="privacyPolicyContent">
                {sections.map((section) => (
                    <article key={section.title}>
                        <h2>{section.title}</h2>
                        {renderParagraphs(section.content)}
                        {renderList(section.list)}
                        {section.subsections?.map((subsection) => (
                            <div key={subsection.title}>
                                <h3>{subsection.title}</h3>
                                {renderParagraphs(subsection.content)}
                                {renderList(subsection.list)}
                            </div>
                        ))}
                        {renderParagraphs(section.after)}
                    </article>
                ))}
            </div>
        </section>
    </main>
}
