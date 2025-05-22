import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className="w-full max-w-4xl bg-white p-8 rounded shadow">適当なことを投稿するブログ</h1>
      <p className="w-full max-w-4xl bg-white p-8 rounded shadow">少し装飾がついた</p>
      <p className="w-full max-w-4xl bg-white p-8 rounded shadow">
        <Link href={`/posts`}　className="text-indigo-600 font-bold underline hover:text-indigo-800 transition-colors">
          投稿一覧へ
        </Link>
      </p>
      <p className="w-full max-w-4xl bg-white p-8 rounded shadow">
        <Link href={`/about`}　className="text-indigo-600 font-bold underline hover:text-indigo-800 transition-colors">
          about me
        </Link>
      </p>

    </main>
  );
}




