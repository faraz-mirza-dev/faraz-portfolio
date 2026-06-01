import { useAnimate } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { applyRtlToDocument } from "@/hooks/useRtl";
import {
  readClientRtlPreference,
  writeRtlPersistence,
} from "@/lib/rtl-preference";

type RtlContextValue = {
  isRtl: boolean;
  toggleRtl: () => void;
};

const RtlContext = createContext<RtlContextValue | null>(null);

export function useRtlTransition(): RtlContextValue {
  const ctx = useContext(RtlContext);
  if (!ctx) {
    throw new Error("useRtlTransition must be used within RtlTransitionProvider");
  }
  return ctx;
}

type RtlTransitionProviderProps = {
  initialRtl: boolean;
  chrome: ReactNode;
  main: ReactNode;
  footer: ReactNode;
};

export default function RtlTransitionProvider({
  initialRtl,
  chrome,
  main,
  footer,
}: RtlTransitionProviderProps): ReactNode {
  const [isRtl, setIsRtl] = useState(initialRtl);
  const [scope, animate] = useAnimate();
  const busyRef = useRef(false);

  useLayoutEffect(() => {
    const effective = readClientRtlPreference();
    setIsRtl(effective);
    applyRtlToDocument(effective);
    writeRtlPersistence(effective);
  }, []);

  const toggleRtl = useCallback(async () => {
    if (busyRef.current) return;
    busyRef.current = true;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    try {
      const el = scope.current;
      if (!reduced && el) {
        await animate(
          el,
          { opacity: 0.86, scale: 0.993 },
          { duration: 0.14, ease: "easeIn" },
        );
      }

      setIsRtl((prev) => {
        const next = !prev;
        writeRtlPersistence(next);
        applyRtlToDocument(next);
        return next;
      });

      if (!reduced && el) {
        await animate(
          el,
          { opacity: 1, scale: 1 },
          { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        );
      }
    } finally {
      busyRef.current = false;
    }
  }, [animate, scope]);

  const value = useMemo(() => ({ isRtl, toggleRtl }), [isRtl, toggleRtl]);

  return (
    <RtlContext.Provider value={value}>
      {chrome}
      <div ref={scope} className="rtl-motion-page-shell">
        {main}
      </div>
      {footer}
    </RtlContext.Provider>
  );
}
