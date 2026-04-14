import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book — Nico Verde",
  description: "Rates, availability, and booking info for Nico Verde / Verde House Productions.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-bg text-cream font-body">
      {/* Header */}
      <div className="border-b border-border px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/verde_house_logo.png"
            alt="Verde House Productions"
            className="h-12 w-auto"
          />
        </Link>
        <Link
          href="/"
          className="text-xs tracking-widest uppercase text-white/40 hover:text-white font-body transition-colors duration-200"
        >
          ← Back
        </Link>
      </div>

      {/* Page title */}
      <div className="px-6 md:px-12 lg:px-20 pt-16 pb-12 border-b border-border">
        <p className="label-text mb-3">Work With Me</p>
        <h1 className="font-display text-display-lg text-cream uppercase leading-none">
          Book
        </h1>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-16 space-y-16 max-w-4xl">

        {/* ── Rates ──────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="label-text">Services</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-cream uppercase mb-8">
            Rates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {[
              { service: "Photography — Half Day", rate: "Coming soon" },
              { service: "Photography — Full Day", rate: "Coming soon" },
              { service: "Videography — Half Day", rate: "Coming soon" },
              { service: "Videography — Full Day", rate: "Coming soon" },
              { service: "Creative Direction", rate: "Coming soon" },
              { service: "Event Coverage", rate: "Coming soon" },
            ].map(({ service, rate }) => (
              <div key={service} className="bg-card px-6 py-5 flex items-center justify-between gap-4">
                <span className="text-sm font-body text-white/70">{service}</span>
                <span className="text-xs tracking-widest uppercase font-body text-green/60 whitespace-nowrap">
                  {rate}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs font-body text-white/30 tracking-wide leading-relaxed">
            Custom packages available for campaigns, retainers, and multi-day productions.
            All rates are negotiable based on scope, usage, and timeline.
          </p>
        </section>

        {/* ── Contact form ───────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="label-text">Inquire</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-cream uppercase mb-8">
            Contact
          </h2>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-widest uppercase font-body text-white/40">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-card border border-border px-4 py-3 text-sm font-body text-cream placeholder-white/20 focus:outline-none focus:border-green/40 transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-widest uppercase font-body text-white/40">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-card border border-border px-4 py-3 text-sm font-body text-cream placeholder-white/20 focus:outline-none focus:border-green/40 transition-colors duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-widest uppercase font-body text-white/40">
                Project Type
              </label>
              <select className="bg-card border border-border px-4 py-3 text-sm font-body text-cream focus:outline-none focus:border-green/40 transition-colors duration-200 appearance-none">
                <option value="" className="bg-card">Select a service…</option>
                <option value="photo" className="bg-card">Photography</option>
                <option value="video" className="bg-card">Videography</option>
                <option value="creative" className="bg-card">Creative Direction</option>
                <option value="event" className="bg-card">Event Coverage</option>
                <option value="campaign" className="bg-card">Full Campaign</option>
                <option value="other" className="bg-card">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-widest uppercase font-body text-white/40">
                Tell Me About Your Project
              </label>
              <textarea
                rows={5}
                placeholder="Describe the project, timeline, and any details that matter…"
                className="bg-card border border-border px-4 py-3 text-sm font-body text-cream placeholder-white/20 focus:outline-none focus:border-green/40 transition-colors duration-200 resize-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn-green"
              >
                Send Inquiry
              </button>
              <p className="mt-3 text-[10px] tracking-wide font-body text-white/25">
                Or email directly:{" "}
                <a
                  href="mailto:hello@verdehouseproductions.com"
                  className="text-green/60 hover:text-green transition-colors duration-200"
                >
                  hello@verdehouseproductions.com
                </a>
              </p>
            </div>
          </form>
        </section>

        {/* ── Payment & Tax info ─────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="label-text">Info</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-cream uppercase mb-8">
            Payment & Tax
          </h2>

          <div className="space-y-px">
            {[
              {
                label: "Accepted Methods",
                value: "Zelle, Venmo, PayPal, Bank Transfer — details provided on invoice",
              },
              {
                label: "Deposit",
                value: "50% deposit required to hold your date. Remainder due on delivery.",
              },
              {
                label: "Business Entity",
                value: "Verde House Productions LLC — W-9 available on request",
              },
              {
                label: "Tax",
                value: "Georgia sales tax applied to applicable services. International clients: no tax withheld.",
              },
              {
                label: "Invoicing",
                value: "Invoices issued via Wave or direct PDF. Net-15 standard terms.",
              },
            ].map(({ label, value }) => (
              <div key={label} className="bg-card px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
                <span className="text-[10px] tracking-widest uppercase font-body text-green/60">
                  {label}
                </span>
                <span className="md:col-span-2 text-sm font-body text-white/60 leading-relaxed">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs font-body text-white/25 leading-relaxed">
            All information is placeholder and subject to change. Final terms are outlined in the project agreement.
          </p>
        </section>

      </div>

      {/* Footer strip */}
      <div className="mt-20 border-t border-border px-6 md:px-12 lg:px-20 py-8 flex items-center justify-between">
        <span className="text-[10px] tracking-widest uppercase font-body text-white/20">
          &copy; 2026 Verde House Productions
        </span>
        <Link
          href="/"
          className="text-[10px] tracking-widest uppercase font-body text-white/30 hover:text-green transition-colors duration-200"
        >
          Back to site
        </Link>
      </div>
    </main>
  );
}
