import Link from "next/link";
import type { Metadata } from "next";
import BookForm from "@/components/BookForm";

export const metadata: Metadata = {
  title: "Book — Nico Verde",
  description: "Rates, availability, and booking info for Nico Verde / Verde House Productions.",
};

type RateItem = { service: string; price: string; note?: string };

const shortForm: RateItem[] = [
  { service: "Single Reel / Short-Form Clip", price: "$150", note: "Up to 60s, delivered edited" },
  { service: "3-Clip Package", price: "$400" },
  { service: "5-Clip Package", price: "$600" },
  { service: "10-Clip Package", price: "$1,000" },
];

const longForm: RateItem[] = [
  { service: "Up to 3 Minutes", price: "$400" },
  { service: "3 to 10 Minutes", price: "$650" },
  { service: "10+ Minutes", price: "Contact" },
  { service: "Documentary / Brand Film", price: "Contact" },
];

const packages: RateItem[] = [
  { service: "Starter Pack", price: "$500", note: "3 short-form clips + 1 photo session" },
  { service: "Creator Pack", price: "$900", note: "5 short-form clips + event coverage" },
  { service: "Brand Pack", price: "$1,500/mo", note: "10 clips/month + strategy" },
  { service: "Custom Campaign", price: "Contact", note: "Full scope, multi-deliverable" },
];

const aiVideo: RateItem[] = [
  { service: "AI Short (15 to 30s)", price: "$200" },
  { service: "AI Medium (30 to 60s)", price: "$350" },
  { service: "AI Campaign Set (5 videos)", price: "$800" },
];

const photo: RateItem[] = [
  { service: "1-Hour Session", price: "$200" },
  { service: "Half Day (4 hrs)", price: "$500" },
  { service: "Full Day (8 hrs)", price: "$900" },
  { service: "Event Coverage", price: "$300+" },
];

const clipping: RateItem[] = [
  { service: "Per Clip", price: "$25" },
  { service: "Hourly", price: "$50/hr" },
  { service: "Bulk (10+ clips)", price: "$20/clip" },
];

function RateTable({ title, items }: { title: string; items: RateItem[] }) {
  return (
    <div>
      <h3 className="font-display text-xl md:text-2xl text-cream uppercase mb-3">{title}</h3>
      <div className="space-y-px">
        {items.map(({ service, price, note }) => (
          <div key={service} className="bg-card px-5 py-4 flex items-center justify-between gap-4">
            <div>
              <span className="text-sm font-body text-white/70">{service}</span>
              {note && <span className="block text-[10px] tracking-wide font-body text-white/30 mt-0.5">{note}</span>}
            </div>
            <span className={`text-sm font-display tracking-widest whitespace-nowrap ${price === "Contact" ? "text-white/40" : "text-green"}`}>
              {price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BookPage() {
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

      {/* Page title */}
      <div className="px-6 md:px-12 lg:px-20 pt-16 pb-12 border-b border-border">
        <p className="label-text mb-3">Work With Me</p>
        <h1 className="font-display text-display-lg text-cream uppercase leading-none">Book</h1>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-16 space-y-16 max-w-4xl">

        {/* ── Rate Sheet ────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <span className="label-text">Pricing</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-cream uppercase mb-10">Rate Sheet</h2>

          <div className="space-y-10">
            <RateTable title="Short Form" items={shortForm} />
            <RateTable title="Long Form" items={longForm} />
            <RateTable title="Packages" items={packages} />
            <RateTable title="AI-Generated Video" items={aiVideo} />
            <RateTable title="Photo" items={photo} />
            <RateTable title="Clipping" items={clipping} />
          </div>

          <div className="mt-8 bg-card border border-border px-6 py-5">
            <p className="text-xs font-body text-white/40 leading-relaxed">
              All prices are starting rates. Rush delivery, licensed music, and motion graphics may incur additional fees.
              1 revision round included. Additional rounds at $50/hr.
            </p>
          </div>
        </section>

        {/* ── Contact form ───────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="label-text">Inquire</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-cream uppercase mb-8">Contact</h2>
          <BookForm />
        </section>

        {/* ── Payment ─────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="label-text">Payment</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-cream uppercase mb-8">Payment Info</h2>

          {/* Accepted methods */}
          <div className="flex flex-wrap gap-px mb-px">
            {["Zelle", "Check", "Cash", "Invoice"].map((method) => (
              <div key={method} className="bg-card flex-1 min-w-[120px] px-6 py-5 flex flex-col gap-1 items-center justify-center text-center">
                <span className="font-display text-xl text-cream">{method}</span>
                <span className="text-[9px] tracking-widest uppercase font-body text-white/30">Accepted</span>
              </div>
            ))}
          </div>

          <div className="space-y-px mt-px">
            {[
              { label: "Deposit", value: "50% deposit required to hold your date. Remainder due on delivery." },
              { label: "Invoicing", value: "Invoices issued via Wave or direct PDF. Net-15 standard terms." },
              { label: "Business Entity", value: "Verde House Productions LLC. W-9 available on request." },
              { label: "Tax", value: "Georgia sales tax applied to applicable services. International clients: no tax withheld." },
            ].map(({ label, value }) => (
              <div key={label} className="bg-card px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
                <span className="text-[10px] tracking-widest uppercase font-body text-green/60">{label}</span>
                <span className="md:col-span-2 text-sm font-body text-white/60 leading-relaxed">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Revision Policy ─────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span className="label-text">Policy</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-cream uppercase mb-6">Revisions</h2>
          <div className="bg-card border border-border px-6 py-6">
            <p className="text-sm font-body text-white/60 leading-relaxed">
              1 revision round included with every project. Additional rounds at $50/hr.
              Revisions must be requested within 7 days of delivery.
            </p>
          </div>
        </section>

      </div>

      {/* Bottom CTA */}
      <div className="border-t border-border px-6 md:px-12 lg:px-20 py-16 text-center">
        <p className="label-text mb-4 flex justify-center">Ready to book?</p>
        <h2 className="font-display text-3xl md:text-4xl text-cream uppercase mb-8">Get In Touch</h2>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="mailto:nicov3rde@gmail.com?subject=Booking%20Inquiry"
            className="btn-green"
          >
            Email Me
          </a>
          <a
            href="https://instagram.com/nicov3rde"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-green"
          >
            DM on Instagram
          </a>
          <a
            href="https://beacons.ai/nicoverde/mediakit?origin=lib"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase font-body text-white/40 hover:text-green transition-colors duration-200 px-4 py-3"
          >
            Media Kit
          </a>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-border px-6 md:px-12 lg:px-20 py-8 flex items-center justify-between">
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
