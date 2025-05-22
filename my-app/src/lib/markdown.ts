import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// 指定された slug から Markdown を読み込んで HTML に変換する
export async function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), "src/posts", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    title: data.title || slug,
    contentHtml,
    date: data.date || null,
    tags: data.tags || [],
  };
}


export function getAllPosts() {
  const postsDir = path.join(process.cwd(), "src/posts");
  const filenames = fs.readdirSync(postsDir);

  const posts = filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const filePath = path.join(postsDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "日付不明",
        tags: data.tags || [],
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1)); // 新しい順に並べ替え
}
