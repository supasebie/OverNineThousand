import CardSpotlight from "@/components/CardSpotLight";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Button from "@/components/Button";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Activity, BoxIcon, MessageSquare, Smartphone, Sparkles } from "lucide-react";
import { Terminal } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { formatPostDate, getPosts } from "@/lib/get-blog-by-slug";
import Footer, { SocialLink } from "@/components/Footer";
import { tutorials } from "@/config/tutorials";
import ASCIIBackground from "@/components/ASCIIBackground";
import JsonLd from "@/components/JsonLd";
import { AUTHOR, CHATACOMBS, POSTQUAKE, PSYCHIC_TOURNAMENT, SITE_DESCRIPTION, SITE_NAME, SITE_URL, pageMetadata } from "@/lib/site";

const LAUNCH_POST = "/blog/2026-09-23-psychic-tournament-is-live-on-android-and-ios";
const POSTQUAKE_POST = "/blog/2026-09-29-introducing-postquake";
const CHATACOMBS_POST = "/blog/2026-10-04-chatacombs-custom-vertical-youtube-livestream";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "OverNineThousand | Freelance Fullstack & Mobile App Developer",
    description:
      "Joseph Sebastian Ruiz: freelance fullstack developer in Los Angeles building Flutter mobile apps, .NET APIs and Angular/React websites. Maker of Psychic Tournament, PostQuake and Chatacombs.",
    path: "/",
  }),
  // The home page carries the brand in full, so it skips the "| OverNineThousand" template.
  title: { absolute: "OverNineThousand | Freelance Fullstack & Mobile App Developer" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: AUTHOR.name,
      alternateName: AUTHOR.alternateName,
      jobTitle: AUTHOR.jobTitle,
      email: `mailto:${AUTHOR.email}`,
      url: `${SITE_URL}/`,
      sameAs: AUTHOR.sameAs,
      address: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA", addressCountry: "US" },
      knowsAbout: ["Flutter", "Dart", ".NET", "C#", "React", "Angular", "Next.js", "TypeScript", "Supabase"],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/icon.png`,
      email: AUTHOR.email,
      founder: { "@id": `${SITE_URL}/#person` },
      sameAs: AUTHOR.sameAs,
    },
    {
      "@type": "MobileApplication",
      "@id": `${PSYCHIC_TOURNAMENT.url}#app`,
      name: "Psychic Tournament",
      url: PSYCHIC_TOURNAMENT.url,
      applicationCategory: "GameApplication",
      operatingSystem: "Android, iOS",
      installUrl: [PSYCHIC_TOURNAMENT.googlePlayUrl, PSYCHIC_TOURNAMENT.appStoreUrl],
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${POSTQUAKE.url}#app`,
      name: "PostQuake",
      url: POSTQUAKE.url,
      description:
        "Turns a link to an app, website, online shop or newsletter into a week of TikTok-style slideshows and videos for TikTok, Instagram Reels, YouTube Shorts and Facebook.",
      applicationCategory: "BusinessApplication",
      sameAs: [POSTQUAKE.tiktokUrl, POSTQUAKE.instagramUrl, POSTQUAKE.youtubeUrl],
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "VideoGame",
      "@id": `${CHATACOMBS.url}#game`,
      name: "Chatacombs: Roguelike Arena",
      url: CHATACOMBS.url,
      description:
        "A roguelike battle royale played from YouTube live chat. Viewers type join, get a hero with their name and fight until one is left.",
      genre: ["Battle royale", "Roguelike"],
      gamePlatform: "YouTube Live",
      sameAs: [CHATACOMBS.youtubeUrl],
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function Home() {
  const latestPosts = getPosts().slice(0, 3); // Get only the 3 most recent posts
  const latestTutorials = tutorials.slice(0, 3); // Get only the 3 most recent tutorials

  return (
    <div className="relative min-h-screen bg-white text-gray-800 font-mono">
      <JsonLd data={structuredData} />
      <ASCIIBackground />
      <div className="relative max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12 z-10">
        <div className="flex items-center gap-2 mb-8 text-purple-500">
          <Terminal className="w-5 h-5" />
          <span className="text-sm">OverNineThousand.com ~ main</span>
        </div>

        <header className="mb-10">
          <div className="text-sm text-gray-500 mb-2">→ who</div>
          <h1 className="text-4xl font-bold mb-2 text-purple-500">OverNineThousand</h1>
          <p className="text-xl text-purple-400 mb-6">Freelance Fullstack Development</p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              I&apos;m Joseph Sebastian Ruiz, a fullstack developer freelancing from Los Angeles. I build Flutter mobile
              apps, .NET back-end APIs, and Angular and React websites. My own game,{" "}
              <a href={PSYCHIC_TOURNAMENT.url} className="text-purple-600 hover:text-purple-700 underline underline-offset-2">
                Psychic Tournament
              </a>
              , is out now on Google Play and the App Store, and I&apos;m now building{" "}
              <a href={POSTQUAKE.url} className="text-purple-600 hover:text-purple-700 underline underline-offset-2">
                PostQuake
              </a>
              , a tool that turns a link to any app, website or online shop into a week of short-form posts. My newest,{" "}
              <a href={CHATACOMBS.url} className="text-purple-600 hover:text-purple-700 underline underline-offset-2">
                Chatacombs
              </a>
              , is a battle royale you play from YouTube live chat.
            </p>
            <div className="flex gap-3">
              <SocialLink
                icon={<GitHubLogoIcon className="size-5" />}
                href="https://github.com/supasebie"
                label="My github link"
              />
              <SocialLink
                icon={<LinkedInLogoIcon className="size-5" />}
                href="https://www.linkedin.com/in/jsebastianruiz/"
                label="My Linkedin link"
              />
            </div>
          </div>
        </header>

        <section className="mb-12" aria-labelledby="launch-heading">
          <h2 className="text-sm text-gray-500 mb-4">→ news --latest</h2>
          <div className="relative overflow-hidden rounded-lg border border-lime-400/60 bg-gradient-to-br from-zinc-950 via-zinc-900 to-orange-950 p-6 shadow-[0_0_48px_-18px_rgba(132,255,90,0.6)]">
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-1 font-semibold uppercase tracking-wider text-white">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                  </span>
                  Pilot tonight · ~7 PM PT
                </span>
                <time dateTime="2026-10-04" className="text-zinc-400">
                  {formatPostDate("2026-10-04")}
                </time>
              </div>
              <h3 id="launch-heading" className="text-2xl font-bold text-zinc-100 mb-1 flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-orange-400" />
                <span>
                  <span className="text-lime-400">Chat</span>acombs: Roguelike Arena
                </span>
              </h3>
              <p className="text-sm font-semibold text-orange-400 mb-3">A battle royale you play from YouTube live chat.</p>
              <p className="text-zinc-300 leading-relaxed mb-5">
                Type <code className="text-lime-300">join</code> and a hero with your name drops into a collapsing dungeon to
                fight the rest of chat until one is left. A custom-built vertical stream for the YouTube Shorts feed: I made
                the game, the overlay and the control room. The first public pilot goes live tonight around 7 PM Pacific.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <a
                  href={CHATACOMBS.liveUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition-colors"
                >
                  Watch &amp; play on YouTube →
                </a>
                <Link
                  href={CHATACOMBS_POST}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-600 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-lime-300 hover:border-lime-400 transition-colors"
                >
                  How I built it
                </Link>
                <a
                  href={CHATACOMBS.url}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-600 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-lime-300 hover:border-lime-400 transition-colors"
                >
                  Commands &amp; wiki
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2 rounded-lg border border-orange-200 bg-white/80 px-4 py-3 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
            <span className="inline-flex items-center gap-2 font-semibold text-red-500">
              <Activity className="h-4 w-4" />
              PostQuake early access is open
            </span>
            <span className="flex flex-wrap gap-x-3 gap-y-1">
              <a href={POSTQUAKE.earlyAccessUrl} className="text-gray-600 underline underline-offset-2 hover:text-red-500">
                Get early access
              </a>
              <Link href={POSTQUAKE_POST} className="text-gray-600 underline underline-offset-2 hover:text-red-500">
                Announcement
              </Link>
              <a href={POSTQUAKE.outputUrl} className="text-gray-600 underline underline-offset-2 hover:text-red-500">
                Real output
              </a>
            </span>
          </div>

          <div className="mt-4 flex flex-col gap-2 rounded-lg border border-purple-200 bg-white/80 px-4 py-3 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
            <span className="inline-flex items-center gap-2 font-semibold text-purple-600">
              <Smartphone className="h-4 w-4" />
              Psychic Tournament is live on Android &amp; iOS
            </span>
            <span className="flex flex-wrap gap-x-3 gap-y-1">
              <a href={PSYCHIC_TOURNAMENT.googlePlayUrl} className="text-gray-600 underline underline-offset-2 hover:text-purple-600">
                Google Play
              </a>
              <a href={PSYCHIC_TOURNAMENT.appStoreUrl} className="text-gray-600 underline underline-offset-2 hover:text-purple-600">
                App Store
              </a>
              <Link href={LAUNCH_POST} className="text-gray-600 underline underline-offset-2 hover:text-purple-600">
                Launch post
              </Link>
            </span>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-sm text-gray-500 mb-4">→ navigation --list</h2>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex flex-col gap-4">
              <Button href="mailto:overninethousanddevelopment@gmail.com" icon={<EnvelopeClosedIcon />} >
                contact --email
                <br />
                <span className="text-[#858585]">Get in touch via email</span>
              </Button>
              <Button href="/tools" icon={<BoxIcon className="size-4" />} variant="secondary">
                open --tools
                <br />
                <span className="text-[#858585]">Check out my developer tools</span>
              </Button>
              <Button href="/blog" icon={<BoxIcon className="size-4" />} variant="secondary">
                open --blog
                <br />
                <span className="text-[#858585]">View all my blog posts</span>
              </Button>
              {/* <Button href="/tutorials" icon={<BoxIcon className="size-4" />} variant="secondary">
                open --tutorials
                <br />
                <span className="text-[#858585]">Check out my coding tutorials</span>
              </Button> */}
              {/* <Button href="/hooks" icon={<BoxIcon className="size-4" />} variant="secondary">
                open --react hooks
                <br />
                <span className="text-[#858585]">Check out my react hooks collection</span>
              </Button> */}
              {/* <Button href="/apps" icon={<BoxIcon className="size-4" />} variant="secondary">
                open --apps
                <br />
                <span className="text-[#858585]">Check out my web apps collection</span>
              </Button> */}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-sm text-gray-500 mb-4">→ featured-projects --list</h2>
          <div className="space-y-8">
            <CardSpotlight
              title="Chatacombs"
              year="2026"
              status="In Progress"
              link={CHATACOMBS.url}
              description="A roguelike battle royale played from YouTube live chat, built as a vertical stream for the Shorts feed. Viewers type join and a hero with their name fights through a collapsing dungeon until one is left. A deterministic TypeScript engine in a Web Worker, a 1080×1920 canvas overlay captured by OBS, and a control room that keeps the show running unattended."
              type="personal"
              projectType="other"
              techs={["TypeScript", "Canvas", "Vite", "YouTube API", "OBS"]}
            />

            <CardSpotlight
              title="PostQuake"
              year="2026"
              status="Early Access"
              link={POSTQUAKE.url}
              description="Short-form marketing for anything with a link. Paste an app's store listing or any website (a web app, online shop, newsletter or portfolio) and PostQuake researches who it's for, writes hooks in their own words, and renders a week of TikTok-style slideshows and videos for TikTok, Reels, Shorts and Facebook. Every batch is checked for repeats, AI imagery is labelled, and music is licensed."
              type="personal"
              projectType="app"
              techs={["TypeScript", "Node.js", "Supabase"]}
            />

            <CardSpotlight
              title="PsychicTournament"
              year="2026"
              status="Live"
              link={PSYCHIC_TOURNAMENT.url}
              description="An ESP and intuition game for Android and iOS. Three ranked games (Zener, Dowsing and Star Seed), each scored against a 20% chance baseline, with a once-a-day Daily Vision, conviction calls, global leaderboards, 400 levels and blindfold MindSight training. Built with Flutter and Supabase."
              type="personal"
              projectType="app"
              techs={["Flutter", "Dart", "Supabase"]}
            />

            <div className="rounded-lg border border-dashed border-purple-300 bg-white/70 p-6">
              <h3 className="text-purple-500 mb-2 flex items-center gap-3">
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
                Next app
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">2026</span>
              </h3>
              <div className="flex items-center gap-3 text-sm mb-4">
                <span className="text-purple-500">In Progress</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">personal</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A new app is in the works. More details are coming soon.{" "}
                <Link href="/feed.xml" className="text-purple-600 hover:text-purple-700 underline underline-offset-2">
                  Follow the blog
                </Link>{" "}
                to hear about it first.
              </p>
            </div>
          </div>
          {/* <div className="mt-6">
            <Button href="/projects" variant="secondary">
              View all projects →
            </Button>
          </div> */}
        </section>

        <section className="mb-12">
          <h2 className="text-sm text-gray-500 mb-4">→ latest-articles --list</h2>
          <div className="space-y-4">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-purple-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-purple-600 mb-2">{post.title}</h3>
                <time dateTime={post.date} className="block text-gray-500 text-xs mb-3">
                  {formatPostDate(post.date)}
                </time>
                <p className="text-gray-700 text-sm">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Button href="/blog" variant="secondary">
              Read all articles →
            </Button>
          </div>
        </section>

        {/* <section className="mb-12">
          <h2 className="text-sm text-gray-500 mb-4">→ latest-tutorials --list</h2>
          <div className="space-y-4">
            {latestTutorials.map((tutorial) => (
              <Link
                key={tutorial.id}
                href={`/tutorials/${tutorial.id}`}
                className="block bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-purple-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-purple-600 mb-2">{tutorial.title}</h3>
                <div className="flex items-center gap-3 text-gray-500 text-xs mb-3">
                  <time>
                    {new Date(tutorial.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  <span className="capitalize">{tutorial.category}</span>
                  <span>•</span>
                  <span className="capitalize">{tutorial.difficulty}</span>
                </div>
                <p className="text-gray-700 text-sm">{tutorial.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Button href="/tutorials" variant="secondary">
              View all tutorials →
            </Button>
          </div>
        </section> */}

        <Footer />

        <div className="mt-12 flex items-center gap-2 text-gray-500">
          <span>→</span>
          <div className="w-3 h-6 bg-purple-500/50 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
