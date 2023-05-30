import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import Shop from "./components/shop";
import Team from "./components/Team";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Search />
      <Shop />
      <Team />
      <Feature />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
