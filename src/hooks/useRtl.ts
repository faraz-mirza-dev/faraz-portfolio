export function applyRtlToDocument(isRtl: boolean): void {
  if (typeof document === "undefined") return;
  document.documentElement.dir = isRtl ? "rtl" : "ltr";
  document.documentElement.classList.toggle("rtl-mode", isRtl);
}

export { RTL_STORAGE_KEY } from "@/lib/rtl-preference";
