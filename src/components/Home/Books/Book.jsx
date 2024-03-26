import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
    const {bookId, bookName, author, image, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div>
            <div className="border border-[#13131326] rounded-2xl">
                <div className="p-6">
                    <div className="p-6 bg-[#1313130D] rounded-2xl">
                        <img src={image} alt="" />
                    </div>

                    <div>
                        <div className="font_work flex gap-3 mb-4 mt-6">
                            <p className="text-[#17BE0A] text-center bg-[#17BE0A0D] font-medium font_work py-2 px-3 rounded-xl h-10">{tags[0]}</p>
                            <p className="text-[#17BE0A] text-center bg-[#17BE0A0D] font-medium font_work py-2 px-3 rounded-xl h-10">{tags[1]}</p>
                        </div>

                        <div className="mb-5">
                            <h3 className="font_playfair font-bold text-[#131313] text-2xl mb-4">{bookName}</h3>
                            <p className="font_work text-[#0d0d0dcc] font-medium">By : {author}</p>
                        </div>
                        <hr />
                        <div className="mt-5 font_work flex justify-between">
                            <p className="text-[#0d0d0dcc] text-xl font-medium">{category}</p>
                            <p className="text-[#0d0d0dcc] text-xl font-medium flex gap-2 items-center">{rating} <FaRegStar /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;