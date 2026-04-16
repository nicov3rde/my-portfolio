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
    title: "Kudzu",
    tags: ["Fiction", "Creative Writing"],
    excerpt:
      "I guess I noticed when it grabbed my foot, although I had seen it much before. Squeezing me, growing tighter by the day.",
    fullText:
      "I guess I noticed when it grabbed my foot, although I had seen it much before. Squeezing me, growing tighter by the day.\n\n// Add the rest of the Kudzu story here. Use double line breaks between paragraphs.",
  },
  {
    type: "writing",
    title: "Drugs: Gateway to Misery or Portal to Unseen Creativity?",
    tags: ["Essay", "Art", "Creativity"],
    excerpt:
      "Throughout history, illicit substances have shaped artistic vision in profound ways. From opium-fueled Paris salons to the psychedelic revolution of the 1960s, artists have sought chemical pathways to innovation.",
    fullText:
      "Throughout history, illicit substances have shaped artistic vision in profound ways. From opium-fueled Paris salons to the psychedelic revolution of the 1960s, artists have sought chemical pathways to innovation.\n\n// Add the rest of the essay here. Use double line breaks between paragraphs.",
  },
  {
    type: "writing",
    title: "The True Art of Atlanta",
    tags: ["Essay", "Art", "Atlanta", "Graffiti"],
    excerpt:
      "While walking in Atlanta about a month ago, I saw a man spray-painting a building on Auburn Avenue. He was working on a mural commissioned by the building's owners.",
    fullText:
      "While walking in Atlanta about a month ago, I saw a man spray-painting a building on Auburn Avenue. He was working on a mural commissioned by the building's owners.\n\n// Add the rest of the essay here. Use double line breaks between paragraphs.",
  },
  {
    type: "writing",
    title: "i wish I could soak a feeling up with a sponge",
    tags: ["Poetry"],
    excerpt:
      "to relive at a different time\na moment that could last forever",
    fullText:
      "to relive at a different time\na moment that could last forever\n\n// Add the rest of the poem here. Use single line breaks within a stanza, double line breaks between stanzas.",
  },
  {
    type: "writing",
    title: "are we alone?",
    tags: ["Essay", "Philosophy", "Science"],
    excerpt:
      "All throughout mankind's existence we have looked to the stars for proof of other life out there in the universe.",
    fullText:
      "All throughout mankind's existence we have looked to the stars for proof of other life out there in the universe.\n\n// Add the rest of the essay here. Use double line breaks between paragraphs.",
  },
];
