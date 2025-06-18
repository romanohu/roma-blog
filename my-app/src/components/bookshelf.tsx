"use client";
import React, { useState } from 'react';

interface Link {
  id: number;
  title: string;
  url: string;
  color: string;
}

const BookshelfPage = () => {
  const [links] = useState<Link[]>([
    { id: 1, title: 'GitHub', url: 'https://github.com/romanohu', color: 'bg-gray-700' },
    { id: 2, title: 'Twitter', url: 'https://x.com/romanohu794', color: 'bg-blue-500' },
    { id : 3, title: 'ずきもの書庫', url: 'https://mikazukimo.github.io/zukimo_shiroko_suki/', color: 'bg-yellow-500' },
    { id : 4, title: 'miya-lis', url: 'https://xn--cbkk.xn--u8jixh5t.xn--q9jyb4c/', color: 'bg-green-500' },
    { id : 5, title: 'Utsugi0101', url: 'https://utsugi0101.dev/', color: 'bg-purple-500' },
  ]);

  const rows = 2; // ここで段数を設定（1〜4程度推奨）

  const handleLinkClick = (url: string): void => {
    if (url !== '#') {
      window.open(url, '_blank');
    }
  };

  // リンクを行ごとに分割
  const linksPerRow = Math.ceil(links.length / rows);
  const shelves = [];
  for (let i = 0; i < rows; i++) {
    const start = i * linksPerRow;
    const end = Math.min(start + linksPerRow, links.length);
    shelves.push(links.slice(start, end));
  }

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        {/* 本棚 */}
        <div className="bg-orange-100 p-4 rounded-lg">
          {shelves.map((shelf, index) => (
            <div key={index} className="mb-4 last:mb-0">
              {/* 本（リンク） */}
              <div className="flex justify-center gap-2 mb-2">
                {shelf.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.url)}
                    className={`
                      ${link.color} text-white px-4 py-8 rounded-t
                      hover:scale-105 transition-transform cursor-pointer
                      text-sm font-semibold shadow-md
                      w-20 h-24 flex items-end justify-center
                    `}
                  >
                    <span className="transform rotate-90 whitespace-nowrap">
                      {link.title}
                    </span>
                  </button>
                ))}
              </div>
              {/* 棚板 */}
              <div className="h-3 bg-yellow-950 rounded shadow-sm"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookshelfPage;