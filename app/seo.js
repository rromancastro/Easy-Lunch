export const siteUrl = "https://www.easylunch.com.ar";
export const siteName = "Easy Lunch";
export const defaultOgImage = "/og-image.png";

export const defaultDescription =
  "Easy Lunch resuelve el almuerzo corporativo para empresas con viandas, menus diarios, logistica refrigerada y una plataforma web simple para pedidos.";

export const pageMetadata = ({
  title,
  description = defaultDescription,
  path = "/",
  images = [defaultOgImage],
  noIndex = false,
}) => ({
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    url: path,
    siteName,
    images,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images,
  },
  robots: noIndex
    ? {
        index: false,
        follow: true,
      }
    : undefined,
});

