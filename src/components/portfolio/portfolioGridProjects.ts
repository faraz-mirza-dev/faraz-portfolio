import type { PortfolioFilterTab, Project } from "@/types";

/** Category tabs show up to this many tiles; matches first, then fills from the rest of the catalog. */
export const FILTER_GRID_MAX = 6;

export function projectsForPortfolioGrid(
  activeFilter: PortfolioFilterTab,
  all: Project[],
): Project[] {
  if (activeFilter === "all") return all;
  const matched = all.filter((p) => p.filterCategory === activeFilter);
  if (matched.length >= FILTER_GRID_MAX) {
    return matched.slice(0, FILTER_GRID_MAX);
  }
  const matchedIds = new Set(matched.map((p) => p.id));
  const rest = all.filter((p) => !matchedIds.has(p.id));
  return [...matched, ...rest].slice(0, FILTER_GRID_MAX);
}
