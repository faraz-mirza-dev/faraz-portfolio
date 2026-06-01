import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls the window to the top whenever the route (path or query) changes. */
export default function ScrollToTop(): null {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, search]);

  return null;
}
