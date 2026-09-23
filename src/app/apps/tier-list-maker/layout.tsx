import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Tier List Maker - Create Custom Tier Lists",
  description:
    "Create and customize your own tier lists with our free, easy-to-use drag-and-drop interface. Perfect for ranking games, characters, movies, and more.",
  keywords: "tier list maker, tier list creator, ranking tool, tier ranking, S tier list",
  path: "/apps/tier-list-maker",
});

export default function TierListLayout({ children }: { children: React.ReactNode }) {
  return children;
}
