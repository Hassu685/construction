import { siteConfig, projects } from "@/lib/data";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/estimating-services",
    "/projects",
    "/testimonials",
    "/faq",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${siteConfig.url}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
