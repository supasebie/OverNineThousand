import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Word Cloud Generator",
  description:
    "Create beautiful word clouds from any text. Customize colors, shapes, and layouts for unique visualizations.",
  keywords: "word cloud maker, tag cloud generator, text visualization, word cloud generator",
  path: "/apps/word-cloud-generator",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
