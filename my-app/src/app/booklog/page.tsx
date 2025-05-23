// app/booklog/page.tsx

import Parser from 'rss-parser';
import Booklog from '@/components/booklog';
import Link from 'next/link';

type Book = {
  title: string;
  link: string;
  pubDate: string;
};



async function getBooks(): Promise<Book[]> {
    const rssUrl = 'https://booklog.jp/users/romanohu794/feed';

    const res = await fetch(rssUrl, {
        next: { revalidate: 3600 },
    });

  const xml = await res.text();
  const parser = new Parser();
  const feed = await parser.parseString(xml);
  
  return feed.items.map((item) => ({
    title: item.title ?? 'No title',
    link: item.link ?? '#',
    pubDate: new Date(item.date).toLocaleDateString('ja-JP') ?? '',
  }));
}

export default async function BooklogPage() {
  const books = await getBooks();
 
  return (
    <div>
        <Booklog books={books} />
        <p> 
            <Link href={'/'} className="text-indigo-600 font-bold underline hover:text-indigo-800 transition-colors">
            Homeへ
            </Link>
        </p>
    </div>
  )
}

