import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => {
                const singleBook = data.find(book => book.bookId === parseInt(id));
                setBook(singleBook);
            })
    }, [id]);

    if (!book) {
        return <div>Book is Loading....</div>;
    }

    const { bookName, author, image, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div>
            <h2>Book Details</h2>
            <img src={image} alt={bookName} />
            <p>Book Name: {bookName}</p>
            <p>Author: {author}</p>
            <p>Rating: {rating}</p>
            <p>Category: {category}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default BookDetails;