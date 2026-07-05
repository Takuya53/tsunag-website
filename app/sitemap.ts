import type { MetadataRoute } from "next";

const baseUrl = "https://tsunag-inc.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/works", "/company", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}