import { hooks } from "@/config/hooks";
import { Metadata } from "next";
import { SITE_NAME, SITE_URL, absoluteUrl, pageMetadata } from "@/lib/site";

function findHook(path: string) {
  for (const category of Object.values(hooks)) {
    const hook = category.items.find((item) => item.path === path);
    if (hook) return hook;
  }
  throw new Error(`No hook registered at ${path}`);
}

/** Metadata for a React hook page, looked up by its path in `config/hooks.ts`. */
export function getHookMetadata(path: string): Metadata {
  const hook = findHook(path);
  if (!hook.seo) {
    throw new Error(`No SEO metadata for hook ${path}`);
  }

  return pageMetadata({
    title: hook.seo.title,
    description: hook.seo.description,
    keywords: hook.seo.keywords,
    path: hook.path,
  });
}

/** schema.org TechArticle plus the breadcrumb trail for a hook page. */
export function getHookJsonLd(path: string) {
  const hook = findHook(path);

  return [
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: hook.seo?.title ?? hook.name,
      description: hook.seo?.description ?? hook.description,
      url: absoluteUrl(hook.path),
      proficiencyLevel: "Intermediate",
      about: { "@type": "Thing", name: "React hooks" },
      publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "React Hooks", item: absoluteUrl("/react-hooks") },
        { "@type": "ListItem", position: 2, name: hook.name, item: absoluteUrl(hook.path) },
      ],
    },
  ];
}
