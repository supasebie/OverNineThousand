import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "2048 Game - Classic Puzzle Game Clone",
  description:
    "Play the classic 2048 puzzle game. Combine tiles with the same numbers to reach 2048. A free browser-based version of the popular game.",
  keywords: "2048, puzzle game, browser game, number game, strategy game",
  path: "/apps/2048-game",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
