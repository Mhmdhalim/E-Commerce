import React, { createContext, useState, useContext } from "react";

// Create the WishListContext
const WishListContext = createContext();

// Create a custom hook to use the wishlist context
export const useWishList = () => useContext(WishListContext);

export const WishListProvider = ({ children }) => {
    const [wishListItems, setWishListItems] = useState([]);

    // Function to add a product to the wishlist
    const addToWishList = (product) => {
        setWishListItems((prevItems) => {
        // Ensure the product is not already in the wishlist
        if (!prevItems.some((item) => item.id === product.id)) {
            return [...prevItems, product];
        }
        return prevItems;
        });
    };

    // Function to remove a product from the wishlist
    const removeFromWishList = (productId) => {
        setWishListItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId)
        );
    };

    return (
        <WishListContext.Provider
        value={{ wishListItems, addToWishList, removeFromWishList }}
        >
        {children}
        </WishListContext.Provider>
    );
};
