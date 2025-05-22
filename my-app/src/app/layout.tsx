import './globals.css'

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
      <body>
  
        <header>
          <h1>RomaLog</h1>
        </header>

        
        <main>{children}</main>

        <footer>
          &copy; 2025 RomaLog
        </footer>
      </body>
    </html>
  );
}
