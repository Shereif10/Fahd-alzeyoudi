import type { ReactNode } from "react";

// Re-mounts on every navigation, giving each page a quiet fade-in transition.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
