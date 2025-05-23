// components/Booklog.tsx


type Book = {
  title: string;
  link: string;
  pubDate: string;
};

type Props = {
  books: Book[];
};

export default function Booklog({ books }: Props) {
    const today = new Date();
    const oneMonthAgo = new Date();
            oneMonthAgo.setMonth(today.getMonth() - 1);
  return (
    
    <div>
        <ul>
        {books.map((book, idx) => (
          <li key={idx}>
            {new Date(book.pubDate) >= oneMonthAgo && new Date(book.pubDate) <= today && (
                <div>
                 <a href={book.link} className="underline" target="_blank" rel="noopener noreferrer">{book.title}</a>
                    <p>登録日：{book.pubDate}</p>
                </div>
            )}  
          </li>
        ))}
        </ul>
    </div>
     
  );
}
