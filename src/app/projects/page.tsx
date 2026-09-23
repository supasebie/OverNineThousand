import CardSpotlight from "@/components/CardSpotLight";
import { Terminal } from "lucide-react";
import Brolt from "../brolt/page";
import SwiftTech from "../swifttech/page";
import SosPassport from "../sos-passport/page";
import Choicyful from "../choicyful/page";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Personal and client projects by OverNineThousand, including Psychic Tournament, an ESP and intuition game for Android and iOS built with Flutter and Supabase.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-white text-gray-800 font-mono">
      <div className="relative max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex items-center gap-2 mb-8 text-purple-500">
          <Terminal className="w-5 h-5" />
          <span className="text-sm">OverNineThousand.com/projects ~ main</span>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-4xl font-bold text-purple-600 mb-8">All Projects</h1>

        <div className="space-y-8">
          <CardSpotlight
            title="PsychicTournament"
            year="2026"
            status="Live"
            link="https://psychictournament.online"
            description="An ESP and intuition game, out now on Android and iOS. Three ranked games (Zener, Dowsing and Star Seed), each scored against a 20% chance baseline, with a once-a-day Daily Vision, conviction calls, global leaderboards and blindfold MindSight training. Built with Flutter and Supabase."
            type="personal"
            projectType="app"
            techs={["Flutter", "Dart", "Supabase"]}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
