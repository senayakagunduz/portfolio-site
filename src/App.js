import { useCallback, useContext, useState } from "react";
import "./App.css";
import { ThemeContext } from "./context";
import About from "./PortfolioContainer/About/About";
import Contact from "./PortfolioContainer/Contact/Contact";
import Intro from "./PortfolioContainer/intro/Intro";
import Navbar from "./PortfolioContainer/Navbar/Navbar";
import ProductList from "./PortfolioContainer/ProductList/ProductList";
import Toggle from "./PortfolioContainer/Toggle/Toggle";
import { Route, Routes } from "react-router-dom";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      {/* <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/productlist" element={<ProductList />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes> */}
      <Navbar></Navbar>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
