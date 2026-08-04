import Link from "next/link"

const cookieTypes = [
    {
        type: "Tecnicas o necesarias",
        purpose: "Imprescindibles para navegar y usar funciones basicas: inicio de sesion, carrito de compras, seguridad y proceso de pago.",
        consent: "No. Son necesarias para el funcionamiento del sitio.",
    },
    {
        type: "De preferencias",
        purpose: "Recuerdan opciones del usuario, como idioma, region o configuracion de visualizacion.",
        consent: "Si.",
    },
    {
        type: "Analiticas o de medicion",
        purpose: "Recopilan informacion estadistica y anonima sobre el uso del sitio para mejorarlo (por ejemplo, Google Analytics).",
        consent: "Si.",
    },
    {
        type: "De marketing o publicidad",
        purpose: "Permiten mostrar publicidad personalizada y medir campanas dentro y fuera del sitio (por ejemplo, Meta Pixel).",
        consent: "Si.",
    },
]

const providers = [
    {
        provider: "Google Analytics",
        type: "Analitica",
        purpose: "Estadisticas de uso del sitio. Politica: policies.google.com/priva",
    },
    {
        provider: "Meta Pixel (Facebook/Instagram)",
        type: "Marketing",
        purpose: "Medicion y publicidad. Politica: facebook.com/privacy/policy",
    },
    {
        provider: "Mercado Pago",
        type: "Tecnica",
        purpose: "Procesamiento seguro de pagos en la tienda.",
    },
]

