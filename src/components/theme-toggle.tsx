"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const order = ["light", "dark", "system"] as const;
type Mode = (typeof order)[number];
const icons = { light: Sun, dark: Moon, system: Monitor } satisfies Record<Mode, unknown>;

/** Cycles light → dark → system. */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const current: Mode = mounted && order.includes(theme as Mode) ? (theme as Mode) : "system";
  const next = order[(order.indexOf(current) + 1) % order.length];
  const Icon = icons[current];

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(next)}
      aria-label={`Theme: ${current}. Switch to ${next}.`}
      title={`Theme: ${current}`}
    >
      {/* Render a neutral icon until mounted to avoid a hydration mismatch. */}
      {mounted ? <Icon aria-hidden /> : <Monitor aria-hidden className="opacity-0" />}
    </Button>
  );
}
