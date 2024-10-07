import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWishList } from "../product/wishListContext"; // <-- Import this

import { Api } from "../Api/Api";
import NavBar from "../component/navBar";
import Footer from "../component/Footer";
import Loading from "../product/Loading";
import Error from "../product/Error";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

import homeVideo from "../assets/homeVideo.mp4";
import AddToCartButton from "../product/AddToCartButton";

const Home = () => {
  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const bg_status = false;
  const itemsPerSlide = window.innerWidth > 1000 ? 3 : 1;
  const { addToWishList, wishListItems } = useWishList(); // <-- Use wishlist context

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Api("https://fakestoreapi.com/products");
        setAll(data);
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(all)
  const handleHeartClick = (product, index) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [index]: !prevLiked[index],
    }));

    if (!wishListItems.some((item) => item.id === product.id)) {
      addToWishList(product); // <-- Add product to wishlist
    }
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

  // HANDEL NEXT AND PREV BUTTONS
  const nextSlide = () => {
    setSlideDirection("right");
    if (currentIndex < all.length - itemsPerSlide) {
      setCurrentIndex(currentIndex + itemsPerSlide);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    setSlideDirection("left");
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerSlide);
    } else {
      setCurrentIndex(all.length - itemsPerSlide);
    }
  };
  if (loading) return <Loading loading={loading}/>;
  if (error) return <Error error={error}/>

  return (
    <>
      <div className="main relative">
        <header>
          <NavBar bg={bg_status} home={"home"} />
        </header>
        <section className="first_text absolute sm:top-80 sm:left-20 top-56 left-8">
          <p className="uppercase sm:text-4xl text-2xl font-extrabold text-white mb-4">
            Discover Innovation,
            <br /> Elegance, and Style
            <br /> Where Technology Meets <br /> Timeless Beauty.
          </p>
          <Link to="/store" className="z-0">
            <button className="bg-white z-0 hover:bg-white text-black py-2 px-4 border-b-4 border-white-700 hover:border-white rounded-full">
              Shop Now
            </button>
          </Link>
        </section>
      </div>
  
      {/* Fixed Imgaes */}
      <div className="flex flex-wrap">
        <div className="first_images flex justify-center p-0 items-center w-full overflow-hidden">
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
          <div className="sm:p-10 best_seller_all flex flex-col lg:flex-row  justify-center items-center gap-10">
            {all
              .filter(
                (_, index) =>
                  index === 1 || index === 3 || index === 2 || index === 4
              )
              .map((product, index) => (
                <div
                  key={index}
                  className="font-bold p-5 product lg:w-1/4 flex flex-col justify-between gap-4 group"
                >
                  <div className="relative">
                    <div className="best_img h-96 flex justify-center w-full items-center cursor-pointer relative  group">
                      <img
                        src={product.image}
                        alt="Your Alt Text"
                        className="w-full h-full  transform transition-transform duration-300 ease-in-out"
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
                      <span
                        onClick={() => handleHeartClick(product, index)}
                        className="cursor-pointer text-2xl hover:scale-110 text-black"
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
        </div>
        {/* VIDEO */}
        <div className="bg-white w-full p-1 flex justify-center items-center align-middle relative z-0 overflow-hidden">
          <video loop autoPlay muted src={homeVideo}></video>
          <div className="flex flex-col p-5 justify-center w-full items-left h-full absolute z-10 text-[#f6f2e2]">
            <div className="lg:text-xl sm:w-[500px] lg:w-[500px] mb-0 lg:mb-6">
              <span className="w-full lg:text-4xl text-xl font-bold my-0 lg:my-5">
                Mousa Exclusive Collection
              </span>
              <br />
              <p className="sm:inline-block hidden">
                Step into a realm of unparalleled style and sophistication with
                Mousa. Curate your perfect wardrobe with our exquisite selection
                of clothing, cutting-edge electronics, and stunning jewelry.
                Experience the perfect blend of luxury and modernity. Discover
                your unique look today!
              </p>
            </div>
            <Link to="/store" className="z-0">
              <button class="bg-white  hover:bg-white text-[#c3c35d] lg:text-xl text-[10px] lg:py-3 lg:px-4 py-1 px-2 lg:border-b-4 lg:border-white-700 hover:border-white rounded-full">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        {/* MORE PRODUCTS */}
        <div className="best_seller w-full relative pb-10">
          <h1 className="head_best_seller uppercase sm:text-4xl text-2xl font-extrabold text-center mb-10">
            You may also like
          </h1>
          <div className="carousel-container relative flex justify-center items-center">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Products Display */}
            <div className="product-list w-full flex justify-center items-center gap-10 p-4">
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
                      <div className="best_img h-96 p-10 flex justify-center items-center cursor-pointer relative  group">
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
                      <div className="cursor-pointer flex justify-between mb-2">
                        <span
                          onClick={() => handleHeartClick(product, index)}
                          className="cursor-pointer text-2xl hover:scale-110 text-black"
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
