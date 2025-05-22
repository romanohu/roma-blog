import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";

export default function PostListPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1>投稿一覧</h1>

      {posts.map((post) => (
        <div key={post.slug}>
          <h2>
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          <p>{new Date(post.date).toLocaleDateString("ja-JP")}</p>
        </div>
      ))}
    </div>
  );
}
