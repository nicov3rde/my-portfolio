/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Constants ───────────────────────────────────────────────────────────────

const DWELL = [3000, 4000, 5000, 5000, 6000, 4000, null] as const;
const TOTAL = 7;

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.22'/%3E%3C/svg%3E")`;

const S = {
  serif: "var(--font-serif), 'Georgia', serif",
  mono: "var(--font-mono-h), 'Courier New', monospace",
  ui: "var(--font-ui-h), -apple-system, sans-serif",
};

// ─── Story Chrome ────────────────────────────────────────────────────────────

function StoryChrome({ filled, username, ago }: { filled: number; username: string; ago: string }) {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "14px 12px 8px", zIndex: 20 }}>
      <div style={{ display: "flex", gap: 3, marginBottom: 10 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ flex: 1, height: 2, background: "rgba(255,255,255,0.3)", borderRadius: 1, overflow: "hidden" }}>
            <div style={{ height: "100%", width: i < filled ? "100%" : "0%", background: "white", transition: "none" }} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #8B9E6C 0%, #4A5A3A 100%)", border: "2px solid rgba(255,255,255,0.8)", flexShrink: 0 }} />
        <div>
          <div style={{ color: "white", fontSize: 13, fontWeight: 600, fontFamily: S.ui, lineHeight: 1.2 }}>{username}</div>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 11, fontFamily: S.ui }}>{ago}</div>
        </div>
        <div style={{ marginLeft: "auto", color: "white", fontSize: 20, opacity: 0.8, cursor: "pointer" }}>✕</div>
      </div>
    </div>
  );
}

// ─── Screen 1 — The Teaser ────────────────────────────────────────────────────

function Screen1() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#2a2a18", overflow: "hidden" }}>
      <img src="/work/dlxbrandactivation/VO0422_FOB_SkyHighFarms_01.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(1.45) saturate(0.65) contrast(0.88)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: GRAIN, opacity: 0.55, mixBlendMode: "overlay", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 35%, transparent 60%, rgba(0,0,0,0.25) 100%)" }} />
      {/* Strong center vignette for text readability */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 52%, rgba(0,0,0,0.55) 0%, transparent 100%)", zIndex: 5, pointerEvents: "none" }} />
      <StoryChrome filled={1} username="skyhighfarm" ago="2h" />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", zIndex: 10, width: "80%" }}>
        <div style={{ fontSize: 48, marginBottom: 13 }}>🌱</div>
        <div style={{ color: "#E8DCC8", fontFamily: S.mono, fontSize: 10.5, letterSpacing: "3.5px", lineHeight: 2.1, textTransform: "uppercase", textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 2px 20px rgba(0,0,0,0.7)" }}>
          Seeds Planted.<br />NYC. Summer 2026.
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 20, left: 14, right: 14, zIndex: 10 }}>
        <div style={{ background: "rgba(0,0,0,0.28)", border: "1px solid rgba(255,255,255,0.35)", borderRadius: 22, padding: "11px 18px", color: "rgba(255,255,255,0.55)", fontSize: 13, fontFamily: S.ui, backdropFilter: "blur(12px)" }}>
          Send message
        </div>
      </div>
    </div>
  );
}

// ─── Screen 2 — The Reveal ───────────────────────────────────────────────────

