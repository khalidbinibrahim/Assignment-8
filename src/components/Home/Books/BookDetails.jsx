import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { saveToLocalStorage } from "../../../utils/localStorage";
import { toast } from "react-toastify";

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => {
                const singleBook = data.find(book => book.bookId === parseInt(id));
                setBook(singleBook);
            });
    }, [id]);

    if (!book) {
        return <div>Book is Loading....</div>;
    }

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    const handleAddToRead = () => {
        saveToLocalStorage(book, 'read');
    };

    const handleAddToWishlist = () => {
        let savedReadData = JSON.parse(localStorage.getItem('read')) || [];
        let savedWishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];

        const isBookInRead = savedReadData.some(item => item.bookId === book.bookId);

        if (!isBookInRead) {
            const isBookInWishlist = savedWishlistData.some(item => item.bookId === book.bookId);

            if (!isBookInWishlist) {
                savedWishlistData.push(book);
                localStorage.setItem('wishlist', JSON.stringify(savedWishlistData));
                toast.success('Added successfully to Wishlist Books');
            } else {
                toast.error('Already existed in wishlist');
            }
        } else {
            savedReadData = savedReadData.filter(item => item.bookId !== book.bookId);
            localStorage.setItem('read', JSON.stringify(savedReadData));

            savedReadData.push(book);
            localStorage.setItem('read', JSON.stringify(savedReadData));
            toast.success('Added successfully to Read Books');
        }
    };

    return (
        <div>
            <div className="">
                <div className="flex gap-12 justify-center p-6">
                    <div className="p-12 bg-[#1313130D] rounded-2xl">
                        <img src={image} alt="" />
                    </div>

                    <div>
                        <div className="mb-3">
                            <h2 className="text-[#131313] font_playfair font-bold text-4xl mb-4">{bookName}</h2>
                            <p className="text-[#0d0d0dcc] font_work font-medium">By : {author}</p>
                        </div>
                        <hr />
                        <div className="my-4">
                            <p className="text-[#0d0d0dcc] font_work font-medium">{category}</p>
                        </div>
                        <hr />
                        <div className="font_work">
                            <p className="text-[#131313B3] my-4"><span className="text-[#131313] font-bold">Review:</span> {review}</p>
                            <div className="flex">
                                <div className="font_work flex items-center gap-3 mb-4 mt-6">
                                    <div>
                                        <p className="text-[#131313] font-bold">Tag</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <p className="text-[#17BE0A] text-center bg-[#17BE0A0D] font-medium font_work py-2 px-3 rounded-xl h-10">#{tags[0]}</p>
                                        <p className="text-[#17BE0A] text-center bg-[#17BE0A0D] font-medium font_work py-2 px-3 rounded-xl h-10">#{tags[1]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="my-4 font_work">
                            <div className="overflow-x-auto">
                                <table>
                                    <tbody>
                                        <tr className="flex gap-6">
                                            <td className="text-[#131313B3] font-normal">Number of Pages:</td>
                                            <td className="text-[#131313] font-semibold">{totalPages}</td>
                                        </tr>
                                        <tr className="flex gap-6">
                                            <td className="text-[#131313B3] font-normal">Publisher:</td>
                                            <td className="text-[#131313] font-semibold">{publisher}</td>
                                        </tr>
                                        <tr className="flex gap-6">
                                            <td className="text-[#131313B3] font-normal">Year of Publishing:</td>
                                            <td className="text-[#131313] font-semibold">{yearOfPublishing}</td>
                                        </tr>
                                        <tr className="flex gap-6">
                                            <td className="text-[#131313B3] font-normal">Rating:</td>
                                            <td className="text-[#131313] font-semibold">{rating}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr />
                        <div className="mt-4">
                            <a onClick={handleAddToRead} className="btn bg-white border border-[#1313134D] text-[#131313] font-medium font_work mr-3">Read</a>
                            <a onClick={handleAddToWishlist} className="btn bg-[#59C6D2] text-white font-medium font_work">Wishlist</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;