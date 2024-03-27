import { useEffect, useState } from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineFindInPage } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooksTab = () => {
    const [wishlistData, setWishlistData] = useState([]);
    const [readData, setReadData] = useState([]);

    useEffect(() => {
        const savedWishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
        const savedReadData = JSON.parse(localStorage.getItem('read')) || [];

        setWishlistData(savedWishlistData);
        setReadData(savedReadData);
    }, []);

    return (
        <div>
            <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    <div>
                        {readData.map((book, index) => (
                            <div key={index}>
                                <div className="border border-[#13131326] rounded-2xl mb-6">
                                    <div className="flex justify-center gap-8 p-6">
                                        <div className="p-6 bg-[#1313130D] rounded-2xl">
                                            <img height="100px" width="200px" src={book.image} alt="" />
                                        </div>

                                        <div>
                                            <div className="">
                                                <h3 className="font_playfair font-bold text-[#131313] text-2xl mb-4">{book.bookName}</h3>
                                                <p className="font_work text-[#0d0d0dcc] font-medium">By : {book.author}</p>
                                            </div>

                                            <div className="flex">
                                                <div className="font_work flex items-center gap-3 mb-4 mt-6">
                                                    <div>
                                                        <p className="text-[#131313] font-bold">Tag</p>
                                                    </div>

                                                    <div className="flex gap-4">
                                                        <p className="text-[#17BE0A] text-center bg-[#17BE0A0D] font-medium font_work py-2 px-3 rounded-xl h-10">#{book.tags[0]}</p>
                                                        <p className="text-[#17BE0A] text-center bg-[#17BE0A0D] font-medium font_work py-2 px-3 rounded-xl h-10">#{book.tags[1]}</p>
                                                    </div>

                                                    <div>
                                                        <p className="flex items-center gap-2 text-[#131313CC] font-normal font_work"><span><HiOutlineLocationMarker /></span> Year of Publishing: {book.yearOfPublishing}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-4 mb-4 font_work">
                                                <p className="flex items-center gap-2 text-[#131313CC] font-normal"><span><HiOutlineUsers /></span> Publisher: {book.publisher}</p>
                                                <p className="flex items-center gap-2 text-[#131313CC] font-normal"><span><MdOutlineFindInPage /></span> Page: {book.totalPages}</p>
                                            </div>
                                            <hr />
                                            <div className="flex gap-4 mt-4">
                                                <p className="text-[#328EFF] text-center bg-[#208EFF1A] font-medium font_work py-2 px-3 rounded-full h-10">Category: {book.category}</p>
                                                <p className="text-[#FFAC33] text-center bg-[#FFAC3326] font-medium font_work py-2 px-3 rounded-full h-10">Rating: {book.rating}</p>
                                                <p className="text-white text-center bg-[#17BE0A] font-medium font_work py-2 px-3 rounded-full h-10">View Details</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {wishlistData.map((book, index) => (
                            <div key={index}>
                                <div className="border border-[#13131326] rounded-2xl mb-6">
                                    <div className="flex justify-center gap-6 p-6">
                                        <div className="p-6 bg-[#1313130D] rounded-2xl">
                                            <img height="100px" width="200px" src={book.image} alt="" />
                                        </div>

                                        <div>
                                            <div className="">
                                                <h3 className="font_playfair font-bold text-[#131313] text-2xl mb-4">{book.bookName}</h3>
                                                <p className="font_work text-[#0d0d0dcc] font-medium">By : {book.author}</p>
                                            </div>

                                            <div className="flex">
                                                <div className="font_work flex items-center gap-3 mb-4 mt-6">
                                                    <div>
                                                        <p className="text-[#131313] font-bold">Tag</p>
                                                    </div>

                                                    <div className="flex gap-4">
                                                        <p className="text-[#17BE0A] text-center bg-[#17BE0A0D] font-medium font_work py-2 px-3 rounded-xl h-10">#{book.tags[0]}</p>
                                                        <p className="text-[#17BE0A] text-center bg-[#17BE0A0D] font-medium font_work py-2 px-3 rounded-xl h-10">#{book.tags[1]}</p>
                                                    </div>

                                                    <div>
                                                        <p className="flex items-center gap-2 text-[#131313CC] font-normal font_work"><span><HiOutlineLocationMarker /></span> Year of Publishing: {book.yearOfPublishing}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-4 mb-4 font_work">
                                                <p className="flex items-center gap-2 text-[#131313CC] font-normal"><span><HiOutlineUsers /></span> Publisher: {book.publisher}</p>
                                                <p className="flex items-center gap-2 text-[#131313CC] font-normal"><span><MdOutlineFindInPage /></span> Page: {book.totalPages}</p>
                                            </div>
                                            <hr />
                                            <div className="flex gap-4 mt-4">
                                                <p className="text-[#328EFF] text-center bg-[#208EFF1A] font-medium font_work py-2 px-3 rounded-full h-10">Category: {book.category}</p>
                                                <p className="text-[#FFAC33] text-center bg-[#FFAC3326] font-medium font_work py-2 px-3 rounded-full h-10">Rating: {book.rating}</p>
                                                <p className="text-white text-center bg-[#17BE0A] font-medium font_work py-2 px-3 rounded-full h-10">View Details</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooksTab;
