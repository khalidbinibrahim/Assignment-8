import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
        .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <div>
            <div className="mb-12">
                <h2 className="font_playfair text-center text-[#131313] font-bold text-4xl">Books</h2>
            </div>

            <div className="px-32 pb-12 grid grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default Books;
