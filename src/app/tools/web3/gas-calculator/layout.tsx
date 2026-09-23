import JsonLd from "@/components/JsonLd";
import { getToolJsonLd, getToolMetadata } from "@/lib/get-tool-metadata";

const PATH = "/tools/web3/gas-calculator";

export const metadata = getToolMetadata(PATH);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={getToolJsonLd(PATH)} />
      {children}
    </>
  );
}
