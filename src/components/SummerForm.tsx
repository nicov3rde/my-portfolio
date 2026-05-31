"use client";

import { useState } from "react";

const inputCls =
  "bg-card border border-border px-4 py-3 text-sm font-body text-cream placeholder-white/20 focus:outline-none focus:border-green/40 transition-colors duration-200 w-full";

const selectCls =
  "bg-card border border-border px-4 py-3 text-sm font-body text-cream focus:outline-none focus:border-green/40 transition-colors duration-200 w-full appearance-none";

export default function SummerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    instagram: "",
    tiktok: "",
    link: "",
    building: "",
    type: "",
    frequency: "",
    why: "",
  });
  const [sent, setSent] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Instagram: ${form.instagram}`,
      `TikTok: ${form.tiktok || "N/A"}`,
      `Main social link: ${form.link}`,
      `What they are building: ${form.building}`,
      `Creator type: ${form.type}`,
      `Posting frequency: ${form.frequency}`,
      `Why they want in:\n${form.why}`,
    ].join("\n\n");

    window.location.href = `mailto:nicov3rde@gmail.com?subject=${encodeURIComponent("Summer 2026 Spot Application")}&body=${encodeURIComponent(lines)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-card border border-green/20 px-6 py-8 max-w-xl">
        <p className="text-green font-body text-sm mb-2 tracking-widest uppercase">Application sent</p>
        <p className="text-stone font-body text-sm leading-relaxed">
          Your email client should have opened with your application pre-filled. Send that email and I will be in touch within 48 hours if it is a fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] tracking-widest uppercase font-body text-white/40">Full name</label>
          <input type="text" placeholder="First and last" value={form.name} onChange={set("name")} className={inputCls} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] tracking-widest uppercase font-body text-white/40">Email address</label>
          <input type="email" placeholder="you@email.com" value={form.email} onChange={set("email")} className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] tracking-widest uppercase font-body text-white/40">Instagram handle</label>
          <input type="text" placeholder="@yourhandle" value={form.instagram} onChange={set("instagram")} className={inputCls} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] tracking-widest uppercase font-body text-white/40">TikTok handle (optional)</label>
          <input type="text" placeholder="@yourhandle" value={form.tiktok} onChange={set("tiktok")} className={inputCls} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-widest uppercase font-body text-white/40">Link your main account</label>
        <input type="text" placeholder="https://instagram.com/yourhandle" value={form.link} onChange={set("link")} className={inputCls} />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-widest uppercase font-body text-white/40">What are you building?</label>
        <input type="text" placeholder="Your niche, content type, what you are working toward" value={form.building} onChange={set("building")} className={inputCls} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] tracking-widest uppercase font-body text-white/40">Type of creator</label>
          <select value={form.type} onChange={set("type")} className={selectCls}>
            <option value="">Select one...</option>
            <option>Creator / Influencer</option>
            <option>Musician</option>
            <option>Live Streamer</option>
            <option>Personal Brand</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] tracking-widest uppercase font-body text-white/40">How often do you post?</label>
          <select value={form.frequency} onChange={set("frequency")} className={selectCls}>
            <option value="">Select one...</option>
            <option>Daily</option>
            <option>A few times a week</option>
            <option>Once a week</option>
            <option>Less than that</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] tracking-widest uppercase font-body text-white/40">Why do you want in? *</label>
        <textarea required rows={4} placeholder="Be honest. What do you need and why now?" value={form.why} onChange={set("why")} className={`${inputCls} resize-none`} />
      </div>

      <div>
        <button type="submit" className="btn-green">
          Send My Application
        </button>
        <p className="mt-3 text-[10px] tracking-wide font-body text-white/25 leading-relaxed">
          Spots are limited. I will reach out if it is a fit.
        </p>
      </div>
    </form>
  );
}
