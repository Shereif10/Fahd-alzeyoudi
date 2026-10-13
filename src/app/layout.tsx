import type { ReactNode } from "react";
import "./globals.css";

// The <html> element is rendered by app/[locale]/layout.tsx so that `lang` and
// `dir` follow the active language. This root layout only passes children through.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
