import Script from "next/script";
import { LenisProvider, WhatsappComponent } from "./components";
import { defaultDescription, defaultOgImage, siteName, siteUrl } from "./seo";
import "lenis/dist/lenis.css";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Easy Lunch | Almuerzos corporativos para empresas",
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "almuerzo corporativo",
    "viandas para empresas",
    "catering corporativo",
    "comida para oficinas",
    "beneficio de almuerzo",
    "Easy Lunch",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Easy Lunch | Almuerzos corporativos para empresas",
    description: defaultDescription,
    url: "/",
    siteName,
    images: [defaultOgImage],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Lunch | Almuerzos corporativos para empresas",
    description: defaultDescription,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logoNav.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logoNav.png`,
  email: "info@easylunch.com.ar",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+54 9 11 3904-2215",
      contactType: "customer service",
      areaServed: "AR",
      availableLanguage: "es",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  inLanguage: "es-AR",
};

const headerBackgrounds = [
  "/home/headerBgNuevo.avif",
  "/home/headerBgNuevoMobile.avif",
  "/app/headerBg.avif",
  "/app/headerBgMobile.avif",
  "/servicios/headerBg.avif",
  "/servicios/headerBgMobile.avif",
  "/faq/headerBg.avif",
  "/faq/headerBgMobile.avif",
  "/trabaja-con-nosotros/headerBg.avif",
  "/trabaja-con-nosotros/headerBgMobile.avif",
];

const speculationRules = {
  prerender: [
    {
      source: "document",
      where: {
        and: [
          { href_matches: "/*" },
          { not: { href_matches: "/api/*" } },
          { not: { href_matches: "/*.ico" } },
          { not: { href_matches: "/*.*" } },
        ],
      },
      eagerness: "moderate",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <head>
        {headerBackgrounds.map((href) => (
          <link key={href} rel="preload" as="image" href={href} fetchPriority="high" />
        ))}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="speculation-rules"
          type="speculationrules"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speculationRules) }}
        />
      </head>
      <body>
        <WhatsappComponent />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
