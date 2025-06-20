import { getAllPosts, getPostBySlug } from "@/lib/markdown";
import { notFound } from "next/navigation";


export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PostPage({ params }: any) {
  const { slug } = params;
  const post = await getPostBySlug(slug); ;

  if (!post) {
    notFound();
  }

  return (
    <div className="no-tailwind">
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
    </div>
  );
}



