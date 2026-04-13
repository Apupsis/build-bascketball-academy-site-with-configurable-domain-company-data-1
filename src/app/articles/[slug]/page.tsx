import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <header className="header scrolled">
        <div className="container header-content">
          <Link href="/" className="logo">
            <svg className="logo-icon" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="#E63946" strokeWidth="2" />
              <path
                d="M20 8C14.5 8 10 12.5 10 20C10 27.5 14.5 32 20 32C25.5 32 30 27.5 30 20C30 12.5 25.5 8 20 8Z"
                stroke="#E63946"
                strokeWidth="2"
              />
              <path d="M10 20H30M20 8V32" stroke="#E63946" strokeWidth="1.5" />
              <path
                d="M14 14L26 26M14 26L26 14"
                stroke="#F4A261"
                strokeWidth="1.5"
              />
            </svg>
            Pro Court Academy
          </Link>
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/articles">Articles</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#contact" className="btn btn-primary" style={{ padding: "10px 24px" }}>
              Enroll Now
            </Link>
          </nav>
        </div>
      </header>

      <article className="article-page">
        <div className="article-hero">
          <img src={article.image} alt={article.title} className="article-hero-image" />
          <div className="article-hero-overlay">
            <div className="container">
              <span className="article-category-tag">{article.category}</span>
              <h1 className="article-hero-title">{article.title}</h1>
              <div className="article-hero-meta">
                <span>By {article.author}</span>
                <span>{new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container article-body-container">
          <div className="article-body">
            <MDXRemote source={article.content} />
          </div>
          
          <div className="article-footer">
            <Link href="/articles" className="btn btn-secondary">
              ← Back to Articles
            </Link>
          </div>
        </div>
      </article>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">Pro Court Academy</div>
              <p className="footer-desc">
                Where Champions Are Made. Providing world-class basketball training to athletes of all ages and skill levels.
              </p>
            </div>
            <div>
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/articles">Articles</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-links">
                <li>+1 (555) 123-4567</li>
                <li>info@procourtacademy.com</li>
                <li>123 Basketball Blvd, Sports City, SC 12345</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Pro Court Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}