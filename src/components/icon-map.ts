import { Award, CircuitBoard, Cloud, Cpu, Medal, Send, ShieldCheck, Sparkles, Trophy, type LucideIcon } from "lucide-react";
import type { IconName } from "@/types/portfolio";

/** Maps icon names used in portfolio.ts to lucide components. */
export const lucideIcons: Record<IconName, LucideIcon> = {
  send: Send,
  sparkles: Sparkles,
  cpu: Cpu,
  "circuit-board": CircuitBoard,
  cloud: Cloud,
  "shield-check": ShieldCheck,
  trophy: Trophy,
  medal: Medal,
  award: Award,
};
