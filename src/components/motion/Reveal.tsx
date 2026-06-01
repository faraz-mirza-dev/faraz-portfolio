import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { easings } from "./variants";

export type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  margin?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView">;

/**
 * Scroll-reveal: fades in and slides up when entering the viewport once.
 * Respects `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  margin = "-32px 0px -48px 0px",
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14, margin }}
      transition={{ duration: 0.88, delay, ease: easings.smoothOut }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
