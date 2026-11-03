import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PLACEHOLDER = /\[\[[^\]]+\]\]/;

/** True when a value still contains a [[PLACEHOLDER]]. */
export function isPlaceholder(value: string | undefined | null): boolean {
  return typeof value === "string" && PLACEHOLDER.test(value);
}

/** True when a value is filled in (not empty and not a placeholder). */
export function hasValue(value: string | undefined | null): value is string {
  return typeof value === "string" && value.trim() !== "" && !isPlaceholder(value);
}

/** "https://github.com/owner/repo(.git)" → "owner/repo" */
export function repoSlug(url: string): string | null {
  const match = url.match(/github\.com\/([^/]+)\/([^/#?]+)/i);
  if (!match) return null;
  return `${match[1]}/${match[2].replace(/\.git$/, "")}`;
}

/** Copy text with a fallback for browsers without the async Clipboard API. */
export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    return ok;
  } catch {
    return false;
  }
}

/** Smooth-scroll to a section, honouring prefers-reduced-motion. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", id === "top" ? window.location.pathname : `#${id}`);
}
