import JsonLd from "@/components/JsonLd";
import { getToolJsonLd, getToolMetadata } from "@/lib/get-tool-metadata";

const PATH = "/tools/dns/dns-lookup";

export const metadata = getToolMetadata(PATH);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={getToolJsonLd(PATH)} />
      {children}
    </>
  );
}
