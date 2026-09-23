import { tutorials } from "@/config/tutorials";
import { Metadata } from "next";
import { AUTHOR, SITE_NAME, SITE_URL, absoluteUrl, pageMetadata } from "@/lib/site";

function findTutorial(id: string) {
  const tutorial = tutorials.find((t) => t.id === id);
  if (!tutorial) throw new Error(`No tutorial registered with id ${id}`);
  return tutorial;
}

export function getTutorialMetadata(id: string): Metadata {
  const tutorial = findTutorial(id);
  return pageMetadata({
    title: tutorial.title,
    description: tutorial.description,
    path: `/tutorials/${tutorial.id}`,
    type: "article",
    publishedTime: tutorial.date,
  });
}

const PROFICIENCY = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Expert" } as const;

/** schema.org TechArticle plus the breadcrumb trail for a tutorial. */
export function getTutorialJsonLd(id: string) {
  const tutorial = findTutorial(id);
  const url = absoluteUrl(`/tutorials/${tutorial.id}`);

  return [
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: tutorial.title,
      description: tutorial.description,
      url,
      mainEntityOfPage: url,
      datePublished: tutorial.date,
      proficiencyLevel: PROFICIENCY[tutorial.difficulty],
      keywords: tutorial.category,
      author: { "@type": "Person", name: AUTHOR.name, url: SITE_URL },
      publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Tutorials", item: absoluteUrl("/tutorials") },
        { "@type": "ListItem", position: 2, name: tutorial.title, item: url },
      ],
    },
  ];
}
