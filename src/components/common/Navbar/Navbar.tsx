import { motion, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useCallback, useEffect, useRef } from "react";
import { easings } from "@/components/motion";
import { navItems } from "@/data/navigation";
import type { NavItem } from "@/types";

/** Match current pathname to a nav `href` (home is exact; others allow nested segments). */
function isActiveNavPath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const { pathname } = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const mobileMenuCheckboxRef = useRef<HTMLInputElement>(null);

  const closeMobileMenu = useCallback((): void => {
    const input = mobileMenuCheckboxRef.current;
    if (input) input.checked = false;
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  return (
    <header className="header" id="navbar-collapse-toggle">
      <nav aria-label="Primary" className="d-none d-lg-block">
        <ul className="icon-menu revealator-slideup revealator-once revealator-delay1">
          {navItems.map((item, index) => (
            <DesktopNavItem
              key={item.href}
              item={item}
              pathname={pathname}
              index={index}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </ul>
      </nav>

      <nav aria-label="Primary" className="d-block d-lg-none">
        <div id="menuToggle">
          <input
            ref={mobileMenuCheckboxRef}
            type="checkbox"
            aria-controls="menu"
            aria-label="Toggle navigation menu"
          />
          <span></span>
          <span></span>
          <span></span>
          <ul className="list-unstyled" id="menu">
            {navItems.map((item, index) => (
              <MobileNavItem
                key={item.href}
                item={item}
                pathname={pathname}
                index={index}
                prefersReducedMotion={prefersReducedMotion}
                onNavigate={closeMobileMenu}
              />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

function DesktopNavItem({
  item,
  pathname,
  index,
  prefersReducedMotion,
}: {
  item: NavItem;
  pathname: string;
  index: number;
  prefersReducedMotion: boolean | null;
}) {
  const active = isActiveNavPath(pathname, item.href);

  return (
    <motion.li
      className={`icon-box ${active ? "active" : ""}`}
      initial={prefersReducedMotion ? false : { opacity: 0, x: 16 }}
      animate={prefersReducedMotion ? false : { opacity: 1, x: 0 }}
      transition={{
        delay: prefersReducedMotion ? 0 : 0.07 * index + 0.12,
        duration: 0.42,
        ease: easings.out,
      }}
    >
      <i className={`fa ${item.icon}`} aria-hidden />
      <Link to={item.href} aria-current={active ? "page" : undefined}>
        <h2>{item.label}</h2>
      </Link>
    </motion.li>
  );
}

function MobileNavItem({
  item,
  pathname,
  index,
  prefersReducedMotion,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  index: number;
  prefersReducedMotion: boolean | null;
  onNavigate: () => void;
}) {
  const active = isActiveNavPath(pathname, item.href);

  return (
    <motion.li
      className={active ? "active" : ""}
      initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
      animate={prefersReducedMotion ? false : { opacity: 1, x: 0 }}
      transition={{
        delay: prefersReducedMotion ? 0 : 0.05 * index,
        duration: 0.38,
        ease: easings.out,
      }}
    >
      <Link
        to={item.href}
        aria-current={active ? "page" : undefined}
        onClick={onNavigate}
      >
        <i className={`fa ${item.icon}`} aria-hidden />
        <span>{item.label}</span>
      </Link>
    </motion.li>
  );
}
