import { useRtlTransition } from "@/components/providers/RtlTransitionProvider";

export default function RtlToggle() {
  const { isRtl, toggleRtl } = useRtlTransition();

  return (
    <div
      id="showRtlSwitcher"
      role="button"
      tabIndex={0}
      onClick={() => {
        void toggleRtl();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          void toggleRtl();
        }
      }}
      aria-label={
        isRtl ? "Switch to left-to-right layout" : "Switch to right-to-left layout"
      }
      aria-pressed={isRtl}
    >
      <i className="fa fa-exchange" aria-hidden="true" />
    </div>
  );
}
