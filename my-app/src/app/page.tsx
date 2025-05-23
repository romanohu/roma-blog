
import Link from 'next/link';

export default function Home() {
  return (
    <div className="px-4 sm:px-8">
      <div className="grid gap-0.5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <p className="w-full max-w-4xl bg-white p-8 rounded shadow">
        <Link href={`/posts`} className="text-indigo-600 font-bold underline hover:text-indigo-800 transition-colors">
          記事一覧
        </Link>
      </p>
      <p className="w-full max-w-4xl bg-white p-8 rounded shadow">
        <Link href={`/booklog`} className="text-indigo-600 font-bold underline hover:text-indigo-800 transition-colors">
          最近気になった本
        </Link>
      </p>
      <p className="w-full max-w-4xl bg-white p-8 rounded shadow">
        <Link href={`/about`} className="text-indigo-600 font-bold underline hover:text-indigo-800 transition-colors">
          about me
        </Link>
      </p>
     </div>
    </div>
  )
}





