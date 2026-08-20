import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services/", "/about/", "/insights/", "/contact/"];

  return routes.map((route) => ({
    url: `https://ckdatamw.org${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}