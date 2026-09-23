import { tools } from "@/config/tools";
import { Metadata } from "next";
import { SITE_NAME, SITE_URL, absoluteUrl, pageMetadata } from "@/lib/site";

function findTool(path: string) {
  for (const [categoryName, category] of Object.entries(tools)) {
    const tool = category.items.find((item) => item.path === path);
    if (tool) return { tool, categoryName, category };
  }
  throw new Error(`No tool registered at ${path}`);
}

/** Metadata for a tool page, looked up by its path in `config/tools.ts`. */
export function getToolMetadata(path: string): Metadata {
  const { tool } = findTool(path);
  if (!tool.seo) {
    throw new Error(`No SEO metadata for tool ${path}`);
  }

  return pageMetadata({
    title: tool.seo.title,
    description: tool.seo.description,
    keywords: tool.seo.keywords,
    path: tool.path,
  });
}

/** schema.org WebApplication plus the breadcrumb trail for a tool page. */
export function getToolJsonLd(path: string) {
  const { tool, categoryName, category } = findTool(path);

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: tool.name,
      description: tool.seo?.description ?? tool.description,
      url: absoluteUrl(tool.path),
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Tools", item: absoluteUrl("/tools") },
        { "@type": "ListItem", position: 2, name: categoryName, item: absoluteUrl(`/tools/${category.path}`) },
        { "@type": "ListItem", position: 3, name: tool.name, item: absoluteUrl(tool.path) },
      ],
    },
  ];
}
