import { Metadata } from "next";
import { tools } from "@/config/tools";
import { pageMetadata } from "@/lib/site";
import { notFound } from "next/navigation";
import { CategoryPageClient } from "./page.client";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage(props: CategoryPageProps) {
  const params = await props.params;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const categoryEntry = Object.entries(tools).find(([_, data]) => data.path === params.category);

  if (!categoryEntry) {
    notFound();
  }

  const [categoryName, categoryData] = categoryEntry;

  return <CategoryPageClient categoryName={categoryName} categoryPath={categoryData.path} />;
}

export async function generateMetadata(props: CategoryPageProps): Promise<Metadata> {
  const { category } = await props.params;
  const entry = Object.entries(tools).find(([, data]) => data.path === category);
  if (!entry) return { robots: { index: false } };

  const [categoryName, categoryData] = entry;
  const names = categoryData.items.map((item) => item.name);
  return pageMetadata({
    title: `Free Online ${categoryName}`,
    description: `${names.length} free ${categoryName.toLowerCase()} that run in your browser, including ${names.slice(0, 4).join(", ")} and more.`,
    path: `/tools/${categoryData.path}`,
  });
}

// Generate static params for all categories
export function generateStaticParams() {
  return Object.values(tools).map(({ path }) => ({
    category: path,
  }));
}
