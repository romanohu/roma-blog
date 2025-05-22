import { getAllPosts, getPostBySlug } from "@/lib/markdown";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

// ✅ 静的生成するslug一覧をNext.jsに伝える
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ ページ本体（ビルド時に実行される）
export default async function PostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>

      <div>
        投稿日: <p>{new Date(post.date).toLocaleDateString("ja-JP")}</p>


      </div>

      <div>
        {post.tags?.map((tag: string) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>

      <div
        className="prose mt-6"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}
