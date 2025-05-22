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
      <body className="grid place-items-center min-h-screen bg-gray-100">
  
        <header>
          <div className="grid place-items-center  bg-gray-100">
            <div className="w-full max-w-4xl bg-white p-8 rounded shadow">
              <h1 className="text-4xl font-semibold text-center -ml-4 font-serif tracking-wide text-gray-800">
                RomaLog
             </h1> 
            </div>
          </div>
        </header>

        
        <main>{children}</main>

        <footer>
          &copy; 2025 RomaLog
        </footer>
      </body>
    </html>
  );
}