function Screen2() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#0E0E0E", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* IG feed top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px 8px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ width: 24 }} />
        <div style={{ color: "white", fontFamily: S.ui, fontSize: 15, fontWeight: 700, letterSpacing: "-0.3px" }}>Instagram</div>
        <div style={{ color: "white", fontSize: 18, opacity: 0.7 }}>♡</div>
      </div>
      {/* Profile row */}
      <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "9px 14px" }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #8B9E6C, #4A5A3A)", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ color: "white", fontSize: 12.5, fontWeight: 600, fontFamily: S.ui }}>skyhighfarm</div>
          <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 10.5, fontFamily: S.ui }}>New York, New York</div>
        </div>
        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 17, letterSpacing: "1px" }}>···</div>
      </div>
      {/* Post image — designed graphic */}
      <div style={{ position: "relative", width: "100%", height: 230, background: "#1C2810", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: GRAIN, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ textAlign: "center", padding: "0 28px", zIndex: 1, width: "100%" }}>
          <div style={{ color: "#8B9E6C", fontFamily: S.mono, fontSize: 7.5, letterSpacing: "5px", textTransform: "uppercase", marginBottom: 12 }}>
            Sky High Farm Workwear presents
          </div>
          <div style={{ height: 1, background: "#4A5A3A", margin: "0 auto 16px", width: "80%" }} />
          <div style={{ color: "#E8DCC8", fontFamily: S.serif, fontSize: 62, letterSpacing: "8px", lineHeight: 0.9, fontWeight: 400 }}>
            HARVEST
          </div>
          <div style={{ height: 1, background: "#4A5A3A", margin: "16px auto 12px", width: "80%" }} />
          <div style={{ color: "#8B9E6C", fontFamily: S.mono, fontSize: 7.5, letterSpacing: "3.5px", textTransform: "uppercase" }}>
            Downtown Manhattan / Summer 2026 / One day only
          </div>
        </div>
      </div>
      {/* Carousel dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 5, padding: "8px 0 4px" }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i === 0 ? "#3897F0" : "rgba(255,255,255,0.25)" }} />
        ))}
      </div>
      {/* Action row */}
      <div style={{ display: "flex", alignItems: "center", padding: "2px 14px 6px", gap: 14 }}>
        {["♡", "💬", "➦"].map((icon) => (
          <div key={icon} style={{ color: "white", fontSize: 20, opacity: 0.85 }}>{icon}</div>
        ))}
        <div style={{ marginLeft: "auto", color: "white", fontSize: 18, opacity: 0.85 }}>🔖</div>
      </div>
      {/* Likes + caption */}
      <div style={{ padding: "0 14px", flex: 1 }}>
        <div style={{ color: "white", fontSize: 12.5, fontWeight: 600, fontFamily: S.ui, marginBottom: 4 }}>2,847 likes</div>
        <div style={{ color: "white", fontSize: 12, fontFamily: S.ui, lineHeight: 1.5 }}>
          <span style={{ fontWeight: 600 }}>skyhighfarm </span>
          <span style={{ color: "rgba(255,255,255,0.8)" }}>Fashion grows from the soil. HARVEST brings the farm to the city — shop, eat, give back. Every purchase plants a seed. Every seed feeds New York. 🌱 </span>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>...more</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, fontFamily: S.ui, marginTop: 6 }}>3 hours ago</div>
      </div>
    </div>
  );
}

// ─── Screen 3 — The Buzz (iMessage) ─────────────────────────────────────────

type Msg = { from: "maya" | "jordan" | "me"; text: string };
const MSGS: Msg[] = [
  { from: "maya", text: "yooo did you see what sky high farm just posted" },
  { from: "me", text: "the harvest thing?? just saw it" },
  { from: "jordan", text: "wait what is sky high farm" },
  { from: "maya", text: "it's this brand started by the artist dan colen. they have a farm upstate that donates ALL the food to food banks" },
  { from: "maya", text: "and they make workwear that funds the whole thing" },
  { from: "jordan", text: "oh wait thats actually hard" },
  { from: "me", text: "they've collabed with comme des garçons and balenciaga lol this isn't small" },
  { from: "jordan", text: "im in. when is it" },
  { from: "me", text: "this summer 👀" },
];

