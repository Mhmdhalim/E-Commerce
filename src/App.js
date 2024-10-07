import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/main.css";
import "./style/output.css";

import { CartProvider } from "./FunctionOfProducts/cartContext";
import CardPage from "./FunctionOfProducts/cardPage";

import Store from "./services/Store";
import About from "./PartsOfPage/About";
import Cart from "./PartsOfPage/Cart";
import Contact from "./PartsOfPage/Contact";

import Home from "./services/Home";
import Furniture from "./services/Furniture";
import Men from "./services/Men";
import Women from "./services/Women";
import Electronics from "./services/Electronics";



function App() {
  return (
    <CartProvider>
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
          </Routes>
        </BrowserRouter>
    </CartProvider>
  );
}

export default App;
