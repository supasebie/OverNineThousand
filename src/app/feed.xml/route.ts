import { getPosts } from "@/lib/get-blog-by-slug";
import { NextResponse } from "next/server";
import { AUTHOR, SITE_URL } from "@/lib/site";

function toUTCStringSafe(value: unknown): string {
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    value instanceof Date
  ) {
    const d = new Date(value as string | number | Date);
    return isNaN(d.getTime()) ? new Date().toUTCString() : d.toUTCString();
  }
  return new Date().toUTCString();
}

export async function GET() {
  const posts = getPosts();
  const baseUrl = SITE_URL;

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>OverNineThousand's Blog</title>
        <link>${baseUrl}/blog</link>
        <description>Dev logs and launch notes from OverNineThousand</description>
        <language>en</language>
        <lastBuildDate>${toUTCStringSafe(posts[0]?.updated ?? posts[0]?.date)}</lastBuildDate>
        <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
        ${posts
          .map(
            (post) => `
          <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${baseUrl}/blog/${post.slug}</link>
            <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
            <description><![CDATA[${post.excerpt}]]></description>
            <pubDate>${toUTCStringSafe(post.date)}</pubDate>
            <author>${AUTHOR.email} (${AUTHOR.name})</author>
          </item>
        `
          )
          .join("")}
      </channel>
    </rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
