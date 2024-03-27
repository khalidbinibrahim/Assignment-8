import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const saveToLocalStorage = (data, action) => {
    let savedWishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
    let savedReadData = JSON.parse(localStorage.getItem('read')) || [];

    const isBookInWishlist = savedWishlistData.some(item => item.bookId === data.bookId);
    const isBookInRead = savedReadData.some(item => item.bookId === data.bookId);

    if (action === 'wishlist') {
        if (!isBookInWishlist && !isBookInRead) {
            savedWishlistData.push(data);
            localStorage.setItem('wishlist', JSON.stringify(savedWishlistData));
            toast.success('Added successfully to Wishlist Books');
        } else {
            toast.error('Already existed in wishlist or read');
        }
    } else if (action === 'read') {
        if (!isBookInRead && !isBookInWishlist) {
            savedReadData.push(data);
            localStorage.setItem('read', JSON.stringify(savedReadData));
            toast.success('Added successfully to Read Books');
        } else {
            toast.error('Already existed in read or wishlist');
        }
    }

    if (action === 'read' && isBookInWishlist) {
        savedWishlistData = savedWishlistData.filter(item => item.bookId !== data.bookId);
        localStorage.setItem('wishlist', JSON.stringify(savedWishlistData));
    }
};
