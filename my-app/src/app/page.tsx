import Link from 'next/link';

import Greeting from '@/components/Greeting';
import Counter from '@/components/Counter';
import Messege from '@/components/Messege';
import Box from '@/components/Box';
import UserForm from '@/components/UserForm';
import ApiCaller from '@/components/ApiCaller';
import UserMessageForm from '@/components/UserMessageForm';
// src/app/page.tsx
export default function Home() {
  return (
    <main>
      <h1>ようこそ！</h1>
      <Greeting /> {/* Greetingコンポーネントを使用 */}
      <Counter /> {/* Counterコンポーネントを使用 */}
      <Messege name="ロマノフ" text="こんにちわ!" />
      <p>これはNext.jsのトップページです。</p>
      <Link href="/about">Aboutページへ</Link>
      <Box>
        <h2>Boxコンポーネントの中身</h2>
        <p>このコンポーネントは、子要素を受け取ることができます。</p>
      </Box>
      <UserForm />
      <ApiCaller />
      <UserMessageForm />
    </main>
  );
}




