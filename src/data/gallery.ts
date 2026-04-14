export type GalleryItem =
  | { type: "photo"; src: string; caption?: string; poster?: string }
  | { type: "video"; src: string; caption?: string; poster?: string }
  | { type: "writing"; title: string; excerpt: string; fullText?: string; link?: string };

export const galleryItems: GalleryItem[] = [
  // ─── Photos ─────────────────────────────────────────────────────────────
  { type: "photo", src: "/gallery/BCD.jpg" },
  { type: "photo", src: "/gallery/agave.jpg" },
  { type: "photo", src: "/gallery/bird.jpg" },
  { type: "photo", src: "/gallery/friends.jpg" },
  { type: "photo", src: "/gallery/gabby.jpg" },
  { type: "photo", src: "/gallery/gate.jpg" },
  { type: "photo", src: "/gallery/kamal.png" },
  { type: "photo", src: "/gallery/love.jpg" },
  { type: "photo", src: "/gallery/quetz.png" },
  { type: "photo", src: "/gallery/rainer.jpeg" },
  { type: "photo", src: "/gallery/stacy.jpg" },
  { type: "photo", src: "/gallery/stone man.jpg" },
  { type: "photo", src: "/gallery/union.jpg" },
  { type: "photo", src: "/gallery/untion.jpg" },

  // ─── Writing ─────────────────────────────────────────────────────────────
  {
    type: "writing",
    title: "On Making Something That Lasts",
    excerpt:
      "The best creative work doesn't ask for your attention. It just sits there until you can't ignore it anymore. I've been thinking about what separates the stuff that sticks from the stuff that disappears the moment the feed refreshes...",
    fullText:
      "The best creative work doesn't ask for your attention. It just sits there until you can't ignore it anymore.\n\nI've been thinking about what separates the stuff that sticks from the stuff that disappears the moment the feed refreshes. It's not budget. It's not gear. It's not even talent, really. It's the willingness to stay in the room with an idea long enough to find out what it actually is.\n\nMost creative work dies in the gap between the first exciting idea and the hard part — the part where the idea meets reality and reality wins. The lighting isn't right. The location fell through. The subject is nervous. The edit isn't coming together the way you heard it in your head.\n\nThe people who make things that last are the ones who don't leave when that happens. They stay, adjust, and find what the work is actually trying to be — which is almost never what you thought it was at the start.\n\nThat's the whole job.",
  },
];
