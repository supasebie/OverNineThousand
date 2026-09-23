import JsonLd from "@/components/JsonLd";
import { getTutorialJsonLd, getTutorialMetadata } from "@/lib/get-tutorial-metadata";

const ID = "publishing-npm-package";

export const metadata = getTutorialMetadata(ID);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={getTutorialJsonLd(ID)} />
      {children}
    </>
  );
}
