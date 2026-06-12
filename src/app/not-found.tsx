import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — الصفحة غير موجودة",
  description: "الصفحة التي تبحث عنها غير موجودة. عُد إلى الرئيسية.",
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, var(--bg-dark) 0%, var(--secondary) 100%)",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <div
          style={{
            fontSize: "120px",
            fontWeight: "900",
            color: "var(--primary)",
            lineHeight: "1",
            marginBottom: "24px",
            opacity: "0.9",
          }}
        >
          404
        </div>
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "80px", height: "80px", margin: "0 auto 32px" }}
        >
          <circle cx="40" cy="40" r="36" stroke="#E63946" strokeWidth="3" />
          <path
            d="M40 16 L40 64 M16 40 L64 40 M24 24 L56 56 M56 24 L24 56"
            stroke="#F4A261"
            strokeWidth="2.5"
          />
        </svg>
        <h1
          style={{
            fontSize: "36px",
            color: "var(--text-primary)",
            marginBottom: "16px",
            fontWeight: "800",
          }}
        >
          الصفحة غير موجودة
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "18px",
            lineHeight: "1.8",
            marginBottom: "40px",
          }}
        >
          يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها. لا تقلق، يمكنك العودة إلى الرئيسية أو استكشاف برامجنا.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary">
            العودة للرئيسية
          </Link>
          <Link href="/programs" className="btn btn-secondary">
            استعرض البرامج
          </Link>
        </div>
      </div>
    </div>
  );
}
