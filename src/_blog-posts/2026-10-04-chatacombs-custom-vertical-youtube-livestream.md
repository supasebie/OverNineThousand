---
title: "Chatacombs: Hosting a Custom-Built Vertical YouTube Livestream"
date: "2026-10-04"
excerpt: "Chatacombs is a roguelike battle royale you play from YouTube live chat. Type join, get a hero with your name, and fight the rest of chat until one is left. I built the game, the overlay and the control room myself, and the first public pilot goes live tonight around 7 PM Pacific."
coverImage: "/images/blog/chatacombs/cover.png"
coverAlt: "Chatacombs: Roguelike Arena. A glowing green and bone-white gothic logo under an orange @ chat bubble, with “Live on YouTube · chatacombs.com” beneath."
tags: ["Chatacombs", "YouTube Live", "YouTube Shorts", "livestreaming", "interactive streams", "OBS", "TypeScript", "indie developer"]
---

**Chatacombs is a battle royale you play from YouTube live chat. Type `join`, a hero with your name drops into a collapsing dungeon, and it fights everyone else in chat until one is left. The first public pilot goes live tonight, October 4, around 7 PM Pacific, on [youtube.com/@Chatacombs](https://www.youtube.com/@Chatacombs/live).**

That's the third launch in two weeks, after [Psychic Tournament](/blog/2026-09-23-psychic-tournament-is-live-on-android-and-ios) and [PostQuake](/blog/2026-09-29-introducing-postquake). This is the new app I kept hinting at. It just turned out not to be an app.

## The idea

Most livestreams ask viewers to watch. I wanted one where chat *is* the cast. Nobody downloads anything, makes an account or needs a controller: if you can type in YouTube chat, you're in the game.

And I wanted it vertical. YouTube shows live streams in the Shorts feed, so a phone viewer can swipe straight into a match, type `join` and be playing a few seconds later. Most interactive streams are built for a 16:9 desktop player. Chatacombs is built for a phone first.

## How a round works

Viewers queue up in the lobby, then every hero drops in at level 1 with basic gear, in a dungeon far bigger than any one screen:

- **Pick a hero, or don't.** `join` gets you a random class. `join mage`, `join dwarf rogue cautious` and everyday words like barbarian, healer or assassin all work. There are thirteen classes, each with abilities that unlock as you level and an ultimate from level 5.
- **Level to 50.** Heroes fight on their own, exploring, looting and picking fights based on the style you chose. Monsters get tougher the farther out you go. Bosses guard legendaries. Killing a rival who outlevels you jumps you several levels.
- **The dungeon collapses.** After two minutes the safe zone starts shrinking, pushing everyone together. The last hero standing wins.
- **Chat plays even without a hero.** `cheer NAME` heals a hero once enough of chat agrees, `boo NAME` slows them down, `bounty NAME` puts a price on their head, `drop` fills a meter for a supply crate, and `pick NAME` calls the winner.

Every round resets to level 1, so a newcomer has the same shot as someone who's been watching for an hour. Nothing that affects gameplay is for sale, and nothing ever will be.

## Building the stream itself

A YouTube stream can't run a game by itself. Chatacombs is three pieces I built myself:

1. **The game.** A deterministic TypeScript simulation that runs in a Web Worker: the arena, the collapse, the AI that drives every hero, the loot, the bosses and the ground effects (water puts out fire, frost freezes ponds, lightning travels through water).
2. **The overlay.** A web page that renders the match onto a 1080×1920 canvas: a camera that follows the action, name tags, lighting, damage numbers and loot beams, and a zoomed-out tactical view when the fight is spread across the map. OBS captures it as a browser source and sends it to YouTube.
3. **The control room.** An operator panel docked inside OBS, with a health verdict, round settings, manual controls and a "while you were away" log.

Chat comes in through the YouTube Data API: the overlay finds the live broadcast, reads chat messages and turns them into commands.

### Designing for a phone

Vertical changes everything. The Shorts player puts its buttons down the right edge and its title and chat across the bottom, so the HUD keeps both clear. Text is sized for a phone held at arm's length. Commands work without the `!`, because nobody wants to hunt for punctuation on a phone keyboard. And a round caps at 40 heroes, which is as many as stays readable on a phone screen.

### Built to run unattended

The goal is a show I can start and walk away from. The overlay repairs itself: it restarts hung rounds, reconnects chat, paces itself to stay inside the API quota, and refreshes on a schedule between rounds without losing the queue. Hooked up to OBS, the control room can also watch the stream, restart it if it drops and end it at a set time. When I come back, it tells me whether everything ran on its own and what it fixed while I was away.

## The pilot

Tonight's stream is a pilot, and I'm calling it that on purpose. Here's what's proven and what isn't:

- **Tested:** the game, the vertical overlay, OBS capture on the streaming computer, and the control room talking to the overlay. Bot-only test matches of up to 100 heroes run in a sandbox.
- **Proven tonight:** real chat from real phones, how the chat quota holds up over hours, audio, and readability in the actual Shorts feed. A brand-new channel has to wait 24 hours before it can go live, and that wait ends at 6:45 PM Pacific. So an unlisted rehearsal comes first, then the public stream around 7.

Rounds fill up with bots when there aren't enough people, so there's always a match to drop into. If something breaks, I'll fix it and write it up here.

## Come play

- **Watch and play:** [youtube.com/@Chatacombs/live](https://www.youtube.com/@Chatacombs/live), tonight around 7 PM Pacific. On your phone, swipe in and type `join`.
- **Learn the game:** [chatacombs.com](https://chatacombs.com) has the commands, and the [wiki](https://chatacombs.com/wiki/) covers every class, ability, legendary, boss and chat power.
- **Don't miss the next one:** [subscribe on YouTube](https://www.youtube.com/@Chatacombs?sub_confirmation=1).

If you stream and want to run something like this on your own channel, or you just have ideas for the arena, my inbox is at [overninethousanddevelopment@gmail.com](mailto:overninethousanddevelopment@gmail.com).

See you in the catacombs. Type `join`.
