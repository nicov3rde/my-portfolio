export interface Review {
  id: string;
  clientName: string;
  quote: string;
  project: string;
  approved: boolean;
  createdAt: number;
}

const KEY = "vhp_reviews";
const SEEDED_KEY = "vhp_reviews_seeded_v2";

const SEED_REVIEWS: Review[] = [
  {
    id: "seed-brandi-bryant",
    clientName: "Brandi Bryant",
    quote:
      "I had a great experience working with Nico on my video project. He was incredibly responsive throughout the process, always quick to communicate and open to feedback. I especially appreciated his patience and willingness to collaborate. He made the process easy and approachable, and I always felt heard when sharing ideas or requesting changes. I truly value the effort and care he put into the project. If you're looking for someone who is dependable, easy to work with, and committed to bringing your vision to life, he's a solid choice.",
    project: "Video Production",
    approved: true,
    createdAt: 1700000000000,
  },
];

export function getReviews(): Review[] {
  if (typeof window === "undefined") return SEED_REVIEWS;
  try {
    if (!localStorage.getItem(SEEDED_KEY)) {
      const existing = JSON.parse(localStorage.getItem(KEY) ?? "[]") as Review[];
      const merged = [
        ...SEED_REVIEWS.filter((s) => !existing.find((e) => e.id === s.id)),
        ...existing,
      ];
      localStorage.setItem(KEY, JSON.stringify(merged));
      localStorage.setItem(SEEDED_KEY, "1");
    }
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  } catch {
    return SEED_REVIEWS;
  }
}

export function saveReviews(reviews: Review[]): void {
  localStorage.setItem(KEY, JSON.stringify(reviews));
}

export function addReview(data: Omit<Review, "id" | "approved" | "createdAt">): Review {
  const reviews = getReviews();
  const review: Review = {
    ...data,
    id: crypto.randomUUID(),
    approved: false,
    createdAt: Date.now(),
  };
  saveReviews([...reviews, review]);
  return review;
}

export function toggleApproval(id: string): void {
  const reviews = getReviews();
  saveReviews(reviews.map((r) => (r.id === id ? { ...r, approved: !r.approved } : r)));
}

export function deleteReview(id: string): void {
  saveReviews(getReviews().filter((r) => r.id !== id));
}
