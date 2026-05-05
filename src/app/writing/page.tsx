import Link from "next/link";
import type { Metadata } from "next";
import { writingPieces } from "@/data/writing";

export const metadata: Metadata = {
  title: "Writing — Nico Verde",
  description:
    "Essays, fiction, poetry, and research by Nico Verde. Creative work from Atlanta.",
  openGraph: {
    title: "Writing — Nico Verde",
    description: "Essays, fiction, poetry, and research by Nico Verde.",
    type: "website",
  },
};

const categoryLabel: Record<string, string> = {
  essay: "Essay",
  fiction: "Fiction",
  poetry: "Poetry",
  guide: "Guide",
  research: "Research",
};

export default function WritingIndexPage() {
  return (
    <main className="min-h-screen bg-bg text-cream font-body">
      {/* Header */}
      <div className="border-b border-border px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/verde_house_logo.png" alt="Verde House Productions" className="h-12 w-auto" />
        </Link>
        <Link href="/" className="text-xs tracking-widest uppercase text-white/40 hover:text-white font-body transition-colors duration-200">
          Back
        </Link>
      </div>

      {/* Title */}
      <div className="px-6 md:px-12 lg:px-20 pt-14 pb-10 border-b border-border">
        <p className="label-text mb-3">By Nico Verde</p>
        <h1 className="font-display text-display-lg text-cream uppercase leading-none">Writing</h1>
      </div>

      {/* List */}
      <div className="divide-y divide-border">
        {writingPieces.map((piece) => (
          <Link
            key={piece.slug}
            href={`/writing/${piece.slug}`}
            className="flex items-start justify-between gap-8 px-6 md:px-12 lg:px-20 py-8 group hover:bg-card transition-colors duration-200"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] tracking-widest uppercase font-body text-green/60">
                  {categoryLabel[piece.category] ?? piece.category}
                </span>
                <span className="text-white/20 text-[10px]">·</span>
                <span className="text-[10px] tracking-widest uppercase font-body text-white/30">
                  {piece.date}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-cream uppercase leading-tight mb-2 group-hover:text-green transition-colors duration-200">
                {piece.title}
              </h2>
              <p className="text-stone text-sm font-body leading-relaxed line-clamp-2">
                {piece.excerpt}
              </p>
              {piece.coAuthors && (
                <p className="text-white/25 text-[10px] font-body tracking-wide mt-2">
                  With {piece.coAuthors.join(", ")}
                </p>
              )}
            </div>
            <span className="font-display text-2xl text-green/30 group-hover:text-green group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1">
              →
            </span>
          </Link>
        ))}
      </div>

      {/* Footer strip */}
      <div className="border-t border-border px-6 md:px-12 lg:px-20 py-8 flex items-center justify-between mt-8">
        <span className="text-[10px] tracking-widest uppercase font-body text-white/20">
          &copy; 2026 Verde House Productions
        </span>
        <Link href="/" className="text-[10px] tracking-widest uppercase font-body text-white/30 hover:text-green transition-colors duration-200">
          Back to site
        </Link>
      </div>
    </main>
  );
}