const sections = [
    {
        title: "1. Que son las cookies?",
        content: [
            "Las cookies son pequenos archivos de texto que los sitios web instalan en el dispositivo (computadora, Tablet o telefono) del usuario cuando los visita. Permiten que el sitio recuerde informacion sobre la visita, como el idioma preferido, la sesion iniciada o los productos agregados al carrito, facilitando la navegacion y mejorando la experiencia.",
            "Ademas de las cookies, utilizamos tecnologias similares como pixeles, etiquetas y almacenamiento local, que se rigen por esta misma Politica.",
        ],
    },
    {
        title: "2. Por que utilizamos cookies?",
        content: [
            "En www.easylunch.com.ar utilizamos cookies para:",
        ],
        list: [
            "Permitir el funcionamiento correcto del sitio y de la tienda en linea (por ejemplo, mantener la sesion y el carrito de compras).",
            "Recordar sus preferencias y configuraciones.",
            "Analizar de forma estadistica como se utiliza el sitio para mejorarlo.",
            "Mostrar contenidos y, cuando corresponda, publicidad relevante, siempre con su consentimiento.",
        ],
    },
    {
        title: "3. Tipos de cookies que utilizamos",
        content: [
            "Segun su finalidad, las cookies del Sitio se clasifican de la siguiente manera:",
        ],
        table: "cookieTypes",
    },
    {
        title: "4. Cookies propias y de terceros",
        content: [
            "Las cookies pueden ser propias (gestionadas por la Empresa) o de terceros (gestionadas por proveedores externos cuyos servicios utilizamos). A continuacion, se detallan, a titulo enunciativo, algunos de los terceros que pueden instalar cookies a traves del Sitio:",
        ],
        table: "providers",
        after: [
            "Nota: complete esta tabla con las cookies reales de su sitio. Los nombres de proveedores anteriores son ejemplos habituales para un sitio informativo con tienda en linea.",
        ],
    },
    {
        title: "5. Consentimiento y gestion de cookies",
        content: [
            "Al ingresar al Sitio, se muestra un banner que le informa sobre el uso de cookies. Las cookies tecnicas o necesarias se instalan por ser imprescindibles para el funcionamiento del sitio. El resto de las cookies (preferencias, analiticas y de marketing) solo se instalan si usted presta su consentimiento a traves del banner o del panel de configuracion.",
            "Usted puede, en cualquier momento:",
        ],
        list: [
            "Aceptar todas las cookies.",
            "Rechazar las cookies no necesarias.",
            "Configurar sus preferencias por categoria en el panel de configuracion de cookies.",
            "Retirar su consentimiento posteriormente, accediendo nuevamente al panel de configuracion desde ENLACE / SECCION Configuracion de cookies.",
        ],
    },
    {
        title: "6. Como gestionar o eliminar cookies desde el navegador",
        content: [
            "Ademas del panel del Sitio, usted puede configurar, bloquear o eliminar las cookies directamente desde su navegador. A continuacion, los enlaces de ayuda de los navegadores mas utilizados:",
        ],
        list: [
            "Google Chrome: support.google.com/chrome/answer/95647",
            "Mozilla Firefox: support.mozilla.org/kb/cookies-informacion-que-los-sitios-web-guardan",
            "Microsoft Edge: support.microsoft.com/microsoft-edge",
            "Safari: support.apple.com/es-lamr/guide/safari",
        ],
        after: [
            "Tenga en cuenta que, si bloquea o elimina las cookies tecnicas, algunas funciones del Sitio (como el carrito de compras o el inicio de sesion) podrian no funcionar correctamente.",
        ],
    },
    {
        title: "7. Datos personales y cookies",
        content: [
            "La informacion recopilada mediante cookies puede constituir dato personal cuando permita identificar al usuario. En tal caso, dicho tratamiento se rige por lo establecido en nuestra Politica de Privacidad y en la Ley N. 25.326 de Proteccion de los Datos Personales.",
        ],
    },
    {
        title: "8. Actualizaciones de esta politica",
        content: [
            "Esta Politica de Cookies puede actualizarse para reflejar cambios en las cookies que utilizamos o en la normativa aplicable. Publicaremos cualquier modificacion en esta misma pagina, indicando la fecha de ultima actualizacion.",
        ],
    },
    {
        title: "9. Contacto",
        content: [
            "Si tiene dudas sobre el uso de cookies en el Sitio, escribanos a info@easylunch.com.ar.",
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

const renderCookieTypesTable = () => (
    <div className="policyTableWrapper">
        <table>
            <thead>
                <tr>
                    <th>Tipo de cookie</th>
                    <th>Finalidad</th>
                    <th>Requiere consentimiento?</th>
                </tr>
            </thead>
            <tbody>
                {cookieTypes.map((cookie) => (
                    <tr key={cookie.type}>
                        <td>{cookie.type}</td>
                        <td>{cookie.purpose}</td>
                        <td>{cookie.consent}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)

const renderProvidersTable = () => (
    <div className="policyTableWrapper">
        <table>
            <thead>
                <tr>
                    <th>Proveedor / Cookie</th>
                    <th>Tipo</th>
                    <th>Finalidad y mas informacion</th>
                </tr>
            </thead>
            <tbody>
                {providers.map((provider) => (
                    <tr key={provider.provider}>
                        <td>{provider.provider}</td>
                        <td>{provider.type}</td>
                        <td>{provider.purpose}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)

const renderTable = (table) => {
    if (table === "cookieTypes") {
        return renderCookieTypesTable()
    }

    if (table === "providers") {
        return renderProvidersTable()
    }
}

export default function CookiesPolicy() {
    return <main className="privacyPolicyPage">
        <section className="privacyPolicySection">
            <div className="privacyPolicyHeader">
                <Link className="policyBackLink" href="/">Volver al sitio</Link>
                <h1>Politica de Cookies</h1>
                <p>EASY LUNCH - www.easylunch.com.ar</p>
                <p>Ultima actualizacion: 21 de julio de 2026</p>
            </div>

            <div className="privacyPolicyContent">
                {sections.map((section) => (
                    <article key={section.title}>
                        <h2>{section.title}</h2>
                        {renderParagraphs(section.content)}
                        {renderList(section.list)}
                        {renderTable(section.table)}
                        {renderParagraphs(section.after)}
                    </article>
                ))}
            </div>
        </section>
    </main>
}
