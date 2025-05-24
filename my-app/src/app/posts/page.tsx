import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";


export default function PostListPage() {
  const posts = getAllPosts();

  return (
    <div className="px-4 sm:px-8">
      <div className="grid gap-0.5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <div key={post.slug} className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">
              <Link
                href={`/posts/${post.slug}`}
                className="text-indigo-600 font-bold underline hover:text-indigo-800 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-600">
              {new Date(post.date).toLocaleDateString("ja-JP")}
            </p>
          </div>
        ))}
      </div>
     
    </div>

  );
}
