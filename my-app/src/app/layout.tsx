export const metadata = {
  title: 'Romanohu Blog',
  description: 'Romanohu Blog',
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// children は各ページ（page.tsx）の中身
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className= "mx-auto w-1/2 bg-gray-200">
        {/* 共通のヘッダー */}
        <header>
          <h1>RomaLog</h1>
        </header>

        {/* ページの中身（個別ページがここに差し込まれる） */}
        <main>{children}</main>

        {/* 共通のフッター */}
        <footer>
          &copy; 2025 RomaLog
        </footer>
      </body>
    </html>
  );
}
