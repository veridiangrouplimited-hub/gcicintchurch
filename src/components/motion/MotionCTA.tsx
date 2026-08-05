"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Tactile hover/tap feedback for primary CTAs (spring lift + press). Motion handles
 * the transient hover/tap state internally — no useState involved.
 */
export function MotionCTA({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className="inline-block"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
