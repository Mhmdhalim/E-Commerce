import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='flex flex-col flex-nowrap items-center justify-center w-full'>
             {/* SIGN IN */}
                <div className='mr-0 gap-2 p-5 px-2 h-72 w-full bg-white'>
                    <div className='sm:px-10 px-5  bg-black h-full flex justify-between items-center'>
                        <p className='text-4xl font-bold text-white w-[450px] tracking-wide leading-6'>
                            <span className='mb-4 font-bold sm:text-4xl text-2xl text-white inline-block'>Sign up to our newsletter</span> <br /> <span className='sm:text-4xl text-2xl'>& get 20% Off</span>
                        </p>
                        <button class="sm:ml-0 ml-4 bg-white text-center text-gray-800 sm:text-3xl text-2xl font-bold py-4 px-8 border-y-4 sm:border-r-0 border-r-4 border-black ">
                            SIGN UP FOR FREE
                        </button>
                    </div>
                </div>
                {/* FOOTER */}
                <footer className='flex justify-between flex-wrap items-start sm:gap-20 gap-5 p-8 px-6 w-full mb-8'>
                    <div className='flex flex-col sm:gap-4 gap-2'>
                        <h1 className='font-bold text-lg text-gray-800 '>Mosua</h1>
                        <p className='sm:text-lg text-[14px] w-64 text-justify text-pretty'>Style, innovation, and elegance – all in one place. Discover the latest trends, cutting-edge tech, and timeless treasures at Mousa.</p>
                    </div>
                    <div className='flex flex-col sm:gap-5 gap-2'>
                        <h1 className='font-bold text-lg text-gray-800 uppercase'>navigation</h1>
                        <Link to="/">Home</Link>
                        <Link to="/store">Shop</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className='flex flex-col sm:gap-5 gap-2 '>
                        <h1 className='font-bold text-lg text-gray-800 uppercase'>categories</h1>
                        <Link to="/mens">Mens</Link>
                        <Link to="/women">womens</Link>
                        <Link to="/electronics">Electronics</Link>
                        <Link to="/Furniture">Furniture</Link>
                    </div>
                    <div className='flex flex-col sm:gap-5 gap-2'>
                        <h1 className='font-bold text-lg text-gray-800 uppercase pl-4'>social</h1>
                        <div className="flex justify-center items-center gap-3">
                            {/* Facebook Icon */}
                            <a href="/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600">
                                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                            </a>

                            {/* Instagram Icon */}
                            <a href="/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-500">
                                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                            </a>

                            {/* Twitter Icon */}
                            <a href="/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-400">
                                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </footer>
        </div>
    )
    }

export default Footer
