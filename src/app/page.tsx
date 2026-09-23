import CardSpotlight from "@/components/CardSpotLight";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Button from "@/components/Button";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { BoxIcon, Smartphone, Sparkles } from "lucide-react";
import { Terminal } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { formatPostDate, getPosts } from "@/lib/get-blog-by-slug";
import Footer, { SocialLink } from "@/components/Footer";
import { tutorials } from "@/config/tutorials";
import ASCIIBackground from "@/components/ASCIIBackground";
import JsonLd from "@/components/JsonLd";
import { AUTHOR, PSYCHIC_TOURNAMENT, SITE_DESCRIPTION, SITE_NAME, SITE_URL, pageMetadata } from "@/lib/site";

const LAUNCH_POST = "/blog/2026-09-23-psychic-tournament-is-live-on-android-and-ios";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "OverNineThousand | Freelance Fullstack & Mobile App Developer",
    description:
      "Joseph Sebastian Ruiz: freelance fullstack developer in Los Angeles building Flutter mobile apps, .NET APIs and Angular/React websites. Maker of Psychic Tournament, now on Android and iOS.",
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
              , is out now on Google Play and the App Store.
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
          <div className="relative overflow-hidden rounded-lg border border-purple-300 bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-6 shadow-[0_0_40px_-18px_rgba(168,85,247,0.8)]">
            <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-600 px-2.5 py-1 font-semibold uppercase tracking-wider text-white">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Just launched
              </span>
              <time dateTime="2026-09-23" className="text-gray-500">
                {formatPostDate("2026-09-23")}
              </time>
            </div>
            <h3 id="launch-heading" className="text-2xl font-bold text-purple-600 mb-2">
              Psychic Tournament is live on Android &amp; iOS
            </h3>
            <p className="text-gray-700 leading-relaxed mb-5">
              My ESP and intuition game is out now. Zener cards, Dowsing and Star Seed, each scored honestly against a
              20% chance baseline, plus a Daily Vision, global leaderboards and blindfold MindSight training. Free, with no
              account needed.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a
                href={PSYCHIC_TOURNAMENT.googlePlayUrl}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-purple-700 transition-colors"
              >
                <Smartphone className="h-4 w-4" />
                Get it on Google Play
              </a>
              <a
                href={PSYCHIC_TOURNAMENT.appStoreUrl}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-purple-700 transition-colors"
              >
                <Smartphone className="h-4 w-4" />
                Download on the App Store
              </a>
              <Link
                href={LAUNCH_POST}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-purple-300 bg-white px-4 py-2.5 text-sm font-semibold text-purple-600 hover:border-purple-500 transition-colors"
              >
                Read the launch post →
              </Link>
            </div>
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
