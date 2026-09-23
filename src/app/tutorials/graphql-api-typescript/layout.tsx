import JsonLd from "@/components/JsonLd";
import { getTutorialJsonLd, getTutorialMetadata } from "@/lib/get-tutorial-metadata";

const ID = "graphql-api-typescript";

export const metadata = getTutorialMetadata(ID);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={getTutorialJsonLd(ID)} />
      {children}
    </>
  );
}
