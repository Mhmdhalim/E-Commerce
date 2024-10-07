import React from 'react';
import { useWishList } from '../product/wishListContext'; // Ensure the correct import path

const WishList = () => {
    const { wishList } = useWishList(); // Assuming this returns an object with wishList as an array

    // Check if wishList is defined and is an array
    if (!wishList || !Array.isArray(wishList)) {
        return <div>No items in your wishlist.</div>; // Render fallback UI
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">Your Wish List</h1>
            {wishList.length > 0 ? (
                <ul>
                    {wishList.map((item, index) => (
                        <li key={index} className="py-2">
                            <h2 className="font-medium">{item.title}</h2>
                            <p>${item.price}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your wish list is empty.</p>
            )}
        </div>
    );
};

export default WishList;
