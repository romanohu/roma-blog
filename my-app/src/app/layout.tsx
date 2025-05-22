import './globals.css'
import Link from 'next/link';
import Background from '@/components/background';

export const metadata = {
  title: 'Roma.Log!!',
  description: 'Romanohu Blog',
  icons: {
    icon: "/favicon.ico",
    
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
                <Link href={"/"}>
                Roma.Log!!
                </Link>
             </h1> 
              <p className="text-center text-gray-600">
                ロマノフが適当なことを書いたり載せたりするWebページ
              </p>
            </div>
          </div>
        </header>


        <main>{children}</main>
        
        <Background />

        <footer>
          &copy; 2025 Romanohu
        </footer>
      </body>
    </html>
  );
}
