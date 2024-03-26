import React from "react";
import {Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./user/components/Header/Header";
import Home from "./user/containers/Home/Home";
import Products from "./user/containers/products/Products";
import Contact from "./user/containers/Contact/Contact";
import Counter from "./user/containers/Counter/Counter";

function App() {
  return (
    <>
      {/* <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes> */}
      <Counter />X
    </>
  );
}

export default App;
