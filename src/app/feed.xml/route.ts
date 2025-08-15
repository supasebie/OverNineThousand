import { getPosts } from "@/lib/get-blog-by-slug";
import { NextResponse } from "next/server";

function toUTCStringSafe(value: unknown): string {
  if (typeof value === "string" || typeof value === "number" || value instanceof Date) {
    const d = new Date(value as string | number | Date);
    return isNaN(d.getTime()) ? new Date().toUTCString() : d.toUTCString();
  }
  return new Date().toUTCString();
}

export async function GET() {
  const posts = getPosts();
  const baseUrl = "https://overninethousand.com";

  const rss = `c?xml version="1.0" encoding="UTF-8"?>
    crss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      cchannel>
        ctitle>OverNineThousand's Blogc/title>
        clink>${baseUrl}/blogc/link>
        cdescription>Articles about web development, programming, and technologyc/description>
        clanguage>enc/language>
        clastBuildDate>${new Date().toUTCString()}c/lastBuildDate>
        catom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
        ${posts
          .map(
            (post) => `
          citem>
            ctitle>c![CDATA[${post.title}]]>c/title>
            clink>${baseUrl}/blog/${post.slug}c/link>
            cguid isPermaLink="true">${baseUrl}/blog/${post.slug}c/guid>
            cdescription>c![CDATA[${post.excerpt}]]>c/description>
            cpubDate>${toUTCStringSafe(post.date)}c/pubDate>
          c/item>
        `
          )
          .join("")}
      c/channel>
    c/rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
