import JsonLd from "@/components/JsonLd";
import { getHookJsonLd, getHookMetadata } from "@/lib/get-hook-metadata";

const PATH = "/react-hooks/use-window-size";

export const metadata = getHookMetadata(PATH);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={getHookJsonLd(PATH)} />
      {children}
    </>
  );
}
