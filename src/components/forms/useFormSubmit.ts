"use client";

import { useEffect, useRef, useState } from "react";

export type FormStatus = "idle" | "submitting" | "success" | "error";

/** Shared submit logic for all form Route Handlers — adds the honeypot + timing fields spam-guard.ts checks. */
export function useFormSubmit(endpoint: string) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  // Captured post-render (not during render, which must stay pure) — marks
  // when the form actually became visible, for the spam-guard timing check.
  const renderedAt = useRef<number | null>(null);
  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  async function submit(data: Record<string, unknown>) {
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formRenderedAt: renderedAt.current ?? Date.now() }),
      });
      const json = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !json.ok) {
        setError(json.error ?? "Something went wrong — please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError("Network error — please check your connection and try again.");
      setStatus("error");
    }
  }

  return { status, error, submit };
}

/** Hidden honeypot field — real visitors never see or fill this in. Spread onto an input. */
export const honeypotProps = {
  name: "honeypot",
  tabIndex: -1,
  autoComplete: "off",
  "aria-hidden": true,
  style: { position: "absolute" as const, left: "-9999px", width: 1, height: 1, opacity: 0 },
};
