import CardSpotlight from "@/components/CardSpotLight";
import { Terminal } from "lucide-react";
import { Metadata } from "next";
import Brolt from "../brolt/page";
import SwiftTech from "../swifttech/page";
import SosPassport from "../sos-passport/page";
import Choicyful from "../choicyful/page";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects - OverNineThousand",
  description: "A collection of my personal and client projects in web development and software engineering.",
};

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
            year="2025"
            status="In Progress"
            link="https://psychictournament.online"
            description="Psychic Tournament Online is a Zener Card game with dynamic stat tracking and daily/weekly leaderboards. Think you have what it takes to score against other psychics online? Give it a try!"
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
