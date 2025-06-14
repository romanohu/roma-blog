import Link from "next/link"


export default function Header(){
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