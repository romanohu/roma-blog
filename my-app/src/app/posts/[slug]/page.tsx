import { getAllPosts, getPostBySlug } from "@/lib/markdown";
import { notFound } from "next/navigation";
import Link from "next/link";

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
    <div className="grid place-items-center min-h-screen bg-gray-">
    <div  className="prose">
      <h2>{post.title}</h2>
      <p>
        投稿日: {new Date(post.date).toLocaleDateString("ja-JP")}
        <br />
        {post.tags?.map((tag: string) => (
          <span key={tag}>#{tag}</span>
        ))}
       </p>
      <div
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      <p>
        <Link href={'/posts'} className="text-indigo-600 font-bold underline hover:text-indigo-800 transition-colors">
          投稿一覧へ
        </Link>
      </p>
    </div>
  </div>
  );
}



