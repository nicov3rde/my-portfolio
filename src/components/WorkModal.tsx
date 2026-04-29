"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Campaign, CampaignMedia } from "@/data/projects";

interface WorkModalProps {
  campaign: Campaign | null;
  onClose: () => void;
}

export default function WorkModal({ campaign, onClose }: WorkModalProps) {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const [unmutedIdx, setUnmutedIdx] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );

  useEffect(() => {
    if (!campaign) return;
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [campaign, handleKey]);

  // Reset on campaign change, autoplay first video
  useEffect(() => {
    if (campaign) {
      setPlayingIdx(0);
      setUnmutedIdx(null);
    } else {
      setPlayingIdx(null);
      setUnmutedIdx(null);
      videoRefs.current = [];
    }
  }, [campaign?.id]);

  // Sync play/pause and mute state
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      vid.muted = i !== unmutedIdx;
      if (i === playingIdx) {
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [playingIdx, unmutedIdx]);

  const handleMouseEnter = (i: number) => setPlayingIdx(i);

  const handleMouseLeave = (i: number) => {
    // If this video is unmuted, keep it playing
    if (unmutedIdx === i) return;
    if (playingIdx === i) setPlayingIdx(null);
  };

  const toggleMute = (e: React.MouseEvent, i: number) => {
    e.stopPropagation();
    if (unmutedIdx === i) {
      setUnmutedIdx(null);
    } else {
      setUnmutedIdx(i);
      setPlayingIdx(i);
    }
  };

  const mediaItems = campaign?.media ?? [];

  return (
    <AnimatePresence>
      {campaign && (
        <motion.div
          key="work-modal"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-bg overflow-y-auto"
        >
          {/* Sticky header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 h-14 bg-bg/90 backdrop-blur-md border-b border-border">
            <span className="text-[10px] tracking-widest uppercase text-white/25 font-body">
              {campaign.type}
            </span>
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center text-white/40 hover:text-white border border-white/10 hover:border-white/30 transition-colors duration-200"
              aria-label="Close"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M1 1l11 11M12 1L1 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="px-6 md:px-12 lg:px-20 pt-14 pb-28">
            {campaign.award && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.02, duration: 0.4 }} className="mb-6">
                <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-body text-green border border-green/30 px-4 py-2">
                  {campaign.award}
                </span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-display-xl text-cream uppercase leading-none mb-5"
            >
              {campaign.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-1.5 mb-8"
            >
              <span className="text-xs tracking-widest uppercase font-body text-green/80">{campaign.role}</span>
              <span className="text-white/20 text-xs font-body">·</span>
              <span className="text-xs tracking-widest uppercase font-body text-white/35">{campaign.date}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-stone font-body leading-relaxed text-base md:text-lg max-w-2xl mb-8"
            >
              {campaign.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {campaign.tags.map((tag) => (
                <span key={tag} className="text-[10px] tracking-widest uppercase font-body px-3 py-1.5 border border-green/25 text-green/65">
                  {tag}
                </span>
              ))}
            </motion.div>

            {campaign.link && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28, duration: 0.4 }} className="mb-14">
                <a
                  href={campaign.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green inline-flex"
                  onClick={(e) => e.stopPropagation()}
                >
                  {campaign.linkLabel ?? "Visit Live App"}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="ml-1">
                    <path d="M1 11L11 1M11 1H4M11 1v7" />
                  </svg>
                </a>
              </motion.div>
            )}

            {/* Media — horizontal row */}
            {mediaItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex gap-2 md:gap-3 overflow-x-auto pb-2"
                style={{ maxHeight: "70vh" }}
              >
                {mediaItems.map((item, i) => (
                  <ModalMediaCell
                    key={i}
                    item={item}
                    index={i}
                    isPlaying={playingIdx === i}
                    isUnmuted={unmutedIdx === i}
                    videoRef={(el) => { videoRefs.current[i] = el; }}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={() => handleMouseLeave(i)}
                    onToggleMute={(e) => toggleMute(e, i)}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ModalMediaCellProps {
  item: CampaignMedia;
  index: number;
  isPlaying: boolean;
  isUnmuted: boolean;
  videoRef: (el: HTMLVideoElement | null) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onToggleMute: (e: React.MouseEvent) => void;
}

function ModalMediaCell({ item, isUnmuted, videoRef, onMouseEnter, onMouseLeave, onToggleMute }: ModalMediaCellProps) {
  const aspect = item.aspect ?? "9/16";

  return (
    <div
      className="relative flex-shrink-0 overflow-hidden group bg-card"
      style={{
        height: "min(70vh, 680px)",
        aspectRatio: aspect.replace("/", " / "),
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {item.type === "video" ? (
        <>
          <video
            ref={videoRef}
            src={item.src}
            preload="metadata"
            muted
            loop
            playsInline
            className="w-full h-full object-contain"
            onLoadedMetadata={(e) => {
              (e.currentTarget as HTMLVideoElement).currentTime = 0.01;
            }}
          />
          {/* Unmute button */}
          <button
            onClick={onToggleMute}
            aria-label={isUnmuted ? "Mute" : "Unmute"}
            className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center bg-black/60 hover:bg-black/80 border border-white/20 hover:border-white/50 text-white/60 hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            {isUnmuted ? (
              // Speaker on
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            ) : (
              // Speaker muted
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            )}
          </button>
        </>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.src} alt={item.caption ?? ""} className="w-full h-full object-contain" />
      )}

      {item.caption && (
        <div className="absolute inset-x-0 bottom-0 py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-[10px] tracking-widest uppercase text-white/50 font-body">{item.caption}</p>
        </div>
      )}
    </div>
  );
}
