import type { ProjectStatus } from "../../types/content";

const labels: Record<ProjectStatus, string> = {
  completed: "Recorded project",
  "in-progress": "In progress",
  "needs-confirmation": "Details to confirm",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const tone =
    status === "needs-confirmation"
      ? "border-bronze/30 bg-gold/15 text-bronze"
      : status === "in-progress"
        ? "border-sage/30 bg-sage/10 text-sage"
        : "border-sand bg-paper text-mute";

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-[11px] tracking-[0.14em] uppercase ${tone}`}>
      {labels[status]}
    </span>
  );
}
