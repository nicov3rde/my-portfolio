import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { writingPieces, getPiece } from "@/data/writing";
import type { Block } from "@/data/writing";

export async function generateStaticParams() {
  return writingPieces.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) return {};
  return {
    title: `${piece.title} — Nico Verde`,
    description: piece.description,
    openGraph: {
      title: `${piece.title} — Nico Verde`,
      description: piece.description,
      type: "article",
    },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="font-display text-3xl md:text-4xl text-cream uppercase mt-14 mb-4 leading-tight">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="text-stone font-body text-base md:text-lg mb-6 -mt-2">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-white/70 font-body text-base md:text-lg leading-relaxed mb-5 whitespace-pre-line">
          {block.text}
        </p>
      );
    case "callout":
      return (
        <div key={i} className="bg-card border border-green/20 px-6 py-6 my-8">
          <p className="text-[10px] tracking-widest uppercase font-body text-green mb-4">{block.label}</p>
          <ul className="space-y-3">
            {block.items.map((item, j) => (
              <li key={j} className="flex items-start gap-3">
                <span className="text-green/40 font-display text-lg leading-none mt-0.5 flex-shrink-0">→</span>
                <span className="text-cream/80 font-body text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "stat":
      return (
        <div key={i} className="bg-card border border-border px-6 py-5 my-6 flex items-center gap-6">
          <span className="font-display text-4xl text-green leading-none flex-shrink-0">{block.value}</span>
          <span className="text-stone font-body text-sm leading-relaxed">{block.label}</span>
        </div>
      );
    case "divider":
      return <hr key={i} className="border-border my-10" />;
    case "note":
      return (
        <div key={i} className="border-l-2 border-green/30 pl-5 my-8">
          <p className="text-stone font-body text-sm leading-relaxed italic">{block.text}</p>
        </div>
      );
    default:
      return null;
  }
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) notFound();

  const categoryLabel: Record<string, string> = {
    essay: "Essay",
    fiction: "Fiction",
    poetry: "Poetry",
    guide: "Guide",
    research: "Research",
  };

  return (
    <main className="min-h-screen bg-bg text-cream font-body">
      {/* Header */}
      <div className="border-b border-border px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/verde_house_logo.png" alt="Verde House Productions" className="h-12 w-auto" />
        </Link>
        <Link href="/writing" className="text-xs tracking-widest uppercase text-white/40 hover:text-white font-body transition-colors duration-200">
          All Writing
        </Link>
      </div>

      {/* Article header */}
      <div className="px-6 md:px-12 lg:px-20 pt-14 pb-10 border-b border-border">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="label-text">{categoryLabel[piece.category] ?? piece.category}</span>
          <span className="text-white/20">·</span>
          <span className="text-[10px] tracking-widest uppercase font-body text-white/30">{piece.date}</span>
          {piece.publication && (
            <>
              <span className="text-white/20">·</span>
              <span className="text-[10px] tracking-widest uppercase font-body text-white/30">{piece.publication}</span>
            </>
          )}
        </div>

        <h1 className="font-display text-display-md md:text-display-lg text-cream uppercase leading-none mb-4 max-w-3xl">
          {piece.title}
        </h1>

        <p className="text-stone font-body text-base md:text-lg leading-relaxed max-w-2xl mb-4">
          {piece.excerpt}
        </p>

        {piece.coAuthors && (
          <p className="text-white/30 text-xs font-body tracking-wide">
            Co-authored with {piece.coAuthors.join(" and ")}
          </p>
        )}

        {piece.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5">
            {piece.tags.map((tag) => (
              <span key={tag} className="text-[10px] tracking-widest uppercase font-body px-3 py-1.5 border border-green/20 text-green/50">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 lg:px-20 py-14 max-w-3xl">
        {piece.content.map((block, i) => renderBlock(block, i))}
      </div>

      {/* CTA */}
      <div className="border-t border-border px-6 md:px-12 lg:px-20 py-14 bg-card">
        <p className="label-text mb-3">Want to work together?</p>
        <h2 className="font-display text-3xl md:text-4xl text-cream uppercase mb-6">
          Get In Touch
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="mailto:nicov3rde@gmail.com?subject=Inquiry" className="btn-green">
            Email Nico
          </a>
          <a
            href="https://www.instagram.com/nicov3rde/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-green"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-border px-6 md:px-12 lg:px-20 py-8 flex items-center justify-between">
        <span className="text-[10px] tracking-widest uppercase font-body text-white/20">
          &copy; 2026 Verde House Productions
        </span>
        <Link href="/writing" className="text-[10px] tracking-widest uppercase font-body text-white/30 hover:text-green transition-colors duration-200">
          All Writing
        </Link>
      </div>
    </main>
  );
}
