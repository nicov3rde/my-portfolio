export type MediaSize = "hero" | "large" | "medium" | "small";

export interface CampaignMedia {
  type: "photo" | "video";
  src: string;
  size: MediaSize;
  aspect?: string;   // e.g. "9/16" or "16/9" — defaults to "9/16"
  caption?: string;
}

export interface Campaign {
  id: string;
  title: string;
  role: string;
  date: string;
  description: string;
  blurb?: string;      // short 1-2 sentence card blurb
  tags: string[];
  type: string;
  award?: string;
  link?: string;
  linkLabel?: string; // button label, defaults to "Visit Live App"
  coverVideo?: string;
  coverImage?: string;
  coverAspect?: string; // aspect ratio of cover video/image, e.g. "9/16" or "16/9"
  media: CampaignMedia[];
}

export const campaigns: Campaign[] = [
  // ─── Sorted most recent first ───────────────────────────────────────────
  {
    id: "verde-house",
    title: "Verde House",
    role: "Creative Director",
    date: "Apr 2026",
    description:
      "A house party boiler room experience — come forget everything and dance. Conceived and executed all creative direction, promotion, and production over 2 months as both an event and a launch statement for Verde House Productions.",
    blurb:
      "Full creative direction for an Atlanta house party boiler room — from concept to promo to night-of production.",
    tags: ["Creative Direction", "Event Production", "Social", "Promo"],
    type: "Personal / Production Company",
    coverVideo: "/work/verde-house/cover.mp4",
    coverAspect: "9/16",
    media: [
      { type: "video", src: "/work/verde-house/cover.mp4",         size: "hero",   aspect: "9/16" },
      { type: "video", src: "/work/verde-house/boosted-promo.mp4", size: "large",  aspect: "9/16" },
      { type: "video", src: "/work/verde-house/dance.mp4",          size: "medium", aspect: "9/16" },
      { type: "video", src: "/work/verde-house/projx.mp4",          size: "medium", aspect: "9/16" },
      { type: "video", src: "/work/verde-house/quinn1st-song.mp4",  size: "small",  aspect: "9/16" },
      { type: "video", src: "/work/verde-house/dap-bro-up.mp4",    size: "small",  aspect: "9/16" },
      { type: "video", src: "/work/verde-house/parking.mp4",        size: "small",  aspect: "9/16" },
    ],
  },
  {
    id: "linkedout",
    title: "LinkedOut",
    role: "Developer, Product Lead, Marketing & Demo",
    date: "2026",
    description:
      "An AI-powered LinkedIn parody web app built in 12 hours. Features voice-to-corporate-jargon conversion, an AI headshot generator, and a Certificate Generator for mundane achievements. Co-developed the app, led product vision and UX, built and pitched the demo video that won the judges over.",
    blurb:
      "AI-powered LinkedIn parody app built and pitched in 12 hours at HackLanta — took 1st place.",
    tags: ["Hackathon", "AI", "React", "Product", "Marketing", "🏆 Best Corporate Larp"],
    type: "Hackathon — Georgia State University",
    award: "🥇 1st Place",
    link: "https://linkedout-jet.vercel.app/",
    coverVideo: "/work/linked-out/productdemo.mp4",
    coverAspect: "9/16",
    media: [
      { type: "video", src: "/work/linked-out/productdemo.mp4", size: "hero",   aspect: "9/16", caption: "Product Demo" },
      { type: "video", src: "/work/linked-out/ad-1.mp4",        size: "large",  aspect: "9/16", caption: "Promo Ad" },
      { type: "video", src: "/work/linked-out/journey.mp4",     size: "medium", aspect: "9/16", caption: "Build Journey" },
      { type: "video", src: "/work/linked-out/rami.mp4",        size: "medium", aspect: "9/16", caption: "Rami" },
    ],
  },
  {
    id: "hacklanta",
    title: "Hacklanta",
    role: "Videographer / Editor",
    date: "2026",
    description:
      "Produced the official promo video for Hacklanta, an Atlanta-based hackathon. Won the hackathon.",
    blurb:
      "Official promo video for Atlanta's first hackathon at Georgia State.",
    tags: ["Video", "Promo", "Hackathon"],
    type: "Hackathon",
    coverVideo: "/work/hacklanta/cover.mp4",
    coverAspect: "9/16",
    media: [
      { type: "video", src: "/work/hacklanta/cover.mp4", size: "hero", aspect: "9/16" },
    ],
  },
  {
    id: "lachesis",
    title: "Lachesis",
    role: "Social Media & Marketing",
    date: "2026",
    description:
      "Led social media and marketing for Lachesis, a fintech platform using quantum computing to analyze investment portfolios and deliver personalized trading recommendations. Currently in beta, Lachesis brings institutional-level portfolio intelligence to everyday investors.",
    blurb:
      "Social media and marketing for a quantum-powered fintech platform bringing institutional portfolio intelligence to everyday investors.",
    tags: ["Social Media", "Marketing", "Fintech", "Strategy"],
    type: "Client",
    link: "https://lachesisprototype3.vercel.app/auth",
    linkLabel: "Visit Platform",
    coverVideo: "/work/lachesis/Lachesis-POV.mp4",
    coverAspect: "9/16",
    media: [
      { type: "video", src: "/work/lachesis/Lachesis-POV.mp4",              size: "hero",   aspect: "9/16", caption: "POV" },
      { type: "video", src: "/work/lachesis/lachesis-application-build.mp4", size: "large",  aspect: "9/16", caption: "App Build" },
    ],
  },
  {
    id: "vml-kitkat",
    title: "VML / KitKat",
    role: "Videographer / Editor",
    date: "2026",
    description:
      "Created a speculative video piece for VML, a global creative agency. Independently produced as a creative pitch.",
    blurb:
      "Speculative video piece created independently for a global creative agency. Short-form reimagining of Kit Kat's iconic campaign.",
    tags: ["Video", "Spec Work", "Agency"],
    type: "Spec",
    coverVideo: "/work/vml/cover.mp4",
    coverAspect: "9/16",
    media: [
      { type: "video", src: "/work/vml/cover.mp4", size: "hero", aspect: "9/16" },
    ],
  },
  {
    id: "jried",
    title: "Jried",
    role: "Photographer / Videographer",
    date: "Feb 2026 — NYFW",
    description:
      "Shot photo and video for Jried's NYC popup with Sonny Digital during New York Fashion Week. Captured the full event for his brand.",
    blurb:
      "Photo and video for Jried's NYC popup with Sonny Digital during NYFW.",
    tags: ["Photography", "Video", "Fashion", "NYFW"],
    type: "Client",
    coverVideo: "/work/jried/cover.mp4",
    coverAspect: "9/16",
    media: [
      { type: "video", src: "/work/jried/cover.mp4", size: "hero", aspect: "9/16" },
    ],
  },
];
