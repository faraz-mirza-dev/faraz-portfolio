import useTheme from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const iconClass =
    theme === "dark" ? "fa fa-sun-o" : "fa fa-moon-o";

  return (
    <div
      id="showSwitcher"
      role="button"
      tabIndex={0}
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleTheme();
        }
      }}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      <i className={iconClass} aria-hidden="true" />
    </div>
  );
}
