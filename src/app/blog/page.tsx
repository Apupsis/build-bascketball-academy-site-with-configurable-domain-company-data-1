import { companyConfig } from "@/config/company";
import Link from "next/link";

export default function BlogPage() {
  const { articles } = companyConfig;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">المقالات</h1>
          <p className="page-hero-subtitle">
            نصائح ومقالات حول تدريب basketball والنnutrition والعوامل لنجاحك في اللعبة
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