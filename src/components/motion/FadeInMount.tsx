import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { easings } from "./variants";

type FadeInMountProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Hero / above-the-fold: animates on mount (not scroll). */
export function FadeInMount({
  children,
  className,
  delay = 0,
}: FadeInMountProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.92, delay, ease: easings.smoothOut }}
    >
      {children}
    </motion.div>
  );
}
