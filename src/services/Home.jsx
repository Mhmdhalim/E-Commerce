import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import NavBar from "../PartsOfPage/navBar";
import Footer from "../PartsOfPage/Footer";
import Status from "../FunctionOfProducts/Status";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img6 from "../assets/logo/img6.png"
import img7 from "../assets/logo/img7.png"
import img8 from "../assets/logo/img8.png"
import img9 from "../assets/logo/img9.png"

import homeVideo from "../assets/homeVideo.mp4";
import AddToCartButton from "../FunctionOfProducts/AddToCartButton";

import apicloths from "../Api/clothes.json"
const Home = () => {
  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const bg_status = false;
  const itemsPerSlide = window.innerWidth > 1000 ? 3 : 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setAll(apicloths);
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(Array.isArray(apicloths));

  const handleHeartClick = (index) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [index]: !prevLiked[index],
    }));
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

  // // HANDEL NEXT AND PREV BUTTONS
  // const nextSlide = () => {
  //   setSlideDirection("right");
  //   if (currentIndex < all.length - itemsPerSlide) {
  //     setCurrentIndex(currentIndex + itemsPerSlide);
  //   } else {
  //     setCurrentIndex(0);
  //   }
  // };

  // const prevSlide = () => {
  //   setSlideDirection("left");
  //   if (currentIndex > 0) {
  //     setCurrentIndex(currentIndex - itemsPerSlide);
  //   } else {
  //     setCurrentIndex(all.length - itemsPerSlide);
  //   }
  // };
  // Handle Next and Previous Buttons
  const nextSlide = () => {
    setSlideDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex < all.length - itemsPerSlide ? prevIndex + itemsPerSlide : 0
    );
  };

  const prevSlide = () => {
    setSlideDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - itemsPerSlide : all.length - itemsPerSlide
    );
  };

  <Status loading={loading} error={error} />;

  return (
    <>
      <div className="main relative mb-4">
        <header>
          <NavBar bg={bg_status} home={"home"} />
        </header>
        <section className="first_text absolute sm:top-80 sm:left-20 top-56 left-8">
          <p className="uppercase text-pretty sm:w-[500px] sm:text-4xl text-2xl font-extrabold text-white mb-4">
            Discover Innovation,
            Elegance, and Style
            Where Technology Meets Timeless Beauty.
          </p>
          <Link to="/store" className="z-0">
            <button className="bg-white z-0 hover:bg-white text-black py-2 px-4 border-b-4 border-white-700 hover:border-white rounded-full">
              Shop Now
            </button>
          </Link>
        </section>
      </div>
      {/* Logo */}
      <div className="logo-container">
        <div className="slider">
          <img src={img6} className="logo" alt="" />
          <img src={img7} className="logo" alt="" />
          <img src={img8} className="logo" alt="" />
          <img src={img9} className="logo" alt="" />
        </div>
      </div>

      {/* Fixed Imgaes */}
      <div className="flex flex-wrap">
        <div className="first_images flex justify-center p-5 items-center w-full overflow-hidden">
          <div className="big_screen w-full">
            <img className="" src={img1} alt="" />
            <img className="" src={img2} alt="" />
            <img className="" src={img3} alt="" />
            <img className="" src={img4} alt="" />
          </div>
          <div className="small_screen w-full">
            <div>
              <img className="" src={img1} alt="" />
              <img className="" src={img2} alt="" />
            </div>
            <div>
              <img className="" src={img3} alt="" />
              <img className="" src={img4} alt="" />
            </div>
          </div>
        </div>
        {/* BEST SELLERS */}
        <div className="best_seller w-full">
          <h1 className="p-10 px-2 head_best_seller uppercase sm:text-5xl text-2xl font-extrabold">
            Best Seller
          </h1>
          <div className="sm:p-10 best_seller_all flex flex-wrap flex-row  justify-center items-center gap-10">
            {all.slice(9, 15).map((product, index) => (
              <div
                key={index}
                className="font-bold p-5 product flex flex-col justify-between gap-4 group"
              >
                <div className="relative">
                  <div className="best_img h-[25rem] flex justify-center w-full  items-center cursor-pointer relative  group">
                    <img
                      src={product.image}
                      alt="Your Alt Text"
                      className="w-full h-full transform transition-transform duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"></div>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <AddToCartButton item={product} />
                  <button
                    className="bg-slate-700 text-white px-4 py-2 mt-2 rounded w-32"
                    onClick={(e) => handleViewDetails(product)}
                  >
                    View Details
                  </button>
                </div>
                <div>
                  <div className="cursor-pointer flex justify-between mb-2">
                    <h3>
                    {product.title.length > 18
                      ? product.title.slice(0, 17) + "..."
                      : product.title}
                  </h3>
                    <p className="font-sans">${product.price}</p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* VIDEO */}
        <div className="bg-white w-full p-5 flex justify-center items-center align-middle relative z-0 overflow-hidden">
          <video loop autoPlay muted src={homeVideo}></video>
          <div className="flex flex-col p-10 justify-center w-full items-left h-full absolute z-10 text-[#f6f2e2]">
            <div className="lg:text-3xl sm:w-[500px] lg:w-[700px] items-center justify-center  ">
              <span className="w-full lg:text-4xl text-xl font-extrabold my-0 lg:my-4">
                Mousa Exclusive Collection
              </span>
              <br />
              <p className="sm:inline-block hidden text-justify leading-relaxed md:text-sm my-10 w-[600px]" style={{textWrap: "pretty" }}>
               Mousa invites you to explore a sanctuary of elegance, where sophistication meets unparalleled craftsmanship. Our curated collection is a tribute to those who live life with refined taste—those who seek more than mere fashion but an expression of identity and elegance. Discover a wardrobe that redefines luxury through intricate designs, sumptuous fabrics, and impeccable tailoring. Each piece of clothing, each electronic marvel, and every piece of jewelry in our collection is chosen for its ability to inspire, to empower, and to transform. Mousa is more than a store; it’s a journey through style and artistry, offering items that seamlessly blend modern innovation with timeless allure. Let each item be a part of your story, a testament to your individuality, and an embodiment of true sophistication. Embrace the Mousa experience and elevate your lifestyle with pieces that speak to the essence of who you are.
              </p>
            </div>
            <Link to="/store" className="z-0">
              <button class="text-[10px] bg-white hover:bg-white text-[#c3c35d] lg:text-xl lg:py-2 lg:px-3 py-1 px-2 border-none rounded-full">
                Shop
              </button>
            </Link>
          </div>
        </div>
        {/* MORE PRODUCTS */}
        <div className="best_seller w-full relative pb-10">
          <h1 className="head_best_seller uppercase sm:text-4xl text-2xl font-extrabold text-left mb-10">
            You may also like
          </h1>
          <div className="carousel-container relative flex justify-center items-center">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="p-2 bg-black text-white rounded-full hover:bg-gray-800"
            >
              {/* &larr; */}
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
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Products Display */}
            <div className="product-list w-full flex justify-center items-center  p-2">
              {all
                .slice(
                  currentIndex,
                  currentIndex + (window.innerWidth < 400 ? 1 : itemsPerSlide)
                )
                .map((product, index) => (
                  <div
                    key={index}
                    className={`product ${
                      slideDirection === "right"
                        ? "slide-in-right"
                        : "slide-in-left"
                    } font-bold p-5 w-full lg:w-1/3 flex flex-col justify-between gap-4 group`}
                  >
                    <div className="relative">
                      <div className="best_img h-[25rem] p-3 flex justify-center items-center cursor-pointer relative  group">
                        <img
                          src={product.image}
                          alt="Your Alt Text"
                          className="max-w-60 h-full transform transition-transform duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"></div>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      <AddToCartButton item={product} />
                      <button
                        className="bg-slate-700 text-white px-4 py-2 mt-2 rounded w-32"
                        onClick={(e) => handleViewDetails(product)}
                      >
                        View Details
                      </button>
                    </div>
                    <div>
                      <div className="cursor-pointer flex justify-evenly sm:justify-around mb-2">
                        <h3 className="">
                        {product.title.length > 18
                          ? product.title.slice(0, 17) + "..."
                          : product.title}
                      </h3>
                        <p className="font-sans">${product.price}</p>
                      </div>
                      
                    </div>
                  </div>
                ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="p-2 bg-black text-white rounded-full hover:bg-gray-800"
            >
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
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
