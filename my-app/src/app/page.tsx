import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>適当なことを投稿するブログ</h1>
      <p>現状，装飾なし……</p>
      <p>
        <Link href={`/posts`}>
          投稿一覧へ
        </Link>
      </p>
      <p>
        <Link href={`/about`}>
          about me
        </Link>
      </p>

    </main>
  );
}




