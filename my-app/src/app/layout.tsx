import './globals.css'
import Header from '@/components/header';
import Background from '@/components/background';
import Footer from '@/components/footer';

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
      <body>
  
        <Header />
        <Background />
        <main className="grid place-items-center min-h-screen">
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  );
}
