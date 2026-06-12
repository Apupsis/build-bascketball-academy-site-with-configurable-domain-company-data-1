import type { Metadata } from "next";
import { companyConfig } from "@/config/company";
import Link from "next/link";

export const metadata: Metadata = {
  title: "المقالات",
  description:
    "اقرأ أحدث المقالات والنصائح حول تدريب كرة السلة والتغذية الرياضية وتطوير الشباب من خبراء أكاديمية القاهرة.",
  openGraph: {
    title: "المقالات | أكاديمية القاهرة",
    description: "نصائح ومقالات متخصصة في كرة السلة والتغذية الرياضية وتطوير المواهب.",
  },
};

export default function BlogPage() {
  const { articles } = companyConfig;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">المقالات</h1>
          <p className="page-hero-subtitle">
            نصائح ومقالات حول تدريب كرة السلة والتغذية الرياضية وعوامل النجاح في اللعبة
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="articles-grid">
            {articles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`} className="article-card">
                <div className="article-image-wrapper">
                  <img src={article.image} alt={article.title} className="article-image" />
                  <span className="article-category">{article.category}</span>
                </div>
                <div className="article-content">
                  <h3 className="article-card-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-meta">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}