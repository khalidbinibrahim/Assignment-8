import { useEffect, useState } from 'react';
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
                        <h2>Read Books</h2>
                        <ul>
                            {readData.map((book, index) => (
                                <li key={index}>{book.bookName}</li>
                            ))}
                        </ul>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <h2>Wishlist Books</h2>
                        <ul>
                            {wishlistData.map((book, index) => (
                                <li key={index}>{book.bookName}</li>
                            ))}
                        </ul>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooksTab;