function Screen3() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#000", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", padding: "14px 14px 10px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ color: "#3897F0", fontSize: 16, fontFamily: S.ui }}>‹ 3</div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ color: "white", fontSize: 14, fontWeight: 600, fontFamily: S.ui }}>the council 🌿</div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontFamily: S.ui }}>3 people</div>
        </div>
        <div style={{ display: "flex" }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: 20, height: 20, borderRadius: "50%", background: `hsl(${i * 40 + 100}, 40%, 35%)`, border: "1.5px solid #000", marginLeft: i > 0 ? -6 : 0 }} />
          ))}
        </div>
      </div>
      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "12px 10px", display: "flex", flexDirection: "column", gap: 5 }}>
        {MSGS.map((msg, i) => {
          const isMe = msg.from === "me";
          return (
            <div key={i} style={{ display: "flex", justifyContent: isMe ? "flex-end" : "flex-start" }}>
              <div style={{
                maxWidth: "75%",
                background: isMe ? "#1D6AE5" : msg.from === "maya" ? "#3A3A3C" : "#2C2C2E",
                color: "white",
                fontSize: 14,
                fontFamily: S.ui,
                lineHeight: 1.4,
                padding: "9px 13px",
                borderRadius: isMe ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
              }}>
                {msg.text}
              </div>
            </div>
          );
        })}
      </div>
      {/* Input bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px 16px" }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.4)", fontSize: 18, flexShrink: 0 }}>+</div>
        <div style={{ flex: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: "9px 14px", color: "rgba(255,255,255,0.3)", fontSize: 13, fontFamily: S.ui }}>iMessage</div>
      </div>
    </div>
  );
}

// ─── Screen 4 — The Talent ───────────────────────────────────────────────────

const TALENT = [
  { img: "/work/dlxbrandactivation/laila%20gohar.webp", name: "Laila Gohar", role: "Food artist · @lailagohar" },
  { img: "/work/dlxbrandactivation/tremaine%20emory.webp", name: "Tremaine Emory", role: "Denim Tears · SHF collaborator" },
  { img: "/work/dlxbrandactivation/ghetto%20gastro.png", name: "Ghetto Gastro", role: "Culinary collective · Bronx, NY" },
  { img: "/work/dlxbrandactivation/Dan%20Colen.jpg", name: "Dan Colen", role: "Artist · Sky High Farm founder" },
  { img: "/work/dlxbrandactivation/sage%20adams.jpg", name: "Sage Adams", role: "Model · Creative" },
];

function Screen4() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#0A0A0A", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <StoryChrome filled={2} username="skyhighfarm" ago="1h" />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "80px 14px 20px" }}>
        <div style={{ color: "rgba(255,255,255,0.35)", fontFamily: S.mono, fontSize: 9.5, letterSpacing: "4px", textTransform: "uppercase", marginBottom: 18 }}>
          Who&apos;s Pulling Up
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
          {TALENT.map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "9px 13px" }}>
              <div style={{ width: 42, height: 42, borderRadius: "50%", overflow: "hidden", flexShrink: 0, background: "#1a1a1a" }}>
                <img src={t.img} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div>
                <div style={{ color: "white", fontSize: 13, fontWeight: 600, fontFamily: S.ui }}>{t.name}</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, fontFamily: S.ui }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ color: "rgba(255,255,255,0.2)", fontFamily: S.mono, fontSize: 8, letterSpacing: "3px", textAlign: "center", marginTop: 12 }}>
          Talent · VIP · Community
        </div>
      </div>
    </div>
  );
}

// ─── Screen 5 — The Giveaway (Seed Packet) ───────────────────────────────────

const NUTRITION_ROWS: [string, string, boolean?][] = [
  ["Serving size", "1 pop-up"],
  ["Location", "Downtown Manhattan"],
  ["Duration", "1 day"],
  ["Farm donations", "100%", true],
  ["Seed packets given", "500+"],
  ["Exclusive drops", "1 capsule"],
  ["Tons donated to date", "66+"],
  ["Vibes", "Immaculate"],
];

function Screen5() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#F5F0E4", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px 24px", overflow: "hidden" }}>
      {/* Seed packet */}
      <div style={{ transform: "rotate(-2deg)", boxShadow: "0 12px 40px rgba(0,0,0,0.2)", width: "100%", maxWidth: 280, borderRadius: 6, overflow: "hidden", background: "white" }}>
        {/* Top half — dark green */}
        <div style={{ background: "linear-gradient(160deg, #2D3A1F 0%, #4A5A3A 100%)", padding: "20px 18px 18px", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: GRAIN, opacity: 0.3 }} />
          <div style={{ position: "relative", textAlign: "center" }}>
            <div style={{ fontSize: 26, marginBottom: 4 }}>🌿</div>
            <div style={{ color: "#8B9E6C", fontFamily: S.mono, fontSize: 7, letterSpacing: "5px", textTransform: "uppercase", marginBottom: 6 }}>Sky High Farm</div>
            <div style={{ color: "#E8DCC8", fontFamily: S.serif, fontSize: 26, fontWeight: 400, marginBottom: 4 }}>Collard Greens</div>
            <div style={{ color: "#6B7A5A", fontFamily: S.mono, fontSize: 7.5, letterSpacing: "1.5px" }}>Heirloom · Organic · Hudson Valley, NY</div>
          </div>
        </div>
        {/* Bottom half — Nutrition Facts panel */}
        <div style={{ background: "white", padding: "10px 12px 14px", border: "1px solid #ddd" }}>
          <div style={{ fontFamily: S.mono, fontSize: 18, fontWeight: 700, letterSpacing: "-0.5px", borderBottom: "8px solid black", paddingBottom: 3, marginBottom: 4 }}>Activation Facts</div>
          <div style={{ fontSize: 9, fontFamily: S.mono, color: "#333", marginBottom: 4 }}>About 1 serving per drop</div>
          {NUTRITION_ROWS.map(([label, value, bold], i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: bold ? "4px solid black" : "0.5px solid #ccc", padding: "4px 0", fontFamily: S.mono, fontSize: 9.5 }}>
              <span style={{ color: "#111", fontWeight: bold ? 700 : 400 }}>{label}</span>
              <span style={{ color: "#111", fontWeight: bold ? 700 : 400 }}>{value}</span>
            </div>
          ))}
          <div style={{ marginTop: 8, fontFamily: S.serif, fontSize: 9.5, fontStyle: "italic", color: "#555", lineHeight: 1.5, borderTop: "1px solid #ddd", paddingTop: 6 }}>
            Every customer becomes a donor. Every seed feeds New York.
          </div>
        </div>
      </div>
      <div style={{ marginTop: 20, fontFamily: S.serif, fontSize: 12, fontStyle: "italic", color: "#4A5A3A", textAlign: "center", letterSpacing: "0.3px" }}>
        Purchase anything, take home a seed packet. Plant it.
      </div>
    </div>
  );
}

