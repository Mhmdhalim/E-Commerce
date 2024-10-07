import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../FunctionOfProducts/cartContext";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu open/close
  const { cartCount } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  return (
    <div>
      <div
        className={`h-12 fixed ticker bg-light-gray text-sm bg-white text-black
          `}
      >
        <div className="ticker-content">
          <p
            className={` text-sm bg-white text-black 
              
              w-full sm:text-[16px] text-[13px] font-bold text-center whitespace-nowrap p-1`}
          >
            🛍️ Huge Discounts on Clothes! | 💻 Up to 30% off Electronics! | 💎
            Exclusive Jewelry Collections Available Now!
          </p>
        </div>
      </div>

      <nav
        className={`p-3 sm:h-16 py-0 transition-all duration-300 text-sm bg-white text-black`} // Background changes on scroll
      >
        <div className="sm:p-3 p-2 px-6 container mx-auto flex justify-between items-center align-middle">
          <div className="hidden lg:flex gap-3 uppercase justify-center items-center text-sm bg-white text-black">
            <Link
              to="/store"
              className={` text-xl font-bold bg-white text-black`}
            >
              Shop
            </Link>
            <Link to="/mens" className={`text-sm bg-white text-black`}>
              Men
            </Link>
            <Link to="/women" className={` text-sm bg-white text-black`}>
              Women
            </Link>
            <Link to="/Furniture" className={` text-sm bg-white text-black`}>
              Furniture
            </Link>
            <Link to="/electronics" className={` text-sm  bg-white text-black`}>
              Electronics
            </Link>
          </div>

          <div className=" flex justify-center gap-6 mr-14">
            <Link
              to="/"
              className={`headnav mousa_small font-bold uppercase sm:text-5xl text-3xl cursor-pointer tracking-wide bg-white text-black`}
            >
              M<span className="emoji sm:text-3xl text-2xl">🐸</span> usa
            </Link>
          </div>

          {/* Links for larger screens */}
          <div className="hidden lg:flex gap-8 font-bold justify-center items-center">
            <Link to="/" className={` text-sm  bg-white text-black`}>
              Home
            </Link>
            <Link to="/contact" className={` text-sm bg-white text-black`}>
              Contact
            </Link>
            <Link to="/about" className={` text-sm bg-white text-black`}>
              About
            </Link>
            <Link
              to="/cart"
              className="flex flex-col items-center justify-center text-xl bg-white text-black relative"
            >
              <FontAwesomeIcon
                icon={faBagShopping}
                className="text-[40px] pr-0"
              />
              {cartCount > 0 && (
                <span className="absolute top-5 right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Hamburger Menu for smaller screens */}
          <div className={` Hamburger lg:hidden text-black`}>
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="sm:text-4xl text-[30px] cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          {/* Dropdown Menu for small screens */}
          {isOpen && (
            <div
              className={`absolute top-12 right-0 bg-white text-black w-full shadow-sm lg:hidden`}
            >
              <ul className="flex flex-col items-start justify-center p-10">
                <li className="my-2">
                  <Link
                    to="/store"
                    className="uppercase font-bold hover:text-gray-600 text-xl"
                    onClick={toggleMenu}
                  >
                    Shop
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/mens"
                    className="uppercase font-bold hover:text-gray-600 text-xl"
                    onClick={toggleMenu}
                  >
                    men
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/women"
                    className="uppercase font-bold hover:text-gray-600 text-xl"
                    onClick={toggleMenu}
                  >
                    women
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/Electronics"
                    className="uppercase font-bold hover:text-gray-600 text-xl"
                    onClick={toggleMenu}
                  >
                    electronics
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/Furniture"
                    className="uppercase font-bold hover:text-gray-600 text-xl"
                    onClick={toggleMenu}
                  >
                    Furniture
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/about"
                    className="uppercase font-bold hover:text-gray-600 text-xl"
                    onClick={toggleMenu}
                  >
                    about
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    to="/contact"
                    className="uppercase font-bold hover:text-gray-600 text-xl"
                    onClick={toggleMenu}
                  >
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
