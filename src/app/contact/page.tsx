import { Terminal } from "lucide-react";
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";

import { SocialLink } from "@/components/Footer";
import Button from "@/components/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - OverNineThousand - Freelance Fullstack Development",
};

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-white text-gray-800 font-mono">
      <div className="relative max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex items-center gap-2 mb-8 text-purple-500">
          <Terminal className="w-5 h-5" />
          <span className="text-sm">OverNineThousand.com/contact ~ main</span>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-4xl font-bold text-purple-600 mb-8">Contact</h1>

        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Let&apos;s Connect!</h2>
          <p className="text-gray-600 mb-6">
            I&apos;d love to hear from you! Whether you have a project in mind, a question about my work, or just want
            to say hello, feel free to reach out.
          </p>

          <div className="flex flex-col gap-6">
            <Button href="mailto:overninethousanddevelopment@gmail.com" icon={<EnvelopeClosedIcon />}>
              contact --email
              <br />
              <span className="text-[#858585]">overninethousanddevelopment@gmail.com</span>
            </Button>

            <div className="flex justify-center gap-6">
              <SocialLink
                icon={<GitHubLogoIcon className="size-5" />}
                href="https://github.com/supasebie"
                label="GitHub"
              />
              <SocialLink
                icon={<LinkedInLogoIcon className="size-5" />}
                href="https://www.linkedin.com/in/jsebastianruiz/"
                label="LinkedIn"
              />
              {/* <SocialLink
                icon={<TwitterLogoIcon className="size-5" />}
                href="https://twitter.com/supasebie"
                label="Twitter"
              /> */}
            </div>
          </div>
        </Card>

        <Footer />

        <div className="mt-12 flex items-center gap-2 text-gray-500">
          <span>→</span>
          <div className="w-3 h-6 bg-purple-500/50 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
