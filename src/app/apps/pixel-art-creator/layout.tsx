import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Pixel Art Creator",
  description:
    "Create pixel art with a simple grid-based drawing tool. Export your creations as PNG images.",
  keywords: "pixel art maker online, pixel drawing tool, pixel art creator, pixel editor",
  path: "/apps/pixel-art-creator",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
} 