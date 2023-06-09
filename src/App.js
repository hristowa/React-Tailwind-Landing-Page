import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/index";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DropdownNav from "./components/DropdownNav";
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <DropdownNav isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Shop" component={Shop} />
        <Route path="/Contacy" component={Contact} />
      </Routes>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default App;
