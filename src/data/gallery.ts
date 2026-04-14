export interface GalleryItem {
  type: "photo" | "video";
  src: string;
  caption?: string;
  poster?: string;
}

// Drop files into /public/gallery/ and add entries here.
// Campaign-specific media lives in /public/work/<campaign>/ instead.
export const galleryItems: GalleryItem[] = [];
