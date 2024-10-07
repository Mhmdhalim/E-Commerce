import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (newItem) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(item => item.title === newItem.title);

            if (existingItemIndex >= 0) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].count += newItem.count; // Update quantity
                updatedCart[existingItemIndex].total += newItem.price; // Update total price
                return updatedCart;
            } else {
                return [...prevCart, newItem]; // Add new item to cart
            }
        });
    };
    const cartCount = cart.reduce((total, item) => total + item.count, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, cartCount, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};

