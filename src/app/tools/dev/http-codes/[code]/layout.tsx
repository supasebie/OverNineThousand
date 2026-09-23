import { Metadata } from "next";
import { httpCodes } from "@/app/data/httpCodes";
import { pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ code: string }> };

// The page itself is a client component, so its metadata lives here.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const httpCode = httpCodes.find((c) => String(c.code) === code);

  if (!httpCode) {
    return { title: "HTTP Status Code Not Found", robots: { index: false } };
  }

  return pageMetadata({
    title: `HTTP ${httpCode.code} ${httpCode.title}: Meaning, Causes and Examples`,
    description: `HTTP ${httpCode.code} ${httpCode.title}: ${httpCode.description} Learn when it's returned, common causes and how to handle it.`,
    keywords: [`HTTP ${httpCode.code}`, `${httpCode.code} ${httpCode.title}`, "HTTP status code", httpCode.category],
    path: `/tools/dev/http-codes/${httpCode.code}`,
  });
}

export function generateStaticParams() {
  return httpCodes.map((c) => ({ code: String(c.code) }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
