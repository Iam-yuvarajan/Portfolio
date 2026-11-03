"use client";

import { useEffect, useState } from "react";

export interface RepoStats {
  stars: number;
  language: string | null;
  updatedAt: string;
}

const CACHE_KEY = "gh-repo-stats:v1";
const CACHE_TTL = 60 * 60 * 1000; // 1 hour, keeps us well under the 60 req/h anonymous limit

type Cache = { at: number; data: Record<string, RepoStats> };

function readCache(): Cache | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cache = JSON.parse(raw) as Cache;
    return Date.now() - cache.at < CACHE_TTL ? cache : null;
  } catch {
    return null;
  }
}

function writeCache(data: Record<string, RepoStats>) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }));
  } catch {
    /* storage unavailable: ignore */
  }
}

/**
 * Fetches public stats for "owner/repo" slugs after the page renders.
 * Never blocks rendering; any failure (offline, rate limit) just returns {}.
 */
export function useGitHubStats(slugs: string[]): Record<string, RepoStats> {
  const [stats, setStats] = useState<Record<string, RepoStats>>({});
  const key = slugs.join(",");

  useEffect(() => {
    const wanted = key.split(",").filter(Boolean);
    const cached = readCache();
    if (cached && wanted.every((s) => s in cached.data)) {
      setStats(cached.data);
      return;
    }

    const controller = new AbortController();
    Promise.allSettled(
      wanted.map(async (slug) => {
        const res = await fetch(`https://api.github.com/repos/${slug}`, {
          headers: { Accept: "application/vnd.github+json" },
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(String(res.status));
        const json = (await res.json()) as { stargazers_count: number; language: string | null; pushed_at: string };
        return [slug, { stars: json.stargazers_count, language: json.language, updatedAt: json.pushed_at }] as const;
      }),
    ).then((results) => {
      if (controller.signal.aborted) return;
      const data: Record<string, RepoStats> = {};
      for (const r of results) if (r.status === "fulfilled") data[r.value[0]] = r.value[1];
      if (Object.keys(data).length > 0) {
        setStats(data);
        writeCache(data);
      }
    });

    return () => controller.abort();
  }, [key]);

  return stats;
}
