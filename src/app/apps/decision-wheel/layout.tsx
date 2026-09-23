import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Decision Wheel - Random Decision Maker",
  description:
    "Make random decisions with a customizable wheel spinner. Perfect for groups, choices, and decision making.",
  keywords: "decision maker, wheel spinner, random picker, wheel of fortune, random decision, choice maker",
  path: "/apps/decision-wheel",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
} 