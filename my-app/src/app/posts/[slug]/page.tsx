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
    <div  className="prose">
      <h1>{post.title}</h1>

      <p>
        投稿日: {new Date(post.date).toLocaleDateString("ja-JP")}
      </p>

      <div>
        {post.tags?.map((tag: string) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}



