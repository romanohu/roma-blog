import Link from "next/link"

type POSTS = {
        slug : string,
        title: string,
        date: string | null,
        tags: string[],
        };


export default function Header({ posts }: { posts: POSTS[] }) {
    return(
        <header>
            <div>
                <ul>
                    <li><Link href={'/'}><div >Roma.Log(/・・)/</div></Link></li>
                    <li><Link href={`/posts`}>記事一覧</Link></li>
                    <li><Link href={'/booklog'}>最近気になっている本</Link></li>
                    <li><Link href={`/about`}>about me</Link></li>
                </ul>
            </div>
            
        </header>
    );
}