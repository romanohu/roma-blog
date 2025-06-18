export default function Header() {
  return (
    <header className="w-full bg-gray-100 py-4 shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">
          <a href="/">Roma.Log(/・・)/</a>
        </h1>
        <nav className="flex gap-4">
          <a className="hover:underline" href="/about">About</a>
          <a className="hover:underline" href="/posts">Posts</a>
          <a className="hover:underline" href="/booklog">Booklog</a>
        </nav>
      </div>
    </header>
  );
}