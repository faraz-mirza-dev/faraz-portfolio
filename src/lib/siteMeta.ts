/** Shown in `<title>` after each page-specific label (e.g. `Home | …`). */
export const SITE_TITLE_SUFFIX =
  "Tunis- Personal Portfolio ReactJs Template";

export function documentTitle(pageLabel: string): string {
  return `${pageLabel} | ${SITE_TITLE_SUFFIX}`;
}
