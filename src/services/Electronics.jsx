import React from "react";

import NavBar from "../PartsOfPage/navBar";
import Footer from "../PartsOfPage/Footer";
import ProductList from "../Api/ProductList";


const Electronics = () => {
    return (
        <>
        <div className="flex flex-col gap-10 justify-center">
            NAVBAR
            <div className="h-20 sm:mb-28 mb-5">
            <NavBar />
            </div>
                {/* <ProductList service={"electronics"} /> */}
                <h1 className="flex justify-center items-center text-4xl font-bold mt-7">Out Of Stock...</h1>
            <Footer />
        </div>
        </>
    );
};

export default Electronics;
