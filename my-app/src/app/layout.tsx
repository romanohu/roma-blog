export const metadata = {
  title: 'Romanohu Blog',
  description: 'Romanohu Blog',
  icons: {
    icon: "./favicon.ico",
    
  },
};

// children は各ページ（page.tsx）の中身
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className= "grid place-items-center h-screen">
        {/* 共通のヘッダー */}
        <header className= "grid place-items-center h-screen">
          <h1>RomaLog</h1>
        </header>

        {/* ページの中身（個別ページがここに差し込まれる） */}
        <main className= "bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg">{children}</main>

        {/* 共通のフッター */}
        <footer className= "grid place-items-center h-screen">
          &copy; 2025 RomaLog
        </footer>
      </body>
    </html>
  );
}
