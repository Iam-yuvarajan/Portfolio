"use client";

import { useCallback } from "react";
import { toast } from "sonner";
import { copyText } from "@/lib/utils";

/** Copy to clipboard and show a toast. */
export function useCopy() {
  return useCallback(async (text: string, label: string) => {
    const ok = await copyText(text);
    if (ok) toast.success(`${label} copied`, { description: text });
    else toast.error(`Couldn't copy ${label.toLowerCase()}`, { description: text });
  }, []);
}
