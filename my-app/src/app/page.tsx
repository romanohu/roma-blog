import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <p className="w-full max-w-4xl bg-white p-8 rounded shadow">
        <Link href={`/posts`} className="text-indigo-600 font-bold underline hover:text-indigo-800 transition-colors">
          投稿一覧へ
        </Link>
      </p>
      <p className="w-full max-w-4xl bg-white p-8 rounded shadow">
        <Link href={`/about`} className="text-indigo-600 font-bold underline hover:text-indigo-800 transition-colors">
          about me
        </Link>
      </p>
    </main>
  );
}




