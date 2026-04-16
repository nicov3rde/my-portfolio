"use client";

export default function BookForm() {
  return (
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
        <button type="submit" className="btn-green">
          Send Inquiry
        </button>
        <p className="mt-3 text-[10px] tracking-wide font-body text-white/25">
          Or email directly:{" "}
          <a
            href="mailto:nicov3rde@gmail.com?subject=Booking%20Inquiry"
            className="text-green/60 hover:text-green transition-colors duration-200"
          >
            nicov3rde@gmail.com
          </a>
        </p>
      </div>
    </form>
  );
}
