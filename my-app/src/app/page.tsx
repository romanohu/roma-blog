import Link from 'next/link';

// src/app/page.tsx
export default function Home() {
  return (
    <main>
      <h1>ようこそ！</h1>
      <Link href={`/posts`}>
        投稿一覧へ
      </Link>
    </main>
  );
}




