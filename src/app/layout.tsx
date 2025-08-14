import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "OverNineThousand | Freelance Fullstack Development",
  description: "Portfolio of OverNineThousand, freelance fullstack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SpeedInsights />
        <Providers>{children}</Providers>
        {process.env.NEXT_PUBLIC_GA_ENABLED === "true" && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />}
      </body>
    </html>
  );
}
