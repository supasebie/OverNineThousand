import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Investment Interest Simulator",
  description:
    "Visualize compound interest and investment growth over time with interactive charts and customizable parameters.",
  keywords: "investment calculator, compound interest, financial planning, investment simulator",
  path: "/apps/interest-simulator",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
