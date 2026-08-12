import Script from "next/script";
import { FooterComponent, HeaderComponent, NavbarComponent } from "../components";
import { FaqSecondSection } from "../sections";
import { pageMetadata, siteUrl } from "../seo";

export const metadata = pageMetadata({
    title: "Preguntas frecuentes",
    description: "Respuestas sobre pedidos, entregas, menus, modalidades de servicio, pagos y funcionamiento de Easy Lunch para empresas.",
    path: "/faq",
});

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Cada colaborador puede realizar su propio pedido?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Si. Cada usuario cuenta con acceso individual a la plataforma web para elegir opciones diarias, programar almuerzos y gestionar pedidos.",
            },
        },
        {
            "@type": "Question",
            name: "Easy Lunch trabaja unicamente con empresas?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Si. Easy Lunch se especializa en soluciones gastronomicas para empresas, oficinas, colegios y proyectos corporativos.",
            },
        },
        {
            "@type": "Question",
            name: "Que tipos de menu ofrecen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ofrecen platos calientes, ensaladas, wraps, sandwiches, tartas y alternativas vegetarianas, veganas, proteicas, sin TACC y saludables.",
            },
        },
        {
            "@type": "Question",
            name: "Como se realiza la entrega?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Las entregas se realizan diariamente mediante logistica refrigerada habilitada, preservando la cadena de frio durante el proceso.",
            },
        },
        {
            "@type": "Question",
            name: "Como puedo solicitar una propuesta?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Se puede completar el formulario de contacto, solicitar cotizacion o escribir a info@easylunch.com.ar para recibir una propuesta personalizada.",
            },
        },
    ],
};

export default function FAQPage() {
    return <>
        <Script
            id="faq-schema"
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...faqSchema, url: `${siteUrl}/faq` }) }}
        />
        <NavbarComponent />
        <main>
            <HeaderComponent
                imageUrl={'/faq/headerBg'}
                title={'Preguntas'}
                title2={'Frecuentes'}
            />
            <FaqSecondSection />
        </main>
        <FooterComponent />
    </>
}
