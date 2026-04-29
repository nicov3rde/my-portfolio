"use client";

import { useState, useEffect } from "react";
import { getReviews, addReview, toggleApproval, deleteReview } from "@/lib/reviews";
import type { Review } from "@/lib/reviews";

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [form, setForm] = useState({ clientName: "", quote: "", project: "" });
  const [saved, setSaved] = useState(false);

  const refresh = () => setReviews(getReviews().sort((a, b) => b.createdAt - a.createdAt));

  useEffect(() => { refresh(); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.clientName || !form.quote || !form.project) return;
    addReview(form);
    setForm({ clientName: "", quote: "", project: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    refresh();
  };

  const handleToggle = (id: string) => { toggleApproval(id); refresh(); };
  const handleDelete = (id: string) => { if (confirm("Delete this review?")) { deleteReview(id); refresh(); } };

  const pending = reviews.filter((r) => !r.approved);
  const approved = reviews.filter((r) => r.approved);

  return (
    <main className="min-h-screen bg-bg text-cream font-body px-6 md:px-12 lg:px-20 py-16">
      <p className="label-text mb-2">Admin</p>
      <h1 className="font-display text-4xl md:text-5xl text-cream uppercase mb-12">Reviews</h1>

      {/* Add review form */}
      <section className="max-w-xl mb-16">
        <div className="flex items-center gap-4 mb-6">
          <span className="label-text">New Review</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-widest uppercase font-body text-white/40">Client Name</label>
            <input
              type="text"
              value={form.clientName}
              onChange={(e) => setForm({ ...form, clientName: e.target.value })}
              placeholder="Jane Smith"
              className="bg-card border border-border px-4 py-3 text-sm font-body text-cream placeholder-white/20 focus:outline-none focus:border-green/40 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-widest uppercase font-body text-white/40">Quote</label>
            <textarea
              value={form.quote}
              onChange={(e) => setForm({ ...form, quote: e.target.value })}
              placeholder="Working with Nico was..."
              rows={4}
              className="bg-card border border-border px-4 py-3 text-sm font-body text-cream placeholder-white/20 focus:outline-none focus:border-green/40 transition-colors resize-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-widest uppercase font-body text-white/40">Company / Project</label>
            <input
              type="text"
              value={form.project}
              onChange={(e) => setForm({ ...form, project: e.target.value })}
              placeholder="Ab Cookie Co · Brand Video"
              className="bg-card border border-border px-4 py-3 text-sm font-body text-cream placeholder-white/20 focus:outline-none focus:border-green/40 transition-colors"
            />
          </div>
          <div className="flex items-center gap-4">
            <button type="submit" className="btn-green">
              Add Review
            </button>
            {saved && (
              <span className="text-xs tracking-widest uppercase font-body text-green/70">
                Saved — pending approval
              </span>
            )}
          </div>
        </form>
      </section>

      {/* Pending */}
      {pending.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="label-text">Pending ({pending.length})</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="space-y-px">
            {pending.map((r) => (
              <ReviewRow key={r.id} review={r} onToggle={handleToggle} onDelete={handleDelete} />
            ))}
          </div>
        </section>
      )}

      {/* Approved */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <span className="label-text">Approved ({approved.length})</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        {approved.length === 0 ? (
          <p className="text-white/30 text-sm font-body">No approved reviews yet.</p>
        ) : (
          <div className="space-y-px">
            {approved.map((r) => (
              <ReviewRow key={r.id} review={r} onToggle={handleToggle} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

function ReviewRow({ review, onToggle, onDelete }: { review: Review; onToggle: (id: string) => void; onDelete: (id: string) => void }) {
  return (
    <div className="bg-card px-6 py-5 flex items-start justify-between gap-6">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-sm font-body text-cream">{review.clientName}</span>
          <span className="text-[9px] tracking-widest uppercase font-body text-white/30">{review.project}</span>
        </div>
        <p className="text-xs font-body text-white/50 leading-relaxed line-clamp-2">{review.quote}</p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={() => onToggle(review.id)}
          className={`text-[10px] tracking-widest uppercase font-body px-3 py-1.5 border transition-colors duration-200 ${
            review.approved
              ? "border-green/30 text-green hover:bg-green/10"
              : "border-white/15 text-white/40 hover:border-green/30 hover:text-green"
          }`}
        >
          {review.approved ? "Approved" : "Approve"}
        </button>
        <button
          onClick={() => onDelete(review.id)}
          className="text-[10px] tracking-widest uppercase font-body px-3 py-1.5 border border-white/10 text-white/25 hover:border-red-500/30 hover:text-red-400 transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
