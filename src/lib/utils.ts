// lib/utils/cn.ts
import { twMerge } from "tailwind-merge";

/**
 * Junta classes Tailwind e resolve conflitos (ex: dois bg-*).
 */
export function cn(...classes: (string | undefined | null | false)[]) {
  return twMerge(classes.filter(Boolean).join(" "));
}
