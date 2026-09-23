import { Metadata } from "next";

// This file is the body of a project modal, not a standalone page, so keep its route out of search.
export const metadata: Metadata = { robots: { index: false, follow: true } };

export default function Choicyful() {
  return (
    <div>
      <h2 className="text-xl font-bold">Choicyful</h2>
      <p>A Shopify app enables merchants to customize product variant swatches.</p>
      <a
        href="https://apps.shopify.com/choicyful-1"
        className="text-orange-500 hover:text-orange-600 transition-colors"
      >
        View the app
      </a>
      <br />
      <a href="https://x.com/choicyful" className="text-orange-500 hover:text-orange-600 transition-colors">
        View the website (twitter)
      </a>
    </div>
  );
}
