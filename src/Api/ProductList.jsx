import React, { useState, useEffect, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API call

import AddToCartButton from "../FunctionOfProducts/AddToCartButton"; // Your AddToCartButton component
import Status from "../FunctionOfProducts/Status";

export const StoreContext = createContext();

const ProductList = (props) => {
  const [all, setAll] = useState([]); // State to store fetched products
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors
  const [liked, setLiked] = useState({}); // State to manage liked products
  const [visibleProducts, setVisibleProducts] = useState(4); // State to control number of visible products

  // API call function
    const fetchProducts = async () => {
        try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setAll(response.data); // Set the fetched data to all products
        } catch (error) {
        setError("Failed to fetch products"); // Handle errors
        } finally {
        setLoading(false); // Stop loading once data is fetched
        }
    };

    useEffect(() => {
        fetchProducts(); // Fetch products on component mount
    }, []);

    // Function to load more products
    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 4); // Load 5 more products each time
    };

    const navigate = useNavigate();
    const handleViewDetails = (product) => {
        navigate("/card-page", {
        state: {
            img: product.image,
            title: product.title,
            description: product.description,
            price: product.price,
        },
        });
    };

    <Status loading={loading} error={error} />;

    return (
        <>
        {/* HEAD */}
        <div className="flex flex-col justify-center items-center">
            <h1 className="uppercase font-bold sm:text-7xl text-3xl mb-5">
            {props.service}
            </h1>
            <div className="flex gap-3 justify-center items-center">
            <Link to="/" className="text-lg">
                Home
            </Link>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M9 5l7 7-7 7"
                />
            </svg>
            <Link
                to="/jewelery"
                className="capatalize sm:text-2xl text-xl text-blue-600"
            >
                {props.service}
            </Link>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-20 w-full">
            {all.slice(0, visibleProducts).map((product, index) => (
            <div
                key={index}
                className="relative p-5 w-full product font-bold group"
            >
                <div className="relative">
                <div className="best_img h-96 p-2 flex justify-center items-center cursor-pointer relative group">
                    <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full transform transition-transform duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"></div>
                </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <AddToCartButton item={product} />
                <button
                    className="bg-slate-700 text-white px-4 py-2 mt-2 rounded w-32"
                    onClick={() => handleViewDetails(product)}
                >
                    View Details
                </button>
                </div>
                <div className="mt-4">
                <div className="cursor-pointer flex justify-between mb-2">
                    <span
                    className="cursor-pointer text-2xl hover:scale-110 text-black"
                    onClick={() => setLiked({ ...liked, [index]: !liked[index] })}
                    >
                    {liked[index] ? "♥️" : "♡"}
                    </span>
                    <p className="font-sans">${product.price}</p>
                </div>
                <h3>
                    {product.title.length > 18
                    ? product.title.slice(0, 17) + "..."
                    : product.title}
                </h3>
                </div>
            </div>
            ))}
        </div>

        {/* Show "Load More" button only if there are more products to show */}
        <div className="flex justify-center items-start mt-4">
            {visibleProducts < all.length && (
            <button
                className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                onClick={loadMoreProducts}
            >
                Load More...
            </button>
            )}
        </div>
        </>
    );
};

export default ProductList;
