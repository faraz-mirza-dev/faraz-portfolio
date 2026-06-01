import { useState, useEffect } from "react";
import type { Theme } from "@/types";

export const useTheme = (): {
  theme: Theme;
  toggleTheme: () => void;
} => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme") as Theme | null;
    const initial: Theme = stored ?? "dark";
    const id = requestAnimationFrame(() => {
      setTheme(initial);
      document.documentElement.setAttribute("data-theme", initial);
      document.body.classList.toggle("light", initial === "light");
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const toggleTheme = (): void => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("portfolio-theme", next);
    document.documentElement.setAttribute("data-theme", next);
    document.body.classList.toggle("light", next === "light");
  };

  return { theme, toggleTheme };
};

export default useTheme;
