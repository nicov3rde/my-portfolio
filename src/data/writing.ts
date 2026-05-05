export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "callout"; label: string; items: string[] }
  | { type: "stat"; value: string; label: string }
  | { type: "divider" }
  | { type: "note"; text: string };

export interface WritingPiece {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  category: "essay" | "fiction" | "poetry" | "guide" | "research";
  coAuthors?: string[];
  publication?: string;
  description: string; // for SEO
  content: Block[];
}

export const writingPieces: WritingPiece[] = [
  // ─── Instagram Marketing Guide ───────────────────────────────────────────
  {
    slug: "instagram-marketing-guide",
    title: "Instagram Marketing Guide",
    excerpt:
      "So you want to have the best marketing videos on Instagram? I got you. Here are the 6 components of every viral Reel.",
    tags: ["Marketing", "Instagram", "Social Media", "Guide"],
    date: "2026",
    category: "guide",
    description:
      "The 6 components of every viral Reel — a free Instagram marketing guide by Nico Verde.",
    content: [
      { type: "p", text: "So you want to have the best marketing videos on Instagram? I got you. Here are the 6 components of every viral Reel." },
      { type: "divider" },
      { type: "h2", text: "01. The Hook" },
      { type: "h3", text: "You have 1 second. Use it." },
      { type: "p", text: "The hook is the first frame — the first word, the first visual, the first sound. If it doesn't stop someone mid-scroll, nothing else matters." },
      { type: "p", text: "A great hook creates a pattern interrupt. Something unexpected. A bold claim. A question that demands an answer. A visual that makes no sense until you keep watching." },
      { type: "p", text: "The hook isn't just your opening line. It's your thumbnail, your first frame, the text on screen, and your audio — all working together to make someone stop." },
      { type: "callout", label: "Copy + Tweak These", items: [
        "\"Nobody talks about this but...\"",
        "\"Stop doing [X] if you want [result]\"",
        "\"I tried this for 30 days and here's what happened\"",
        "\"This is what [industry] doesn't want you to know\"",
        "\"POV: You finally figured out [thing]\"",
        "\"The reason your [content] isn't working\"",
      ]},
      { type: "divider" },
      { type: "h2", text: "02. The Value" },
      { type: "h3", text: "Give them a reason to stay." },
      { type: "p", text: "After the hook, the viewer is asking one question: what's in it for me?" },
      { type: "p", text: "Your value is the substance of the video — the information, entertainment, or emotion you deliver. It has to be real. Audiences can smell filler from a mile away." },
      { type: "p", text: "Keep it tight. Every second should earn its place. If you can cut it without losing meaning, cut it. The best Reels deliver disproportionate value for their length — that's what gets saved and shared." },
      { type: "callout", label: "Copy + Tweak These", items: [
        "\"Here are the 3 things I wish I knew before [X]\"",
        "\"Watch this before you spend money on [Y]\"",
        "\"The exact process I use to [result] in [timeframe]\"",
      ]},
      { type: "divider" },
      { type: "h2", text: "03. The Visual" },
      { type: "h3", text: "It has to look intentional." },
      { type: "p", text: "You don't need a cinema camera. You need good light, a stable shot, and a clean frame." },
      { type: "p", text: "Natural light is your best friend. Film near a window, face the light source, and avoid shooting against a bright background. A $20 ring light beats a $2,000 camera in bad lighting every time." },
      { type: "p", text: "Framing matters. Don't center yourself by default — follow the rule of thirds, leave breathing room, and make sure there's nothing distracting in your background. Movement adds energy. Slow push-ins, quick cuts, dynamic B-roll — motion keeps eyes on screen." },
      { type: "callout", label: "Copy + Tweak These", items: [
        "Try filming in front of a window during golden hour — the light does the work",
        "Use B-roll cutaways to break up talking-head sequences",
        "Keep your background simple: clean wall, branded corner, or relevant environment",
      ]},
      { type: "divider" },
      { type: "h2", text: "04. The Audio" },
      { type: "h3", text: "Bad audio kills good video. Every time." },
      { type: "p", text: "Viewers will forgive mediocre visuals. They will not forgive bad audio." },
      { type: "p", text: "Invest in a basic lapel mic or a directional microphone. The built-in phone mic is fine outdoors with no wind — indoors in a small room, it picks up everything." },
      { type: "p", text: "Music matters. The right trending audio can multiply your reach because Instagram actively promotes Reels using trending sounds. Use audio that matches the energy of your content, not just whatever's popular." },
      { type: "callout", label: "Copy + Tweak These", items: [
        "Search \"trending audio\" on Instagram weekly and save sounds before they peak",
        "Use music at 20-30% volume under voiceover — present but not competing",
        "Start your Reel with audio already playing — don't let it ramp up",
      ]},
      { type: "divider" },
      { type: "h2", text: "05. The CTA" },
      { type: "h3", text: "Tell people exactly what to do next." },
      { type: "p", text: "Every Reel needs a call to action. Not because it's a formula — because people genuinely need direction." },
      { type: "p", text: "The best CTAs feel natural, not desperate. They connect directly to the value you just delivered. Specificity wins. \"Follow for more\" is weak. \"Follow if you want to grow your Instagram without running ads\" is strong." },
      { type: "callout", label: "Copy + Tweak These", items: [
        "\"Save this so you don't lose it\"",
        "\"Comment [word] and I'll send you the full breakdown\"",
        "\"Follow if you're building something and need the marketing side figured out\"",
        "\"Share this with someone who needs to hear it\"",
        "\"DM me '[word]' and I'll send you [resource] for free\"",
      ]},
      { type: "divider" },
      { type: "h2", text: "06. The Distribution" },
      { type: "h3", text: "Post smart, not just often." },
      { type: "p", text: "Making the video is half the job. The other half is getting it seen." },
      { type: "p", text: "Timing matters less than consistency — but afternoons and evenings typically outperform early morning for most audiences. Test your own account's analytics and post when your audience is active." },
      { type: "p", text: "The algorithm rewards completion rate, shares, and saves above everything else. Design your content to earn those behaviors — give people a reason to save it for later, and make it shareable to someone they know." },
      { type: "callout", label: "Copy + Tweak These", items: [
        "Post at least 3-4 Reels per week minimum to build momentum",
        "Reply to every comment within the first 60 minutes of posting",
        "Add captions — 85% of videos are watched without sound",
      ]},
      { type: "divider" },
      { type: "note", text: "Every viral Reel has all six: a hook that stops the scroll, value that justifies the watch, visuals that look intentional, audio that enhances not distracts, a CTA that converts, and a distribution strategy that gives it a chance to reach beyond your existing audience." },
    ],
  },

  // ─── Kudzu ───────────────────────────────────────────────────────────────
  {
    slug: "kudzu",
    title: "Kudzu",
    excerpt:
      "I guess I noticed when it grabbed my foot, although I had seen it much before. Squeezing me, growing tighter by the day.",
    tags: ["Fiction", "Creative Writing"],
    date: "2025",
    category: "fiction",
    description: "A short story by Nico Verde.",
    content: [
      { type: "p", text: "I guess I noticed when it grabbed my foot, although I had seen it much before. Squeezing me, growing tighter by the day." },
      { type: "note", text: "// Full story coming soon — paste the complete text here." },
    ],
  },

  // ─── Drugs and Creativity ─────────────────────────────────────────────────
  {
    slug: "drugs-and-creativity",
    title: "Drugs: Gateway to Misery or Portal to Unseen Creativity?",
    excerpt:
      "Throughout history, illicit substances have shaped artistic vision in profound ways. From opium-fueled Paris salons to the psychedelic revolution of the 1960s, artists have sought chemical pathways to innovation.",
    tags: ["Essay", "Art", "Creativity"],
    date: "2025",
    category: "essay",
    description: "An essay on the relationship between substances and creative vision, by Nico Verde.",
    content: [
      { type: "p", text: "Throughout history, illicit substances have shaped artistic vision in profound ways. From opium-fueled Paris salons to the psychedelic revolution of the 1960s, artists have sought chemical pathways to innovation." },
      { type: "note", text: "// Full essay coming soon — paste the complete text here." },
    ],
  },

  // ─── True Art of Atlanta ─────────────────────────────────────────────────
  {
    slug: "true-art-of-atlanta",
    title: "The True Art of Atlanta",
    excerpt:
      "While walking in Atlanta about a month ago, I saw a man spray-painting a building on Auburn Avenue. He was working on a mural commissioned by the building's owners.",
    tags: ["Essay", "Art", "Atlanta", "Graffiti"],
    date: "2025",
    category: "essay",
    description: "On graffiti, public art, and the soul of Atlanta — an essay by Nico Verde.",
    content: [
      { type: "p", text: "While walking in Atlanta about a month ago, I saw a man spray-painting a building on Auburn Avenue. He was working on a mural commissioned by the building's owners." },
      { type: "note", text: "// Full essay coming soon — paste the complete text here." },
    ],
  },

  // ─── Poetry ──────────────────────────────────────────────────────────────
  {
    slug: "soak-a-feeling",
    title: "i wish I could soak a feeling up with a sponge",
    excerpt: "to relive at a different time / a moment that could last forever",
    tags: ["Poetry"],
    date: "2025",
    category: "poetry",
    description: "A poem by Nico Verde.",
    content: [
      { type: "p", text: "to relive at a different time\na moment that could last forever" },
      { type: "note", text: "// Full poem coming soon — paste the complete text here." },
    ],
  },

  // ─── Are We Alone ────────────────────────────────────────────────────────
  {
    slug: "are-we-alone",
    title: "are we alone?",
    excerpt:
      "All throughout mankind's existence we have looked to the stars for proof of other life out there in the universe.",
    tags: ["Essay", "Philosophy", "Science"],
    date: "2025",
    category: "essay",
    description: "On the Fermi paradox, cosmic loneliness, and the search for life — an essay by Nico Verde.",
    content: [
      { type: "p", text: "All throughout mankind's existence we have looked to the stars for proof of other life out there in the universe." },
      { type: "note", text: "// Full essay coming soon — paste the complete text here." },
    ],
  },

  // ─── AI and Coursework (Research Paper) ──────────────────────────────────
  {
    slug: "ai-and-coursework",
    title: "Marketing Research: Effects of AI on Coursework",
    excerpt:
      "A marketing research study examining how AI tools are reshaping academic work at Georgia State University — co-authored for Dr. Curasi's class.",
    tags: ["Research", "AI", "Marketing", "GSU", "Academic"],
    date: "2025",
    category: "research",
    coAuthors: ["Olivia Allen", "Miles Smith"],
    publication: "Georgia State University — Dr. Curasi",
    description:
      "A marketing research report on the effects of AI on coursework at Georgia State University, co-authored by Nico Verde, Olivia Allen, and Miles Smith.",
    content: [
      { type: "note", text: "Co-authored with Olivia Allen and Miles Smith for Dr. Curasi at Georgia State University." },
      { type: "p", text: "// Paste the full research paper content here. Use { type: \"h2\", text: \"Section Title\" } for section headers, { type: \"p\", text: \"...\" } for paragraphs, and { type: \"stat\", value: \"X%\", label: \"description\" } for key data points." },
    ],
  },
];

export function getPiece(slug: string): WritingPiece | undefined {
  return writingPieces.find((p) => p.slug === slug);
}
