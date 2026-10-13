import Link from "next/link";
import { plexSans, plexSerif, plexArabic } from "./fonts";

// Fallback for paths outside a locale (e.g. /xyz).
export default function RootNotFound() {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexArabic.variable} ${plexSerif.variable}`}>
      <body>
        <main className="container not-found">
          <h1 className="page-hero__title">This page could not be found.</h1>
          <p className="lead" style={{ marginBlock: "28px 40px" }} lang="ar" dir="rtl">
            تعذّر العثور على هذه الصفحة.
          </p>
          <div className="btn-row">
            <Link className="btn btn--solid" href="/en">
              <span>English</span>
            </Link>
            <Link className="btn btn--outline" href="/ar" lang="ar">
              <span>العربية</span>
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
