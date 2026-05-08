import type { ReactNode } from "react";
import { Cormorant_Garamond, Space_Mono, DM_Sans } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HARVEST — Sky High Farm × DLX NYC Concept",
  description:
    "A brand activation concept for Sky High Farm. Created by Nico Verde for DLX NYC.",
};

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-mono-h",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-ui-h",
  display: "swap",
});

export default function HarvestLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${cormorant.variable} ${spaceMono.variable} ${dmSans.variable}`}
      style={{ margin: 0, padding: 0, background: "#0A0A08" }}
    >
      {children}
    </div>
  );
}
