export interface Review {
  id: string;
  clientName: string;
  quote: string;
  project: string;
  approved: boolean;
  createdAt: number;
}

const KEY = "vhp_reviews";

export function getReviews(): Review[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  } catch {
    return [];
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
