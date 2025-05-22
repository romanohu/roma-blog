import { getAllPosts, getPostBySlug } from "@/lib/markdown";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

// ✅ 必ず "async" をつける（非同期対応）
export async function generateStaticParams() {
  const posts = getAllPosts(); // 同期関数なら await は不要
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ ページ本体（ここは async でOK）
export default async function PostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>

      <p className="text-sm text-gray-500">
        投稿日: {new Date(post.date).toLocaleDateString("ja-JP")}
      </p>

      <div className="flex gap-2 text-sm text-blue-700">
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

