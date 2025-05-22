type PageProps = {
    params: {
        slug: string;
    };
}

export default function BlogPost({ params }: PageProps){
    return(
        <main>
            <h1>ブログ記事: {params.slug}</h1>
            <p>これは /blog/[slug] に対応するページです。</p>
        </main>
    )
}