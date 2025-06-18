import './globals.css'
import Header from '@/components/header';
import Footer from '@/components/footer';


export const metadata = {
  title: 'Roma.Log(/・・)/',
  description: 'Romanohu Blog',
  icons: {
    icon: "/favicon.ico",
    
  },
};

// children は各ページ（page.tsx）の中身
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Romanohu Blog" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="google-site-verification" content="lmZ0csHc4PPsP5Znevek_JVN1nIPYQOCHrqi8KB99Rc" />
      </head>
      <body className="flex flex-col min-h-screen">
  
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
        
        <Footer /> 
      </body>
    </html>
  );
}
