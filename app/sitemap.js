import { siteUrl } from "./seo";

const routes = [
  { path: "/", priority: 1 },
  { path: "/servicios", priority: 0.9 },
  { path: "/app", priority: 0.8 },
  { path: "/faq", priority: 0.7 },
  { path: "/trabaja-con-nosotros", priority: 0.6 },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}

