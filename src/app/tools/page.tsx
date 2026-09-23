import { pageMetadata } from "@/lib/site";
import ToolsHome from "./tools-home.client";

export const metadata = pageMetadata({
  title: "Free Online Developer Tools & Utilities",
  description:
    "Free, fast developer tools that run in your browser: JSON formatter, Base64 encoder, hash generator, regex playground, unit converters, DNS lookup and more.",
  keywords:
    "developer tools, online tools, web tools, JSON formatter, Base64 encoder, hash generator, regex tester, unit converter",
  path: "/tools",
});

export default function ToolsPage() {
  return <ToolsHome />;
}
