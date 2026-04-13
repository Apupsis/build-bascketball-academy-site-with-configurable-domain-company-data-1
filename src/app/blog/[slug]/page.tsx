import { companyConfig } from "@/config/company";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { articles } = companyConfig;
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = companyConfig.articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="article-page" style={{ paddingTop: '80px' }}>
      <div className="article-hero">
        <img src={article.image} alt={article.title} className="article-hero-image" />
        <div className="article-hero-overlay">
          <div className="container">
            <span className="article-category-tag">{article.category}</span>
            <h1 className="article-hero-title">{article.title}</h1>
            <div className="article-hero-meta">
              <span>بواسطة {article.author}</span>
              <span>{article.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container article-body-container">
        <div 
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        <div className="article-footer">
          <Link href="/blog" className="btn btn-secondary">
            ← العودة للمقالات
          </Link>
        </div>
      </div>
    </article>
  );
}