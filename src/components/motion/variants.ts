/** Shared easing — `smoothOut` eases in gently and settles slowly at the end. */
export const easings = {
  out: [0.22, 1, 0.36, 1] as const,
  smoothOut: [0.16, 1, 0.32, 1] as const,
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easings.smoothOut },
  },
};

/** Portfolio filter tabs — first paint */
export const portfolioFilterNavContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.075, delayChildren: 0.1 },
  },
};

export const portfolioFilterNavItem = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: easings.smoothOut },
  },
};

/** Portfolio grid — runs on first load and whenever `activeFilter` changes (keyed list) */
export const portfolioGridContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.34, ease: easings.smoothOut },
  },
};

export const portfolioGridItem = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 280,
      damping: 36,
      mass: 0.85,
    },
  },
};
