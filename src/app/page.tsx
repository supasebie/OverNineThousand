import CardSpotlight from "@/components/CardSpotLight";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Button from "@/components/Button";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { BoxIcon } from "lucide-react";
import { Terminal } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/get-blog-by-slug";
import Footer, { SocialLink } from "@/components/Footer";
import { tutorials } from "@/config/tutorials";
import ASCIIBackground from "@/components/ASCIIBackground";

export const metadata: Metadata = {
  title: "OverNineThousand - Freelance Fullstack Development",
  description:
    "Experienced fullstack app developer with expertise in Flutter Mobile Apps, .Net Back End, and Angular/React Front End. Currently freelancing from Los Angeles California. Check PsychicTournament.Online on the Google Play Store!",
  openGraph: {
    type: "website",
    title: "OverNine housand - Fullstack Development",
    description:
      "Experienced fullstack app developer with expertise in Flutter Mobile Apps, .Net Back End, and Angular/React Front End. Currently freelancing from Los Angeles California. Check PsychicTournament.Online on the Google Play Store!",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@",
  },
};

export default function Home() {
  const latestPosts = getPosts().slice(0, 3); // Get only the 3 most recent posts
  const latestTutorials = tutorials.slice(0, 3); // Get only the 3 most recent tutorials

  return (
    <div className="relative min-h-screen bg-white text-gray-800 font-mono">
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
              Experienced fullstack app developer with expertise in Flutter Mobile Apps, .Net Back End API development, and Angular/React Front End Websites. Currently freelancing from Los Angeles California. Check PsychicTournament.Online on the Google Play Store!
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
              year="2025"
              status="In Progress"
              link="https://psychictournament.Online"
              description="Psychic Tournament is a Zener Card App with daily and monthly leaderboards. Dynamic stat tracking with verbose session outcomes plus filtering lets you keep track of your progress. Think you have what it takes to compete with other Psychics online? Give it a try!"
              type="personal"
              projectType="app"
              techs={["Flutter", "Dart", "Supabase"]}
            />
          </div>
          {/* <div className="mt-6">
            <Button href="/projects" variant="secondary">
              View all projects →
            </Button>
          </div> */}
        </section>

        {/* <section className="mb-12">
          <h2 className="text-sm text-gray-500 mb-4">→ latest-articles --list</h2>
          <div className="space-y-4">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-purple-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-purple-600 mb-2">{post.title}</h3>
                <div className="text-gray-500 text-xs mb-3">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <p className="text-gray-700 text-sm">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Button href="/blog" variant="secondary">
              Read all articles →
            </Button>
          </div>
        </section> */}

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
