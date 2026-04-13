import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

export function getAllArticles(): ArticleMeta[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  
  const articles = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        image: data.image,
        author: data.author,
        date: data.date,
        category: data.category,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return articles;
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    image: data.image,
    author: data.author,
    date: data.date,
    category: data.category,
    content,
  };
}