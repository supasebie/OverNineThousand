import { formatPostDate, getPosts } from "@/lib/get-blog-by-slug";
import { pageMetadata } from "@/lib/site";
import Link from "next/link";
import { Metadata } from "next";
import readingTime from 'reading-time';

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Blog",
    description:
      "Dev logs and launch notes from OverNineThousand: building Psychic Tournament with Flutter and Supabase, shipping to Google Play and the App Store, and what's next.",
    path: "/blog",
  }),
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/feed.xml" },
  },
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="relative bg-white text-gray-800 font-mono">
      <div className="relative max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Blog Posts</h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-purple-500 transition-colors"
            >
              <h2 className="text-xl font-bold text-purple-600 mb-2">{post.title}</h2>
              <div className="text-gray-500 text-xs mb-3 flex gap-2">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span>•</span>
                <span>{readingTime(post.content).text}</span>
              </div>
              <p className="text-gray-700 text-sm">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
