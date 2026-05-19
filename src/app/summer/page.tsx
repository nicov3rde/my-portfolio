import type { Metadata } from "next";
import Nav from "@/components/Nav";
import SummerForm from "@/components/SummerForm";

export const metadata: Metadata = {
  title: "NYC Videographer for Hire | Content Creator, Camera Op, Reels Editing | Verde House",
  description:
    "Affordable videographer and content creator available in New York City this summer. Short-form edits, camera op, photo shoots, live stream, and creative direction. 5 spots only.",
  openGraph: {
    title: "5 Spots. Summer 2026. NYC. | Verde House",
    description:
      "Affordable NYC videographer and content creator this summer. Short-form edits, camera op, photo shoots, and creative direction. 5 spots only.",
    type: "website",
  },
};

const whoList = [
  "Creators and influencers building their following",
  "Musicians promoting their music or shows",
  "Live streamers looking to grow and clip their streams",
  "Anyone building a personal brand from the ground up",
  "People who are hungry, consistent, and willing to post daily or close to it",
];

const services = [
  { name: "Short-form edit (Reels, TikToks, Shorts)", price: "$5" },
  { name: "Complex edit (transitions, effects, color)", price: "$10" },
  { name: "Long-form edit under 5 minutes (horizontal video)", price: "$20" },
  { name: "Stream clipping (long VODs cut into short clips)", price: "Contact" },
  { name: "Follow-around shoot, full day camera op", price: "$30" },
  { name: "Photo shoot plus edited selects", price: "$50" },
  { name: "Live stream camera op", price: "$32" },
  { name: "Creative management", price: "Always free" },
];

export default function SummerPage() {
  return (
    <>
      <Nav />
      <main className="bg-bg text-cream font-body min-h-screen">

        {/* 1. Hero — headline, intro, apply button */}
        <section className="pt-24 md:pt-32 pb-14 px-6 md:px-12 lg:px-20 border-b border-border">
          <p className="label-text mb-4">Limited. Summer 2026. New York City.</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream uppercase leading-tight mb-8">
            5 spots. One summer.<br />
            <span className="text-green">NYC creators only.</span>
          </h1>
          <div className="max-w-2xl space-y-4 mb-10">
            <p className="text-cream text-base md:text-lg font-body leading-relaxed">
              This is free management. I work with you every day. We brainstorm, collab, link up, and build your content strategy together. All of that is free.
            </p>
            <p className="text-white/60 text-sm md:text-base font-body leading-relaxed">
              You only pay for deliverables when I make something for you. You are not hiring a freelancer. You are getting a creative manager with a proven track record, under Verde House Productions.
            </p>
          </div>
          <a href="#apply" className="btn-green inline-flex">
            Apply for a Spot &darr;
          </a>
        </section>

        {/* 2. Who this is for */}
        <section className="px-6 md:px-12 lg:px-20 py-14 border-b border-border">
          <div className="max-w-4xl">
            <p className="label-text mb-6">Who this is for</p>
            <h2 className="font-display text-3xl md:text-4xl text-cream uppercase mb-8">
              Is this you?
            </h2>
            <ul className="space-y-4 mb-8">
              {whoList.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="text-green flex-shrink-0 font-display text-xl leading-tight mt-0.5">→</span>
                  <span className="text-white/70 font-body text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/50 font-body text-sm leading-relaxed mb-3">
              I only want to work with people who are serious. This is not for people who will post once and disappear.
            </p>
            <p className="text-white/35 font-body text-sm leading-relaxed">
              I am getting something out of this too. I am growing my network, building in the management world, and putting my skills to use. I want to actually work.
            </p>
          </div>
        </section>

        {/* 3. Credentials paragraph */}
        <section className="px-6 md:px-12 lg:px-20 py-14 border-b border-border">
          <div className="max-w-2xl">
            <p className="label-text mb-6">Why trust me</p>
            <p className="text-white/70 font-body text-sm md:text-base leading-relaxed">
              I have generated 10M+ views as an independent creator, shot at New York Fashion Week with Sonny Digital, won first place at HackLanta 2026, and grew a publication&rsquo;s submissions by 507%. Check the work yourself at{" "}
              <a href="/" className="text-green hover:text-green/70 transition-colors duration-200">
                nicoverde.house
              </a>
              {" "}or follow along on Instagram at{" "}
              <a
                href="https://www.instagram.com/nicov3rde/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green hover:text-green/70 transition-colors duration-200"
              >
                @nicov3rde
              </a>
            </p>
          </div>
        </section>

        {/* 4. Pricing */}
        <section className="px-6 md:px-12 lg:px-20 py-14 border-b border-border">
          <div className="max-w-4xl">
            <p className="label-text mb-6">Pricing</p>
            <h2 className="font-display text-3xl md:text-4xl text-cream uppercase mb-3">
              What you actually pay for
            </h2>
            <p className="text-white/50 font-body text-sm mb-8 leading-relaxed">
              Management is free. You only pay when I make something for you.
            </p>
            <div className="space-y-px mb-6">
              {services.map(({ name, price }) => (
                <div key={name} className="border border-border px-5 py-4 flex items-center justify-between gap-4">
                  <span className="text-sm font-body text-white/70">{name}</span>
                  <span className={`text-sm font-display tracking-widest whitespace-nowrap flex-shrink-0 ${
                    price === "Always free" ? "text-green text-xs" :
                    price === "Contact" ? "text-white/40 text-xs" :
                    "text-green"
                  }`}>
                    {price}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs font-body text-white/30 leading-relaxed">
              For anything more complex or custom, book directly at{" "}
              <a href="/book" className="text-green/60 hover:text-green transition-colors duration-200">
                nicoverde.house/book
              </a>
            </p>
          </div>
        </section>

        {/* 5. Application form */}
        <section id="apply" className="scroll-mt-28 px-6 md:px-12 lg:px-20 py-16">
          <div className="max-w-4xl">
            <p className="label-text mb-6">Apply</p>
            <h2 className="font-display text-3xl md:text-4xl text-cream uppercase mb-3">
              Apply for a spot.
            </h2>
            <p className="text-white/50 font-body text-sm leading-relaxed mb-10">
              Spots are limited. I will reach out if it is a fit.
            </p>
            <SummerForm />
          </div>
        </section>

        {/* Footer strip */}
        <div className="border-t border-border px-6 md:px-12 lg:px-20 py-8 flex items-center justify-between">
          <span className="text-[10px] tracking-widest uppercase font-body text-white/20">
            &copy; 2026 Verde House Productions
          </span>
          <a
            href="/"
            className="text-[10px] tracking-widest uppercase font-body text-white/30 hover:text-green transition-colors duration-200"
          >
            Back to portfolio
          </a>
        </div>

      </main>
    </>
  );
}
