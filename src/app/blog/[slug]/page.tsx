import { formatPostDate, getPostBySlug, getPosts } from "@/lib/get-blog-by-slug";
import { markdownToHtml } from "@/lib/markdown-to-html";
import { AUTHOR, SITE_NAME, SITE_URL, absoluteUrl, pageMetadata } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import readingTime from "reading-time";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const post = getPostBySlug((await params).slug);
  const stats = readingTime(post.content);
  const url = absoluteUrl(`/blog/${post.slug}`);

  return (
    <div className="relative min-h-screen bg-white text-gray-800 font-mono  ">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            url,
            mainEntityOfPage: url,
            datePublished: post.date,
            dateModified: post.updated ?? post.date,
            wordCount: stats.words,
            ...(post.tags && { keywords: post.tags.join(", ") }),
            ...(post.coverImage && { image: absoluteUrl(post.coverImage) }),
            author: { "@type": "Person", name: AUTHOR.name, url: SITE_URL },
            publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Blog", item: absoluteUrl("/blog") },
              { "@type": "ListItem", position: 2, name: post.title, item: url },
            ],
          },
        ]}
      />
      <div className="relative max-w-4xl mx-auto px-4 py-6 sm:px-6 sm:py-8">
        <article className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-200">
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-4">{post.title}</h1>
            <div className="text-gray-500 text-sm flex flex-wrap gap-2">
              <span>
                By{" "}
                <Link href="/" className="text-purple-500 hover:text-purple-600">
                  {AUTHOR.name}
                </Link>
              </span>
              <span>•</span>
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span>•</span>
              <span>{stats.text}</span>
            </div>
          </header>

          {post.coverImage && (
            <Image
              src={post.coverImage}
              alt={post.coverAlt ?? ""}
              width={1200}
              height={630}
              priority
              sizes="(min-width: 896px) 832px, 100vw"
              className="w-full h-auto rounded-lg border border-gray-200 mb-8"
            />
          )}

          <div
            className="prose max-w-none prose-purple prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200 prose-code:text-purple-600 prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: await markdownToHtml(post.content) }}
          />
        </article>
      </div>
    </div>
  );
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    keywords: post.tags,
    ...(post.coverImage && {
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.coverAlt ?? post.title }],
    }),
  });
}

export async function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}
