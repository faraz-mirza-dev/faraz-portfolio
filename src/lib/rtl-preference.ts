export const RTL_STORAGE_KEY = "portfolio-rtl";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** Server + client: treat these as RTL. */
export function parseRtlCookieValue(raw: string | undefined): boolean {
  return raw === "1" || raw === "true";
}

/** Client only: localStorage wins over cookie (multi-tab / cleared cookie). */
export function readClientRtlPreference(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const ls = window.localStorage.getItem(RTL_STORAGE_KEY);
    if (ls === "1" || ls === "true") return true;
    if (ls === "0") return false;
  } catch {
    /* ignore */
  }
  try {
    const m = window.document.cookie.match(
      /(?:^|;\s*)portfolio-rtl=(0|1|true)(?:;|$)/i,
    );
    if (m) return m[1] === "1" || m[1] === "true";
  } catch {
    /* ignore */
  }
  return false;
}

export function writeRtlPersistence(isRtl: boolean): void {
  if (typeof window === "undefined") return;
  const v = isRtl ? "1" : "0";
  try {
    window.localStorage.setItem(RTL_STORAGE_KEY, v);
  } catch {
    /* ignore */
  }
  try {
    window.document.cookie = `${RTL_STORAGE_KEY}=${v};path=/;max-age=${COOKIE_MAX_AGE};SameSite=Lax`;
  } catch {
    /* ignore */
  }
}
