export type GalleryItem =
  | { type: "photo"; src: string; caption?: string; poster?: string }
  | { type: "video"; src: string; caption?: string; poster?: string }
  | { type: "writing"; title: string; excerpt: string; fullText?: string; link?: string; tags?: string[] };

export const galleryItems: GalleryItem[] = [
  // ─── Photos ─────────────────────────────────────────────────────────────
  { type: "photo", src: "/gallery/2.png" },
  { type: "photo", src: "/gallery/3.png" },
  { type: "photo", src: "/gallery/4.png" },
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
    title: "Instagram Marketing Guide",
    tags: ["Marketing", "Instagram", "Social Media", "Guide"],
    excerpt:
      "So you want to have the best marketing videos on Instagram? I got you. Here are the 6 components of every viral Reel.",
    link: "/writing/instagram-marketing-guide",
  },
  {
    type: "writing",
    title: "Kudzu",
    tags: ["Fiction", "Creative Writing"],
    excerpt:
      "I guess I noticed when it grabbed my foot, although I had seen it much before. Squeezing me, growing tighter by the day.",
    link: "/writing/kudzu",
  },
  {
    type: "writing",
    title: "Drugs: Gateway to Misery or Portal to Unseen Creativity?",
    tags: ["Essay", "Art", "Creativity"],
    excerpt:
      "Throughout history, illicit substances have shaped artistic vision in profound ways. From opium-fueled Paris salons to the psychedelic revolution of the 1960s, artists have sought chemical pathways to innovation.",
    link: "/writing/drugs-and-creativity",
  },
  {
    type: "writing",
    title: "The True Art of Atlanta",
    tags: ["Essay", "Art", "Atlanta", "Graffiti"],
    excerpt:
      "While walking in Atlanta about a month ago, I saw a man spray-painting a building on Auburn Avenue. He was working on a mural commissioned by the building's owners.",
    link: "/writing/true-art-of-atlanta",
  },
  {
    type: "writing",
    title: "i wish I could soak a feeling up with a sponge",
    tags: ["Poetry"],
    excerpt: "to relive at a different time / a moment that could last forever",
    link: "/writing/soak-a-feeling",
  },
  {
    type: "writing",
    title: "are we alone?",
    tags: ["Essay", "Philosophy", "Science"],
    excerpt:
      "All throughout mankind's existence we have looked to the stars for proof of other life out there in the universe.",
    link: "/writing/are-we-alone",
  },
  {
    type: "writing",
    title: "Marketing Research: Effects of AI on Coursework",
    tags: ["Research", "AI", "Marketing", "GSU"],
    excerpt:
      "A marketing research study examining how AI tools are reshaping academic work at Georgia State University.",
    link: "/writing/ai-and-coursework",
  },
];
