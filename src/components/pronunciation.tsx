"use client";

import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PronunciationProps {
  phonetic: string;
  native: string;
  spoken: string;
}

/** Phonetic spelling of the name, plus a button that reads it aloud. */
export function Pronunciation({ phonetic, native, spoken }: PronunciationProps) {
  const [supported, setSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    setSupported(true);
    // Voices load asynchronously in some browsers; warm the list up.
    window.speechSynthesis.getVoices();
    return () => window.speechSynthesis.cancel();
  }, []);

  const speak = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    const voices = synth.getVoices();
    const tamil = voices.find((v) => v.lang.toLowerCase().startsWith("ta"));
    const english =
      voices.find((v) => v.lang.toLowerCase() === "en-in") ??
      voices.find((v) => v.lang.toLowerCase().startsWith("en"));

    const utterance = new SpeechSynthesisUtterance(tamil ? native : spoken);
    utterance.voice = tamil ?? english ?? null;
    utterance.lang = tamil ? tamil.lang : (english?.lang ?? "en-IN");
    utterance.rate = 0.8;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    synth.speak(utterance);
  };

  return (
    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
      <span className="sr-only">Pronounced </span>
      <span className="font-mono tracking-tight">/{phonetic}/</span>
      <span aria-hidden className="text-muted-foreground/60">·</span>
      <span lang="ta">{native}</span>
      {supported && (
        <button
          type="button"
          onClick={speak}
          aria-label="Hear how to pronounce my name"
          title="Hear pronunciation"
          className={cn(
            "ml-0.5 grid size-7 place-items-center rounded-full transition-colors hover:bg-accent hover:text-foreground",
            speaking && "bg-brand-soft text-brand",
          )}
        >
          <Volume2 className={cn("size-4", speaking && "animate-pulse")} aria-hidden />
        </button>
      )}
    </p>
  );
}
