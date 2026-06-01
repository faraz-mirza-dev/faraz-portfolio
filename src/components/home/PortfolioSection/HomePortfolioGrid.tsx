import { useReducedMotion } from "framer-motion";
import {
  useCallback,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";

/**
 * Wraps the home portfolio tiles: a soft accent glow follows the pointer in 2D
 * across the whole grid (horizontal + vertical motion).
 */
export default function HomePortfolioGrid({
  children,
}: {
  children: ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [glowActive, setGlowActive] = useState(false);
  const reducedMotion = useReducedMotion();

  const updateGlow = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (reducedMotion) return;
      const el = rootRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return;
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--portfolio-glow-x", `${x}%`);
      el.style.setProperty("--portfolio-glow-y", `${y}%`);
    },
    [reducedMotion],
  );

  const onEnter = useCallback(() => {
    if (!reducedMotion) setGlowActive(true);
  }, [reducedMotion]);

  const onLeave = useCallback(() => {
    setGlowActive(false);
    const el = rootRef.current;
    if (!el) return;
    el.style.removeProperty("--portfolio-glow-x");
    el.style.removeProperty("--portfolio-glow-y");
  }, []);

  return (
    <div
      ref={rootRef}
      className={`portfolio-grid portfolio-grid--cursor-glow${glowActive ? " is-glow-active" : ""}`}
      onMouseMove={updateGlow}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {!reducedMotion ? (
        <span className="portfolio-grid__glow" aria-hidden />
      ) : null}
      {children}
    </div>
  );
}
