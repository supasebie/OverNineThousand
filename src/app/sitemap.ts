import { hooks } from "@/config/hooks";
import { tools } from "@/config/tools";
import { getPosts } from "@/lib/get-blog-by-slug";
import { MetadataRoute } from "next";
import { apps } from "@/config/apps";
import { tutorials } from "@/config/tutorials";
import { httpCodes } from "@/app/data/httpCodes";
import { SITE_URL } from "@/lib/site";

// Only real dates go in <lastmod>. Google ignores the field for a site that stamps every
// URL with the build time, so pages without a known date simply leave it out.
function dateOrUndefined(value: unknown): Date | undefined {
  if (typeof value !== "string" && typeof value !== "number" && !(value instanceof Date)) return undefined;
  const d = new Date(value);
  return isNaN(d.getTime()) ? undefined : d;
}

// Keep in sync with the unit tables in the converter pages; each pair is a prerendered page.
const DATA_SIZE_UNITS = ["bit", "byte", "kb", "mb", "gb", "tb", "pb", "eb", "zb", "yb"];
const UNIT_CONVERTER_UNITS = {
  length: ["mm", "cm", "m", "km", "in", "ft", "yd", "mi"],
  weight: ["mg", "g", "kg", "oz", "lb", "t"],
  temperature: ["c", "f", "k"],
  area: ["mm2", "cm2", "m2", "km2", "in2", "ft2", "ac"],
  volume: ["ml", "l", "m3", "gal", "qt", "pt", "fl_oz"],
};

// The category names in the gemoji data the emoji picker reads. Hard-coded so the sitemap
// doesn't depend on a network fetch succeeding at build time.
const EMOJI_CATEGORIES = [
  "Smileys & Emotion",
  "People & Body",
  "Animals & Nature",
  "Food & Drink",
  "Travel & Places",
  "Activities",
  "Objects",
  "Symbols",
  "Flags",
];

const POPULAR_EMOJIS = [
  "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰",
  "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏",
  "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠",
  "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥",
  "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐",
  "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👍", "👎", "👌", "✌️", "🤞", "🤟",
  "🤘", "🤙", "👈", "👉", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "🔥", "💯",
  "💥", "💫", "⭐", "🌟", "✨", "💎", "🎉", "🎊",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string, lastModified?: Date) => ({
    url: `${SITE_URL}${path}`,
    ...(lastModified && { lastModified }),
  });

  const posts = getPosts();
  const latestPost = posts[0] ? dateOrUndefined(posts[0].updated ?? posts[0].date) : undefined;

  const routes: MetadataRoute.Sitemap = [
    url("/", latestPost),
    url("/blog", latestPost),
    url("/projects"),
    url("/contact"),
    url("/tools"),
    url("/apps"),
    url("/react-hooks"),
    url("/tutorials"),
    url("/site-map"),
  ];

  posts.forEach((post) => routes.push(url(`/blog/${post.slug}`, dateOrUndefined(post.updated ?? post.date))));

  tutorials.forEach((tutorial) => routes.push(url(`/tutorials/${tutorial.id}`, dateOrUndefined(tutorial.date))));

  Object.values(tools).forEach((category) => {
    routes.push(url(`/tools/${category.path}`));
    category.items.forEach((tool) => routes.push(url(tool.path)));
  });

  Object.values(hooks).forEach((category) => {
    category.items.forEach((hook) => routes.push(url(hook.path)));
  });

  apps.forEach((app) => routes.push(url(app.path)));

  httpCodes.forEach((httpCode) => routes.push(url(`/tools/dev/http-codes/${httpCode.code}`)));

  DATA_SIZE_UNITS.forEach((from) => {
    DATA_SIZE_UNITS.forEach((to) => {
      if (from !== to) routes.push(url(`/tools/utilities/data-size-converter/${from}-to-${to}`));
    });
  });

  Object.entries(UNIT_CONVERTER_UNITS).forEach(([type, units]) => {
    units.forEach((from) => {
      units.forEach((to) => {
        if (from !== to) routes.push(url(`/tools/utilities/unit-converter/${type}/${from}-to-${to}`));
      });
    });
  });

  EMOJI_CATEGORIES.forEach((category) =>
    routes.push(url(`/tools/utilities/emoji-picker/category/${encodeURIComponent(category)}`))
  );
  POPULAR_EMOJIS.forEach((emoji) => routes.push(url(`/tools/utilities/emoji-picker/${encodeURIComponent(emoji)}`)));

  return routes;
}
