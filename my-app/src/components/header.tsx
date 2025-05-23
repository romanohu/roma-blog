import Link from "next/link"

export default function Header() {
    return(
        <header>
            <div className="grid place-items-center  bg-gray-100">
                <div className="w-full max-w-4xl bg-white p-8 rounded shadow">
                    <h1 className="text-4xl font-semibold text-center -ml-4 font-serif tracking-wide text-gray-800">
                        <Link href={"/"}>
                        Roma.Log!!
                        </Link>
                     </h1> 
                      <p className="text-center text-gray-600">
                        ロマノフが適当なことを書いたり載せたりする個人ページ
                      </p>
                </div>
            </div>
        </header>
    );
}