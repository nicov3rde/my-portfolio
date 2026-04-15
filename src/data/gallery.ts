export type GalleryItem =
  | { type: "photo"; src: string; caption?: string; poster?: string }
  | { type: "video"; src: string; caption?: string; poster?: string }
  | { type: "writing"; title: string; excerpt: string; fullText?: string; link?: string; tags?: string[] };

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
    title: "Kudzu",
    tags: ["Fiction", "Creative Writing"],
    excerpt:
      "// Paste the opening lines of Kudzu here — this excerpt shows on the card before the reader expands",
    fullText:
      "// Paste the full Kudzu story here.\n\nUse double line breaks between paragraphs — each \\n\\n becomes its own paragraph block in the reading view.",
  },
  {
    type: "writing",
    title: "Drugs: Gateway to Misery or Portal to Unseen Creativity?",
    tags: ["Essay", "Art", "Creativity"],
    excerpt:
      "// Paste the first paragraph of the essay here — this is what shows on the card.",
    fullText:
      "// Paste the full essay here.\n\nUse double line breaks between paragraphs.",
  },
  {
    type: "writing",
    title: "The True Art of Atlanta",
    tags: ["Essay", "Art", "Atlanta", "Graffiti"],
    excerpt:
      "// Paste the opening of the essay here.",
    fullText:
      "// Paste the full essay here.\n\nUse double line breaks between paragraphs.",
  },
  {
    type: "writing",
    title: "i wish I could soak a feeling up with a sponge",
    tags: ["Poetry"],
    excerpt:
      "// Paste the first stanza or lines here.",
    fullText:
      "// Paste the full poem here.\n\nUse single line breaks (\\n) for line breaks within a stanza, double (\\n\\n) between stanzas.",
  },
  {
    type: "writing",
    title: "are we alone?",
    tags: ["Essay", "Philosophy", "Science"],
    excerpt:
      "// Paste the opening paragraph here.",
    fullText:
      "// Paste the full essay here.\n\nUse double line breaks between paragraphs.",
  },
];
