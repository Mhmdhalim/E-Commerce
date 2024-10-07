import React, { useContext, useState } from 'react';
import { CartContext } from './cartContext'; // Import CartContext to access the cart functionality

const AddToCartButton = ({ item }) => {
    const { addToCart } = useContext(CartContext); // Use CartContext to add items to the cart

    // State to manage notification visibility and message
    const [notification, setNotification] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle adding an item to the cart
    const handleAddToCart = () => {
        const cartItem = {
            img: item.image,
            title: item.title,
            description: item.description,
            price: item.price,
            count: 1, // Start with 1 item when added to cart
            total: item.price // Total price is the price * quantity
        };
        addToCart(cartItem); // Use the addToCart function from CartContext
        
        // Set the notification message and visibility
        setNotification(`Added to cart 😂😉`);
        setIsVisible(true);

        // Hide the notification after 3 seconds
        setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    };

    return (
        <div>
            <button onClick={handleAddToCart} className="bg-slate-700 text-white px-4 py-2 mt-2 rounded w-32">
                Add to Cart
            </button>
            
            {/* Notification Div */}
            {isVisible && (
                <div className="fixed left-0 top-1/4 transform -translate-y-1/2 p-2 rounded-r-md bg-blue-500 text-white transition-opacity duration-300">
                    {notification}
                </div>
            )}
        </div>
    );
};

export default AddToCartButton;
