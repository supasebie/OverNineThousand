import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Tempo Tap - Online BPM Counter & Music Tempo Finder",
  description:
    "Free online tool to find the tempo (BPM) of any song by tapping along. Perfect for musicians, DJs, dancers, and music producers. Features a visual rhythm indicator and accurate BPM counter.",
  keywords: [
    "bpm counter",
    "tempo finder",
    "music tempo",
    "rhythm calculator",
    "beats per minute",
    "tempo detector",
    "music bpm",
    "tap tempo",
    "metronome",
    "song tempo",
    "music speed",
    "dj tools",
    "music production",
    "dance tempo",
    "rhythm finder",
  ],
  path: "/apps/tempo-tap",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
