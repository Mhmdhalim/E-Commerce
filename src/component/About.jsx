import React, { createContext } from "react";
import NavBar from "../component/navBar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

export const StoreContext = createContext();
    
const Store = () => {
    const bg_status = false;

    return (
        <>
            <div className="flex flex-col gap-10 justify-center">
                {/* NAVBAR */}
                <div className="h-20 sm:mb-28 mb-5"><NavBar bg={bg_status} /></div>
                
                {/* HEAD */}
                <div className="flex flex-col justify-center items-center">
                    <h1 className="uppercase font-bold sm:text-7xl text-3xl mb-5">About us</h1>
                    <div className="flex gap-3 justify-center items-center">
                        <Link to="/" className="text-lg">Home</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                        </svg>
                        <Link to="/women" className="sm:text-2xl text-xl text-blue-600">About</Link>    
                    </div>
                </div>
                <section className=" pb-12" id="about">
            <div className="container mx-auto max-w-4xl p-6 min-w-350px">
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    {/* <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <img 
                            src={img5}
                            alt="Mousa store" 
                            className="rounded-lg shadow-lg w-full h-auto mb-8"
                        />
                    </div> */}

                    <div className=" lg:pl-8">
                        <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
                        <p className="text-gray-700 mb-6">
                            Welcome to Mousa, your go-to shop for the latest in fashion, high-quality electronics, and elegant jewelry. 
                            Since our inception, we’ve aimed to offer an extraordinary shopping experience where style meets innovation and luxury.
                        </p>

                        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                        <p className="text-gray-700 mb-6">
                            At Mousa, we believe in providing our customers with top-tier products that blend quality with creativity. 
                            Whether you’re seeking to upgrade your wardrobe, get your hands on the latest gadgets, or find the perfect piece of jewelry, 
                            our mission is to deliver a seamless shopping experience.
                        </p>

                        <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>Fashion-forward clothing for all seasons and styles.</li>
                            <li>Cutting-edge electronics to keep you connected and entertained.</li>
                            <li>Elegant and timeless furniture for every occasion.</li>
                        </ul>
                    </div>
                </div>

                <div className="text-left mt-12 lg:pl-8">
                    <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                    <p className="text-gray-700">Have questions? We'd love to hear from you!</p>
                    <p className="text-gray-700">Email us at <a href="mailto:contact@mousashop.com" className="text-blue-500">Mousa@gmail.com</a></p>
                    <p className="text-gray-700">Call us at <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a></p>
                    <p className="text-gray-700">Visit us at <a href="https://maps.app.goo.gl/8CtcFqagyidkJqwXA" className="text-blue-500">123 Mousa, Mansoura, Egypt</a></p>
                    
                </div>
            </div>
        </section>
                {/* FOOTER */}
                <Footer />
            </div>
        </>
    );
};

export default Store;
