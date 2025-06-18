import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gray-100 py-4 shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">
          <Link href="/">Roma.Log(/・・)/</Link>
        </h1>
        <nav className="flex gap-4">
          <Link className="hover:underline" href="/">ホーム</Link>
          <Link className="hover:underline" href="/about">About</Link>
          <Link className="hover:underline" href="/posts">Posts</Link>
          <Link className="hover:underline" href="/booklog">Booklog</Link>
        </nav>
      </div>
    </header>
  );
}