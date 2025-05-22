export const metadata = {
  title: 'My App',
  description: 'Next.jsで作る共通レイアウトの例',
};

// children は各ページ（page.tsx）の中身
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900">
        {/* 共通のヘッダー */}
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-xl font-bold">My App 共通ヘッダー</h1>
        </header>

        {/* ページの中身（個別ページがここに差し込まれる） */}
        <main className="p-6">{children}</main>

        {/* 共通のフッター */}
        <footer className="bg-gray-200 text-center text-sm text-gray-600 py-2">
          &copy; 2025 My App
        </footer>
      </body>
    </html>
  );
}
