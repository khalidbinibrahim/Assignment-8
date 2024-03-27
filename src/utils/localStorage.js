import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const saveToLocalStorage = (data, action) => {
    let savedWishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
    let savedReadData = JSON.parse(localStorage.getItem('read')) || [];

    const existedWishlistData = savedWishlistData.find(i => i.id === data.id);
    const existedReadData = savedReadData.find(i => i.id === data.id);

    if (action === 'wishlist') {
        if (!existedWishlistData && !existedReadData) {
            savedWishlistData.push(data);
            localStorage.setItem('wishlist', JSON.stringify(savedWishlistData));
            toast.success('Added successfully to wishlist');
        } else if (existedWishlistData) {
            toast.error('Already existed in wishlist');
        } else if (existedReadData) {
            toast.error('Already existed in read');
        }
    } else if (action === 'read') {
        if (!existedReadData && !existedWishlistData) {
            savedReadData.push(data);
            localStorage.setItem('read', JSON.stringify(savedReadData));
            toast.success('Added successfully to read');
        } else if (existedReadData) {
            toast.error('Already existed in read');
        } else if (existedWishlistData) {
            toast.error('Already existed in wishlist');
        }
    }

    // Remove book from wishlist if it exists there and action is 'read'
    if (action === 'read' && existedWishlistData) {
        savedWishlistData = savedWishlistData.filter(i => i.id !== data.id);
        localStorage.setItem('wishlist', JSON.stringify(savedWishlistData));
    }
};
