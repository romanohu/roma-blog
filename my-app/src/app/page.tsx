import Link from 'next/link';

// src/app/page.tsx
export default function Home() {
  return (
    <main>
      <h1>適当なことを投稿するブログ</h1>
      <p>現状，装飾なし……</p>
      <Link href={`/posts`}>
        投稿一覧へ
      </Link>
    </main>
  );
}




