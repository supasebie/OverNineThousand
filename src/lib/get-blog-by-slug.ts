import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "src", "_blog-posts");

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .filter((file) => !file.endsWith(".draft.md"));
}

export type Post = {
  title: string;
  excerpt: string;
  date: string;
  /** Set when a post is materially revised; drives dateModified and the sitemap. */
  updated?: string;
  /** Path under /public, shown above the post and used as its share image. 1200×630 works best. */
  coverImage?: string;
  coverAlt?: string;
  tags?: string[];
};

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...(data as Post), slug: realSlug, content };
}

/** All published posts, newest first. */
export function getPosts() {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

/** Formats a post's YYYY-MM-DD date. UTC, so "2026-09-23" never renders as the 22nd in the Americas. */
export function formatPostDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
