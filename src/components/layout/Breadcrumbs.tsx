import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, label }: { items: Crumb[]; label: string }) {
  return (
    <nav className="breadcrumbs" aria-label={label}>
      <ol>
        {items.map((c, i) => (
          <li key={i}>
            {c.href && i < items.length - 1 ? (
              <Link href={c.href}>{c.label}</Link>
            ) : (
              <span aria-current={i === items.length - 1 ? "page" : undefined}>{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
