"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * One-time entrance stagger for the homepage hero's text stack (eyebrow, headline,
 * subtitle, CTAs). Animates on mount, not on scroll — the hero is already in view.
 */
export function HeroReveal({
  children,
  index = 0,
  className,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
