import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Memory Game - Test Your Memory with Letter Matching",
  description:
    "Challenge your memory with our free letter-matching memory game. Flip cards to find matching pairs and improve your cognitive skills.",
  keywords: "memory game, card matching game, brain training, memory training, letter matching game",
  path: "/apps/memory-game",
});

export default function MemoryGameLayout({ children }: { children: React.ReactNode }) {
  return children;
}
