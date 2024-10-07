import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/main.css";
import "./style/output.css";

import { CartProvider } from "./product/cartContext";
import { WishListProvider } from "./product/wishListContext"; // <-- Import this

import Home from "./services/Home";
import Store from "./services/Store";
import About from "./component/About";
import Cart from "./product/Cart";

import Furniture from "./services/Furniture";
import Men from "./services/Men";
import Women from "./services/Women";
import Electronics from "./services/Electronics";
import Contact from "./services/Contact";
import CardPage from "./product/cardPage";
import WishList from "./component/WishList";

function App() {
  return (
    <CartProvider>
      <WishListProvider>
        {" "}
        {/* Wrap your app with WishListProvider */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/mens" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/Furniture" element={<Furniture />} />
            <Route path="/card-page" element={<CardPage />} />
            <Route path="/wish-list" element={<WishList />} />
          </Routes>
        </BrowserRouter>
      </WishListProvider>
    </CartProvider>
  );
}

export default App;
