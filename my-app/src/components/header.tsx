import Link from "next/link"
import "./header.css"; // Assuming you have a CSS file for styles

type POSTS = {
        slug : string,
        title: string,
        date: string | null,
        tags: string[],
        };


export default function Header({ posts }: { posts: POSTS[] }) {
    return(
        <header  className="bg-[#E5F0F8]">
            <div className="gnavi__wrap">
                <ul className="gnavi__lists">
                    <li className="gnavi__list"><Link href={'/'}className="text-indigo-600 font-bold underline hover:text-indigo-800 transition-colors"><div >Roma.Log(/・・)/</div></Link></li>
                    <li className="gnavi__list"><Link href={`/posts`} className="text-indigo-600 font-bold underline hover:text-indigo-800 transition-colors">記事一覧</Link>
                        <ul className="dropdown__lists">
                            {posts.map((post) => (
                                <li key={post.slug} className="dropdown__list">
                                    <Link href={`/posts/${post.slug}`} className="text-indigo-600 font-bold underline hover:text-indigo-800 transition-colors">
                                        {post.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="gnavi__list"><Link href={'/booklog'}className="text-indigo-600 font-bold underline hover:text-indigo-800 transition-colors">最近気になっている本</Link></li>
                    <li className="gnavi__list"><Link href={`/about`} className="text-indigo-600 font-bold underline hover:text-indigo-800 transition-colors">about me</Link></li>
                </ul>
            </div>
            
        </header>
    );
}