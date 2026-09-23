---
title: "Psychic Tournament Is Live on Android and iOS"
date: "2026-09-23"
excerpt: "Psychic Tournament, my ESP and intuition game, is out now on Google Play and the App Store. Here's what's in 1.0, what I learned shipping a Flutter app to both stores, what's coming next, and a first word about my next app."
coverImage: "/images/blog/psychic-tournament/cover.png"
coverAlt: "Psychic Tournament on three phones: the Dowsing sonar field, the main menu, and the Star Seed constellation, under the line “Trust your first instinct.”"
tags: ["Psychic Tournament", "Flutter", "Supabase", "mobile app launch", "ESP test", "Zener cards", "indie game"]
---

**Psychic Tournament is out now, free on [Google Play](https://play.google.com/store/apps/details?id=com.overninethousand.psychictournament) and the [App Store](https://apps.apple.com/us/app/psychic-tournament/id6806195000).**

I made the first commit on July 23, 2025. Three hundred and seventy-one commits later, the app I've been building in the evenings is on two app stores. This post covers what it is, what's in the 1.0, a few things I learned shipping it, and what comes next, including a new app I've started on.

## What Psychic Tournament is

It's an ESP and intuition game. You make 25 calls a session, and each call has five equally likely answers. Pure guessing averages five hits, or 20%, and the app draws that line on every result so you always know whether you're above chance, at it, or below it.

That honesty was the design brief from day one. Plenty of apps in this category tell you you're gifted after a lucky round. I wanted one that was fun to open and that told you the truth about your results.

There are three ranked games:

- **Zener**, the classic ESP card test. Call circle, cross, waves, square or star before the card flips.
- **Dowsing**. Five covered positions on a sonar field. Tap where you feel the target.
- **Star Seed**, a precognition game. Name one of five gates, then watch a glowing seed bounce down through a constellation and land in one.

![A Zener hit: the waves card revealed with a gold Hit! banner](/images/blog/psychic-tournament/zener-hit.webp)

There's also **MindSight**, a blindfold training mode. This kind of practice normally needs a partner to hold up the cards, so the app does the partner's job. It picks a colour, a shape or a word and gives you the answer as sound and vibration, so you can practise alone with the blindfold on.

## What's in 1.0

Beyond the three games, the launch build has:

- **Daily Vision:** one attempt per game per day, with no retries and its own leaderboard. Everyone gets exactly one shot, so someone who plays two hundred times a day has no advantage.
- **Conviction calls:** five per session. Arm one when an impression feels different. Land it for a big XP bonus; miss it and it costs nothing. The app tracks those calls separately, because the interesting question isn't just whether you beat chance but whether you know *when* you're going to.
- **Levels and cosmic ranks:** 400 levels, from *Observer* up to *Universal Sovereign*, with XP for hits, streaks and personal bests.
- **Global leaderboards** for every game: today, this month and all time. Score 11 or better and you're on the board, which happens about once in 180 sessions by luck alone.
- **Player profiles** with 45 achievements, every one earned by playing well rather than by playing a lot.
- **Offline first:** every game, your full history and your statistics work with no connection and no account.

![Session review: 11 of 25 against a 20% chance baseline, with a turn-by-turn signal map](/images/blog/psychic-tournament/zener-results.webp)

## Things I learned shipping it

**Honest odds need honest code.** Zener originally dealt a balanced 25-card deck, five of each symbol, the way the classic experiments did. The problem is that every card is revealed right after you call it. That makes the deck countable: calling whichever symbol has the most cards left scores about 35% instead of 20%. For an app built around the chance baseline, that was a real bug, and I fixed it before launch. Every card is now drawn independently. Star Seed has the same guarantee: the landing gate is chosen before you call, and your call never touches the physics.

**Flutter held up on both platforms.** One codebase covers Android phones, iPhones and iPads. On iPad the whole interface scales up rather than leaving a phone-sized column in the middle. Audio runs through `flutter_soloud`, which gave me the low latency I needed for hit sounds.

The biggest single win before launch was also audio. The download was 102 MB, and 86 MB of that was sound: effects mastered at 96 kHz 24-bit stereo, and a 16.5 MB WAV for the high-score anthem, none of which survives a phone speaker. Re-encoding everything as Ogg Vorbis at 44.1 kHz brought the download down to 41.8 MB, and every music loop still wraps to the exact sample. MindSight's spoken answers use on-device speech recognition.

**Supabase does the online parts.** Sign in with Google or Apple, leaderboards, public profiles and push notifications for new high scores all run on Supabase. Session history stays in SQLite on the device. That split is why the app works fully offline: the online features sit on top, and if any of them fail, the games keep working.

**The last 10% is store paperwork.** A privacy label, an in-app account deletion flow plus a [public deletion page](https://psychictournament.online/account-deletion.html) for Google Play, `app-ads.txt` so AdMob can verify the app, username moderation before names reach a public leaderboard, and a round of questions from App Review. None of it is glamorous, and all of it is required.

## What's next for Psychic Tournament

Two new modes are in development:

- **Telepathy (realtime multiplayer).** Every game becomes a two-player test. One player sees the outcome and sends it; the other tunes in and calls it. In Star Seed, the sender chooses where to drop the seed and watches it land, then sends the result. The receiver picks the gate they feel coming through. Get the message across and you both earn the reward.
- **Mind Move (psychokinesis).** Call one of the four edges of the screen, and a comet sets off in a random direction. Your job is to bend its path toward the edge you called. If it's slipping out of your influence, tap to freeze it and relaunch it in a new direction. You get three resets per session.

Both will arrive as free updates.

## One more thing: a new app is in the works

Psychic Tournament won't be the only app out of OverNineThousand. I've started on the next one, and I'll share more details here soon. If you want to hear about it first, the [RSS feed](/feed.xml) is the easiest way to follow along.

## Try it

Psychic Tournament is free, with no account needed:

- [Get it on Google Play](https://play.google.com/store/apps/details?id=com.overninethousand.psychictournament)
- [Download it on the App Store](https://apps.apple.com/us/app/psychic-tournament/id6806195000)
- [See the full tour at psychictournament.online](https://psychictournament.online/)

If you play a session, I'd love to hear how it went, whether that's a bug, an idea, or a streak you're proud of. My inbox is at [overninethousanddevelopment@gmail.com](mailto:overninethousanddevelopment@gmail.com).

Trust your first instinct.
