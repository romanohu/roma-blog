import { getAllPosts, getPostBySlug } from "@/lib/markdown";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ params }: any) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

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