// ─── Screen 6 — The Recap ────────────────────────────────────────────────────

const RECAP_GRID = [
  { src: "/work/dlxbrandactivation/SKY-HIGH-FARM-tcbp-articleLarge.webp", label: "The people 🤝", full: false },
  { src: "/work/dlxbrandactivation/BROWNJACKET-FRONT.jpg", label: "The fits 👕", full: false },
  { src: "/work/dlxbrandactivation/barrysweater_front.jpg", label: "The drops 🏷", full: false },
  { src: "/work/dlxbrandactivation/tan-jacket-FRONT.jpg", label: "The gear 🌱", full: false },
];

function Screen6() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#0D0D0D", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <StoryChrome filled={3} username="skyhighfarm" ago="just now" />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: 68, gap: 2, padding: "2px 2px 2px" }}>
        {/* Hero image full width */}
        <div style={{ position: "relative", flex: "0 0 140px", overflow: "hidden" }}>
          <img src="/work/dlxbrandactivation/skyhigh_inline16.webp" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.05) brightness(0.88) saturate(0.8)" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: GRAIN, opacity: 0.5 }} />
          <div style={{ position: "absolute", bottom: 8, left: 10 }}>
            <div style={{ color: "#E8DCC8", fontFamily: S.serif, fontSize: 24, fontWeight: 600, letterSpacing: "3px", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>HARVEST DAY</div>
          </div>
        </div>
        {/* 2x2 grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, flex: 1 }}>
          {RECAP_GRID.map((item, i) => (
            <div key={i} style={{ position: "relative", overflow: "hidden", minHeight: 90 }}>
              <img src={item.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.1) brightness(0.85) saturate(0.8)" }} />
              <div style={{ position: "absolute", inset: 0, backgroundImage: GRAIN, opacity: 0.45 }} />
              <div style={{ position: "absolute", bottom: 6, left: 7, color: "rgba(255,255,255,0.75)", fontFamily: S.mono, fontSize: 8, letterSpacing: "1px" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Screen 7 — The Close ────────────────────────────────────────────────────

function Screen7({ visible }: { visible: boolean }) {
  const [show, setShow] = useState(false);
  useEffect(() => { if (visible) { const t = setTimeout(() => setShow(true), 500); return () => clearTimeout(t); } else { setShow(false); } }, [visible]);
  return (
    <div style={{ position: "absolute", inset: 0, background: "#000", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <div style={{ textAlign: "center", opacity: show ? 1 : 0, transition: "opacity 0.8s ease" }}>
        <div style={{ color: "rgba(255,255,255,0.22)", fontFamily: S.serif, fontSize: 30, letterSpacing: "7px", textTransform: "uppercase", fontWeight: 400, marginBottom: 10 }}>Nico Verde</div>
        <div style={{ color: "rgba(255,255,255,0.1)", fontFamily: S.mono, fontSize: 8.5, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 20 }}>Concept for DLX NYC · 2026</div>
        <img src="/nico logo no background.png" alt="Nico Verde" style={{ width: 56, height: 56, objectFit: "contain", opacity: 0.28, display: "block", margin: "0 auto", filter: "brightness(10)" }} />
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function HarvestPage() {
  const [current, setCurrent] = useState(0);
  const [thumbPhase, setThumbPhase] = useState<"rest" | "flick" | "settle">("rest");
  const [showReplay, setShowReplay] = useState(false);
  const advancingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => { if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; } };

  const advance = useCallback(() => {
    if (advancingRef.current) return;
    advancingRef.current = true;
    setThumbPhase("flick");
    setTimeout(() => {
      setCurrent((s) => {
        const next = Math.min(s + 1, TOTAL - 1);
        if (next === TOTAL - 1) setTimeout(() => setShowReplay(true), 3000);
        return next;
      });
      setThumbPhase("settle");
      setTimeout(() => {
        setThumbPhase("rest");
        advancingRef.current = false;
      }, 500);
    }, 300);
  }, []);

  // Dwell timer
  useEffect(() => {
    clearTimer();
    const dwell = DWELL[current];
    if (!dwell) return;
    timerRef.current = setTimeout(advance, dwell);
    return clearTimer;
  }, [current, advance]);

  const jumpTo = (i: number) => {
    if (advancingRef.current) return;
    clearTimer();
    advancingRef.current = false;
    setCurrent(i);
    setShowReplay(false);
    setThumbPhase("rest");
    if (i === TOTAL - 1) setTimeout(() => setShowReplay(true), 3000);
  };

  const replay = () => {
    clearTimer();
    advancingRef.current = false;
    setShowReplay(false);
    setThumbPhase("rest");
    setCurrent(0);
  };

  const thumbStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 28,
    right: 20,
    width: 38,
    height: 72,
    borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
    background: "linear-gradient(160deg, #C68642 0%, #A0522D 60%, #8B4513 100%)",
    boxShadow: "inset -2px -2px 6px rgba(0,0,0,0.25), inset 1px 1px 3px rgba(255,220,170,0.3)",
    zIndex: 30,
    transform: thumbPhase === "flick" ? "translateY(-58px)" : "translateY(0)",
    transition: thumbPhase === "flick"
      ? "transform 0.28s cubic-bezier(0.2, 0, 0.3, 1)"
      : thumbPhase === "settle"
      ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      : "none",
  };

  const screens = [
    <Screen1 key={0} />,
    <Screen2 key={1} />,
    <Screen3 key={2} />,
    <Screen4 key={3} />,
    <Screen5 key={4} />,
    <Screen6 key={5} />,
    <Screen7 key={6} visible={current === 6} />,
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A08", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", padding: "40px 0 60px", fontFamily: S.ui }}>

      {/* Ambient grain overlay */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: GRAIN, opacity: 0.07, pointerEvents: "none", zIndex: 999 }} />

      {/* Explainer + title above phone */}
      <div style={{ textAlign: "center", marginBottom: 28, pointerEvents: "none", userSelect: "none" }}>
        <div style={{ color: "rgba(255,255,255,0.28)", fontFamily: S.mono, fontSize: 9, letterSpacing: "4px", textTransform: "uppercase", marginBottom: 12 }}>
          A Mock Brand Activation Proposal
        </div>
        <div style={{ color: "rgba(232,220,200,0.18)", fontFamily: S.serif, fontSize: 20, letterSpacing: "0.3px", lineHeight: 1.55, maxWidth: 380, margin: "0 auto 22px" }}>
          What it would look like if someone discovered a Sky High Farm activation through their feed
        </div>
        <div style={{ color: "rgba(232,220,200,0.36)", fontFamily: S.serif, fontSize: 52, letterSpacing: "10px", fontWeight: 400, lineHeight: 1, textTransform: "uppercase" }}>
          HARVEST
        </div>
      </div>

      {/* Phone scene */}
      <div style={{ perspective: 900, perspectiveOrigin: "50% 50%" }}>
        <div style={{ transform: "rotateX(5deg)", transformStyle: "preserve-3d", position: "relative" }}>

          {/* LEFT — 4 fingertip ovals peeking over left edge */}
          <div style={{ position: "absolute", left: -20, top: "44%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 12, zIndex: 2 }}>
            {([
              { w: 38, h: 13, ml: 0 },
              { w: 42, h: 14, ml: -2 },
              { w: 38, h: 13, ml: -1 },
              { w: 30, h: 11, ml: 5 },
            ] as const).map((f, i) => (
              <div key={i} style={{ width: f.w, height: f.h, marginLeft: f.ml, background: "linear-gradient(90deg, #8B5030 0%, #C49A7A 45%, #D4AA8A 70%, #C49A7A 100%)", borderRadius: "50%", boxShadow: "1px 2px 6px rgba(0,0,0,0.4)" }} />
            ))}
          </div>

          {/* Phone body */}
          <div style={{ width: 375, height: 812, background: "#1A1A1A", borderRadius: 44, border: "3px solid #2C2C2C", boxShadow: "0 30px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05), inset 0 0 0 1px rgba(255,255,255,0.04)", position: "relative", overflow: "hidden", zIndex: 1 }}>

            {/* Dynamic island */}
            <div style={{ position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)", width: 126, height: 36, background: "#000", borderRadius: 20, zIndex: 50 }} />

            {/* Screen area */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", borderRadius: 41 }}>
              {screens.map((screen, i) => (
                <div key={i} style={{ position: "absolute", inset: 0, opacity: current === i ? 1 : 0, transition: "opacity 0.3s ease", pointerEvents: current === i ? "auto" : "none" }}>
                  {screen}
                </div>
              ))}
            </div>

            {/* Phone side buttons */}
            <div style={{ position: "absolute", left: -4, top: 120, width: 3, height: 40, background: "#333", borderRadius: 2 }} />
            <div style={{ position: "absolute", left: -4, top: 170, width: 3, height: 60, background: "#333", borderRadius: 2 }} />
            <div style={{ position: "absolute", left: -4, top: 240, width: 3, height: 60, background: "#333", borderRadius: 2 }} />
            <div style={{ position: "absolute", right: -4, top: 160, width: 3, height: 80, background: "#333", borderRadius: 2 }} />
          </div>

          {/* Thumb — pill shape outside phone overflow, does the flick animation */}
          <div style={{
            position: "absolute",
            right: -10,
            bottom: 88,
            width: 24,
            height: 58,
            background: "linear-gradient(170deg, #D4AA8A 0%, #C49A7A 38%, #A06040 100%)",
            borderRadius: 50,
            boxShadow: "0 3px 10px rgba(0,0,0,0.45)",
            zIndex: 3,
            transform: thumbPhase === "flick" ? "translateY(-50px)" : "translateY(0)",
            transition: thumbPhase === "flick"
              ? "transform 0.28s cubic-bezier(0.2, 0, 0.3, 1)"
              : thumbPhase === "settle"
              ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }} />
        </div>
      </div>

      {/* Replay button */}
      {showReplay && (
        <button onClick={replay} style={{ marginTop: 28, background: "transparent", border: "1px solid rgba(232,220,200,0.25)", color: "rgba(232,220,200,0.6)", fontFamily: S.serif, fontSize: 15, letterSpacing: "3px", padding: "10px 28px", cursor: "pointer", transition: "all 0.3s ease", animation: "fadeIn 0.6s ease" }}
          onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "rgba(232,220,200,0.6)"; (e.target as HTMLElement).style.color = "rgba(232,220,200,1)"; }}
          onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "rgba(232,220,200,0.25)"; (e.target as HTMLElement).style.color = "rgba(232,220,200,0.6)"; }}
        >
          ↻ Replay
        </button>
      )}

      {/* Nav dots */}
      <div style={{ position: "fixed", right: 24, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 10, zIndex: 100 }}>
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button key={i} onClick={() => jumpTo(i)} style={{ width: 8, height: 8, borderRadius: "50%", border: "none", cursor: "pointer", background: current === i ? "rgba(232,220,200,0.85)" : "rgba(255,255,255,0.2)", padding: 0, transition: "background 0.3s ease, transform 0.2s ease", transform: current === i ? "scale(1.3)" : "scale(1)" }} />
        ))}
      </div>

      {/* Page footer */}
      <div style={{ position: "fixed", bottom: 18, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.15)", fontFamily: S.mono, fontSize: 8.5, letterSpacing: "2.5px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
        Nico Verde · Concept for DLX NYC · Summer 2026 Internship
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}
